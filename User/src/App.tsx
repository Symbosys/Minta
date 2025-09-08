import React from 'react';
// import { ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { AuthProvider } from './app/AuthContext';
import AddressScreen from './pages/address/Address';
import MyTabs from './pages/bottomTab/BootamTab';
import Cart from './pages/cart/Cart';
import CheckoutScreen from './pages/checkout/Checkout';
import Details from './pages/details/Details';
import Drawer from './pages/drawer/Drawer';
import LocationAccess from './pages/locationAccess/LocationAccess';
import Onboarding_01 from './pages/onboarding/Onboarding_01';
import Onboarding_02 from './pages/onboarding/Onboarding_02';
import Onboarding_03 from './pages/onboarding/Onboarding_03';
import Onboarding_04 from './pages/onboarding/Onboarding_04';
import OrderDetailsScreen from './pages/orderDetails/OrderDetails';
import Orders from './pages/orders/Order';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Profile from './pages/profile/Profile';
import ProfileMenu from './pages/ProfileMenue/ProfileMenu';
import Search from './pages/search/Search';
import Splash from './pages/splash/Splash';
import TC from './pages/tc/TC';
import ForgotPassword from './pages/user/forgotPassword/ForgotPassword';
import Login from './pages/user/login/Login';
import SignUp from './pages/user/signUp/SignUp';
import Verification from './pages/user/verification/Verification';

function App() {
  const Stack = createStackNavigator();

  return (
    // <Home />
    // <Details />
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboarding_01" component={Onboarding_01} />
          <Stack.Screen name="Onboarding_02" component={Onboarding_02} />
          <Stack.Screen name="Onboarding_03" component={Onboarding_03} />
          <Stack.Screen name="Onboarding_04" component={Onboarding_04} />

          <Stack.Screen name="LocationAccess" component={LocationAccess} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Mytab" component={MyTabs} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Profile_menu" component={ProfileMenu} />
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
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen
            name="Privacy Policy"
            component={PrivacyPolicy}
            options={{headerShown: true, headerTitle: 'Term and Conditions'}}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetailsScreen}
            options={{headerShown: true, headerTitle: 'Order Details'}}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{headerShown: true, headerTitle: 'Check out'}}
          />
          <Stack.Screen
            name="Address"
            component={AddressScreen}
            options={{headerShown: true, headerTitle: 'Saved Address'}}
          />
        </Stack.Navigator>
          <Toast position="top"  swipeable={true}/>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;