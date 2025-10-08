"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function HeaderUi() {
    const { isLoggedIn, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-emerald-700">
                    ChatBot<span className="text-gray-800">Mju</span>
                </Link>

                {/* Menu */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700">
                    <Link href="/" className="hover:text-emerald-700 transition">Home</Link>
                    <Link href="/chat" className="hover:text-emerald-700 transition">Chat</Link>
                </nav>

                {/* Buttons */}
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition text-sm font-medium border border-gray-300"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        href="/login"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
                    >
                        Login
                    </Link>
                )}
            </div>
        </motion.header>
    );
}
