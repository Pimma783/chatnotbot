"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#141212] via-[#1a0000] to-[#ff0000]/10 text-white flex items-center justify-center p-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-6xl bg-[#1a1a1a]/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
                {/* 🧾 ฟอร์มด้านซ้าย */}
                <div className="flex-1 bg-white text-black p-10">
                    <h2 className="text-3xl font-bold mb-3">We will help you</h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        No open positions? Don’t worry! If you share our values and want to join our team, fill out the form and send us your resume.
                        We’ll reach out as soon as something suitable comes up.
                    </p>

                    <form className="flex flex-col gap-5">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500 transition"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500 transition"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500 transition"
                        />
                        <input
                            type="text"
                            placeholder="Which region are you interested in?"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500 transition"
                        />
                        <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 text-gray-500 cursor-pointer hover:border-red-500 transition">
                            <span>Upload Resume / CV</span>
                            <span>📎</span>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-3 transition"
                        >
                            Submit →
                        </button>
                    </form>
                </div>

                {/* 🧑‍💻 ภาพ Avatar ด้านขวา */}
                <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#1a0000] via-[#141212] to-[#ff0000]/20 p-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src="/images/avatar.png"
                            alt="Avatar 3D"
                            width={300}
                            height={300}
                            className="drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}
