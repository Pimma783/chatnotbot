"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function FooterUi() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full py-8 bg-gradient-to-t from-[#0a0a0a] via-[#1a0000] to-transparent border-t border-red-600/30 text-center"
        >
            <div className="flex flex-col items-center gap-3">
                {/* ไอคอนลิงก์ */}
                <div className="flex items-center gap-6 text-red-500">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-400 transition"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-400 transition"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="mailto:example@email.com"
                        className="hover:text-red-400 transition"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                {/* ข้อความลิขสิทธิ์ */}
                <p className="text-gray-400 text-sm mt-3">
                    © 2025 <span className="text-red-500 font-semibold">ChatBot Mju</span> — All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
}
