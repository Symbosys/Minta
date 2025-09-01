// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   StatusBar,
//   Dimensions,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from 'lottie-react-native';


// const { width } = Dimensions.get('window');

// const HomeScreen: React.FC = ({navigation}: any) => {
//   const [cartItemCount, setCartItemCount] = useState(1);

//   const categories = [
//     { name: 'Chicken', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Mutton', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Fish &\nSeafood', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Ready to\nCook', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Prawns &\nCrabs', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Eggs', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Spreads &\nCold Cuts', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Heat & Eat', image: require('../../assets/profile/chicken_1.jpg') },
//   ];

//   const bestsellers = [
//     {
//       id: 1,
//       name: 'Chicken Curry Cut - Small Pieces',
//       weight: '500 g',
//       pieces: '12-18 Pieces',
//       serves: 'Serves 4',
//       price: 160,
//       originalPrice: 193,
//       discount: '17% off',
//       image: require('../../assets/profile/chicken_1.jpg'),
//     },
//     {
//       id: 2,
//       name: 'Chicken Breast - Large',
//       weight: '450 g',
//       pieces: '2-4 Pieces',
//       serves: 'Serves 3',
//       price: 252,
//       originalPrice: 311,
//       discount: '19% off',
//       image: require('../../assets/profile/chicken_1.jpg'),
//     },
//   ];

//   const premiumFish = [
//     {
//       name: 'Seer - Steaks',
//       weight: '300 g',
//       pieces: '3-5 Pieces',
//       serves: 'Serves 2-3',
//       image: require('../../assets/profile/chicken_1.jpg'),
//     },
//     {
//       name: 'Sardine Medium - Cleaned',
//       weight: '650 g',
//       pieces: '15-25 Pieces',
//       image: require('../../assets/profile/chicken_1.jpg'),
//     },
//   ];

//   const storeCategories = [
//     { name: 'Daily Fish Delights', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Weekend Specials', image: require('../../assets/profile/chicken_1.jpg') },
//     { name: 'Premium', image: require('../../assets/profile/chicken_1.jpg') },
//   ];

//   const mealsInMinutes = [
//     {
//       name: 'Classic Chicken Burger Patty',
//       pieces: '2 pieces | 2 Pieces',
//       price: 127,
//       originalPrice: 169,
//       discount: '25% off',
//       tag: 'Herby & Juicy',
//       image: require('../../assets/profile/chicken_1.jpg'),
//     },
//     {
//       name: 'Afghani Murgh Seekh',
//       pieces: '4 pieces | 4 Pieces',
//       price: 204,
//       originalPrice: 279,
//       discount: '27% off',
//       tag: 'Rich & Juicy',
//       image: require('../../assets/profile/chicken_1.jpg'),
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />

//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerLeft}>
//           <MaterialIcons name="home" size={24} color="#FF7622" />
//           <Text style={styles.headerTitle}>Home</Text>
//           <MaterialIcons name="keyboard-arrow-down" size={20} color="#333" />
//         </View>
//         <View style={styles.headerRight}>
//           <MaterialCommunityIcons
//             name="lightning-bolt"
//             size={16}
//             color="#ff6b35"
//           />
//           <Text style={styles.deliveryText}>Delivery</Text>
//         </View>
//       </View>

//       {/* Address */}
//       <View style={styles.addressContainer}>
//         <Text style={styles.addressText}>dvdf, dvd, x cddd, Koramanga...</Text>
//         <Text style={styles.deliveryTime}>in 30 mins</Text>
//       </View>

//       <ScrollView
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}>
//         {/* Welcome Banner */}
//         <View style={styles.welcomeBanner}>
//           <View style={styles.welcomeContent}>
//             <Text style={styles.welcomeTitle}>Welcome</Text>
//             <Text style={styles.welcomeSubtitle}>
//               Cheers to 10 years! Enjoy juicy deals on us.
//             </Text>

//             <View style={styles.offerSection}>
//               <Image
//                 source={require('../../assets/profile/chicken_1.jpg')}
//                 style={styles.chickenImage}
//               />
//               <View style={styles.offerDetails}>
//                 <Text style={styles.offerTitle}>Chicken Curry Cut & more</Text>
//                 <Text style={styles.startingText}>Starting at</Text>
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.strikePrice}>₹193</Text>
//                   <Text style={styles.currentPrice}>₹160</Text>
//                 </View>
//                 <TouchableOpacity style={styles.orderButton}>
//                   <Text style={styles.orderButtonText}>ORDER NOW</Text>
//                   <MaterialIcons name="chevron-right" size={16} color="#fff" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           {/* Game Buttons */}
//           <View style={styles.gameButtons}>
//             <TouchableOpacity style={styles.gameButton}>
//               <MaterialCommunityIcons name="egg" size={24} color="#ffd700" />
//               <Text style={styles.gameButtonText}>Golden Egg</Text>
//               <MaterialIcons name="chevron-right" size={16} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.gameButton, styles.playWinButton]}>
//               <Text style={styles.playWinTitle}>PLAY &</Text>
//               <Text style={styles.playWinTitle}>WIN</Text>
//               <Text style={styles.luckyDrawText}>Lucky Draw</Text>
//               <MaterialIcons name="chevron-right" size={16} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.gameButton}>
//               <Image
//                 source={require('../../assets/profile/chicken_1.jpg')}
//                 style={styles.partyPackImage}
//               />
//               <Text style={styles.gameButtonText}>Party Packs</Text>
//               <MaterialIcons name="chevron-right" size={16} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Welcome Rewards */}
//         <View style={styles.welcomeRewards}>
//           <Text style={styles.rewardsTitle}>WELCOME REWARDS</Text>
//           <View style={styles.rewardsContent}>
//             <View>
//               <Text style={styles.rewardsMainText}>
//                 Extra 20% off + Free delivery
//               </Text>
//               <Text style={styles.rewardsSubText}>on your first 5 orders!</Text>
//               <Text style={styles.couponCode}>Code: 20FLAT</Text>
//             </View>
//             {/* <Image
//               source={require('../../assets/lotti/gift.json')}
//               style={styles.giftImage}
//             /> */}
//             <LottieView
//               source={require('../../assets/lotti/gift.json')}
//               autoPlay
//               loop
//               // style={{width: 120, height: 120}}
//               style={styles.giftImage}
//             />
//           </View>
//         </View>

//         {/* Bestsellers */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Bestsellers</Text>
//           <Text style={styles.sectionSubtitle}>
//             Most popular products near you!
//           </Text>

//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             style={styles.horizontalScroll}>
//             {bestsellers.map(item => (
//               <View key={item.id} style={styles.productCard}>
//                 <Image source={item.image} style={styles.productImage} />
//                 <View style={styles.productBadge}>
//                   <MaterialCommunityIcons
//                     name="shield-check"
//                     size={16}
//                     color="#4caf50"
//                   />
//                   <Text style={styles.badgeText}>INDIA'S #1 CHOICE</Text>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={() => setCartItemCount(cartItemCount + 1)}>
//                   <MaterialIcons name="add" size={20} color="#FF7622" />
//                 </TouchableOpacity>

//                 <Text style={styles.productName}>{item.name}</Text>
//                 <Text style={styles.productDetails}>
//                   {item.weight} | {item.pieces} | {item.serves}
//                 </Text>

//                 <View style={styles.priceRow}>
//                   <Text style={styles.productPrice}>₹{item.price}</Text>
//                   <Text style={styles.productOriginalPrice}>
//                     ₹{item.originalPrice}
//                   </Text>
//                   <Text style={styles.productDiscount}>{item.discount}</Text>
//                 </View>

//                 <View style={styles.deliveryInfo}>
//                   <MaterialCommunityIcons
//                     name="lightning-bolt"
//                     size={14}
//                     color="#ff6b35"
//                   />
//                   <Text style={styles.deliveryInfoText}>
//                     Delivery in 30 mins
//                   </Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Shop by category */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Shop by category</Text>
//           <Text style={styles.sectionSubtitle}>
//             Freshest meats and much more!
//           </Text>

//           <View style={styles.categoryGrid}>
//             {categories.map((category, index) => (
//               <TouchableOpacity key={index} style={styles.categoryItem}>
//                 <Image source={category.image} style={styles.categoryImage} />
//                 <Text style={styles.categoryName}>{category.name}</Text>
//                 {category.name === 'Heat & Eat' && (
//                   <View style={styles.minutesBadge}>
//                     <Text style={styles.minutesText}>2 mins</Text>
//                   </View>
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* Coupons */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Coupons, only for you!</Text>
//           <Text style={styles.sectionSubtitle}>
//             Your gateway to meaty savings!
//           </Text>

//           <View style={styles.couponCard}>
//             <View style={styles.couponIcon}>
//               <MaterialCommunityIcons name="percent" size={24} color="#fff" />
//             </View>
//             <View style={styles.couponContent}>
//               <Text style={styles.couponTitle}>20% Off & Free Delivery</Text>
//               <Text style={styles.couponSubtitle}>
//                 20FLAT | for first 5 orders
//               </Text>
//             </View>
//             <MaterialIcons name="arrow-forward" size={20} color="#4caf50" />
//           </View>

//           <View style={styles.infinitiBanner}>
//             <View style={styles.infinitiLeft}>
//               <Text style={styles.infinitiTitle}>Minta Infiniti</Text>
//               <Text style={styles.infinitiSubtitle}>
//                 Meaty benefits, on & on!
//               </Text>
//             </View>
//             <View style={styles.infinitiRight}>
//               <Text style={styles.infinitiOffer}>
//                 Now at a special price for you!
//               </Text>
//               <View style={styles.infinitiDetails}>
//                 <Text style={styles.infinitiCashback}>Up to 5% Cashback</Text>
//                 <Text style={styles.infinitiDelivery}>FREE Delivery</Text>
//               </View>
//               <MaterialIcons name="arrow-forward" size={20} color="#c2185b" />
//             </View>
//           </View>
//         </View>

//         {/* Premium fish & seafood */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>
//             Premium fish & seafood selection
//           </Text>
//           <Text style={styles.sectionSubtitle}>
//             Same-day catch: fresh & flavourful
//           </Text>

//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {premiumFish.map((item, index) => (
//               <View key={index} style={styles.productCard}>
//                 <Image source={item.image} style={styles.productImage} />
//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={() => setCartItemCount(cartItemCount + 1)}>
//                   <MaterialIcons name="add" size={20} color="#FF7622" />
//                 </TouchableOpacity>

//                 <Text style={styles.productName}>{item.name}</Text>
//                 <Text style={styles.productDetails}>
//                   {item.weight} | {item.pieces}{' '}
//                   {item.serves && `| ${item.serves}`}
//                 </Text>
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Shop by store */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Shop by store</Text>
//           <Text style={styles.sectionSubtitle}>
//             Meats for every occasion - curated only for you!
//           </Text>

//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {storeCategories.map((store, index) => (
//               <TouchableOpacity key={index} style={styles.storeCard}>
//                 <Image source={store.image} style={styles.storeImage} />
//                 <Text style={styles.storeName}>{store.name}</Text>
//                 <MaterialIcons name="chevron-right" size={20} color="#666" />
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Meals in Minutes */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Meals in Minutes</Text>
//           <Text style={styles.sectionSubtitle}>
//             Juicy bites, Ready in no time!
//           </Text>

//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {mealsInMinutes.map((meal, index) => (
//               <View key={index} style={styles.productCard}>
//                 <Image source={meal.image} style={styles.productImage} />
//                 <View style={styles.mealTag}>
//                   <Text style={styles.mealTagText}>{meal.tag}</Text>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={() => setCartItemCount(cartItemCount + 1)}>
//                   <MaterialIcons name="add" size={20} color="#FF7622" />
//                 </TouchableOpacity>

//                 <Text style={styles.productName}>{meal.name}</Text>
//                 <Text style={styles.productDetails}>{meal.pieces}</Text>

//                 <View style={styles.priceRow}>
//                   <Text style={styles.productPrice}>₹{meal.price}</Text>
//                   <Text style={styles.productOriginalPrice}>
//                     ₹{meal.originalPrice}
//                   </Text>
//                   <Text style={styles.productDiscount}>{meal.discount}</Text>
//                 </View>

//                 <View style={styles.deliveryInfo}>
//                   <MaterialCommunityIcons
//                     name="lightning-bolt"
//                     size={14}
//                     color="#ff6b35"
//                   />
//                   <Text style={styles.deliveryInfoText}>
//                     Delivery in 30 mins
//                   </Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//         {/* The Minta way */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>The Minta way</Text>
//           <Text style={styles.sectionSubtitle}>
//             Discover what sets us apart
//           </Text>

//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.liciousWayCard}>
//               <MaterialIcons name="verified" size={40} color="#FF7622" />
//               <Text style={styles.liciousWayTitle}>
//                 Free from antibiotic residue & added chemicals
//               </Text>
//             </View>
//             <View style={styles.liciousWayCard}>
//               <Image
//                 source={require('../../assets/profile/chicken_1.jpg')}
//                 style={styles.qualityImage}
//               />
//               <Text style={styles.liciousWayTitle}>
//                 Quality check by safety experts
//               </Text>
//             </View>
//             <View style={styles.liciousWayCard}>
//               <Text style={styles.liciousWayTitle}>
//                 Local sourcing from 3000+ partner farms
//               </Text>
//             </View>
//           </ScrollView>
//         </View>

//         {/* Bottom Spacing */}
//         <View style={styles.bottomSpacing} />
//       </ScrollView>

//       {/* Bottom Cart Bar */}
//       <View style={styles.cartBar}>
//         <Text style={styles.cartNotification}>
//           Shop for ₹39 more to save ₹50|20FLAT
//         </Text>
//       </View>

//       {/* Cart Summary */}
//       <View style={styles.cartSummary}>
//         <View style={styles.cartLeft}>
//           <Text style={styles.cartItemCount}>{cartItemCount} Item</Text>
//           <Text style={styles.cartSeparator}>|</Text>
//           <Text style={styles.cartTotal}>₹160</Text>
//         </View>
//         <TouchableOpacity
//           style={styles.viewCartButton}
//           onPress={() => navigation.navigate('Cart')}>
//           <Text style={styles.viewCartText}>View Cart</Text>
//           <MaterialIcons name="arrow-forward" size={16} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <MaterialIcons name="home" size={24} color="#FF7622" />
//           <Text style={[styles.navText, {color: '#FF7622'}]}>Minta</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <MaterialIcons name="category" size={24} color="#666" />
//           <Text style={styles.navText}>Categories</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.navItem, styles.centerNavItem]}>
//           <View style={styles.centerNavBadge}>
//             <Text style={styles.centerNavText}>Ready-to-cook</Text>
//             <Text style={styles.centerNavSubText}>Snacks & Starters</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <MaterialIcons name="search" size={24} color="#666" />
//           <Text style={styles.navText}>Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <MaterialIcons name="person" size={24} color="#666" />
//           <Text style={styles.navText}>Account</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: '#fff',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 8,
//     marginRight: 4,
//     color: '#333',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   deliveryText: {
//     fontSize: 14,
//     color: '#333',
//     marginLeft: 4,
//   },
//   addressContainer: {
//     paddingHorizontal: 16,
//     paddingBottom: 8,
//   },
//   addressText: {
//     fontSize: 12,
//     color: '#666',
//   },
//   deliveryTime: {
//     fontSize: 12,
//     color: '#ff6b35',
//     textAlign: 'right',
//     marginTop: -16,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   welcomeBanner: {
//     backgroundColor: '#FF7622',
//     margin: 16,
//     borderRadius: 12,
//     padding: 16,
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   welcomeContent: {
//     marginBottom: 16,
//   },
//   welcomeTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   welcomeSubtitle: {
//     fontSize: 14,
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   offerSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   chickenImage: {
//     width: 120,
//     height: 80,
//     borderRadius: 8,
//   },
//   offerDetails: {
//     flex: 1,
//     marginLeft: 16,
//   },
//   offerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   startingText: {
//     fontSize: 12,
//     color: '#fff',
//     marginBottom: 4,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   strikePrice: {
//     fontSize: 14,
//     color: '#fff',
//     textDecorationLine: 'line-through',
//     marginRight: 8,
//   },
//   currentPrice: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   orderButton: {
//     backgroundColor: '#c2185b',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//   },
//   orderButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginRight: 4,
//   },
//   gameButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   gameButton: {
//     backgroundColor: '#c2185b',
//     width: (width - 80) / 3,
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   playWinButton: {
//     backgroundColor: '#ff9800',
//   },
//   gameButtonText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 4,
//   },
//   playWinTitle: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   luckyDrawText: {
//     color: '#fff',
//     fontSize: 10,
//     marginBottom: 4,
//   },
//   partyPackImage: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//   },
//   welcomeRewards: {
//     backgroundColor: '#fce4ec',
//     margin: 16,
//     padding: 16,
//     borderRadius: 12,
//   },
//   rewardsTitle: {
//     fontSize: 12,
//     color: '#ff6b35',
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   rewardsContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   rewardsMainText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   rewardsSubText: {
//     fontSize: 14,
//     color: '#FF7622',
//     marginTop: 2,
//   },
//   couponCode: {
//     fontSize: 12,
//     color: '#ff6b35',
//     marginTop: 4,
//   },
//   giftImage: {
//     width: 80,
//     height: 80,
//   },
//   section: {
//     paddingHorizontal: 16,
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 16,
//   },
//   horizontalScroll: {
//     marginHorizontal: -16,
//     paddingHorizontal: 16,
//   },
//   productCard: {
//     width: 200,
//     marginRight: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     position: 'relative',
//   },
//   productImage: {
//     width: '100%',
//     height: 120,
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   productBadge: {
//     position: 'absolute',
//     top: 8,
//     left: 8,
//     backgroundColor: '#fff',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   badgeText: {
//     fontSize: 8,
//     color: '#4caf50',
//     fontWeight: 'bold',
//     marginLeft: 2,
//   },
//   addButton: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     backgroundColor: '#fff',
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 8,
//     marginHorizontal: 12,
//   },
//   productDetails: {
//     fontSize: 12,
//     color: '#666',
//     margin: 12,
//     marginTop: 4,
//   },
//   priceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 12,
//     marginBottom: 8,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginRight: 8,
//   },
//   productOriginalPrice: {
//     fontSize: 12,
//     color: '#999',
//     textDecorationLine: 'line-through',
//     marginRight: 8,
//   },
//   productDiscount: {
//     fontSize: 12,
//     color: '#4caf50',
//     fontWeight: 'bold',
//   },
//   deliveryInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 12,
//     marginBottom: 12,
//   },
//   deliveryInfoText: {
//     fontSize: 12,
//     color: '#ff6b35',
//     marginLeft: 4,
//   },
//   categoryGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   categoryItem: {
//     width: (width - 48) / 4,
//     alignItems: 'center',
//     marginBottom: 16,
//     position: 'relative',
//   },
//   categoryImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginBottom: 8,
//   },
//   categoryName: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   minutesBadge: {
//     position: 'absolute',
//     top: -2,
//     right: 8,
//     backgroundColor: '#FF7622',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 8,
//   },
//   minutesText: {
//     fontSize: 10,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   couponCard: {
//     backgroundColor: '#e8f5e8',
//     padding: 16,
//     borderRadius: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   couponIcon: {
//     backgroundColor: '#4caf50',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 12,
//   },
//   couponContent: {
//     flex: 1,
//   },
//   couponTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   couponSubtitle: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 2,
//   },
//   infinitiBanner: {
//     backgroundColor: '#7b1fa2',
//     borderRadius: 12,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   infinitiLeft: {
//     flex: 1,
//   },
//   infinitiTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   infinitiSubtitle: {
//     fontSize: 12,
//     color: '#fff',
//     marginTop: 2,
//   },
//   infinitiRight: {
//     alignItems: 'flex-end',
//   },
//   infinitiOffer: {
//     fontSize: 10,
//     color: '#ffcc02',
//     backgroundColor: '#ff9800',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   infinitiDetails: {
//     alignItems: 'flex-end',
//   },
//   infinitiCashback: {
//     fontSize: 12,
//     color: '#fff',
//     marginBottom: 2,
//   },
//   infinitiDelivery: {
//     fontSize: 12,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   storeCard: {
//     width: 150,
//     marginRight: 16,
//     alignItems: 'center',
//   },
//   storeImage: {
//     width: 120,
//     height: 80,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   storeName: {
//     fontSize: 14,
//     color: '#333',
//     textAlign: 'center',
//   },
//   mealTag: {
//     position: 'absolute',
//     top: 8,
//     left: 8,
//     backgroundColor: '#fff',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   mealTagText: {
//     fontSize: 10,
//     color: '#666',
//   },
//   liciousWayCard: {
//     width: 150,
//     marginRight: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   liciousWayTitle: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     marginTop: 8,
//   },
//   qualityImage: {
//     width: 40,
//     height: 40,
//   },
//   bottomSpacing: {
//     height: 100,
//   },
//   cartBar: {
//     backgroundColor: '#ffca28',
//     padding: 8,
//     alignItems: 'center',
//   },
//   cartNotification: {
//     fontSize: 12,
//     color: '#333',
//   },
//   cartSummary: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#333',
//     padding: 12,
//   },
//   cartLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cartItemCount: {
//     fontSize: 14,
//     color: '#fff',
//     marginRight: 8,
//   },
//   cartSeparator: {
//     fontSize: 14,
//     color: '#fff',
//     marginRight: 8,
//   },
//   cartTotal: {
//     fontSize: 14,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   viewCartButton: {
//     backgroundColor: '#FF7622',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewCartText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 14,
//     marginRight: 4,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingVertical: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navText: {
//     fontSize: 10,
//     color: '#666',
//     marginTop: 4,
//   },
//   centerNavItem: {
//     backgroundColor: '#ffca28',
//     borderRadius: 20,
//     padding: 8,
//   },
//   centerNavBadge: {
//     alignItems: 'center',
//   },
//   centerNavText: {
//     fontSize: 12,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   centerNavSubText: {
//     fontSize: 10,
//     color: '#666',
//   },
// });

// export default HomeScreen;






import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-paper';
import {RootStackParamList} from '../../types/types';

const Home = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const data = Array(6).fill({});

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Top Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => navigation.navigate('Drawer')}>
            <Icon source="menu" size={32} color="#FC6E2A" />
          </TouchableOpacity>
          <View style={styles.pl}>
            <Text style={styles.text1}>Deliver to</Text>
            <Text style={styles.text2}>Ranchi Jharkhand</Text>
          </View>
          <TouchableOpacity
            style={[styles.circle, styles.mla]}
            onPress={() => navigation.navigate('Profile')}>
            <Icon source="account-circle" size={32} color="#FC6E2A" />
          </TouchableOpacity>
        </View>

        {/* Greeting and Search */}
        <Text style={[styles.text3, styles.mt]}>
          Hey Sudhanshu,
          <Text style={styles.b}> Good Afternoon!</Text>
        </Text>
        <TextInput
          style={[styles.input, styles.mt]}
          placeholderTextColor="#B0BEC5"
          placeholder="Search dishes, restaurants"
        />

        {/* Recent Keywords */}
        <View>
          <View style={[styles.row, styles.mt]}>
            <Text style={styles.heading}>Recent Keywords</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((_, index) => (
              <View key={index}>
                <Text style={styles.recent}>Burger</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* All Categories */}
        <View>
          <View style={[styles.row, styles.mt]}>
            <Text style={styles.heading}>All Categories</Text>
            <Text style={[styles.mla, styles.text3]}>See All </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((_, index) => (
              <View style={styles.mt} key={index}>
                <Image
                  source={{
                    uri: 'https://assets.licious.in/OMS-Category/70a0a0aa-289f-5030-d250-3a4b5cb509c4/original/1730082691203.png',
                  }}
                  style={{width: 110, height: 110}}
                />
                <View style={styles.m1}>
                  <Text style={styles.b}>Pizza</Text>
                  <View style={styles.row}>
                    <Text>Starting</Text>
                    <Text style={styles.mla}>₹40</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Suggested Restaurants */}
        <View>
          <View style={[styles.row, styles.mt]}>
            <Text style={styles.heading}>Suggested Restaurants</Text>
          </View>

          {/* Most Popular */}
          <Text style={[styles.text1, styles.mt]}>Most Popular</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((_, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
                key={index}>
                <View style={[styles.mt, styles.m1]}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2Fa106babe-00f2-7227-e669-52c25a90b775%2Foriginal%2F1703871661996.jpg&w=384&q=75',
                    }}
                  />
                  <View style={styles.m1}>
                    <Text style={styles.b}>Crispy Chicken Wings</Text>
                    <Text style={[styles.text4, styles.mt1]}>
                      Juicy & meaty snack for your kiddos' evening cravings
                    </Text>
                    <View style={[styles.row, styles.mt1]}>
                      <Text>7 pieces | ⭐ 4.7</Text>
                      <Text style={styles.mla}>₹99</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Best Deals */}
          <Text style={[styles.text1, styles.mt]}>Best Deals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((_, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
                key={index}>
                <View style={[styles.mt, styles.m1]}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2Fa106babe-00f2-7227-e669-52c25a90b775%2Foriginal%2F1703871661996.jpg&w=384&q=75',
                    }}
                  />
                  <View style={styles.m1}>
                    <Text style={styles.b}>Crispy Chicken Wings</Text>
                    <Text style={[styles.text4, styles.mt1]}>
                      Juicy & meaty snack for your kiddos' evening cravings
                    </Text>
                    <View style={[styles.row, styles.mt1]}>
                      <Text>7 pieces | ⭐ 4.7</Text>
                      <Text style={styles.mla}>₹99</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  recent: {
    borderRadius: 18,
    padding: 8,
    paddingHorizontal: 15,
    backgroundColor: '#F0F5FA',
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 40,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    padding: 8,
    backgroundColor: '#ECF0F4',
  },
  heading: {
    fontWeight: 900,
    fontSize: 18,
    color: '#32343E',
  },
  text1: {
    color: '#FC6E2A',
    fontWeight: 900,
    fontSize: 15,
  },
  text2: {
    color: '#676767',
  },
  text3: {
    color: '#1E1D1D',
  },
  text4: {
    color: '#676767',
    fontSize: 11,
  },
  p1: {
    padding: 15,
  },
  m1: {
    margin: 15,
  },
  pl: {
    paddingLeft: 20,
  },
  mt: {
    marginTop: 20,
  },
  mt1: {
    marginTop: 12,
  },
  mla: {
    marginLeft: 'auto',
  },
  b: {
    fontWeight: 900,
  },
  input: {
    height: 40,
    marginTop: 10,
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#F0F5FA',
    color: '#000000',
  },
  image: {
    height: 150,
    width: 350,
    borderRadius: 10,
  },
});
