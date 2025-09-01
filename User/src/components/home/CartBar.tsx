import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CartBar: React.FC = () => {
  return (
    <View style={styles.cartBar}>
      <Text style={styles.cartNotification}>
        Shop for ₹39 more to save ₹50|20FLAT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartBar: {
    backgroundColor: '#ffca28',
    padding: 8,
    alignItems: 'center',
  },
  cartNotification: {
    fontSize: 12,
    color: '#333',
  },
});

export default CartBar;
