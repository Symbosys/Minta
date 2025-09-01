import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      {/* Profile Card */}
      <View style={styles.ProfileCard}>
        <View style={styles.Profile}>
          <Image height={100} width={100} source={{ uri: "https://pbs.twimg.com/profile_images/1799357535503458304/dgj2rfT6_200x200.jpg" }} />
        </View>
        <View style={styles.ProfileDetails}>
          <Text style={{ fontWeight: "bold" }}>Sushil</Text>
          <Text style={{ color: "grey" }}>@sushil</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ProfileCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Profile: {
    borderRadius: 100,
    height: 100,
  },
  Profile, Image: {
    borderRadius: 100,
  }
})

export default Profile

