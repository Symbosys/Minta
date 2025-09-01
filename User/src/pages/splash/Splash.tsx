import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {LinearGradient} from 'react-native-linear-gradient';
import { useAuth } from '../../app/AuthContext';
import { RootStackParamList } from '../../types/types';



const {width, height} = Dimensions.get('window');

const Splash = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {

  const {token, userId} = useAuth();

  const letters = ['M', 'i', 'n', 't', 'a'];

  const letterAnims = letters.map(() => useRef(new Animated.Value(0)).current);
  const glowOpacity = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    const letterAnimations = letters.map((_, index) => {
      return Animated.timing(letterAnims[index], {
        toValue: 1,
        duration: 500,
        delay: index * 200,
        easing: Easing.out(Easing.bounce),
        useNativeDriver: true,
      });
    });

    const glowAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(glowOpacity, {
          toValue: 0.6,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(glowOpacity, {
          toValue: 0.2,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    const scaleAnimation = Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.elastic(1)),
      useNativeDriver: true,
    });

    Animated.sequence([
      Animated.parallel([
        scaleAnimation,
        Animated.stagger(100, letterAnimations),
      ]),
      glowAnimation,
    ]).start();

    const timeout = setTimeout(() => {
      if (token && userId) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Mytab'}],
        });
      } else {
      navigation.navigate('LocationAccess');
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [token, userId, navigation]);

  return (
    <LinearGradient
      colors={['#ff4d4d', '#ff9a8b', '#ffe4e1']}
      style={styles.container}>
      <Animated.View style={[styles.glowOverlay, {opacity: glowOpacity}]} />

      {/* Animated Cursive Logo Text */}
      <Animated.View
        style={[
          styles.textRow,
          {
            transform: [{scale: scaleAnim}],
          },
        ]}>
        {letters.map((char, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.letter,
              {
                opacity: letterAnims[index],
                transform: [
                  {
                    translateY: letterAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                  {
                    rotate: letterAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: ['10deg', '0deg'],
                    }),
                  },
                ],
              },
            ]}>
            {char}
          </Animated.Text>
        ))}
      </Animated.View>

      <Text style={styles.tagline}>Fresh Chicken, Delivered Fast!</Text>

      <View style={styles.decorativeCircle} />
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff0eb',
  },
  glowOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 20,
    zIndex: 2,
  },
  letter: {
    fontSize: 60,
    fontWeight: '700',
    color: '#d62828',
    marginHorizontal: 6,
    fontFamily: 'cursive', // ✅ Cursive font
    textShadowColor: 'rgba(214, 40, 40, 0.7)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 20,
    color: '#4a2c25',
    fontWeight: '600',
    marginBottom: 40,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 6,
  },
  decorativeCircle: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    bottom: 100,
    opacity: 0.6,
  },
});
