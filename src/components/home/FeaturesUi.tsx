"use client";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Zap } from "lucide-react";

const features = [
    {
        icon: <Brain className="text-red-500 w-10 h-10" />,
        title: "AI Conversation",
        description:
            "Smart chatbot that understands Thai naturally and provides context-based replies.",
    },
    {
        icon: <MessageSquare className="text-red-500 w-10 h-10" />,
        title: "Real-Time Chat",
        description:
            "Smooth, instant interaction powered by Next.js server actions and socket updates.",
    },
    {
        icon: <Zap className="text-red-500 w-10 h-10" />,
        title: "Lightning Fast",
        description:
            "Optimized with Tailwind and caching — enjoy blazing-fast responses.",
    },
];

export default function FeaturesUi() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-[#000000] via-[#150000] to-[#0a0a0a]">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-white"
            >
                ChatBot Mju
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.2, // ให้การ์ดแต่ละอันเลื่อนขึ้นแบบต่อเนื่อง
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="bg-[#111]/80 border border-red-700/20 backdrop-blur-lg rounded-2xl p-8 hover:border-red-500/40 hover:shadow-red-600/30 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex flex-col items-center gap-4">
                            {feature.icon}
                            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
