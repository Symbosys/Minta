import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const menuItems = [
  { id: '1', title: 'Personal Info', icon: 'person-outline', color: '#FFA500' },
  { id: '2', title: 'Addresses', icon: 'book-outline', color: '#1E90FF' },
  { id: '3', title: 'Cart', icon: 'cart-outline', color: '#1E90FF' },
  { id: '4', title: 'Favourite', icon: 'heart-outline', color: '#FF69B4' },
  { id: '5', title: 'Notifications', icon: 'notifications-outline', color: '#FFD700' },
  { id: '6', title: 'Payment Method', icon: 'card-outline', color: '#1E90FF' },
  { id: '7', title: 'FAQs', icon: 'help-circle-outline', color: '#FF4500' },
  { id: '8', title: 'User Review', icon: 'chatbubbles-outline', color: '#1E90FF' },
  { id: '9', title: 'Settings', icon: 'settings-outline', color: '#1E90FF' },
  { id: '10', title: 'Log Out', icon: 'log-out-outline', color: '#FF0000' },
];

const ProfileScreen = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuItemContent}>
        <Ionicons name={item.icon} size={24} color={item.color} style={styles.icon} />
        <Text style={styles.menuText}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#000" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#000" style={styles.backIcon} />
        <Text style={styles.headerTitle}>Profile</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="#000" style={styles.moreIcon} />
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Vishal Khadok</Text>
          <Text style={styles.profileTagline}>I love fast food</Text>
        </View>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.menuList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backIcon: {
    padding: 5,
  },
  moreIcon: {
    padding: 5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFDAB9',
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileTagline: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  menuList: {
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ProfileScreen;