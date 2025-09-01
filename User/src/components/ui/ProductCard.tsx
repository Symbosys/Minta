import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Product} from '../../types/types';

type Props = {
  item: Product;
};

const ProductCard = ({item}: Props) => {
  return (
    <View style={styles.productCard}>
      <Image
        source={{uri: item?.image[0]?.image.secure_url}}
        style={styles.productImage}
      />
      <View style={styles.productBadge}>
        <MaterialCommunityIcons name="shield-check" size={16} color="#4caf50" />
        <Text style={styles.badgeText}>INDIA'S #1 CHOICE</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={20} color="#FF7622" />
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDetails}>
        {item.weight} g | {item.pieces} Pieces
      </Text>
      <View style={styles.priceRow}>
        <Text style={styles.productPrice}>₹{item.priceAfterDiscount}</Text>
        <Text style={styles.productOriginalPrice}>
          ₹{item.priceBeforeDiscount}
        </Text>
        <Text style={styles.productDiscount}>{item.discount} % off</Text>
      </View>
      <View style={styles.deliveryInfo}>
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={14}
          color="#ff6b35"
        />
        <Text style={styles.deliveryInfoText}>Delivery in 30 mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 8,
    color: '#4caf50',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  addButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginHorizontal: 12,
  },
  productDetails: {
    fontSize: 12,
    color: '#666',
    margin: 12,
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  productOriginalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  productDiscount: {
    fontSize: 12,
    color: '#4caf50',
    fontWeight: 'bold',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 12,
  },
  deliveryInfoText: {
    fontSize: 12,
    color: '#ff6b35',
    marginLeft: 4,
  },
});

export default ProductCard;
