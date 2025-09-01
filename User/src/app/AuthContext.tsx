import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  token: string | null;
  userId: string | null;
  login: (token: string, userId: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Load stored auth data on component mount
  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedToken) setToken(storedToken);
        if (storedUserId) setUserId(storedUserId);
      } catch (error) {
        console.error('Failed to load auth data from AsyncStorage:', error);
      }
    };
    loadAuthData();
  }, []);

  const login = async (newToken: string, newUserId: string) => {
    try {
      setToken(newToken);
      setUserId(newUserId);
      await AsyncStorage.setItem('authToken', newToken);
      await AsyncStorage.setItem('userId', newUserId);
    } catch (error) {
      console.error('Failed to save auth data to AsyncStorage:', error);
    }
  };

  const logout = async () => {
    try {
      setToken(null);
      setUserId(null);
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('userId');
    } catch (error) {
      console.error('Failed to clear auth data from AsyncStorage:', error);
    }
  };

  return (
    <AuthContext.Provider value={{token, userId, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
