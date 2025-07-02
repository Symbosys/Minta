import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;

const DashboardScreen = () => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 118, 34, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#FF7622',
    },
  };

  const data = {
    labels: ['10AM', '11AM', '12PM', '01PM', '02PM', '03PM', '04PM'],
    datasets: [
      {
        data: [200, 300, 250, 400, 350, 500, 450],
        color: (opacity = 1) => `rgba(255, 118, 34, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: [],
  };

  return (
    <ScrollView>
        <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>LOCATION</Text>
          <View style={styles.locationSelector}>
            <Text style={styles.locationText}>Halal Lab office</Text>
            <Icon name="chevron-down" size={20} color="#000" />
          </View>
        </View>
        <View style={styles.profileIcon}>
          <View style={styles.profileCircle} />
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>20</Text>
          <Text style={styles.statLabel}>Running Orders</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>05</Text>
          <Text style={styles.statLabel}>Order Request</Text>
        </View>
      </View>

      {/* Revenue Section */}
      <View style={styles.revenueContainer}>
        <View style={styles.revenueHeader}>
          <Text style={styles.revenueTitle}>Total Revenue</Text>
          <Text style={styles.revenueFilter}>Daily</Text>
        </View>
        <Text style={styles.revenueAmount}>$2,241</Text>
        <View>
          <LineChart
            data={data}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
        <Text style={styles.seeDetails}>See Details</Text>
      </View>

      {/* Reviews Section */}
      <View style={styles.reviewsContainer}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Text style={styles.seeAll}>See All Reviews</Text>
        <View style={styles.ratingContainer}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/FF7622/star--v1.png' }} // replace with your local asset if needed
            style={styles.starIcon}
          />
          <Text style={styles.rating}>4.9</Text>
          <Text style={styles.reviewCount}>Total 20 Reviews</Text>
        </View>
      </View>

      {/* Popular Items Section */}
      <View style={styles.popularItemsContainer}>
        <Text style={styles.sectionTitle}>Populer Items This Weeks</Text>
        <Text style={styles.seeAll}>See All</Text>
        <View style={styles.itemsRow}>
          <View style={styles.itemPlaceholder}></View>
          <View style={styles.itemPlaceholder}></View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    padding: 8,
  },
  locationContainer: {
    flex: 1,
    marginLeft: 10,
  },
  locationLabel: {
    fontSize: 12,
    color: '#FF7622',
    fontWeight: 'bold',
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 10,
    fontWeight: '500',
  },
  profileIcon: {
    marginLeft: 'auto',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#a9b4c0',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: '48%',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#A9A9A9',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  revenueContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  revenueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  revenueTitle: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  revenueFilter: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  revenueAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartMarker: {
    position: 'absolute',
    top: 145,
    left: 80,
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  markerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  seeDetails: {
    color: '#FF7622',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '500',
    marginTop: 8,
  },
  reviewsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#A9A9A9',
    fontWeight: '500',
  },
  seeAll: {
    color: '#FF7622',
    fontSize: 14,
    fontWeight: '500',
    position: 'absolute',
    right: 15,
    top: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  reviewCount: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  popularItemsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  itemsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemPlaceholder: {
    backgroundColor: '#D3D3D3',
    width: '48%',
    height: 100,
    borderRadius: 10,
  },
});

export default DashboardScreen;
