import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TheMintaWay: React.FC = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>The Minta way</Text>
      <Text style={styles.sectionSubtitle}>Discover what sets us apart</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.liciousWayCard}>
          <MaterialIcons name="verified" size={40} color="#FF7622" />
          <Text style={styles.liciousWayTitle}>
            Free from antibiotic residue & added chemicals
          </Text>
        </View>
        <View style={styles.liciousWayCard}>
          <Image
            source={require('../../assets/profile/chicken_1.jpg')}
            style={styles.qualityImage}
          />
          <Text style={styles.liciousWayTitle}>
            Quality check by safety experts
          </Text>
        </View>
        <View style={styles.liciousWayCard}>
          <Text style={styles.liciousWayTitle}>
            Local sourcing from 3000+ partner farms
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  liciousWayCard: {
    width: 150,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liciousWayTitle: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
  qualityImage: {
    width: 40,
    height: 40,
  },
});

export default TheMintaWay;
