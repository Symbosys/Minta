import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Coupons: React.FC = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Coupons, only for you!</Text>
      <Text style={styles.sectionSubtitle}>Your gateway to meaty savings!</Text>
      <View style={styles.couponCard}>
        <View style={styles.couponIcon}>
          <MaterialCommunityIcons name="percent" size={24} color="#fff" />
        </View>
        <View style={styles.couponContent}>
          <Text style={styles.couponTitle}>20% Off & Free Delivery</Text>
          <Text style={styles.couponSubtitle}>20FLAT | for first 5 orders</Text>
        </View>
        <MaterialIcons name="arrow-forward" size={20} color="#4caf50" />
      </View>
      <View style={styles.infinitiBanner}>
        <View style={styles.infinitiLeft}>
          <Text style={styles.infinitiTitle}>Minta Infiniti</Text>
          <Text style={styles.infinitiSubtitle}>Meaty benefits, on & on!</Text>
        </View>
        <View style={styles.infinitiRight}>
          <Text style={styles.infinitiOffer}>
            Now at a special price for you!
          </Text>
          <View style={styles.infinitiDetails}>
            <Text style={styles.infinitiCashback}>Up to 5% Cashback</Text>
            <Text style={styles.infinitiDelivery}>FREE Delivery</Text>
          </View>
          <MaterialIcons name="arrow-forward" size={20} color="#c2185b" />
        </View>
      </View>
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
  couponCard: {
    backgroundColor: '#e8f5e8',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  couponIcon: {
    backgroundColor: '#4caf50',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  couponContent: {
    flex: 1,
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  couponSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  infinitiBanner: {
    backgroundColor: '#7b1fa2',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infinitiLeft: {
    flex: 1,
  },
  infinitiTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  infinitiSubtitle: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },
  infinitiRight: {
    alignItems: 'flex-end',
  },
  infinitiOffer: {
    fontSize: 10,
    color: '#ffcc02',
    backgroundColor: '#ff9800',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  infinitiDetails: {
    alignItems: 'flex-end',
  },
  infinitiCashback: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 2,
  },
  infinitiDelivery: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Coupons;
