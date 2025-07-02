import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import {
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function MyOrderScreen() {
  return (
    // <SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="My Orders" component={MyOrder} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    // {/* // </SafeAreaView> */}
  );
}

export default MyOrderScreen;

const MyOrder = () => {
  return (
    <View>
      <Text>kslfjlksd</Text>
    </View>
  );
};

const History = () => {
  return (
    <View>
      <Text>jklfjkdsl</Text>
    </View>
  );
};
