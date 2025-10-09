"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroUi from "@/components/home/HeroUi";
import FeaturesUi from "@/components/home/FeaturesUi";
import { useAuth } from "@/context/AuthContext";

export default function HomePage() {
  const { isLoggedIn } = useAuth(); // ดึง state จาก Context

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white via-[#f8f9f9] to-[#eef0ef] text-gray-900 relative">
      {/* Hero Section */}
      <HeroUi />

      {/* Features Section */}
      <FeaturesUi />

      {/* Login Reminder Section */}
      {!isLoggedIn && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-md mt-12 mb-20 px-4"
        >
          <p className="text-2xl font-semibold text-emerald-600 mb-4">
            ⚠️ กรุณาเข้าสู่ระบบก่อนเริ่มแชท
          </p>
          <p className="text-gray-600 text-sm">
            เข้าสู่ระบบเพื่อใช้งานฟีเจอร์แชทอัจฉริยะของ{" "}
            <span className="text-emerald-700 font-semibold">ChatBot Mju</span>
          </p>
        </motion.div>
      )}

      {/* Floating Chat Button */}
      {isLoggedIn && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link href="/chat">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-full shadow-lg transition-colors"
            >
              💬 ไปยังหน้าแชท
            </motion.button>
          </Link>
        </motion.div>
      )}
    </main>
  );
}
