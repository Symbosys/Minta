import React, { useEffect } from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { useAuth } from '../../app/AuthContext';

const LocationAccess = ({navigation}: any) => {

  const {token, userId} = useAuth();
    
      // Redirect if user is already logged in
      useEffect(() => {
        if (token && userId) {
          navigation.reset({
            index: 0,
            routes: [{name: 'Mytab'}],
          });
        }
      }, [token, userId, navigation]);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Deny',
            buttonPositive: 'Allow',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Toast.show({
            type: 'success',
            text1: 'Permission Granted',
            text2: 'You allowed location access.',
          });
          navigation.navigate('Login');
        } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          Toast.show({
            type: 'error',
            text1: 'Permission Denied',
            text2: 'You denied location access.',
          });
        } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          Toast.show({
            type: 'error',
            text1: 'Permission Permanently Denied',
            text2: 'Enable location permission from settings.',
          });

          // Show Alert with choice
          Alert.alert(
            'Permission Required',
            'You have permanently denied location permission. Would you like to go to settings to enable it?',
            [
              {text: 'Cancel', style: 'cancel'},
              {text: 'Go to Settings', onPress: () => Linking.openSettings()},
            ],
          );
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.bg}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://img.freepik.com/free-vector/directions-concept-illustration_114360-1741.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid',
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={requestLocationPermission}>
            <Text style={styles.button}>Allow LOCATION</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            MINTA WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LocationAccess;

const styles = StyleSheet.create({
  bg: {backgroundColor: '#ffffff'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 240,
    width: 240,
    marginBottom: 30,
    marginTop: 100,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
  },
  button: {
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: '#FF7622',
    color: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
    color: '#646982',
    marginBottom: 200,
  },
});
