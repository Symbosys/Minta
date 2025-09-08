import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../userStyle';

import axios, { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import { useAuth } from '../../../app/AuthContext';
import { RootStackParamList } from '../../../types/types';
import Ellipse from './../../../assets/vectors/backgrounds/Ellipse.png';
import Vector from './../../../assets/vectors/backgrounds/Vector.png';
import api from '../../../api/api';


const Login = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState<boolean>(false)
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

  const handleLogin = async () => {
    setLoading(true)
    try {
        const res = await api.post("/auth/request-otp", {mobile});
        console.log(res.data);
        if (res.data.success) {
            Toast.show({
              type: 'success',
              text1: res.data.message,
            });
          navigation.navigate('Verification', {mobile});
        }
    } catch (error) {
        if(error instanceof AxiosError){
            Toast.show({
              type: 'error',
              text1: error.response?.data.message || "Something went wrong",
            });
        }else{
            Toast.show({
              type: 'error',
              text1: "Something went wrong",
            });
        }
    }finally {
        setLoading(false)
    }
  };

  return (
    <View style={[styles.container, styles.bg]}>
      <View style={styles.imageContainer}>
        <Image style={styles.bgImage} source={Ellipse} />
        <Image style={styles.bgImage} source={Vector} />
      </View>

      <View>
        <Text style={styles.heading}>Log In</Text>
        <Text style={styles.paragraph}>
          Enter your phone number to receive an OTP
        </Text>
      </View>

      <View style={styles.main}>
        <View>
          <Text style={styles.lable}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#B0BEC5"
            placeholder="+91 XXXXXXXXXX"
            keyboardType="phone-pad"
            maxLength={10}
            autoFocus
            onChange={e => setMobile(e.nativeEvent.text)}
          />
        </View>

        <TouchableOpacity style={[styles.buttonContainer, {opacity: loading ? 0.5 : 1}]} onPress={handleLogin}>
          <Text style={styles.button}>
            {loading ? 'Loading' : 'Generate OTP'}
          </Text>
        </TouchableOpacity>

        <View style={[styles.footer1, styles.mt]}>
          <Text>Didn’t receive code?</Text>
          <TouchableOpacity disabled={loading}>
            <Text style={styles.textLeft}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
