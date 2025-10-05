"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeaderUi() {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-[#0d0d0d]/80 border-b border-red-600/30"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* โลโก้ */}
                <Link href="/" className="text-xl font-bold text-red-500">
                    ChatBot<span className="text-white">Web</span>
                </Link>

                {/* เมนู */}
                <nav className="hidden md:flex items-center gap-6 text-gray-300">
                    <Link href="/" className="hover:text-red-500 transition">Home</Link>
                    <Link href="/contact" className="hover:text-red-500 transition">Contact</Link>
                    <Link href="/login" className="hover:text-red-500 transition">Login</Link>
                </nav>

                {/* ปุ่ม */}
                <Link
                    href="/contact"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition text-sm font-semibold"
                >
                    Get Started
                </Link>
            </div>
        </motion.header>
    );
}
