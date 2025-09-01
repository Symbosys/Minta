import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const DeliveryPartnerHomeScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [orderStatus, setOrderStatus] = useState('waiting'); // waiting, newOrder, preparing
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    // Simulate banner carousel
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % 2);
    }, 4000);

    // Simulate new order notification after 3 seconds
    const orderTimeout = setTimeout(() => {
      setShowNewOrder(true);
      setOrderStatus('newOrder');
    }, 5000);

    return () => {
      clearInterval(bannerInterval);
      clearTimeout(orderTimeout);
    };
  }, []);

  const styles = getStyles(isDark);

  const handleAcceptOrder = () => {
    setOrderStatus('preparing');
    setShowNewOrder(false);
  };

  const handleRejectOrder = () => {
    setShowNewOrder(false);
    setOrderStatus('waiting');
  };

  const BannerCarousel = () => {
    const banners = [
      {
        title: "Discover what India is eating",
        subtitle: "Get market insights about customers' food preferences",
        buttonText: "Explore Trends",
        color: '#6366f1',
      },
      {
        title: "Get customer love on Zomato app",
        subtitle: "Get a \"loved by delivery partners\" badge by providing basic amenities",
        buttonText: "Opt in",
        color: '#3b82f6',
      }
    ];

    return (
      <View style={styles.bannerContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScrollView}
        >
          {banners.map((banner, index) => (
            <View key={index} style={[styles.banner, { backgroundColor: banner.color }]}>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerTitle}>{banner.title}</Text>
                <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                <TouchableOpacity style={styles.bannerButton}>
                  <Text style={styles.bannerButtonText}>{banner.buttonText}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bannerIcon}>
                {index === 0 ? (
                  <View style={styles.mapContainer}>
                    <Icon name="location-on" size={30} color="#ef4444" />
                    <View style={styles.burger} />
                  </View>
                ) : (
                  <View style={styles.loveContainer}>
                    <View style={styles.profileCircle}>
                      <View style={styles.profileAvatar} />
                      <View style={styles.heartIcon}>
                        <Icon name="favorite" size={16} color="#fff" />
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.bannerIndicators}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentBannerIndex === index && styles.activeIndicator
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const RestaurantStatus = () => (
    <View style={styles.statusContainer}>
      <View style={styles.restaurantIcon}>
        <View style={styles.shopBuilding}>
          <View style={styles.shopRoof} />
          <View style={styles.shopBody}>
            <View style={styles.shopWindow} />
            <View style={styles.openSign}>
              <Text style={styles.openText}>OPEN</Text>
            </View>
          </View>
          <View style={styles.shopBase} />
        </View>
        <View style={styles.wifiIcon}>
          <MaterialCommunityIcons name="wifi" size={20} color="#22d3ee" />
        </View>
      </View>
      <Text style={styles.statusText}>You are online</Text>
      <Text style={styles.statusSubtext}>Waiting for new orders</Text>
    </View>
  );

  const NewOrderNotification = () => (
    <TouchableOpacity style={styles.newOrderBanner} activeOpacity={0.9}>
      <Icon name="keyboard-arrow-up" size={24} color="#fff" />
      <Text style={styles.newOrderText}>You have 1 new order</Text>
    </TouchableOpacity>
  );

  const OrderModal = () => (
    <View style={styles.orderModalOverlay}>
      <View style={styles.orderModal}>
        <View style={styles.orderModalHeader}>
          <Text style={styles.orderModalTitle}>1 new order</Text>
          <TouchableOpacity onPress={handleRejectOrder}>
            <Icon name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.orderDetails}>
          <View style={styles.orderInfo}>
            <Text style={styles.orderId}>ID: 3461</Text>
            <Icon name="content-copy" size={16} color="#9ca3af" />
          </View>
          <Text style={styles.orderTime}>11:10 PM</Text>
          <Text style={styles.customerInfo}>1st order by Swaraj Desai</Text>
          
          <View style={styles.specialInstruction}>
            <Icon name="restaurant" size={16} color="#ef4444" />
            <Text style={styles.instructionText}>Don't send cutlery, tissues and straws</Text>
          </View>
          
          <View style={styles.orderItems}>
            <View style={styles.orderItem}>
              <View style={styles.itemIndicator} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>1 x Appe [12 Pieces] with Chutney</Text>
              </View>
              <Text style={styles.itemPrice}>₹90</Text>
            </View>
            
            <View style={styles.orderItem}>
              <View style={styles.itemIndicator} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>1 x Vada Pav</Text>
              </View>
              <Text style={styles.itemPrice}>₹20</Text>
            </View>
          </View>
          
          <View style={styles.orderTotal}>
            <Text style={styles.totalText}>Total Bill</Text>
            <View style={styles.paidBadge}>
              <Text style={styles.paidText}>PAID</Text>
            </View>
            <Icon name="keyboard-arrow-down" size={20} color="#9ca3af" />
            <Text style={styles.totalAmount}>₹110</Text>
          </View>
          
          <View style={styles.vegBadge}>
            <MaterialCommunityIcons name="leaf" size={16} color="#22c55e" />
            <Text style={styles.vegText}>VEG ONLY ORDER</Text>
          </View>
          
          <View style={styles.preparationTime}>
            <Text style={styles.prepTimeLabel}>Set food preparation time</Text>
            <View style={styles.timeSelector}>
              <TouchableOpacity style={styles.timeButton}>
                <Text style={styles.timeButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.timeDisplay}>16 mins</Text>
              <TouchableOpacity style={styles.timeButton}>
                <Text style={styles.timeButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.orderActions}>
            <TouchableOpacity style={styles.rejectButton} onPress={handleRejectOrder}>
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptOrder}>
              <Text style={styles.acceptButtonText}>Accept (04:47)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const PreparingOrder = () => (
    <View style={styles.preparingContainer}>
      <View style={styles.preparingHeader}>
        <Text style={styles.preparingId}>ID: 3461</Text>
        <Icon name="content-copy" size={16} color="#9ca3af" />
        <Text style={styles.preparingTime}>11:10 PM</Text>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} color="#9ca3af" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.preparingStatus}>
        <View style={styles.preparingBadge}>
          <Text style={styles.preparingBadgeText}>PREPARING</Text>
        </View>
        <Text style={styles.preparingCustomer}>1st order by Swaraj Desai</Text>
      </View>
      
      <View style={styles.specialInstruction}>
        <Icon name="restaurant" size={16} color="#ef4444" />
        <Text style={styles.instructionText}>Don't send cutlery, tissues and straws</Text>
      </View>
      
      <View style={styles.orderItems}>
        <View style={styles.orderItem}>
          <View style={styles.itemIndicator} />
          <View style={styles.itemDetails}>
            <Text style={[styles.itemName, styles.strikethrough]}>1 x Appe [12 Pieces] with Chutney</Text>
          </View>
          <Text style={styles.itemPrice}>₹90</Text>
        </View>
        
        <View style={styles.orderItem}>
          <View style={styles.itemIndicator} />
          <View style={styles.itemDetails}>
            <Text style={[styles.itemName, styles.strikethrough]}>1 x Vada Pav</Text>
          </View>
          <Text style={styles.itemPrice}>₹20</Text>
        </View>
      </View>
      
      <View style={styles.orderTotal}>
        <Text style={styles.totalText}>Total Bill</Text>
        <View style={styles.paidBadge}>
          <Text style={styles.paidText}>PAID</Text>
        </View>
        <Icon name="keyboard-arrow-down" size={20} color="#9ca3af" />
        <Text style={styles.totalAmount}>₹110</Text>
      </View>
      
      <View style={styles.riderInfo}>
        <MaterialCommunityIcons name="bike" size={20} color="#9ca3af" />
        <Text style={styles.riderText}>3 riders nearby, assigning one soon</Text>
      </View>
      
      <View style={styles.vegBadge}>
        <MaterialCommunityIcons name="leaf" size={16} color="#22c55e" />
        <Text style={styles.vegText}>VEG ONLY ORDER</Text>
      </View>
      
      <TouchableOpacity style={styles.readyButton}>
        <Text style={styles.readyButtonText}>Order ready (20:57)</Text>
      </TouchableOpacity>
    </View>
  );

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={isDark ? '#1f2937' : '#f9fafb'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.onlineStatus}>
          {/* <View style={styles.onlineIndicator} /> */}
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.onlineText}>{isEnabled ? "Online" : "Offline"}</Text>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon
              name="notifications"
              size={24}
              color={isDark ? '#fff' : '#374151'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="search" size={24} color={isDark ? '#fff' : '#374151'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="apps" size={24} color={isDark ? '#fff' : '#374151'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Status Tabs */}
      <View style={styles.statusTabs}>
        <TouchableOpacity
          style={[
            styles.statusTab,
            orderStatus === 'preparing' && styles.activeTab,
          ]}>
          <Text
            style={[
              styles.statusTabText,
              orderStatus === 'preparing' && styles.activeTabText,
            ]}>
            Preparing ({orderStatus === 'preparing' ? '1' : '0'})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusTab}>
          <Text style={styles.statusTabText}>Ready (0)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusTab}>
          <Text style={styles.statusTabText}>Picked up (0)</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Restaurant Status or Preparing Order */}
        {orderStatus === 'preparing' ? (
          <PreparingOrder />
        ) : (
          <RestaurantStatus />
        )}
      </ScrollView>

      {/* New Order Notification */}
      {showNewOrder && orderStatus === 'newOrder' && <NewOrderNotification />}

      {/* Order Modal */}
      {showNewOrder && orderStatus === 'newOrder' && <OrderModal />}

      {/* Menu Button */}
      <TouchableOpacity style={styles.menuButton}>
        <Icon name="more-horiz" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryPartnerHomeScreen

const getStyles = (isDark: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDark ? '#111827' : '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: isDark ? '#1f2937' : '#f9fafb',
  },
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22c55e',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  onlineText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
  statusTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: isDark ? '#1f2937' : '#f9fafb',
  },
  statusTab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: isDark ? '#374151' : '#d1d5db',
    marginRight: 8,
    alignItems: 'center',
  },
  activeTab: {
    borderColor: '#3b82f6',
    backgroundColor: isDark ? '#1e3a8a' : '#dbeafe',
  },
  statusTabText: {
    color: isDark ? '#9ca3af' : '#6b7280',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#3b82f6',
  },
  content: {
    flex: 1,
  },
  bannerContainer: {
    paddingVertical: 16,
  },
  bannerScrollView: {
    height: 120,
  },
  banner: {
    width: width - 32,
    marginHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bannerSubtitle: {
    color: '#e2e8f0',
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 18,
  },
  bannerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#3b82f6',
    fontWeight: '600',
  },
  bannerIcon: {
    marginLeft: 16,
  },
  mapContainer: {
    position: 'relative',
    width: 60,
    height: 60,
  },
  burger: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 16,
    backgroundColor: '#f59e0b',
    borderRadius: 4,
  },
  loveContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ef4444',
  },
  heartIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: isDark ? '#374151' : '#d1d5db',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: isDark ? '#9ca3af' : '#6b7280',
  },
  statusContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  restaurantIcon: {
    marginBottom: 20,
    position: 'relative',
  },
  shopBuilding: {
    alignItems: 'center',
  },
  shopRoof: {
    width: 80,
    height: 20,
    backgroundColor: '#f1f5f9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginBottom: -5,
  },
  shopBody: {
    width: 70,
    height: 50,
    backgroundColor: '#e2e8f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  shopWindow: {
    width: 30,
    height: 20,
    backgroundColor: '#94a3b8',
    borderRadius: 4,
    marginBottom: 5,
  },
  openSign: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  openText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  shopBase: {
    width: 90,
    height: 10,
    backgroundColor: '#22c55e',
    borderRadius: 5,
    marginTop: -5,
  },
  wifiIcon: {
    position: 'absolute',
    top: -10,
    right: -20,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: isDark ? '#fff' : '#111827',
    marginBottom: 8,
  },
  statusSubtext: {
    fontSize: 16,
    color: isDark ? '#9ca3af' : '#6b7280',
  },
  newOrderBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#22c55e',
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newOrderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  orderModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'flex-end',
  },
  orderModal: {
    backgroundColor: isDark ? '#1f2937' : '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
  },
  orderModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#22c55e',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  orderModalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderDetails: {
    padding: 20,
  },
  orderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderId: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  orderTime: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    right: 20,
    top: 20,
  },
  customerInfo: {
    color: '#22c55e',
    fontSize: 14,
    marginBottom: 16,
  },
  specialInstruction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: isDark ? '#7f1d1d' : '#fecaca',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  instructionText: {
    color: '#ef4444',
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
  },
  orderItems: {
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22c55e',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: isDark ? '#9ca3af' : '#6b7280',
  },
  itemPrice: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
  orderTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: isDark ? '#374151' : '#e5e7eb',
    marginBottom: 16,
  },
  totalText: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    flex: 1,
  },
  paidBadge: {
    backgroundColor: '#6b7280',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  paidText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  totalAmount: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  vegBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  vegText: {
    color: '#22c55e',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  preparationTime: {
    marginBottom: 20,
  },
  prepTimeLabel: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    marginBottom: 12,
  },
  timeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: isDark ? '#374151' : '#f3f4f6',
    borderRadius: 8,
    padding: 4,
  },
  timeButton: {
    width: 40,
    height: 40,
    backgroundColor: isDark ? '#4b5563' : '#e5e7eb',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeButtonText: {
    color: '#3b82f6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeDisplay: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  orderActions: {
    flexDirection: 'row',
    gap: 12,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ef4444',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  rejectButtonText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  acceptButton: {
    flex: 2,
    backgroundColor: '#22c55e',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  preparingContainer: {
    margin: 16,
    backgroundColor: isDark ? '#1f2937' : '#fff',
    borderRadius: 12,
    padding: 16,
  },
  preparingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  preparingId: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  preparingTime: {
    color: isDark ? '#fff' : '#111827',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 'auto',
    marginRight: 8,
  },
  preparingStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  preparingBadge: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 12,
  },
  preparingBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  preparingCustomer: {
    color: '#22c55e',
    fontSize: 14,
  },
  riderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: isDark ? '#374151' : '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  riderText: {
    color: isDark ? '#d1d5db' : '#6b7280',
    fontSize: 14,
    marginLeft: 8,
  },
  readyButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  readyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});