import { View, Text, TouchableOpacity, Linking, Share } from 'react-native';
import React, { useEffect } from 'react';
import IndexStyle from '../../Index.Style';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AndroidOpenSettings from 'react-native-android-open-settings'
import { useAuth } from '../../app/AuthContext';
import * as Keychain from 'react-native-keychain';

const AccountIndex = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const getToken = async () => {
    const credentials = await Keychain.getGenericPassword();
    return credentials ? credentials.password : null;
  };

  useEffect(() => {
    getToken()


  }, [])

  const handlePress = async (data) => {
    if (data.nav) {
      navigation.navigate(data.nav);
    } else if (data.title === 'Help') {
      Linking.openURL('tel:+1234567890'); // Replace with actual phone number
    } else if (data.title === 'Permissions') {

      AndroidOpenSettings.appDetailsSettings()
    } else if (data.title === 'Share') {
      try {
        await Share.share({
          message: 'Check out this amazing app: https://example.com', // Replace with your app link
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
    else if (data.title === 'SignOut') {
      logout()
      navigation.navigate('Onboarding1');
    }

  };

  return (
    <View style={[IndexStyle.p3]}>
      {datas.map((data, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(data)}>
          <Card.Title
            title={data.title}
            left={(props) => <Avatar.Icon {...props} icon={data.icon} />}
            right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => { }} />}
          />
        </TouchableOpacity>
      ))}
      <View style={[IndexStyle.p2, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={IndexStyle.textMuted}>Version 1.0</Text>
      </View>
    </View>
  );
};

export default AccountIndex;

const datas = [
  { title: 'Account', icon: 'account', nav: 'Details' },
  { title: 'Wallet', icon: 'wallet', nav: 'Wallet' },
  { title: 'Help', icon: 'phone' },
  { title: 'Permissions', icon: 'shield-lock' },
  { title: 'Settings', icon: 'cog' },
  { title: 'Share', icon: 'share' },
  { title: 'Term and conditions', icon: 'pen', nav: 'TC' },
  { title: 'SignOut', icon: 'logout' },
];
