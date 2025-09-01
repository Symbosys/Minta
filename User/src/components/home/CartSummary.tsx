import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  navigation: any;
  cartItemCount: number;
}

const CartSummary: React.FC<Props> = ({navigation, cartItemCount}) => {
  return (
    <View style={styles.cartSummary}>
      <View style={styles.cartLeft}>
        <Text style={styles.cartItemCount}>{cartItemCount} Item</Text>
        <Text style={styles.cartSeparator}>|</Text>
        <Text style={styles.cartTotal}>₹160</Text>
      </View>
      <TouchableOpacity
        style={styles.viewCartButton}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.viewCartText}>View Cart</Text>
        <MaterialIcons name="arrow-forward" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 12,
  },
  cartLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemCount: {
    fontSize: 14,
    color: '#fff',
    marginRight: 8,
  },
  cartSeparator: {
    fontSize: 14,
    color: '#fff',
    marginRight: 8,
  },
  cartTotal: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  viewCartButton: {
    backgroundColor: '#FF7622',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 4,
  },
});

export default CartSummary;
