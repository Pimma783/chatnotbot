"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroUi() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center w-full min-h-screen px-6 bg-gradient-to-br from-black via-[#001a00] to-[#003300] overflow-hidden">
            {/* พื้นหลังเอฟเฟกต์ */}
            <div className="absolute inset-0 z-0">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-green-400 rounded-full opacity-30 w-1 h-1 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-green-500/20 w-[2px] h-full animate-pulse-slow"
                        style={{ left: `${i * 10 + 5}%`, animationDelay: `${i * 0.3}s` }}
                    />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-green-500/20 h-[2px] w-full animate-pulse-slow"
                        style={{ top: `${i * 10 + 5}%`, animationDelay: `${i * 0.3}s` }}
                    />
                ))}
            </div>

            {/* เนื้อหาหลัก */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto"
            >
                <h1 className="mb-6">
                    <Image
                        src="/images/logo_chatbot.png" // path ของโลโก้
                        alt="ChatBot MJU Logo"
                        width={300}  // ปรับขนาดตามต้องการ
                        height={300}
                        className="object-contain"
                    />
                </h1>
                <p className="text-gray-200 mb-10 text-lg max-w-2xl">
                    สัมผัสประสบการณ์ใหม่ของระบบสนทนาอัจฉริยะ ที่สามารถโต้ตอบได้อย่างเป็นธรรมชาติ
                    รวดเร็ว และพร้อมให้บริการสำหรับนักศึกษามหาวิทยาลัยแม่โจ้
                </p>
            </motion.div>
        </section>
    );
}
