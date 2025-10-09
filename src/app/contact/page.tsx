"use client";
import { createContext, useContext, useState, useEffect } from "react";
import React from 'react'; // Import React for React.ReactNode

// 1. กำหนด Interface ของ Context
interface AuthContextType {
    isLoggedIn: boolean;
    // เพิ่มสถานะการโหลดเพื่อบอกว่าตรวจสอบ localStorage เสร็จแล้ว
    isLoading: boolean;
    login: () => void;
    logout: () => void;
}

// 2. สร้าง Context และกำหนดค่าเริ่มต้น
const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    // กำหนดให้เริ่มต้นเป็น true (กำลังโหลด)
    isLoading: true,
    login: () => { },
    logout: () => { },
});

// 3. Auth Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // สถานะการโหลด

    // ตรวจสอบสถานะการล็อกอินจาก localStorage เมื่อคอมโพเนนต์ Mount
    useEffect(() => {
        // โค้ดนี้จะทำงานบน Client-side เท่านั้น
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
        // เมื่อดึงค่าจาก localStorage เสร็จสิ้น ให้ตั้งค่า isLoading เป็น false
        setIsLoading(false);
    }, []);

    const login = () => {
        // ตรวจสอบว่าเป็น Client-side ก่อน (เพื่อความปลอดภัย แม้จะอยู่ใน "use client" แล้ว)
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