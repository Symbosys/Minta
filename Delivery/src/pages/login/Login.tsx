import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text, TextInput } from 'react-native-paper'
import { Checkbox } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';


export default function Login({ navigation }: { navigation: NavigationProp<any, any> }) {

        return (
            <ScrollView >
                <View style={[IndexStyle.container, IndexStyle.m3]}>
                    <Image height={290} width={290} source={{ uri: "https://img.freepik.com/premium-vector/scooters-with-food-box-deliver-customers-back-all-floated-smartphone_425581-175.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid" }} />
                </View>

                <View style={[IndexStyle.p4]}>
                    <Text variant="titleMedium" > Be a Minta Partner </Text>
                    <Text variant="headlineLarge" style={[IndexStyle.pt]}>Get a stable monthly income </Text>
                    <View />

                    <View style={[IndexStyle.pt,IndexStyle.pb]}>
                        <Text variant="labelLarge" style={[IndexStyle.pt]}>Enter Mobile Number </Text>

                        <TextInput
                            style={[IndexStyle.mt]}
                            mode="outlined"
                            label="Eg. 9876543210"
                            keyboardType='numeric'
                            // value={text}
                            onChangeText={(text) => { }}
                        />
                    </View>

                    <View style={[IndexStyle.pt, IndexStyle.row,IndexStyle.pr, IndexStyle.pb]}>
                        <Checkbox status="checked" />
                        <Text variant="labelMedium" style={[IndexStyle.p]}>
                            By signing up I agree to the Terms of use and Privacy Policy.
                        </Text>

                    </View>
                    <Button style={[IndexStyle.mt]} icon="message" mode="contained" onPress={() => navigation.navigate('Otp')}>
                        Send OTP
                    </Button>
                </View>

            </ScrollView>
        )
    }


