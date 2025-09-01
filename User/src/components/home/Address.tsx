import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Address: React.FC = () => {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.addressText}>dvdf, dvd, x cddd, Koramanga...</Text>
      <Text style={styles.deliveryTime}>in 30 mins</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  addressText: {
    fontSize: 12,
    color: '#666',
  },
  deliveryTime: {
    fontSize: 12,
    color: '#ff6b35',
    textAlign: 'right',
    marginTop: -16,
  },
});

export default Address;
