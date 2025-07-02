import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screen Components
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

// Create Tab Navigator
const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#6200EE',
            height: 3,
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: '#757575',
        }}
        // Enable swipe
        // swipeEnabled={true}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;