"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // ตัวอย่างจำลองการเข้าสู่ระบบ
        if (email && password) {
            localStorage.setItem("authToken", "dummy_token");
            router.push("/");
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#002200] to-[#001100] text-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md bg-[#011100]/80 border border-green-700/20 backdrop-blur-lg rounded-2xl shadow-xl p-8"
            >
                {/* หัวข้อหน้า */}
                <h1 className="text-3xl font-bold text-center text-white mb-4">
                    เข้าสู่ระบบ
                </h1>
                <p className="text-gray-300 text-center mb-8">
                    โปรดเข้าสู่ระบบเพื่อใช้งานระบบสนทนาอัจฉริยะของ{" "}
                    <span className="text-green-400 font-semibold">ChatBot MJU</span>
                </p>

                {/* ฟอร์มล็อกอิน */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-200 text-sm mb-2">
                            อีเมล
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="กรอกอีเมลของคุณ"
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-green-700/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-200 text-sm mb-2">
                            รหัสผ่าน
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="กรอกรหัสผ่าน"
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-green-700/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 
                       rounded-lg font-medium text-white transition-all transform hover:scale-105 shadow-md"
                    >
                        เข้าสู่ระบบ
                    </button>
                </form>

                <div className="text-center mt-6 text-gray-400 text-sm">
                    ยังไม่มีบัญชี?{" "}
                    <a href="/register" className="text-green-400 hover:text-green-300">
                        ลงทะเบียนที่นี่
                    </a>
                </div>
            </motion.div>
        </main>
    );
}
