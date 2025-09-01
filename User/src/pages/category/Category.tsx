import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import CategoryItem from '../../components/ui/CategoryCard';
import {AxiosError} from 'axios';
import Toast from 'react-native-toast-message';
import api from '../../api/api';
import {Category} from '../../types/types';

const CategoryScreen = () => {
  const [category, setCategory] = useState<Category[]>([]);

  const fecthCategory = async () => {
    try {
      const res = await api.get('/category/all');
      console.log(res.data.data);
      setCategory(res.data.data);
    } catch (error) {
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
    fecthCategory();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Categories</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {category.map(item => (
            <CategoryItem key={item.id} props={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 60,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'System',
  },
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default CategoryScreen;
