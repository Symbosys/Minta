import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Vibration } from 'react-native';
import { Button } from 'react-native-paper';
// import messaging from '@react-native-firebase/messaging';

export function Notification() {

    const handleNotification = () => {
        Vibration.vibrate(1000);
    }
    return (
        <View>
            <Text> textInComponent </Text>
            <Button onPress={handleNotification}>Click</Button>
        </View>
    )

}

export default Notification
