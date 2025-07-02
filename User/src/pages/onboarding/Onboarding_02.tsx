import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './style/style'

export class Onboarding_02 extends Component {
    render({ navigation } = this.props) {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://img.freepik.com/free-vector/colored-hand-drawn-meat-collection_1284-36497.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid',
                        }}
                    />
                    <Text style={styles.heading}>
                        All your favorites
                    </Text>
                    <Text style={styles.subText}>
                        Get all your loved foods in one once place,
                        you just place the order we do the rest
                    </Text>

                    <View style={styles.containerDot}>
                        <TouchableOpacity style={styles.dotCurrent}>
                            <Text>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dot}>
                            <Text>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dotCurrent}>
                            <Text>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dotCurrent}>
                            <Text>.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Onboarding_03')} >
                            <Text style={styles.next}>
                                Next
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('LocationAccess')} >
                            <Text style={styles.skip}>
                                Skip
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        )
    }
}



export default Onboarding_02
