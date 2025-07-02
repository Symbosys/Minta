import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Withdraw = ({isOpen, setOpen}: {isOpen: boolean, setOpen: any}) => {
    console.log(isOpen)
    return (
        <View style={[styles.container, StyleSheet.absoluteFillObject]}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconCircle}>
                        <Icon name="check" size={30} color="#FFFFFF" />
                    </View>
                </View>

                <Text style={styles.message}>Withdraw Successful</Text>

                <TouchableOpacity style={styles.button} onPress={() => setOpen(!isOpen)}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
        paddingTop: 40,
        paddingBottom: 20,
    },
    iconContainer: {
        position: 'relative',
        width: 100,
        height: 100,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FF7622',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        backgroundColor: '#FF7622',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Withdraw;
