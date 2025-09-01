import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../category/Category';
import Home from '../home/Home';
import ProfileScreen from '../ProfileMenue/ProfileMenu';
import Search from '../search/Search';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF5733', 
        tabBarInactiveTintColor: '#6B7280', 
        tabBarStyle: {
          backgroundColor: '#FFFFFF', 
          paddingBottom: Platform.OS === 'ios' ? 20 : 10, 
          height: Platform.OS === 'ios' ? 80 : 70, 
          borderTopLeftRadius: 24, 
          borderTopRightRadius: 24,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -4},
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 10, 
          position: 'absolute',
          borderTopWidth: 0, 
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700', 
          marginBottom: 6,
          fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; 
          } else if (route.name === 'Category') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline'; 
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'; 
          } else {
            iconName = 'home'; 
          }

          return (
            <Icon
              name={iconName}
              size={focused ? 28 : 24} 
              color={color}
              style={{
                transform: [{scale: focused ? 1.1 : 1}],
              }}
            />
          );
        },
        tabBarActiveBackgroundColor: 'rgba(255, 87, 51, 0.05)', 
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
