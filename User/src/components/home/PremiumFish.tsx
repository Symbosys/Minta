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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Fish {
  name: string;
  weight: string;
  pieces: string;
  serves?: string;
  image: any;
}

interface Props {
  premiumFish: Fish[];
  cartItemCount: number;
  setCartItemCount: (count: number) => void;
}

const PremiumFish: React.FC<Props> = ({
  premiumFish,
  cartItemCount,
  setCartItemCount,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Premium fish & seafood selection</Text>
      <Text style={styles.sectionSubtitle}>
        Same-day catch: fresh & flavourful
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {premiumFish.map((item, index) => (
          <View key={index} style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setCartItemCount(cartItemCount + 1)}>
              <MaterialIcons name="add" size={20} color="#FF7622" />
            </TouchableOpacity>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDetails}>
              {item.weight} | {item.pieces} {item.serves && `| ${item.serves}`}
            </Text>
          </View>
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
});

export default PremiumFish;
