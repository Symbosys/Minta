import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useCartStore} from '../../store/cart';

interface Props {
  navigation: any;
}

const CartSummary: React.FC<Props> = ({navigation}) => {
  const cartItemCount = useCartStore(state => state.cartItemCount());
  const cartSubtotal = useCartStore(state => state.cartSubtotal());

  return (
    <View style={styles.container}>
      <View style={styles.cartBar}>
        <Text style={styles.cartNotification}>
          Shop for ₹39 more to save ₹50 | 20FLAT
        </Text>
      </View>
      <View style={styles.cartSummary}>
        <View style={styles.cartLeft}>
          <Text style={styles.cartItemCount}>{cartItemCount} Item</Text>
          <Text style={styles.cartSeparator}>|</Text>
          <Text style={styles.cartTotal}>₹{cartSubtotal}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.viewCartText}>View Cart</Text>
          <MaterialIcons name="arrow-forward" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  cartBar: {
    backgroundColor: '#ffca28',
    padding: 8,
    alignItems: 'center',
  },
  cartNotification: {
    fontSize: 12,
    color: '#333',
  },
  cartSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
