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
            className="w-full py-8 bg-gradient-to-t from-[#f2f5f3] via-white to-transparent border-t border-gray-200 text-center"
        >
            <div className="flex flex-col items-center gap-3">
                {/* Social Icons */}
                <div className="flex items-center gap-6 text-emerald-700">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition">
                        <Github size={20} />
                    </a>
                    <a href="mailto:example@email.com" className="hover:text-emerald-500 transition">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm mt-3">
                    © 2025 <span className="text-emerald-700 font-semibold">ChatBot Mju</span> — All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
}
