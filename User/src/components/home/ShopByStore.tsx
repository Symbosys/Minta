import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Store {
  name: string;
  image: any;
}

interface Props {
  storeCategories: Store[];
}

const ShopByStore: React.FC<Props> = ({storeCategories}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Shop by store</Text>
      <Text style={styles.sectionSubtitle}>
        Meats for every occasion - curated only for you!
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storeCategories.map((store, index) => (
          <TouchableOpacity key={index} style={styles.storeCard}>
            <Image source={store.image} style={styles.storeImage} />
            <Text style={styles.storeName}>{store.name}</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
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
  storeCard: {
    width: 150,
    marginRight: 16,
    alignItems: 'center',
  },
  storeImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  storeName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default ShopByStore;
