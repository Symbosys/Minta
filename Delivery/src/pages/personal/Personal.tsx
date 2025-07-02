import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text, TextInput } from 'react-native-paper'
import { useAuth } from '../../app/AuthContext'

export default function Personal({ navigation }) {
    const { login } = useAuth();

    return (
        <ScrollView>
            <View style={[IndexStyle.container, IndexStyle.p5]}>
                <Image style={[IndexStyle.mb, IndexStyle.mt]} height={200} width={300} source={{ uri: "https://img.freepik.com/premium-vector/check-personality-concept_118813-14950.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybri" }} />


            </View>
            <View style={[IndexStyle.p4]}>


                <View style={[IndexStyle.pt, IndexStyle.pb]}>
                    {/* <Text variant="displaySmall" style={[IndexStyle.pb, IndexStyle.pt]}>Enter OTP to verify</Text>
                    <Text variant="titleMedium" style={[IndexStyle.pt, IndexStyle.pb]}>
                        A 6 digit OTP has been sent to your phone number +91 9999988888
                    </Text> */}

                    <Text variant="bodyMedium" style={[IndexStyle.pt]}>Basic Details</Text>

                    <TextInput
                        style={[IndexStyle.m1]}
                        mode="outlined"
                        placeholder="First Name"
                        left={<TextInput.Icon icon="account-outline" />}
                        onChangeText={(text) => { }}
                    />
                    <TextInput
                        style={[IndexStyle.m1]}
                        mode="outlined"
                        placeholder="Last Name"
                        left={<TextInput.Icon icon="account-outline" />}
                        onChangeText={(text) => { }}
                    />

                    <TextInput
                        style={[IndexStyle.m1]}
                        mode="outlined"
                        placeholder='Email ID'
                        left={<TextInput.Icon icon="email-outline" />}
                        // value={text}
                        // contentStyle={{ paddingVertical: 1, paddingHorizontal: 1 }}
                        onChangeText={(text) => { }}

                    />

                </View>

                <View style={[IndexStyle.pt, IndexStyle.row, IndexStyle.pr, IndexStyle.pb]}>


                </View>
                <Button style={[IndexStyle.mt]} icon="cash" mode="contained" onPress={() => { login(); navigation.push('Aadhaar'); }}>
                    Start Earning
                </Button>
            </View>
        </ScrollView>
    )
}


