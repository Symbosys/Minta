import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App"; // 👈 import type

const { width } = Dimensions.get("window");

type OtpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Otp"
>;

export default function OtpScreen({
  navigation,
}: {
  navigation: OtpScreenNavigationProp;
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputs = useRef<(TextInput | null)[]>([]);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle OTP input
  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Handle back
  const handleBack = () => {
    navigation.goBack();
  };

  // ✅ Verify button function
  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      navigation.navigate("Home"); // 👈 now correctly goes to Home
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        We have sent a verification code to {"\n"}
        <Text style={styles.phone}>+91-9334804356</Text>
      </Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend Option */}
      <Text style={styles.resendText}>
        Didn’t get the OTP?{" "}
        <Text style={styles.resendLink}>
          {timer > 0 ? `Resend SMS in ${timer}s` : "Resend Now"}
        </Text>
      </Text>

      {/* Go back to login */}
      <TouchableOpacity style={styles.backLogin}>
        <Text style={styles.backLoginText}>Go back to login methods</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  title: {
    marginTop: 80,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 15,
    fontSize: 14,
    textAlign: "center",
    color: "#444",
  },
  phone: {
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    width: width * 0.12,
    height: 55,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  verifyButton: {
    marginTop: 30,
    backgroundColor: "#e53935",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  verifyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  resendText: {
    marginTop: 25,
    fontSize: 14,
    color: "#333",
  },
  resendLink: {
    color: "#e53935",
    fontWeight: "500",
  },
  backLogin: {
    marginTop: 40,
  },
  backLoginText: {
    color: "#e53935",
    fontSize: 14,
    fontWeight: "500",
  },
});
