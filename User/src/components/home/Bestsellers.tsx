import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Product} from '../../types/types';
import api from '../../api/api';
import Toast from 'react-native-toast-message';
import ProductCard from '../ui/ProductCard';
import {AxiosError} from 'axios';

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState<Product[]>([]);

  const fetchBestSellerProduct = async () => {
    try {
      const res = await api.get('/product/bestseller');
      setBestsellers(res.data.data);
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
      <Text style={styles.sectionTitle}>Bestsellers</Text>
      <Text style={styles.sectionSubtitle}>
        Most popular products near you!
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}>
        {bestsellers.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
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
  horizontalScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
});

export default Bestsellers;
