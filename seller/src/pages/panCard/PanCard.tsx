import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text, TextInput } from 'react-native-paper'
import { useAuth } from '../../app/AuthContext'

export default function PanCard({ navigation }) {
    const { login } = useAuth();

    return (
        <ScrollView>
             <View style={[IndexStyle.container, IndexStyle.p5]}>
                <Image style={[IndexStyle.mb, IndexStyle.mt]} height={200} width={300} source={{ uri: "https://img.freepik.com/free-vector/id-document-personal_24877-81921.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid" }} />
            
                  
                  </View>
            <View style={[IndexStyle.p4]}>


                <View style={[IndexStyle.pt, IndexStyle.pb]}>
                    {/* <Text variant="displaySmall" style={[IndexStyle.pb, IndexStyle.pt]}>Enter OTP to verify</Text>
                    <Text variant="titleMedium" style={[IndexStyle.pt, IndexStyle.pb]}>
                        A 6 digit OTP has been sent to your phone number +91 9999988888
                    </Text> */}

                    <Text variant="bodyMedium" style={[IndexStyle.pt]}>Enter 10 Digit  PAN Number</Text>

                    <TextInput
                        style={[IndexStyle.m1, { fontSize: 25, paddingHorizontal: 0 }, IndexStyle.textCenter]}
                        mode="outlined"
                        // value={text}
                        // contentStyle={{ paddingVertical: 1, paddingHorizontal: 1 }}
                        onChangeText={(text) => { }}
                        maxLength={10}
                        placeholder='XXXXXX589X' />
                    {/* <View style={[IndexStyle.container, IndexStyle.row, IndexStyle.pt, IndexStyle.p1]}>


                        <TextInput
                            style={[IndexStyle.m1, { fontSize: 25, paddingHorizontal: 0 }, IndexStyle.textCenter]}
                            mode="outlined"
                            // value={text}
                            // contentStyle={{ paddingVertical: 1, paddingHorizontal: 1 }}
                            onChangeText={(text) => { }}
                            maxLength={2}
                            placeholder='XX' />
                        <TextInput
                            style={[IndexStyle.m1, { fontSize: 25, paddingHorizontal: 0 }, IndexStyle.textCenter]}
                            mode="outlined"
                            // value={text}
                            // contentStyle={{ paddingVertical: 1, paddingHorizontal: 1 }}
                            onChangeText={(text) => { }}
                            maxLength={2}
                            placeholder='XX' />
                        <TextInput
                            style={[IndexStyle.m1, { fontSize: 25, paddingHorizontal: 0 }, IndexStyle.textCenter]}
                            mode="outlined"
                            // value={text}
                            // contentStyle={{ paddingVertical: 1, paddingHorizontal: 1 }}
                            onChangeText={(text) => { }}
                            maxLength={2}
                            placeholder='XX'
                        />
                        <TextInput
                            style={[IndexStyle.m1, { fontSize: 25, paddingHorizontal: 0 }, IndexStyle.textCenter]}
                            mode="outlined"
                            // value={text}
                            // contentStyle={{ paddingVertical: 1, paddingHorizontal: 1 }}
                            onChangeText={(text) => { }}
                            maxLength={2}
                            placeholder='XX'
                        />

                    </View> */}
                </View>

                <View style={[IndexStyle.pt, IndexStyle.row, IndexStyle.pr, IndexStyle.pb]}>


                </View>
                <Button style={[IndexStyle.mt]} icon="card-account-details" mode="contained" onPress={() => { login(); navigation.replace('Fassai'); }}>
                    Verify PAN
                </Button>
            </View>
        </ScrollView>
    )
}


