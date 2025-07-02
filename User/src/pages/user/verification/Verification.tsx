import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../userStyle';

import Ellipse from './../../../assets/vectors/backgrounds/Ellipse.png'
import Vector from './../../../assets/vectors/backgrounds/Vector.png'

export default class Verification extends Component {
    render({ navigation } = this.props) {
        return (
            <View style={[styles.container, styles.bg]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.bgImage} source={Ellipse} />
                    <Image
                        style={styles.bgImage} source={Vector} />
                </View>
                <View>
                    <Text style={styles.heading}>Verification</Text>
                    <Text style={styles.paragraph}>We have sent a code to your email</Text>
                </View>

                <View style={styles.main}>
                    <View style={styles.footer}>
                        <Text></Text>
                        <Text style={styles.textLeft}>Resend in.50sec</Text>
                    </View>

                    <View>
                        <Text style={styles.lable}>Code</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#B0BEC5"
                            placeholder="6 Digit Code"
                            autoFocus={true}
                        />
                    </View>

                  

                 

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.button}>
                            Verify
                        </Text>
                    </TouchableOpacity>

                  
                </View>
            </View>
        );
    }
}


