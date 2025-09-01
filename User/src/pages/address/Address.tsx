import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddressScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addressCard}>
        <View style={styles.addressHeader}>
          <Text style={styles.addressType}>🏠 Home</Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.addressText}>dvdf, dvd, x cddd, Koramangala, Bengaluru</Text>
        <Text style={styles.phoneText}>Phone number: 6202999356</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add new address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  addressCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 2,
    marginLeft: 8,
  },
  actionText: {
    color: '#FF7622',
    fontSize: 16,
  },
  addressText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  phoneText: {
    color: '#666',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#FF7622',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddressScreen;