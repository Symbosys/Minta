import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './app/AuthContext';

import Onboarding1 from './pages/onboarding/Onboarding1';
import Onboarding2 from './pages/onboarding/Onboarding2';
import Onboarding3 from './pages/onboarding/Onboarding3';
import Onboarding4 from './pages/onboarding/Onboarding4';
import Permission from './pages/permission/Permission';
import Login from './pages/login/Login';
import Otp from './pages/login/Otp';
import Details from './pages/details/Details';
import Account from './pages/account/Account';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Vehicle from './pages/vehicle/Vehicle';
import Aadhaar from './pages/aadhaar/Aadhaar';
import PanCard from './pages/panCard/PanCard';
import Personal from './pages/personal/Personal';
import Home from './pages/home/Home';
import BottomNav from './components/bottomNav/BottomNav';
import TC from './pages/t&c/TC';
import Wallet from './pages/wallet/Wallet';
import Notification from './components/notification/Notification';
const Stack = createStackNavigator();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const Rout = () => {
  useEffect(() => {

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    const requestPermission = async () => {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          );

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notification permission granted');
          } else {
            console.log('Notification permission denied');
          }

        } catch (err) {
          console.warn('Permission request error:', err);
        }
      }
    };

    requestPermission();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}

          <Stack.Screen name="Onboarding1" component={Onboarding1} />
          <Stack.Screen name="Onboarding2" component={Onboarding2} />
          <Stack.Screen name="Onboarding3" component={Onboarding3} />
          <Stack.Screen name="Onboarding4" component={Onboarding4} />
          <Stack.Screen name="Permission" component={Permission} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Vehicle" component={Vehicle} options={{ headerShown: true }} />
          <Stack.Screen name="Aadhaar" component={Aadhaar} options={{ headerShown: true }} />
          <Stack.Screen name="Pancard" component={PanCard} options={{ headerShown: true }} />
          <Stack.Screen name="Personal" component={Personal} options={{ headerShown: true }} />
          <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />

          {/* <Stack.Screen name="Account" component={Account} options={{ headerShown: true }} /> */}
          <Stack.Screen name="Details" component={Details} options={{ headerShown: true }} />
          <Stack.Screen name="TC" component={TC} options={{ headerShown: true, headerTitle: "Term and Conditions" }} />
          <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: true }} />
          <Stack.Screen name="Notification" component={Notification} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Rout;

