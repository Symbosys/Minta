import React from 'react';
import { View, FlatList } from 'react-native';
import { List, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const datas = [
    { title: 'Profile', icon: 'account' },
    { title: 'Cart', icon: 'cart' },
    { title: 'Orders', icon: 'clipboard-list' },
    { title: 'Payment', icon: 'credit-card' },
    { title: 'Notifications', icon: 'bell' },
    { title: 'Favorite', icon: 'heart' },
    { title: 'Coupons', icon: 'tag' },
    { title: 'Terms and Conditions', icon: 'file-document' },
    { title: 'Privacy Policy', icon: 'shield-lock' },
    { title: 'Help', icon: 'help-circle' },
    { title: 'Logout', icon: 'logout' },
];

const Drawer = ({ navigation }) => {
    const renderItem = ({ item }) => ( 
        <>
            <List.Item
                title={item.title}
                left={() => <Icon name={item.icon} size={24} style={{ marginRight: 16 }} />}
                onPress={() => navigation.navigate(item.title)}
            />
            <Divider />
        </>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 10, padding: 20 }}>
            <FlatList
                data={datas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Drawer;
