import React, { useState } from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../userStyle';

import Ellipse from './../../../assets/vectors/backgrounds/Ellipse.png';
import Vector from './../../../assets/vectors/backgrounds/Vector.png';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/types';
import Toast from 'react-native-toast-message';
import axios, { AxiosError } from 'axios';

const SignUp = ({navigation, route}: {navigation: NavigationProp<RootStackParamList>, route: any}) => {
     
  return (
    <View style={[styles.container, styles.bg]}>
      {/* Background Images */}
      <View style={styles.imageContainer}>
        <Image style={styles.bgImage} source={Ellipse} />
        <Image style={styles.bgImage} source={Vector} />
      </View>

      {/* Heading */}
      <View>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.paragraph}>Please sign up to get started</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.main}>
        <View>
          <Text style={styles.lable}>Name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#B0BEC5"
            placeholder="Your Name"
            autoFocus={true}
          />
        </View>

        <View>
          <Text style={styles.lable}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#B0BEC5"
            placeholder="yourEmail@mail.com"
            autoFocus={true}
          />
        </View>

        <View>
          <Text style={styles.lable}>Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#B0BEC5"
            placeholder="* * * * * * * *"
            secureTextEntry={true}
          />
        </View>

        <View>
          <Text style={styles.lable}>Re-Type Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#B0BEC5"
            placeholder="* * * * * * * *"
            secureTextEntry={true}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={[styles.footer1, styles.mt]}>
          <Text>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textLeft}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
