import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Otp from "../screen/Otp";
import HomeScreen from "../screen/HomeScreen";
import CategoryScreen from "../screen/Category";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return ( // ✅ Added return 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Category" component={CategoryScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
