import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons';

export default class PaymentSuccessfull extends Component {
    render() {
        return (
            <View style={styles.bg}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmejDFQLtkMhdTv6bBlOQPwNBRecYetDznmA&s'
                    }} />
                    <Text style={styles.heading}> Congratulations! </Text>
                    <Text style={styles.text}> You successfully maked a payment,
                        enjoy our service! </Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.button}>
                            Track Order
                            {/* <Ionicons name="map" color="#ff0000" size={20} /> */}

                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: { backgroundColor: "#ffffff",
     },
    container: {
        flex: 1,
        justifyContent: 'center',  // Centers content vertically
        alignItems: 'center',  // Centers content horizontally
         // White background for the entire screen
        padding: 20,  // Optional, for spacing around the content
    },
    image: {
        height: 240,
        width: 240,
        marginBottom: 30,
        marginTop:100
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 40,
    },
    button: {
        fontSize: 15,
        fontWeight: "600",
        backgroundColor: '#FF7622',
        color: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: "center",
    },
    text: {
        textAlign: "center",
        fontWeight: "600",
        marginTop: 30,
        color: "#646982",
        marginBottom:120
    },
    heading:{
        marginTop:20,
        fontWeight:800,
        fontSize:25
    }
})
