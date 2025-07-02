import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text } from 'react-native-paper';
import dot from './OnboardingStyle';
import { NavigationProp } from '@react-navigation/native';



export default function Onboarding3({ navigation }: { navigation: NavigationProp<any, any> }) {

        return (
            <ScrollView >
                <View style={[IndexStyle.container, IndexStyle.p5]}>
                    <Image style={[IndexStyle.mb, IndexStyle.mt]} height={350} width={350} source={{ uri: "https://img.freepik.com/premium-vector/food-blogging-recipes_118813-4490.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid" }} />

                    <Text variant="headlineMedium" style={[IndexStyle.pt, IndexStyle.mt]}>All your favorites</Text>

                    <Text variant="labelMedium" style={[IndexStyle.pt, IndexStyle.textCenter]}>Get all your loved foods in one once place,
                        you just place the orer we do the rest.s</Text>
                </View>

   <View style={[dot.container]}>
                    <Text style={[dot.inactive]}>.</Text>
                    <Text style={[dot.inactive]}>.</Text>
                    <Text style={[dot.active]}>.</Text>
                    <Text style={[dot.inactive]}>.</Text>
                </View>

                <View style={[IndexStyle.p5]}>
                    <Button icon="arrow-right" mode="contained" onPress={() => navigation.navigate('Onboarding4')}>
                        Next
                    </Button>
                    <Button style={IndexStyle.pt} mode="text" onPress={() => navigation.navigate('Permission')}>
                        Skip
                    </Button>
                </View>

            </ScrollView>
        )
    }


