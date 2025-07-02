import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { IconButton } from 'react-native-paper';

const CartScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <IconButton
                    icon="chevron-left"
                    size={24}
                    style={styles.backButton}
                    onPress={() => console.log('Back pressed')}
                />
                <Text style={styles.headerTitle}>Cart</Text>
                <Text style={styles.doneButton}>DONE</Text>
            </View>

            <ScrollView style={styles.itemsContainer}>
                {/* First Cart Item */}
                <View style={styles.cartItem}>
                    <View style={styles.itemImage} />
                    <View style={styles.itemDetails}>
                        <View style={styles.itemTop}>
                            <View>
                                <Text style={styles.itemName}>Pizza Calzone</Text>
                                <Text style={styles.itemVariant}>European</Text>
                            </View>
                            <IconButton
                                icon="close-circle"
                                size={20}
                                onPress={() => console.log('Remove item')}
                                style={styles.removeButton}
                            />
                        </View>
                        <View style={styles.itemBottom}>
                            <Text style={styles.itemPrice}>$64</Text>
                            <Text style={styles.itemSize}>14"</Text>
                            <View style={styles.quantityControl}>
                                <IconButton
                                    icon="minus-circle"
                                    size={24}
                                    onPress={() => console.log('Decrease quantity')}
                                    style={styles.quantityButton}
                                />
                                <Text style={styles.quantity}>2</Text>
                                <IconButton
                                    icon="plus-circle"
                                    size={24}
                                    onPress={() => console.log('Increase quantity')}
                                    style={styles.quantityButton}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Second Cart Item */}
                <View style={styles.cartItem}>
                    <View style={styles.itemImage} />
                    <View style={styles.itemDetails}>
                        <View style={styles.itemTop}>
                            <View>
                                <Text style={styles.itemName}>Pizza Calzone</Text>
                                <Text style={styles.itemVariant}>European</Text>
                            </View>
                            <IconButton
                                icon="close-circle"
                                size={20}
                                onPress={() => console.log('Remove item')}
                                style={styles.removeButton}
                            />
                        </View>
                        <View style={styles.itemBottom}>
                            <Text style={styles.itemPrice}>$32</Text>
                            <Text style={styles.itemSize}>14"</Text>
                            <View style={styles.quantityControl}>
                                <IconButton
                                    icon="minus-circle"
                                    size={24}
                                    onPress={() => console.log('Decrease quantity')}
                                    style={styles.quantityButton}
                                />
                                <Text style={styles.quantity}>1</Text>
                                <IconButton
                                    icon="plus-circle"
                                    size={24}
                                    onPress={() => console.log('Increase quantity')}
                                    style={styles.quantityButton}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.deliverySection}>
                    <Text style={styles.deliveryLabel}>DELIVERY ADDRESS</Text>
                    <TouchableOpacity>
                        <Text style={styles.editButton}>EDIT</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.addressContainer}>
                    <Text style={styles.address}>
                        2118 Thornridge Cir. Syracuse
                    </Text>
                </View>

                <View style={styles.totalSection}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalLabel}>TOTAL:</Text>
                        <Text style={styles.totalAmount}>$96</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.breakdownButton}>
                            <Text style={styles.breakdownText}>Breakdown</Text>
                            <IconButton
                                icon="chevron-right"
                                size={20}
                                style={styles.breakdownIcon}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.placeOrderButton}>
                    <Text style={styles.placeOrderText}>PLACE ORDER</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        height: 56,
    },
    backButton: {
        margin: 0,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    doneButton: {
        color: '#00CA90',
        fontSize: 14,
        fontWeight: '600',
    },
    itemsContainer: {
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    itemImage: {
        width: 100,
        height: 100,
        backgroundColor: '#2C2C2E',
        borderRadius: 8,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'space-between',
    },
    itemTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    itemName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    itemVariant: {
        color: '#FFFFFF',
        fontSize: 16,
        opacity: 0.7,
    },
    removeButton: {
        margin: 0,
        padding: 0,
    },
    itemBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    itemPrice: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 8,
    },
    itemSize: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.6,
        marginRight: 'auto',
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        margin: 0,
    },
    quantity: {
        color: '#FFFFFF',
        fontSize: 16,
        marginHorizontal: 4,
    },
    footer: {
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    deliverySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    deliveryLabel: {
        color: '#AEAEB2',
        fontSize: 12,
        fontWeight: '500',
    },
    editButton: {
        color: '#FF8A00',
        fontSize: 12,
        fontWeight: '500',
    },
    addressContainer: {
        backgroundColor: '#2C2C2E',
        borderRadius: 8,
        padding: 16,
        marginTop: 8,
    },
    address: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    totalSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 16,
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalLabel: {
        color: '#AEAEB2',
        fontSize: 12,
        fontWeight: '500',
        marginRight: 8,
    },
    totalAmount: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '600',
    },
    breakdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    breakdownText: {
        color: '#FF8A00',
        fontSize: 14,
    },
    breakdownIcon: {
        margin: 0,
        padding: 0,
    },
    placeOrderButton: {
        backgroundColor: '#FF8A00',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeOrderText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CartScreen;