import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <MaterialIcons name="home" size={24} color="#FF7622" />
        <Text style={styles.headerTitle}>Home</Text>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="#333" />
      </View>
      <View style={styles.headerRight}>
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={16}
          color="#ff6b35"
        />
        <Text style={styles.deliveryText}>Delivery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 4,
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
});

export default Header;
