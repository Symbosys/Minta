import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text } from 'react-native-paper';
import dot from './../onboarding/OnboardingStyle';
import requestDeliveryPermissions from './AccessPermission';

export default function Permission({ navigation }) {

        return (
            <ScrollView >
                <View style={[IndexStyle.container, IndexStyle.p5]}>
                    <Image style={[IndexStyle.mb, IndexStyle.mt]} height={350} width={350} source={{ uri: "https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid" }} />

                    <Text variant="headlineMedium" style={[IndexStyle.pt, IndexStyle.mt]}> Allow Permissions</Text>

                    <Text variant="labelMedium" style={[IndexStyle.pt, IndexStyle.textCenter]}>This app requires permission to access your location and camera for a better experience.</Text>
                </View>

                {/* <View style={[dot.container]}>
                    <Text style={[dot.active]}>.</Text>
                    <Text style={[dot.inactive]}>.</Text>
                    <Text style={[dot.inactive]}>.</Text>
                    <Text style={[dot.inactive]}>.</Text>
                </View> */}
                <View style={[IndexStyle.p5]}>
                    {/* <Button icon="shield-lock" mode="contained" onPress={() => { requestDeliveryPermissions() }}>
                        Allow Permission
                    </Button> */}
                    <Button icon="shield-lock" mode="contained" onPress={() => { requestDeliveryPermissions(), navigation.navigate('Login') }}>
                        Allow Permission
                    </Button>
                    
                </View>  

            </ScrollView>
        )
    }


