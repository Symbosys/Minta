import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../userStyle';

import Ellipse from './../../../assets/vectors/backgrounds/Ellipse.png'
import Vector from './../../../assets/vectors/backgrounds/Vector.png'

export default class Login extends Component {
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
                    <Text style={styles.heading}>Log In</Text>
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

                    <View>
                        <Text style={styles.lable}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#B0BEC5"
                            placeholder="* * * * * * * *"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.footer}>
                        <Text>Remember me</Text>
                        <Text style={styles.textLeft} onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot Password</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Verification')}>
                        <Text style={styles.button}>
                            Log In
                        </Text>
                    </TouchableOpacity>

                    <View style={[styles.footer1, styles.mt]}>
                        <Text>Don’t have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={styles.textLeft}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


