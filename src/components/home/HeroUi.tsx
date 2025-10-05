"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroUi() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 bg-gradient-to-br from-black via-[#1a0000] to-[#330000] overflow-hidden">
            {/* พื้นหลังวงกลมแดง */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.15),_transparent_60%)]"></div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
                We remove content that <br />
                <span className="text-red-500">harms your reputation</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl text-gray-400 mb-10"
            >
                An experienced team equipped with advanced technology to remove all your
                unwanted information from the internet.
            </motion.p>

            <div className="flex gap-4">
                <Link
                    href="/contact"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Discover More
                </Link>
                <Link
                    href="/login"
                    className="border border-gray-600 hover:border-red-500 text-gray-200 px-6 py-3 rounded-lg transition"
                >
                    Sign In
                </Link>
            </div>
        </section>
    );
}
