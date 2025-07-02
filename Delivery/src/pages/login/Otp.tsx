import React, { useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import IndexStyle from '../../Index.Style';
import { useAuth } from '../../app/AuthContext';
import { NavigationProp } from "@react-navigation/native"

export default function Otp({ navigation }: { navigation: NavigationProp<any, any> }) {
    const { login } = useAuth();
    const [otp, setOtp] = useState(["", "", "", "", ""]); // 5-digit OTP
    const inputRefs = useRef([]);

    const handleChange = (text, index) => {
        if (text.length > 1) {
            return; // Prevent pasting multiple characters
        }

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to next input if available
        if (text && index < 4) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <ScrollView>
            <View style={[IndexStyle.p4]}>
                <View style={[IndexStyle.pt, IndexStyle.pb]}>
                    <Text variant="displaySmall" style={[IndexStyle.pb, IndexStyle.pt]}>
                        Enter OTP to verify
                    </Text>
                    <Text variant="titleMedium" style={[IndexStyle.pt, IndexStyle.pb]}>
                        A 5-digit OTP has been sent to your phone number +91 9999988888
                    </Text>
                    <Text variant="bodyMedium" style={[IndexStyle.pt]}>Enter OTP</Text>

                    <View style={[IndexStyle.row, IndexStyle.pt, IndexStyle.p1, IndexStyle.container]}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (inputRefs.current[index] = ref)}
                                style={[IndexStyle.m1, { fontSize: 30, paddingHorizontal: 0, textAlign: "center" }]}
                                mode="outlined"
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                autoFocus={index === 0}
                            />
                        ))}
                    </View>
                </View>

                <Button
                    style={[IndexStyle.mt]}
                    icon="check-decagram"
                    mode="contained"
                    onPress={() => { login(); navigation.navigate('Vehicle'); }}
                >
                    Verify OTP
                </Button>
            </View>
        </ScrollView>
    );
}
