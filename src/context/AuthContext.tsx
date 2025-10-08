"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // โหลด token จาก localStorage เมื่อเปิดเว็บ
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) setIsLoggedIn(true);
    }, []);

    const login = () => {
        localStorage.setItem("authToken", "mock-token");
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}
