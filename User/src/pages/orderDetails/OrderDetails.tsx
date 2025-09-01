import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const OrderDetailsScreen = () => {
  const items = [
    { name: 'Spicy Chicken Bucket', quantity: '2', price: '$24.99' },
    { name: 'Crispy Chicken Sandwich', quantity: '1', price: '$8.99' },
    { name: 'Waffle Fries', quantity: '3', price: '$5.97' },
    { name: 'Lemonade', quantity: '2', price: '$3.98' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {/* Delivery Location */}
        <LinearGradient
          colors={['#FF7622', '#f97c29']}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Delivery Location</Text>
        </LinearGradient>
        <View style={styles.sectionCard}>
          <Text style={styles.locationText}>789 Maple Drive, Springfield, USA</Text>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZbtWD7QwYoWTV1Y-jm3ySlXGv-kwV9tzbxEPoqT9Nmx7bLyzCkCl5q38cRb8FB0TLgDHk83IueZuaQfdL2dWxf_q4m2TX3oarQgLkRN4VrrSMiQXIJi-Tr05JXmDIk7aSVBjTJowarAGdhKRcUK1-16f09J5zv1TU6v519AbQ5MSnV-rCYlcuyKyJ4P9Z3Qq1QXsebrn9wp2WqWcIkctDsGwNdsYlbIER3Dpdtfe13zzQEjnFUJyfNFDCEl9FUwU3qXPAVzd07EU_' }}
            style={styles.mapImage}
          />
        </View>

        {/* Order Details */}
        <LinearGradient
          colors={['#FF7622', '#f97c29']}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Order #987654</Text>
        </LinearGradient>
        <View style={styles.sectionCard}>
          <Text style={styles.orderDate}>Delivered on July 15, 2024</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Delivered</Text>
            <View style={styles.checkIconContainer}>
              <Icon name="check" size={24} color="#1c130d" />
            </View>
          </View>
        </View>

        {/* Items */}
        <LinearGradient
          colors={['#FF7622', '#f97c29']}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Items</Text>
        </LinearGradient>
        <View style={styles.sectionCard}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.itemContainer} activeOpacity={0.7}>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Method */}
        <LinearGradient
          colors={['#FF7622', '#f97c29']}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Payment Method</Text>
        </LinearGradient>
        <View style={styles.sectionCard}>
          <View style={styles.paymentContainer}>
            <View style={styles.paymentIconContainer}>
              <Icon name="credit-card" size={24} color="#1c130d" />
            </View>
            <Text style={styles.paymentText}>Credit Card</Text>
          </View>
        </View>

        {/* Order Summary */}
        <LinearGradient
          colors={['#FF7622', '#f97c29']}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Order Summary</Text>
        </LinearGradient>
        <View style={styles.sectionCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Item Total</Text>
            <Text style={styles.summaryValue}>$43.93</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$2.99</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Taxes</Text>
            <Text style={styles.summaryValue}>$3.51</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total</Text>
            <Text style={styles.summaryValue}>$50.43</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf8',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Ensure content is not cut off
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    color: '#1c130d',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationText: {
    color: '#1c130d',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 12,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f4ece6',
  },
  orderDate: {
    color: '#FF7622',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 56,
  },
  statusText: {
    color: '#1c130d',
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
  },
  checkIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f4ece6',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 72,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f4ece6',
  },
  itemTextContainer: {
    flex: 1,
    minWidth: 0,
  },
  itemName: {
    color: '#1c130d',
    fontSize: 16,
    fontWeight: '500',
  },
  itemQuantity: {
    color: '#FF7622',
    fontSize: 14,
    fontWeight: '400',
  },
  itemPrice: {
    color: '#1c130d',
    fontSize: 16,
    fontWeight: '400',
    flexShrink: 0,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    gap: 16,
  },
  paymentIconContainer: {
    width: 40,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  paymentText: {
    color: '#1c130d',
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    minWidth: 0,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  summaryLabel: {
    color: '#FF7622',
    fontSize: 14,
    fontWeight: '400',
  },
  summaryValue: {
    color: '#1c130d',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
  },
});

export default OrderDetailsScreen;