"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useChatStore } from "@/store/chatbotstore";
import { SendHorizonal, Bot, User } from "lucide-react";
import Link from "next/link";

export default function ChatPage() {
    const { messages, isLoading, sendMessage } = useChatStore();
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        await sendMessage(input);
        setInput("");
    };

    return (
        <section className="flex flex-col items-center justify-between min-h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
            {/* Header */}
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full bg-emerald-700/90 backdrop-blur-md text-white py-4 shadow-lg flex items-center justify-between px-6"
            >
                <Link
                    href="/"
                    className="font-medium hover:text-emerald-200 transition-all"
                >
                    ← กลับหน้าแรก
                </Link>
                <h1 className="text-lg font-bold tracking-wide flex items-center gap-2">
                    <Bot className="w-5 h-5 text-emerald-200" /> MJU Chatbot
                </h1>
                <div className="w-16" />
            </motion.header>

            {/* Chat Container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full max-w-3xl px-4 py-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-transparent"
            >
                {messages.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center text-gray-500 mt-20"
                    >
                        👋 เริ่มสนทนากับแชทบอทของ MJU ได้เลยครับ
                    </motion.div>
                )}

                {messages.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-end gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"
                            }`}
                    >
                        {msg.role === "assistant" && (
                            <div className="bg-white p-2 rounded-full shadow-sm border border-emerald-200">
                                <Bot className="text-emerald-600 w-5 h-5" />
                            </div>
                        )}
                        <div
                            className={`px-4 py-2 rounded-2xl shadow-md max-w-[70%] leading-relaxed backdrop-blur-sm ${msg.role === "user"
                                    ? "bg-emerald-600 text-white rounded-br-none"
                                    : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                                }`}
                        >
                            {msg.content}
                        </div>
                        {msg.role === "user" && (
                            <div className="bg-emerald-600 p-2 rounded-full shadow-sm">
                                <User className="text-white w-5 h-5" />
                            </div>
                        )}
                    </motion.div>
                ))}

                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-start items-center gap-2 text-gray-500 text-sm mt-4"
                    >
                        <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2">
                            <span className="animate-bounce">💬</span>
                            กำลังพิมพ์ข้อความ...
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </motion.div>

            {/* Input Section */}
            <motion.form
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="w-full max-w-3xl flex items-center gap-3 px-4 py-4 border-t border-gray-200 bg-white/80 backdrop-blur-lg"
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="พิมพ์ข้อความของคุณที่นี่..."
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/70 backdrop-blur-sm shadow-sm transition"
                />
                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl shadow-md disabled:opacity-50 transition-all"
                >
                    <SendHorizonal className="w-5 h-5" />
                </button>
            </motion.form>
        </section>
    );
}
