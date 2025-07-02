import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Text, Surface } from 'react-native-paper';

type OrderStatus = 'Completed' | 'Canceled';

interface OrderItem {
  id: string;
  vendor: string;
  price: number;
  date: string;
  items: number;
  status?: OrderStatus;
  image: string;
}

const Orders = () => {
  const [activeTab, setActiveTab] = useState<'Ongoing' | 'History'>('Ongoing');

  const primaryColor = '#FF7622';

  const ongoingOrders: OrderItem[] = [
    {
      id: '162432',
      vendor: 'Pizza Hut',
      price: 35.25,
      date: '29 JAN, 12:30',
      items: 3,
      image: 'placeholder',
    },
  ];

  const historyOrders: OrderItem[] = [
    {
      id: '162432',
      vendor: 'Pizza Hut',
      price: 35.25,
      date: '29 JAN, 12:30',
      items: 3,
      status: 'Completed',
      image: 'placeholder',
    },
    {
      id: '242432',
      vendor: 'McDonald',
      price: 40.15,
      date: '30 JAN, 12:30',
      items: 2,
      status: 'Completed',
      image: 'placeholder',
    },
    {
      id: '240112',
      vendor: 'Starbucks',
      price: 10.2,
      date: '30 JAN, 12:30',
      items: 1,
      status: 'Canceled',
      image: 'placeholder',
    },
  ];

  const renderOrderItem = ({ item }: { item: OrderItem }) => {
    const isHistory = activeTab === 'History';

    return (
      <Surface style={styles.orderCard} key={item.id}>
        <View style={styles.orderRow}>
          <View style={styles.imageContainer} />
          <View style={styles.orderDetails}>
            <View style={styles.orderHeader}>
              <Text variant="titleMedium">{item.vendor}</Text>
              <Text variant="labelSmall" style={styles.orderId}>
                #{item.id}
              </Text>
            </View>
            <View style={styles.orderInfo}>
              <Text variant="titleMedium" style={styles.price}>
                ${item.price.toFixed(2)}
              </Text>
              <Text variant="bodySmall" style={styles.orderMeta}>
                {isHistory && item.date} • {item.items} Items
              </Text>
              {isHistory && item.status && (
                <Text
                  style={[
                    styles.status,
                    {
                      color: item.status === 'Completed' ? '#00C853' : '#FF0000',
                    },
                  ]}
                >
                  {item.status}
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {isHistory ? (
            <>
              <TouchableOpacity style={styles.outlinedButton}>
                <Text style={styles.outlinedButtonText}>Rate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filledButton}>
                <Text style={styles.filledButtonText}>Re-Order</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity style={styles.filledButton}>
                <Text style={styles.filledButtonText}>Track Order</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.outlinedButton}>
                <Text style={styles.outlinedButtonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Surface>
    );
  };

  return (
    <View style={styles.container}>
      {/* Custom Tabs */}
      <View style={styles.tabRow}>
        {['Ongoing', 'History'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabItem,
              activeTab === tab && {
                borderBottomColor: primaryColor,
                borderBottomWidth: 2,
              },
            ]}
            onPress={() => setActiveTab(tab as 'Ongoing' | 'History')}
          >
            <Text
              style={[
                styles.tabText,
                { color: activeTab === tab ? primaryColor : '#999' },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={activeTab === 'Ongoing' ? ongoingOrders : historyOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 32 }}>
            No orders to show.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  orderCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
  },
  orderRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
  },
  orderDetails: {
    flex: 1,
    marginLeft: 12,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    color: '#666',
  },
  orderInfo: {
    marginTop: 4,
  },
  price: {
    fontWeight: 'bold',
  },
  orderMeta: {
    color: '#666',
    marginTop: 2,
  },
  status: {
    marginTop: 2,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  outlinedButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#FF7622',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlinedButtonText: {
    color: '#FF7622',
    fontWeight: '600',
  },
  filledButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#FF7622',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Orders;
