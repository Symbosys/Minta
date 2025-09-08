import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FoodList from "../components/FoodCard";

const categories = [
  { name: "All", img: "https://tse2.mm.bing.net/th/id/OIP.5Qi3KqFZDFjOW1j51N_x0wHaEd?pid=Api&P=0&h=180" },
  { name: "Pizza", img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" },
  { name: "Burger", img: "https://www.pngarts.com/files/10/Food-Items-PNG-Picture.png" },
  { name: "Cake", img: "https://tse3.mm.bing.net/th/id/OIP.XByfnqqut6VUSSvwbKeWGwHaE7?pid=Api&P=0&h=180" },
  { name: "Biryani", img: "https://tse4.mm.bing.net/th/id/OIP.r6T2zRnyrrP8LdtOEaGVowHaGl?pid=Api&P=0&h=180" },
  { name: "Rolls", img: "https://tse4.mm.bing.net/th/id/OIP.k14ICh_56BnTrelydq8OdQHaFC?pid=Api&P=0&h=180" },
  { name: "Ice Cream", img: "https://tse1.mm.bing.net/th/id/OIP.U9AUUQuxPQluta0ct_0KKgHaFj?pid=Api&P=0h=180" },
];

const filters = [
  "Under ₹200",
  "Under 30 mins",
  "Great Offers",
  "Rating 4.0+",
  "Pure Veg",
  "Previously Ordered",
];

const restaurants = [
  {
    id: 1,
    name: "The Wok",
    img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
    discount: "FLAT 50% OFF",
    rating: "3.9",
    time: "15-20 mins",
  },
  {
    id: 2,
    name: "Oona The One",
    img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    discount: "FLAT ₹75 OFF",
    rating: "4.3",
    time: "20-25 mins",
  },
  {
    id: 3,
    name: "Hyderabadi",
    img: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
    discount: "FLAT 50% OFF",
    rating: "3.9",
    time: "30-35 mins",
  },
  {
    id: 4,
    name: "Pizza Mania",
    img: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
    discount: "FLAT 50% OFF",
    rating: "4.2",
    time: "20-25 mins",
  },
  {
    id: 5,
    name: "Veggie Delight",
    img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    discount: "FLAT ₹125 OFF",
    rating: "4.5",
    time: "25-30 mins",
  },
];

const HomeScreen: React.FC = () => {
  const [vegMode, setVegMode] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* 🔹 Header Container */}
        <View style={styles.headerContainer}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View>
              <Text style={styles.location}>
                Harmu Housing Co...{" "}
                <Ionicons name="chevron-down" size={16} color="#000" />
              </Text>
              <Text style={styles.subLocation}>Delatoli, Ranchi</Text>
            </View>
            <View style={styles.rightIcons}>
              <TouchableOpacity style={styles.moneyBtn}>
                <MaterialCommunityIcons
                  name="wallet-outline"
                  size={20}
                  color="#000"
                />
              </TouchableOpacity>
              <Ionicons name="person-circle-outline" size={40} color="#666" />
            </View>
          </View>

          {/* Search Bar + Veg Mode */}
          <View style={styles.searchAndToggleRow}>
            <View style={styles.searchRow}>
              <Ionicons name="search" size={20} color="#FF3B5C" />
              <TextInput
                placeholder="Restaurant name or dish"
                style={styles.searchInput}
                placeholderTextColor="#666"
              />
              <Ionicons name="mic-outline" size={20} color="#FF3B5C" />
            </View>
            <View style={styles.vegToggleContainer}>
              <Text style={styles.vegLabel}>Veg Mode</Text>
              <Switch
                value={vegMode}
                onValueChange={setVegMode}
                trackColor={{ false: "#ddd", true: "#4CAF50" }}
                thumbColor="#fff"
              />
            </View>
          </View>

          {/* Golden Banner */}
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>GOLD RUSH OFFER</Text>
            <Text style={styles.bannerSub}>ENJOY FREE DELIVERY</Text>
            <Text style={styles.bannerPrice}>
              above <Text style={styles.strike}>₹199</Text> ₹99
            </Text>
            <TouchableOpacity style={styles.goldBtn}>
              <Text style={styles.goldBtnText}>Join GOLD at ₹1</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🔹 Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map((c) => (
            <View key={c.name} style={styles.category}>
              <Image source={{ uri: c.img }} style={styles.catImg} />
              <Text>{c.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* 🔹 Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filters}
        >
          {filters.map((f, i) => (
            <TouchableOpacity key={i} style={styles.filterBtn}>
              <Text>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 🔹 Recommended Section */}
        <Text style={styles.sectionTitle}>RECOMMENDED FOR YOU</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {restaurants.map((r) => (
            <View key={r.id} style={styles.card}>
              <Image source={{ uri: r.img }} style={styles.cardImg} />
              <View style={styles.discountTag}>
                <Text style={styles.discountText}>{r.discount}</Text>
              </View>
              <Text style={styles.cardName}>{r.name}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.cardMeta}>⭐ {r.rating}</Text>
                <Text style={styles.cardMeta}>⏱ {r.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <FoodList />

        {/* 🔹 Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="bike-fast" size={22} color="#e23744" />
            <Text style={styles.navTextActive}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={22}
              color="#666"
            />
            <Text style={styles.navText}>Dining</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="map-outline" size={22} color="#666" />
            <Text style={styles.navText}>District</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 0 },
  headerContainer: {
    backgroundColor: "#fde9b0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  location: { fontSize: 16, fontWeight: "bold" },
  subLocation: { fontSize: 12, color: "#555" },
  rightIcons: { flexDirection: "row", alignItems: "center" },
  moneyBtn: {
    backgroundColor: "#f3f3f3",
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  searchAndToggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    paddingHorizontal: 12,
    flex: 1,
    marginRight: 10,
    backgroundColor: "#fff",
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#000",
  },
  vegToggleContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  vegLabel: { 
    fontSize: 9, 
    fontWeight: "bold",
    fontFamily: "fantasy",
    marginBottom: 3, 
    color: "#000" 
  },
  banner: {
    backgroundColor: "#fde9b0",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  bannerTitle: { fontSize: 14, fontWeight: "bold", color: "#b8860b" },
  bannerSub: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 4 },
  bannerPrice: { fontSize: 16, marginVertical: 6, color: "#000" },
  strike: { textDecorationLine: "line-through", color: "#888" },
  goldBtn: {
    backgroundColor: "#000",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 8,
  },
  goldBtnText: { color: "#fff", fontWeight: "bold" },
  categories: { marginBottom: 15 },
  category: { alignItems: "center", marginRight: 20 },
  catImg: { width: 60, height: 60, borderRadius: 30, marginBottom: 5 },
  filters: { flexDirection: "row", marginBottom: 15 },
  filterBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
  sectionTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 10 },
  card: {
    width: 130,
    height: 140,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
    marginBottom: 2,
  },
  cardImg: { width: "100%", height: 90 },
  discountTag: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "black",
    padding: 3,
    borderRadius: 5,
  },
  discountText: { color: "#fff", fontSize: 9 },
  cardName: { fontSize: 12, fontWeight: "bold", margin: 5 },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  cardMeta: { fontSize: 9, color: "#666" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: "auto",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, color: "#666" },
  navTextActive: { fontSize: 12, color: "#e23744", fontWeight: "bold" },
});