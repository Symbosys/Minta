import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

// Main Notification Component
function NotificationScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#EFEFEF',
            marginTop: 20
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '500',
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#FF7622',
            height: 3,
          },
          tabBarActiveTintColor: '#FF7622',
          tabBarInactiveTintColor: '#989898',
        }}
      >
        <Tab.Screen name="Notifications" component={NotificationsTab} />
        <Tab.Screen
          name="Requests"
          component={MessagesTab}
          options={{
            tabBarLabel: () => (
              <View style={styles.tabWithBadge}>
                <Text style={styles.tabLabel}>Requests</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// Notifications Tab Component
const NotificationsTab = () => {
  const notificationData = [
    {
      id: '1',
      name: 'Tanbir Ahmed',
      action: 'Placed a new order',
      time: '20 min ago',
      buttonColor: '#E8ECF4',
      avatar: "data:image/jpeg;base64,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"
    },
    {
      id: '2',
      name: 'Salim Smith',
      action: 'left a 5 star review',
      time: '20 min ago',
      buttonColor: '#E8ECF4',
      avatar: "data:image/jpeg;base64,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"
    },
    {
      id: '3',
      name: 'Royal Bengal',
      action: 'agreed to cancel',
      time: '20 min ago',
      buttonColor: '#E8ECF4',
      avatar: "data:image/jpeg;base64,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"
    },
    {
      id: '4',
      name: 'Pabel Vuiya',
      action: 'Placed a new order',
      time: '20 min ago',
      buttonColor: '#E8ECF4',
      avatar: "data:image/jpeg;base64,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"
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            avatar={item.avatar}
            name={item.name}
            action={item.action}
            time={item.time}
            buttonColor={item.buttonColor}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


// Notification Item Component
const NotificationItem = ({ avatar, name, action, time, buttonColor }: any) => {
  return (
    <View style={styles.notificationItem}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.action}>{action}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      <View style={[styles.actionButton, { backgroundColor: buttonColor }]} />
    </View>
  );
};


// Messages Tab Component
const MessagesTab = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No messages yet</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 4,
    paddingStart: 15,
    marginTop: 10,
  },
  backButton: {
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  tabWithBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#989898',
  },
  badge: {
    backgroundColor: '#FF7622',
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#989898',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#B1BDC9',
  },
  contentContainer: {
    flex: 1,
    marginRight: 12,
  },
  textContent: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  action: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 4,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#E8ECF4',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF7622',
  },
});

export default NotificationScreen;