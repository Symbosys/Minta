import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CartScreen: React.FC = () => {
  const [paneerQuantity, setPaneerQuantity] = useState(1);
  const [chickenQuantity, setChickenQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.restaurantName}>Aroma Quest</Text>
          <Text style={styles.deliveryTime}>35-40 mins to Home</Text>
          <Text style={styles.address}>pathak villa near raj m...</Text>
        </View>
        <TouchableOpacity style={styles.shareButton}>
          <MaterialIcons name="share" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        {/* Food Items */}
        <View style={styles.itemsContainer}>
          {/* Paneer Biryani */}
          <View style={styles.foodItem}>
            <View style={styles.vegIndicator}>
              <View style={styles.vegDot} />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>Paneer Biryani with Raita</Text>
              <Text style={styles.itemDescription}>Half [Serves 1]</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Edit ▸</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityControls}>
                <TouchableOpacity 
                  style={styles.quantityButton}
                  onPress={() => setPaneerQuantity(Math.max(1, paneerQuantity - 1))}
                >
                  <Text style={styles.quantityButtonText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{paneerQuantity}</Text>
                <TouchableOpacity 
                  style={styles.quantityButton}
                  onPress={() => setPaneerQuantity(paneerQuantity + 1)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemPrice}>₹198</Text>
            </View>
          </View>

          {/* Chicken Biryani */}
          <View style={styles.foodItem}>
            <View style={styles.nonVegIndicator}>
              <View style={styles.nonVegTriangle} />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>Hyderabadi Chicken Dum Biryani</Text>
              <Text style={styles.itemDescription}>Half [Serves 1, 2 Pieces Chicken]</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Edit ▸</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityControls}>
                <TouchableOpacity 
                  style={styles.quantityButton}
                  onPress={() => setChickenQuantity(Math.max(1, chickenQuantity - 1))}
                >
                  <Text style={styles.quantityButtonText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{chickenQuantity}</Text>
                <TouchableOpacity 
                  style={styles.quantityButton}
                  onPress={() => setChickenQuantity(chickenQuantity + 1)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemPrice}>₹248</Text>
            </View>
          </View>

          {/* Add More Items */}
          <TouchableOpacity style={styles.addMoreItems}>
            <Text style={styles.addMoreText}>+ Add more items</Text>
          </TouchableOpacity>
        </View>

        {/* Coupons Section */}
        <View style={styles.couponsSection}>

          <View style={styles.goldOffer}>
            <Text style={styles.goldOfferIcon}>✓</Text>
            <Text style={styles.goldOfferText}>You saved ₹66.90 with Gold offer</Text>
          </View>

          <View style={styles.couponOffer}>
            <MaterialCommunityIcons name="brightness-percent" size={20} color="#666" />
            <Text style={styles.couponText}>Save ₹80 with 'HUNGRY80'</Text>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>APPLY</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.viewAllCoupons}>
            <Text style={styles.viewAllText}>View all coupons ▸</Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Info */}
        <View style={styles.deliverySection}>
          <View style={styles.deliveryTime}>
            <MaterialIcons name="access-time" size={20} color="#666" />
            <Text style={styles.deliveryTimeText}>Delivery in 35-40 mins</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.scheduleText}>Want this later? Schedule it</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deliveryAddress}>
            <MaterialIcons name="location-on" size={20} color="#666" />
            <View style={styles.addressDetails}>
              <Text style={styles.deliveryAtText}>Delivery at Home</Text>
              <Text style={styles.fullAddress}>pathak villa near raj mahal imam kothi, I...</Text>
              <Text style={styles.deliveryInstructions}>Add instructions for delivery partner</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactSection}>
            <MaterialIcons name="phone" size={20} color="#666" />
            <Text style={styles.contactText}>Amit Kumar, +91-6202999356</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.billSection}>
            <MaterialIcons name="receipt" size={20} color="#666" />
            <View style={styles.billDetails}>
              <Text style={styles.totalBillText}>Total Bill ₹492.76 ₹409.86</Text>
              <Text style={styles.savedText}>You saved ₹83</Text>
              <Text style={styles.taxesText}>Incl. taxes and charges</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Feeding India Section */}
        <View style={styles.feedingIndiaSection}>
          <View style={styles.feedingIndiaHeader}>
            <Text style={styles.feedingIndiaTitle}>Let's serve a brighter future</Text>
            <MaterialIcons name="info-outline" size={16} color="#666" />
          </View>
          <Text style={styles.feedingIndiaSubtitle}>Through nutritious meals, you can</Text>
          <Text style={styles.feedingIndiaSubtitle}>empower young minds for greatness</Text>
          
          <View style={styles.donationSection}>
            <Text style={styles.donateText}>Donate to Feeding India</Text>
            <Text style={styles.donateAmount}>₹2</Text>
            <TouchableOpacity style={styles.addDonationButton}>
              <Text style={styles.addDonationText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cancellation Policy */}
        <View style={styles.cancellationPolicy}>
          <Text style={styles.policyTitle}>CANCELLATION POLICY</Text>
          <Text style={styles.policyText}>Help us reduce food waste by avoiding cancellations after placing your order. A 100% cancellation fee will be applied.</Text>
        </View>

        {/* Zomato Money */}
        <TouchableOpacity style={styles.zomatoMoney}>
          <View style={styles.zomatoMoneyIcon}>
            <Text style={styles.zomatoMoneyEmoji}>💳</Text>
          </View>
          <View style={styles.zomatoMoneyDetails}>
            <Text style={styles.zomatoMoneyTitle}>Zomato Money</Text>
            <Text style={styles.zomatoMoneySubtitle}>Single tap payments. Zero failures</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#666" />
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Payment Section */}
      <View style={styles.bottomSection}>
        <View style={styles.paymentMethod}>
          <Text style={styles.payUsingText}>PAY USING</Text>
          <Text style={styles.googlePayText}>Google Pay UPI</Text>
        </View>
        <TouchableOpacity style={styles.placeOrderButton}>
          <View style={styles.placeOrderContent}>
            <Text style={styles.totalAmount}>₹409.86</Text>
            <Text style={styles.totalText}>TOTAL</Text>
          </View>
          <Text style={styles.placeOrderText}>Place Order ▸</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 4,
  },
  headerContent: {
    flex: 1,
    marginLeft: 12,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  // deliveryTime: {
  //   fontSize: 14,
  //   color: '#666',
  //   marginTop: 2,
  // },
  address: {
    fontSize: 12,
    color: '#999',
    marginTop: 1,
  },
  shareButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  itemsContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  vegIndicator: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  vegDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  nonVegIndicator: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#FF5722',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  nonVegTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF5722',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    lineHeight: 22,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  editText: {
    fontSize: 14,
    color: '#FF5722',
    marginTop: 8,
  },
  quantityContainer: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 4,
    marginBottom: 8,
  },
  quantityButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#FF5722',
    fontWeight: '500',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF5722',
    paddingHorizontal: 12,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  addMoreItems: {
    paddingVertical: 16,
  },
  addMoreText: {
    fontSize: 16,
    color: '#FF5722',
    fontWeight: '500',
  },
  couponsSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 8,
    borderTopColor: '#F8F8F8',
  },
  goldOffer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  goldOfferIcon: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 8,
    fontWeight: 'bold',
  },
  goldOfferText: {
    fontSize: 14,
    color: '#B8860B',
    fontWeight: '500',
  },
  couponOffer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  couponText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    flex: 1,
    marginLeft: 8,
  },
  applyButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 4,
  },
  applyButtonText: {
    fontSize: 12,
    color: '#FF5722',
    fontWeight: '600',
  },
  viewAllCoupons: {
    paddingVertical: 8,
  },
  viewAllText: {
    fontSize: 14,
    color: '#666',
  },
  deliverySection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 8,
    borderTopColor: '#F8F8F8',
  },
  deliveryTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  deliveryTimeText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
    fontWeight: '500',
  },
  scheduleText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  deliveryAddress: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  addressDetails: {
    flex: 1,
    marginLeft: 8,
  },
  deliveryAtText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  fullAddress: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  deliveryInstructions: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  contactSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  contactText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
    flex: 1,
  },
  billSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  billDetails: {
    flex: 1,
    marginLeft: 8,
  },
  totalBillText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  savedText: {
    fontSize: 12,
    color: '#1976D2',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  taxesText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  feedingIndiaSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 8,
    borderTopColor: '#F8F8F8',
    backgroundColor: '#FFF3E0',
  },
  feedingIndiaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  feedingIndiaTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  feedingIndiaSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  donationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  donateText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    flex: 1,
  },
  donateAmount: {
    fontSize: 14,
    color: '#666',
    marginRight: 12,
  },
  addDonationButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 4,
  },
  addDonationText: {
    fontSize: 12,
    color: '#FF5722',
    fontWeight: '600',
  },
  cancellationPolicy: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  policyTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  policyText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
  zomatoMoney: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  zomatoMoneyIcon: {
    marginRight: 12,
  },
  zomatoMoneyEmoji: {
    fontSize: 20,
  },
  zomatoMoneyDetails: {
    flex: 1,
  },
  zomatoMoneyTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  zomatoMoneySubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  paymentMethod: {
    flex: 1,
  },
  payUsingText: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  googlePayText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  placeOrderButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeOrderContent: {
    marginRight: 16,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  totalText: {
    fontSize: 10,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  placeOrderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default CartScreen;