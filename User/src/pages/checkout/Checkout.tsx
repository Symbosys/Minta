import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckoutScreen = () => {
  const orderItems = [
    { name: 'Chicken Wings', description: '2 pieces', price: '$12.99' },
    { name: 'Chicken Breast', description: '1 piece', price: '$8.99' },
    { name: 'Chicken Thigh', description: '1 piece', price: '$7.99' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {/* Your Order */}
        <Text style={styles.sectionTitle}>Your Order</Text>
        {orderItems.map((item, index) => (
          <View key={index} style={styles.orderItem}>
            <View style={styles.orderItemText}>
              <Text style={styles.orderItemName}>{item.name}</Text>
              <Text style={styles.orderItemDescription}>{item.description}</Text>
            </View>
            <Text style={styles.orderItemPrice}>{item.price}</Text>
          </View>
        ))}

        {/* Delivery Address */}
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressContainer}>
          <View style={styles.addressText}>
            <Text style={styles.addressTitle}>Home</Text>
            <Text style={styles.addressDescription}>123 Main St, Anytown, USA</Text>
          </View>
          <TouchableOpacity style={styles.editIconContainer}>
            <Icon name="edit" size={24} color="#1c120d" />
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentContainer}>
          <View style={styles.radioOption}>
            <Text style={styles.radioLabel}>Credit Card</Text>
            <View style={styles.radioInputChecked} />
          </View>
          <View style={styles.radioOption}>
            <Text style={styles.radioLabel}>Digital Wallet</Text>
            <View style={styles.radioInput} />
          </View>
        </View>

        {/* Card Details */}
        <View style={styles.cardInputContainer}>
          <TextInput
            style={styles.cardInput}
            placeholder="Card Number"
            placeholderTextColor="#FF7622"
          />
        </View>
        <View style={styles.cardInputRow}>
          <TextInput
            style={styles.cardInputHalf}
            placeholder="MM/YY"
            placeholderTextColor="#FF7622"
          />
          <TextInput
            style={styles.cardInputHalf}
            placeholder="CVV"
            placeholderTextColor="#FF7622"
          />
        </View>

        {/* Cost Breakdown */}
        <Text style={styles.sectionTitle}>Cost Breakdown</Text>
        <View style={styles.costContainer}>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Item Total</Text>
            <Text style={styles.costValue}>$29.97</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Delivery Fee</Text>
            <Text style={styles.costValue}>$5.00</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Taxes</Text>
            <Text style={styles.costValue}>$2.50</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Total</Text>
            <Text style={styles.costValue}>$37.47</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf9f8',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Ensure content is not cut off
  },
  sectionTitle: {
    color: '#1c120d',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fcf9f8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 72,
    justifyContent: 'space-between',
  },
  orderItemText: {
    flex: 1,
    minWidth: 0,
  },
  orderItemName: {
    color: '#1c120d',
    fontSize: 16,
    fontWeight: '500',
  },
  orderItemDescription: {
    color: '#FF7622',
    fontSize: 14,
    fontWeight: '400',
  },
  orderItemPrice: {
    color: '#1c120d',
    fontSize: 16,
    fontWeight: '400',
    flexShrink: 0,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fcf9f8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 72,
    justifyContent: 'space-between',
  },
  addressText: {
    flex: 1,
    minWidth: 0,
  },
  addressTitle: {
    color: '#1c120d',
    fontSize: 16,
    fontWeight: '500',
  },
  addressDescription: {
    color: '#FF7622',
    fontSize: 14,
    fontWeight: '400',
  },
  editIconContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  paymentContainer: {
    padding: 16,
    gap: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9d8ce',
    borderRadius: 12,
    padding: 15,
    justifyContent: 'space-between',
  },
  radioLabel: {
    color: '#1c120d',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  radioInput: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#e9d8ce',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  radioInputChecked: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#f97529',
    borderRadius: 10,
    backgroundColor: '#f97529',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardInput: {
    height: 56,
    backgroundColor: '#f4ebe6',
    borderRadius: 12,
    padding: 16,
    color: '#1c120d',
    fontSize: 16,
    fontWeight: '400',
  },
  cardInputRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  cardInputHalf: {
    flex: 1,
    height: 56,
    backgroundColor: '#f4ebe6',
    borderRadius: 12,
    padding: 16,
    color: '#1c120d',
    fontSize: 16,
    fontWeight: '400',
  },
  costContainer: {
    padding: 16,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e9d8ce',
  },
  costLabel: {
    color: '#FF7622',
    fontSize: 14,
    fontWeight: '400',
    width: '20%',
  },
  costValue: {
    color: '#1c120d',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
    flex: 1,
  },
});

export default CheckoutScreen;