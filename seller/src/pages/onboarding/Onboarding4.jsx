import React, { Component } from 'react'
import { View, Image, ScrollView, StyleSheet } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text } from 'react-native-paper';
import dot from './OnboardingStyle';

export default function Onboarding4({ navigation }) {

        return (
            <ScrollView >
                <View style={[IndexStyle.container, IndexStyle.p5]}>
                    <Image style={[IndexStyle.mb, IndexStyle.mt]} height={350} width={350} source={{ uri: "https://img.freepik.com/premium-vector/chef-teaching-woman-follower-cook-vector_103044-2269.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid" }} />

                    <Text variant="headlineMedium" style={[IndexStyle.pt, IndexStyle.mt]}>All your favorites</Text>

                    <Text variant="labelMedium" style={[IndexStyle.pt, IndexStyle.textCenter]}>Get all your loved foods in one once place,
                        you just place the orer we do the rest.s</Text>
                </View>

                <View style={[dot.container, dot.active]}>
                    <Text style={[dot.inactive]}>.</Text>
                    <Text style={[dot.inactive]}>.</Text>
                    <Text style={[dot.inactive]}>.</Text>
                    <Text style={[dot.active]}>.</Text>
                </View>

                <View style={[IndexStyle.p5]}>
                    <Button icon="arrow-right" mode="contained" onPress={() => navigation.navigate('Permission')} >
                        Get Started
                    </Button>
                    {/* <Button style={IndexStyle.pt} mode="text" onPress={() => console.log('Pressed')}>
                        Skip
                    </Button> */}
                </View>

            </ScrollView>
        )
    }




