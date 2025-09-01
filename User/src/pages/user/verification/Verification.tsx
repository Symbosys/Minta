import React, {useState, useEffect} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../userStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ellipse from './../../../assets/vectors/backgrounds/Ellipse.png';
import Vector from './../../../assets/vectors/backgrounds/Vector.png';
import {RootStackParamList} from '../../../types/types';
import {NavigationProp} from '@react-navigation/native';
import {AxiosError} from 'axios';
import Toast from 'react-native-toast-message';
import api from '../../../api/api';
import {useAuth} from '../../../app/AuthContext';

const Verification = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<RootStackParamList>;
  route: any;
}) => {
  const [otp, setOtp] = useState('');
  const {mobile} = route.params;
  const [loading, setLoading] = useState<boolean>(false);
  const {login, token, userId} = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (token && userId) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Mytab'}],
      });
    }
  }, [token, userId, navigation]);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await api.post('/auth/verify', {otp, mobile});
      console.log(res.data);

      if (res.data.success) {
        Toast.show({
          type: 'success',
          text1: res.data.message,
        });
        await login(res.data.token, res.data.data.id);
        navigation.reset({
          index: 0,
          routes: [{name: 'Mytab'}],
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        Toast.show({
          type: 'error',
          text1: error.response?.data.message || 'Something went wrong',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, styles.bg]}>
      {/* Background Images */}
      <View style={styles.imageContainer}>
        <Image style={styles.bgImage} source={Ellipse} />
        <Image style={styles.bgImage} source={Vector} />
      </View>

      {/* Heading */}
      <View>
        <Text style={styles.heading}>Verification</Text>
        <Text style={styles.paragraph}>We have sent a code to your email</Text>
      </View>

      {/* Main Section */}
      <View style={styles.main}>
        <View style={styles.footer}>
          <Text></Text>
          <Text style={styles.textLeft}>Resend in 50 sec</Text>
        </View>

        <View>
          <Text style={styles.lable}>Code</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#B0BEC5"
            placeholder="6 Digit Code"
            autoFocus={true}
            onChange={e => setOtp(e.nativeEvent.text)}
          />
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={[styles.buttonContainer, {opacity: loading ? 0.5 : 1}]}
          onPress={handleVerify}
          disabled={loading}>
          <Text style={styles.button}>{loading ? 'Loading' : 'Verify'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification;
