import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../api/api';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import { Product } from '../../types/types';
import ProductCard from '../ui/ProductCard';

interface Meal {
  name: string;
  pieces: string;
  price: number;
  originalPrice: number;
  discount: string;
  tag: string;
  image: any;
}

interface Props {
  mealsInMinutes: Meal[];
  cartItemCount: number;
  setCartItemCount: (count: number) => void;
}

const MealsInMinutes: React.FC<Props> = ({
  mealsInMinutes,
  cartItemCount,
  setCartItemCount,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchBestSellerProduct = async () => {
    try {
      const res = await api.get('/product/all');
      setProducts(res.data.data.products);
      console.log(res.data)
    } catch (error) {
      console.log('error', error);
      if (error instanceof AxiosError) {
        Toast.show({
          type: 'error',
          text1: error.response?.data.message || 'Something went wrong',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
        });
      }
    }
  };

  useEffect(() => {
    fetchBestSellerProduct();
  }, []);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Meals in Minutes</Text>
      <Text style={styles.sectionSubtitle}>Juicy bites, Ready in no time!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                item={product}
              />
            ))
          ) : (
            <Text>Loading...</Text>
          )
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
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
  mealTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
  },
  mealTagText: {
    fontSize: 10,
    color: '#666',
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

export default MealsInMinutes;
