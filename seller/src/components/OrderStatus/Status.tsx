import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Feather  from 'react-native-vector-icons/MaterialIcons';

const RunningOrdersScreen = () => {
  const orderItems = [
    {
      id: '32053',
      name: 'Chicken Thai Biriyani',
      category: '#Breakfast',
      price: 60
    },
    {
      id: '15253',
      name: 'Chicken Bhuna',
      category: '#Breakfast',
      price: 30
    },
    {
      id: '21200',
      name: 'Vegetarian Poutine',
      category: '#Breakfast',
      price: 35
    },
    {
      id: '53241',
      name: 'Turkey Bacon Strips',
      category: '#Breakfast',
      price: 45
    },
    {
      id: '58464',
      name: 'Veggie Burrito',
      category: '#Breakfast',
      price: 0 // Price not shown in image for last item
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>20 Running Orders</Text>
      </View>

      {/* Order Items List */}
      <ScrollView style={styles.ordersContainer}>
        {orderItems.map((item, index) => (
          <View key={item.id} style={styles.orderItem}>
            <View style={styles.itemImageContainer}>
              <View style={styles.itemImage} />
            </View>
            <View style={styles.itemDetailsContainer}>
              <Text style={styles.itemCategory}>{item.category}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemId}>ID: {item.id}</Text>
              {item.price > 0 && <Text style={styles.itemPrice}>${item.price}</Text>}
              
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.doneButton}>
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#8494a4',
  },
  menuButton: {
    padding: 4,
  },
  locationContainer: {
    flex: 1,
    marginLeft: 12,
  },
  locationLabel: {
    fontSize: 12,
    color: '#FF7622',
    fontWeight: '600',
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '400',
    marginRight: 4,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#a9b4c0',
    marginLeft: 'auto',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#8494a4',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#a9b4c0',
    opacity: 0.5,
  },
  titleContainer: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  ordersContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  orderItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 0,
  },
  itemImageContainer: {
    marginRight: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#a9b4c0',
  },
  itemDetailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemCategory: {
    fontSize: 12,
    color: '#FF7622',
    fontWeight: '500',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  itemId: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 6,
  },
  doneButton: {
    backgroundColor: '#FF7622',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 10,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  cancelButton: {
    borderColor: '#FF7622',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  cancelButtonText: {
    color: '#FF7622',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default RunningOrdersScreen;