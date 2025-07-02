import React from 'react';
// import { ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';
import styles from './style';
import Onboarding_01 from './pages/onboarding/Onboarding_01';
import Onboarding_02 from './pages/onboarding/Onboarding_02';
import Onboarding_03 from './pages/onboarding/Onboarding_03';
import Onboarding_04 from './pages/onboarding/Onboarding_04';
import Login from './pages/user/login/Login';
import ForgotPassword from './pages/user/forgotPassword/ForgotPassword';
import SignUp from './pages/user/signUp/SignUp';
import Verification from './pages/user/verification/Verification';
import LocationAccess from './pages/locationAccess/LocationAccess';
import Home from './pages/home/Home';
import MyComponent from './pages/MyComponent';
import Search from './pages/search/Search';
import Details from './pages/details/Details';
import {AuthProvider} from './app/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './pages/drawer/Drawer';
import Profile from './pages/profile/Profile';
import TC from './pages/tc/TC';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Cart from './pages/cart/Cart';
import Orders from './pages/orders/Order';
import ProfileMenu from './pages/ProfileMenue/ProfileMenu';

function App() {
  const Stack = createStackNavigator();

  return (
    // <Home />
    // <Details />
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name='Profile_menu' component={ProfileMenu} /> */}
          <Stack.Screen name="Onboarding_01" component={Onboarding_01} />
          <Stack.Screen name="Onboarding_02" component={Onboarding_02} />
          <Stack.Screen name="Onboarding_03" component={Onboarding_03} />
          <Stack.Screen name="Onboarding_04" component={Onboarding_04} />

          <Stack.Screen name="LocationAccess" component={LocationAccess} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: true, headerTitle: 'Details'}}
          />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{headerShown: true, headerTitle: 'Menu'}}
          />
          <Stack.Screen
            name="Terms and Conditions"
            component={TC}
            options={{headerShown: true, headerTitle: 'Privacy Policy'}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: true, headerTitle: 'Profile'}}
          />
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{headerShown: true, headerTitle: 'My Orders'}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: true, headerTitle: 'My Cart'}}
          />
          <Stack.Screen
            name="Privacy Policy"
            component={PrivacyPolicy}
            options={{headerShown: true, headerTitle: 'Term and Conditions'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;