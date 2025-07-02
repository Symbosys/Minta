import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Withdraw from '../../components/withdraw/Withdraw';
const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <ScrollView>
      <View style={styles.mainContaner}>
        <View style={styles.header}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}>
            <Text style={styles.available}>Available Balance</Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sen',
                fontWeight: 700,
                fontSize: 40,
              }}>
              5000.00
            </Text>
            <TouchableOpacity style={styles.WithdrawButton} onPress={() => setOpen(true)}>
              <Text
                style={{
                  fontFamily: 'sen',
                  textAlign: 'center',
                  fontWeight: '400',
                  fontSize: 14,
                  color: 'white',
                }}>
                Withdraw
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {open && <Withdraw isOpen={open} setOpen={setOpen} />}

        {/* Profile Links  */}
        <View
          style={[
            styles.ProfileLinks,
            {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              marginTop: 24,
            },
          ]}>
          {/* Card 1 */}
          <View style={styles.personalInfo}>
            <View style={styles.iconRow}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <Icon name="person" size={24} color="#FB6F3D" />
                <Text style={styles.label}>Personal Info</Text>
              </View>
              <Icon name="arrow-right" size={24} color={'#747783'} />
            </View>

            <View style={styles.iconRow}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <Icon name="settings" size={24} color="#413DFB" />
                <Text style={styles.label}>Settings</Text>
              </View>
              <Icon name="arrow-right" size={24} color="#747783" />
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.personalInfo}>
            <View style={styles.iconRow}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <Icon name="person" size={24} color="#FB6F3D" />
                <Text style={styles.label}>Personal Info</Text>
              </View>
              <Icon name="arrow-right" size={24} color={'#747783'} />
            </View>

            <View style={styles.iconRow}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <Icon name="settings" size={24} color="#413DFB" />
                <Text style={styles.label}>Settings</Text>
              </View>
              <Icon name="arrow-right" size={24} color="#747783" />
            </View>
          </View>

          {/* Card 3 */}
          <View style={[styles.personalInfo, {marginBottom: 20}]}>
            <View style={styles.iconRow}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <Icon name="person" size={24} color="#FB6F3D" />
                <Text style={styles.label}>Personal Info</Text>
              </View>
              <Icon name="arrow-right" size={24} color={'#747783'} />
            </View>

            <View style={styles.iconRow}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <Icon name="settings" size={24} color="#413DFB" />
                <Text style={styles.label}>Settings</Text>
              </View>
              <Icon name="arrow-right" size={24} color="#747783" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContaner: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  header: {
    height: 270,
    backgroundColor: '#FF7622',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  available: {color: 'white', fontFamily: 'sen', fontWeight: 400, fontSize: 16},
  ProfileLinks: {},
  WithdrawButton: {
    height: 37,
    width: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  personalInfo: {
    width: 327,
    height: 141,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    padding: 10,
  },
  iconRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  label: {
    fontFamily: 'sen',
    fontWeight: '900',
    fontSize: 15,
    lineHeight: 20,
    color: '#333333',
    padding: 3,
  },
});

export default Profile;
