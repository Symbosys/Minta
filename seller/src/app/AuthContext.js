import React, { createContext, useState, useContext } from 'react';
import * as Keychain from 'react-native-keychain';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const storeToken = async (token) => {
        await Keychain.setGenericPassword('userToken', token);
        console.log('Token Stored..............')
    };

    const login = async () => {

        // try {
        //     await AsyncStorage.setItem('userToken', "token");
        //     console.log('Token stored:', "token"); // Log stored token
        // } catch (error) {
        //     console.error('Error saving token', error);
        // }

    };

    const logout = async () => {
        await Keychain.resetGenericPassword();
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
