import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../userStyle';

import Ellipse from './../../../assets/vectors/backgrounds/Ellipse.png'
import Vector from './../../../assets/vectors/backgrounds/Vector.png'

export default class ForgotPassword extends Component {
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
                    <Text style={styles.heading}>Forgot Password</Text>
                    <Text style={styles.paragraph}>Please sign in to your existing account</Text>
                </View>

                <View style={styles.main}>
                    <View>
                        <Text style={styles.lable}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#B0BEC5"
                            placeholder="yourEmail@mail.com"
                            autoFocus={true}
                        />
                    </View>

                   
                   

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Verification')}>
                        <Text style={styles.button}>
                            Send Code
                        </Text>
                    </TouchableOpacity>

                   
                </View>
            </View>
        );
    }
}


