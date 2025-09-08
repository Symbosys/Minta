import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Address from '../../components/home/Address';
import Bestsellers from '../../components/home/Bestsellers';
import BottomNav from '../../components/home/BottomNav';
import CartSummary from '../../components/home/CartSummary';
import Header from '../../components/home/Header';
import MealsInMinutes from '../../components/home/MealsInMinutes';
import PremiumFish from '../../components/home/PremiumFish';
import ShopByCategory from '../../components/home/ShopByCategory';
import TheMintaWay from '../../components/home/TheMintaWay';
import WelcomeBanner from '../../components/home/WelcomeBanner';
import WelcomeRewards from '../../components/home/WelcomeRewards';

const {width} = Dimensions.get('window');

const Home: React.FC = ({navigation}: any) => {
  const [cartItemCount, setCartItemCount] = useState(1);

  const premiumFish = [
    {
      name: 'Seer - Steaks',
      weight: '300 g',
      pieces: '3-5 Pieces',
      serves: 'Serves 2-3',
      image: require('../../assets/profile/chicken_1.jpg'),
    },
    {
      name: 'Sardine Medium - Cleaned',
      weight: '650 g',
      pieces: '15-25 Pieces',
      image: require('../../assets/profile/chicken_1.jpg'),
    },
  ];

  const storeCategories = [
    {
      name: 'Daily Fish Delights',
      image: require('../../assets/profile/chicken_1.jpg'),
    },
    {
      name: 'Weekend Specials',
      image: require('../../assets/profile/chicken_1.jpg'),
    },
    {name: 'Premium', image: require('../../assets/profile/chicken_1.jpg')},
  ];

  const mealsInMinutes = [
    {
      name: 'Classic Chicken Burger Patty',
      pieces: '2 pieces | 2 Pieces',
      price: 127,
      originalPrice: 169,
      discount: '25% off',
      tag: 'Herby & Juicy',
      image: require('../../assets/profile/chicken_1.jpg'),
    },
    {
      name: 'Afghani Murgh Seekh',
      pieces: '4 pieces | 4 Pieces',
      price: 204,
      originalPrice: 279,
      discount: '27% off',
      tag: 'Rich & Juicy',
      image: require('../../assets/profile/chicken_1.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />
      <Address />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <WelcomeBanner />
        <WelcomeRewards />
        
        {/* BestSeller Products Section  */}
        <Bestsellers />

        {/* Shop By Category Section  */}
        <ShopByCategory/>
        {/* <Coupons /> */}
        <PremiumFish
          premiumFish={premiumFish}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />
        {/* <ShopByStore storeCategories={storeCategories} /> */}
        <MealsInMinutes
          mealsInMinutes={mealsInMinutes}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />
        <TheMintaWay />
        <View style={styles.bottomSpacing} />
      </ScrollView>
      <CartSummary navigation={navigation} />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  bottomSpacing: {
    height: 40,
  },
});

export default Home;
