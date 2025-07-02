import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ authCode: null, sessionId: null });

    // Simulate fetching session from storage
    useEffect(() => {
        const storedAuthCode = localStorage.getItem("authCode");
        const storedSessionId = localStorage.getItem("sessionId");

        if (storedAuthCode && storedSessionId) {
            setAuth({ authCode: storedAuthCode, sessionId: storedSessionId });
        }
    }, []);

    const login = (authCode, sessionId) => {
        localStorage.setItem("authCode", authCode);
        localStorage.setItem("sessionId", sessionId);
        setAuth({ authCode, sessionId });
    };

    const logout = () => {
        localStorage.removeItem("authCode");
        localStorage.removeItem("sessionId");
        setAuth({ authCode: null, sessionId: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
