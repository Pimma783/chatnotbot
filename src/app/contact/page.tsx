"use client";
import { createContext, useContext, useState, useEffect } from "react";
import React from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
<<<<<<< HEAD
    // สถานะการโหลด: true ขณะกำลังตรวจสอบ localStorage, false เมื่อเสร็จสิ้น
    isLoading: boolean; 
=======
    isLoading: boolean;
>>>>>>> fb38a1a695c4a79975c2143ec6e009a32835e97d
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
<<<<<<< HEAD
    // เริ่มต้นเป็น true เพื่อให้คอมโพเนนต์ลูกรู้ว่ากำลังรอการโหลดสถานะจริง
    isLoading: true, 
=======
    isLoading: true,
>>>>>>> fb38a1a695c4a79975c2143ec6e009a32835e97d
    login: () => { },
    logout: () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
<<<<<<< HEAD
        // การเข้าถึง localStorage ต้องทำภายใน useEffect (Client-side)
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
        // ตั้งค่าให้โหลดเสร็จสิ้น
        setIsLoading(false); 
    }, []);

    const login = () => {
        // ใช้ typeof window !== 'undefined' เป็นการป้องกันที่ดีเยี่ยม
        if (typeof window !== 'undefined') {
             localStorage.setItem("isLoggedIn", "true");
        }
=======
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
        setIsLoading(false);
    }, []);

    const login = () => {
        localStorage.setItem("isLoggedIn", "true");
>>>>>>> fb38a1a695c4a79975c2143ec6e009a32835e97d
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
