import React, { Component, useEffect } from 'react'
import {  View, Image, ScrollView } from 'react-native'
import IndexStyle from '../../Index.Style'
import { Button, Text } from 'react-native-paper';
import dot from './OnboardingStyle';
import notifee from '@notifee/react-native';
import sendNotification from '../../app/FCM/FCM';
import { NavigationProp } from '@react-navigation/native';


async function onDisplayNotification() {
  // Request permissions (required for iOS)
  await notifee.requestPermission()

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: 'Notification Title',
    body: 'Main body content of the notification',
    android: {
      channelId,
      smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });


  0


    console.log('Notification displayed');
}

export default function Onboarding1({ navigation }: { navigation: NavigationProp<any, any> }) {

  return (
    <ScrollView >
      <View style={[IndexStyle.container, IndexStyle.p5]}>
        <Image style={[IndexStyle.mb, IndexStyle.mt]} height={350} width={350} source={{ uri: "https://img.freepik.com/premium-vector/happy-woman-biker-wearing-helmet-riding-motorbike-motorcycle-city-street-concept-illustration_199628-90.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid" }} />

        <Text variant="headlineMedium" style={[IndexStyle.pt, IndexStyle.mt]}>All your favorites</Text>

        <Text variant="labelMedium" style={[IndexStyle.pt, IndexStyle.textCenter]}>Get all your loved foods in one once place,
          you just place the orer we do the rest.s</Text>
      </View>

      <View style={[dot.container]}>
        <Text style={[dot.active]}>.</Text>
        <Text style={[dot.inactive]}>.</Text>
        <Text style={[dot.inactive]}>.</Text>
        <Text style={[dot.inactive]}>.</Text>
      </View>
      <View style={[IndexStyle.p5]}>
        {/* <Button icon="arrow-right" mode="contained" onPress={() => sendNotification()}>
          Notify
        </Button> */}
        <Button icon="arrow-right" mode="contained" onPress={() => navigation.navigate('Onboarding2')}>
          Next
        </Button>
        <Button style={IndexStyle.pt} mode="text" onPress={() => navigation.navigate('Permission')}>
          Skip
        </Button>
      </View>

    </ScrollView>
  )
}

