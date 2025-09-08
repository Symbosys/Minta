// LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [phone, setPhone] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Top background */}
      <ImageBackground
        source={require("../assets/zomato.webp")}
        style={styles.topContainer}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <Text style={styles.logo}>zomato</Text>
      </ImageBackground>

      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          India’s #1 Food Delivery {"\n"} and Dining App
        </Text>

        {/* Phone Input */}
        <View style={styles.inputRow}>
          <View style={styles.countryCode}>
            <Text style={styles.flag}>🇮🇳</Text>
            <Text style={styles.code}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter Phone Number"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => navigation.navigate("Otp")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Footer (always at bottom) */}
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>
          By continuing, you agree to our{" "}
          <Text style={styles.link}>Terms of Service</Text> ·{" "}
          <Text style={styles.link}>Privacy Policy</Text> ·{" "}
          <Text style={styles.link}>Content Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  logo: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "600",
    color: "#333",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginBottom: 15,
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  flag: {
    fontSize: 20,
  },
  code: {
    fontSize: 16,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  continueBtn: {
    backgroundColor: "#e23744",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footerContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    lineHeight: 18,
  },
  link: {
    color: "#e23744",
    textDecorationLine: "underline",
  },
});
