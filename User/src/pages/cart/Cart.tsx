import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { IconButton, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';

const Cart = () => {
    const [minutes, setMinutes] = useState(10);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Cappuccino',
            description: 'With almond milk',
            price: 4.99,
            quantity: 1,
            image: 'https://via.placeholder.com/80'
        },
        {
            id: 2,
            name: 'Croissant',
            description: 'Freshly baked',
            price: 3.49,
            quantity: 2,
            image: 'https://via.placeholder.com/80'
        },
        {
            id: 3,
            name: 'Fresh Fruit Bowl',
            description: 'Seasonal mix',
            price: 5.99,
            quantity: 1,
            image: 'https://via.placeholder.com/80'
        },
        {
            id: 4,
            name: 'Avocado Toast',
            description: 'Organic sourdough',
            price: 6.99,
            quantity: 1,
            image: 'https://via.placeholder.com/80'
        }
    ]);

    const [promoCode, setPromoCode] = useState(''); 

    const updateQuantity = (id: any, action: any) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: action === 'add' ? item.quantity + 1 : Math.max(1, item.quantity - 1)
                    };
                }
                return item;
            })
        );
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const deliveryFee = 1.99;
    const discount = promoCode === 'SPRING25' ? 2.50 : 0; // Apply discount only if the code matches 'SPRING25'

    // Custom theme to use the coral/orange accent color
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#FF7622',
            accent: '#FF7622',
        },
    };

    return (
        <PaperProvider theme={theme}>
            <View style={styles.mainContainer}>
                <View style={styles.deliveryInfoContainer}>
                    <View style={styles.deliveryInfo}>
                        <View style={styles.deliveryTimeIcon}>
                            <IconButton icon="truck-delivery" size={20} style={styles.iconInCircle} />
                        </View>
                        <View>
                            <Text style={styles.deliveryTimeText}>Delivery in {minutes} min</Text>
                            <Text style={styles.storeInfo}>From Minta • {getTotalItems()} items</Text>
                        </View>
                    </View>
                </View>

                <ScrollView style={styles.cartItemsContainer} showsVerticalScrollIndicator={false}>
                    {cartItems.map(item => (
                        <View key={item.id} style={styles.product}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />

                            <View style={styles.productDetails}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productDescription}>{item.description}</Text>
                                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                            </View>

                            <View style={styles.productQuantity}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => updateQuantity(item.id, 'subtract')}>
                                    <IconButton
                                        icon="minus"
                                        size={16}
                                        style={styles.quantityIcon}
                                    />
                                </TouchableOpacity>

                                <Text style={styles.quantityText}>{item.quantity}</Text>

                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => updateQuantity(item.id, 'add')}>
                                    <IconButton
                                        icon="plus"
                                        size={16}
                                        style={styles.quantityIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                    <View style={styles.promoContainer}>
                        <View style={styles.promoInput}>
                            <IconButton icon="tag" size={20} style={styles.promoIcon} />
                            <TextInput
                                style={styles.promoTextInput}
                                placeholder="Enter Promo Code"
                                value={promoCode}
                                onChangeText={setPromoCode}
                            />
                        </View>
                        <TouchableOpacity style={styles.promoButton} onPress={() => console.log(promoCode)}>
                            <Text style={styles.promoButtonText}>Apply</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.summaryContainer}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Subtotal</Text>
                            <Text style={styles.summaryValue}>${getSubtotal().toFixed(2)}</Text>
                        </View>

                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Delivery Fee</Text>
                            <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
                        </View>

                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Discount</Text>
                            <Text style={[styles.summaryValue, styles.discountText]}>-${discount.toFixed(2)}</Text>
                        </View>

                        <View style={styles.separator} />

                        <View style={[styles.summaryRow, styles.totalRow]}>
                            <Text style={styles.totalLabel}>Total</Text>
                            <Text style={styles.totalValue}>${(getSubtotal() + deliveryFee - discount).toFixed(2)}</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.checkoutContainer}>
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                        <IconButton
                            icon="arrow-right"
                            size={20}
                            style={styles.checkoutIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </PaperProvider>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    promoInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    promoTextInput: {
        flex: 1,
        fontSize: 14,
        color: '#333',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 15,
        backgroundColor: "#fff",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    deliveryInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 15,
        borderRadius: 12,
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deliveryTimeIcon: {
        backgroundColor: '#FF7622',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    iconInCircle: {
        margin: 0,
        padding: 0,
    },
    deliveryTimeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    storeInfo: {
        fontSize: 14,
        color: '#888',
        marginTop: 3,
    },
    changeButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF7622',
    },
    changeButtonText: {
        color: '#FF7622',
        fontSize: 12,
        fontWeight: '500',
    },
    cartItemsContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    product: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
    productDetails: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    productDescription: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF7622',
        marginTop: 8,
    },
    productQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    quantityButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#EBEBEB',
    },
    quantityIcon: {
        margin: 0,
        padding: 0,
    },
    quantityText: {
        fontSize: 16,
        fontWeight: '500',
        marginHorizontal: 10,
    },
    promoContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 15,
        overflow: 'hidden',
        shadowColor: '#000',
    },
    promoIcon: {
        margin: 0,
    },
    promoText: {
        fontSize: 14,
        color: '#333',
        marginLeft: -5,
    },
    promoButton: {
        backgroundColor: '#FF7622',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    promoButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
    separator: {
        height: 1,
        backgroundColor: '#EBEBEB',
        marginVertical: 15,
    },
    summaryContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#888',
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    discountText: {
        color: '#4CAF50',
    },
    totalRow: {
        marginTop: 5,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FF7622',
    },
    checkoutContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#EBEBEB',
    },
    checkoutButton: {
        backgroundColor: '#FF7622',
        borderRadius: 12,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 8,
    },
    checkoutIcon: {
        margin: 0,
        padding: 0,
    }
});

export default Cart;