"use client";
import { createContext, useContext, useState, useEffect } from "react";
import React from 'react';

// 1. กำหนด Interface ของ Context
interface AuthContextType {
    isLoggedIn: boolean;
    // สถานะการโหลด: true ขณะกำลังตรวจสอบ localStorage, false เมื่อเสร็จสิ้น
    isLoading: boolean; 
    login: () => void;
    logout: () => void;
}

// 2. สร้าง Context และกำหนดค่าเริ่มต้น
const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    // เริ่มต้นเป็น true เพื่อให้คอมโพเนนต์ลูกรู้ว่ากำลังรอการโหลดสถานะจริง
    isLoading: true, 
    login: () => { },
    logout: () => { },
});

// 3. Auth Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // ตรวจสอบสถานะการล็อกอินจาก localStorage เมื่อคอมโพเนนต์ Mount
    useEffect(() => {
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
        setIsLoggedIn(true);
    };

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("isLoggedIn");
        }
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 4. Custom Hook สำหรับใช้งาน
export const useAuth = () => useContext(AuthContext);