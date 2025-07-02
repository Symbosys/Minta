import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Button, Icon } from 'react-native-paper';

export default class Home extends Component {
    render({ navigation } = this.props) {
        const data = Array(6).fill({});

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.circle,]} onPress={() => navigation.push('Drawer')}>
                            <Icon source="menu" size={32} color="#FC6E2A" />
                        </TouchableOpacity>
                        <View style={styles.pl}>
                            <Text style={styles.text1}>Deliver to</Text>
                            <Text style={styles.text2}>Ranchi Jharkhand</Text>
                        </View>

                        <TouchableOpacity style={[styles.circle, styles.mla]} onPress={() => navigation.push('Profile')}>
                            <Icon source="account-circle" size={32} color="#FC6E2A" />
                        </TouchableOpacity>


                    </View>
                    <View>
                        <Text style={[styles.text3, styles.mt]}>
                            Hey Sudhanshu,
                            <Text style={styles.b}> Good Afternoon!</Text>
                        </Text>
                        <View>

                            <TextInput
                                style={[styles.input, styles.mt]}
                                placeholderTextColor="#B0BEC5"
                                placeholder="Search dishes, restaurants"
                            // secureTextEntry={true}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={[styles.row, styles.mt]}>
                            <Text style={styles.heading}>Recent Keywords</Text>


                        </View>
                        <ScrollView horizontal={true}>
                            {data.map((i, index) => (
                                <View >
                                    <Text style={styles.recent}>
                                        Burger
                                    </Text>
                                </View>

                            ))}

                        </ScrollView>
                    </View>

                    <View>
                        <View style={[styles.row, styles.mt]}>
                            <Text style={styles.heading}>All Categories</Text>
                            <Text style={[styles.mla, styles.text3]}>See All >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                <Text></Text>
                            </Text>

                        </View>
                        <ScrollView horizontal={true}>
                            {data.map((i, index) => (
                                <View style={[styles.mt]} key={index}>
                                    <Image source={{
                                        height: 110,
                                        width: 110,
                                        uri: 'https://assets.licious.in/OMS-Category/70a0a0aa-289f-5030-d250-3a4b5cb509c4/original/1730082691203.png'
                                    }}
                                    />
                                    <View style={[styles.m1,]}>
                                        <Text style={styles.b}>Pizza</Text>
                                        <View style={[styles.row]}>
                                            <Text>Starting</Text>
                                            <Text style={styles.mla}>₹40</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}

                        </ScrollView>
                    </View>

                    <View>
                        <View style={[styles.row, styles.mt]}>
                            <Text style={styles.heading}>Suggested Restaurants</Text>


                        </View>

                        <View>
                            <Text style={[styles.text1, styles.mt]}>Most Popular</Text>
                            <ScrollView horizontal={true}>
                                {data.map((i, index) => (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} key={index}>
                                        <View style={[styles.mt, styles.m1]}>
                                            <Image
                                                style={styles.image} source={{

                                                    uri: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2Fa106babe-00f2-7227-e669-52c25a90b775%2Foriginal%2F1703871661996.jpg&w=384&q=75'
                                                }}
                                            />
                                            <View style={[styles.m1,]}>
                                                <Text style={styles.b}>Crispy Chicken Wings</Text>
                                                <Text style={[styles.text4, styles.mt1]}>Juicy & meaty snack for your kiddos' evening cravings
                                                </Text>
                                                <View style={[styles.row, styles.mt1]}>
                                                    <Text>7 pieces  | ⭐ 4.7</Text>
                                                    <Text style={styles.mla}>₹99</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                            </ScrollView>
                        </View>
                        <View>
                            <Text style={[styles.text1, styles.mt]}>Best Deals</Text>
                            <ScrollView horizontal={true}>
                                {data.map((i, index) => (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} key={index}>
                                        <View style={[styles.mt, styles.m1]}>
                                            <Image
                                                style={styles.image} source={{

                                                    uri: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2Fa106babe-00f2-7227-e669-52c25a90b775%2Foriginal%2F1703871661996.jpg&w=384&q=75'
                                                }}
                                            />
                                            <View style={[styles.m1,]}>
                                                <Text style={styles.b}>Crispy Chicken Wings</Text>
                                                <Text style={[styles.text4, styles.mt1]}>Juicy & meaty snack for your kiddos' evening cravings
                                                </Text>
                                                <View style={[styles.row, styles.mt1]}>
                                                    <Text>7 pieces  | ⭐ 4.7</Text>
                                                    <Text style={styles.mla}>₹99</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                            </ScrollView>
                        </View>
                    </View>


                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    recent: {
        borderRadius: 18,
        padding: 8,
        paddingHorizontal: 15,
        backgroundColor: "#F0F5FA",
        margin: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },

    row: {
        flex: 1,
        flexDirection: "row",

    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        padding: 8,
        backgroundColor: "#ECF0F4"
    },
    heading: {
        fontWeight: 900,
        fontSize: 18,
        color: '#32343E'
    },
    text1: {
        color: '#FC6E2A',
        fontWeight: 900,
        fontSize: 15
    },
    text2: {
        color: '#676767'
    },
    text3: {
        color: '#1E1D1D'
    },
    text4: {
        color: '#676767',
        fontSize: 11
    },
    p1: {
        padding: 15
    },
    m1: {
        margin: 15
    },
    pl: {
        paddingLeft: 20
    },
    mt: {
        marginTop: 20
    },
    mt1: {
        marginTop: 12
    },
    mla: {
        marginLeft: "auto"
    },
    b: {
        fontWeight: 900
    },
    input: {
        height: 40,
        marginTop: 10,
        borderRadius: 7,
        padding: 10,
        backgroundColor: "#F0F5FA",
        color: "#000000",
    },
    image: {
        height: 150,
        width: 350,
        borderRadius: 10,
    },
});
