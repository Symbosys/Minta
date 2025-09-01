import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text, TextInput } from 'react-native-paper'
import { useAuth } from '../../app/AuthContext'

export default function Fassai({ navigation }: any) {
    const { login } = useAuth();

    return (
        <ScrollView>
            <View style={[IndexStyle.container, IndexStyle.p5]}>
                <Image style={[IndexStyle.mb, IndexStyle.mt, {objectFit: "contain"}]} height={200} width={250} source={require("../../asserts/image/fassai.png") } />


            </View>
            <View style={[IndexStyle.p4]}>


                <View style={[IndexStyle.pt, IndexStyle.pb]}>
                    {/* <Text variant="displaySmall" style={[IndexStyle.pb, IndexStyle.pt]}>Enter OTP to verify</Text>
                    <Text variant="titleMedium" style={[IndexStyle.pt, IndexStyle.pb]}>
                        A 6 digit OTP has been sent to your phone number +91 9999988888
                    </Text> */}

                    <Text variant="bodyMedium" style={[IndexStyle.pt]}>Enter 14 Digit Fassai Number</Text>
                    <TextInput
                        style={[IndexStyle.m1, { fontSize: 25, paddingHorizontal: 0 }, IndexStyle.textCenter]}
                        mode="outlined"
                        keyboardType='numeric'
                        // value={text}
                        // contentStyle={{ paddingVertical: 1, paddingHorizontal: 1 }}
                        onChangeText={(text) => { }}
                        maxLength={12}
                        placeholder='6042-XXXX-XXXX' />
                    <View style={[IndexStyle.container, IndexStyle.row, IndexStyle.pt, IndexStyle.p1]}>




                    </View>
                </View>

                <View style={[IndexStyle.pt, IndexStyle.row, IndexStyle.pr, IndexStyle.pb]}>


                </View>
                <Button style={[IndexStyle.mt]} icon="card-account-details" mode="contained" onPress={() => { login(); navigation.replace('Personal'); }}>
                    Verify Fassai
                </Button>
            </View>
        </ScrollView>
    )
}


