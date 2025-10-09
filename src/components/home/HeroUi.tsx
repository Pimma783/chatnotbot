"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type DotStyle = {
    top: string;
    left: string;
    animationDelay: string;
};

export default function HeroUi() {
    const [bubbles, setBubbles] = useState<DotStyle[]>([]);

    useEffect(() => {
        const dots: DotStyle[] = Array.from({ length: 30 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
        }));
        setBubbles(dots);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center text-center w-full min-h-screen px-6 bg-gradient-to-br from-black via-[#001a00] to-[#003300] overflow-hidden">

            {/* พื้นหลังเอฟเฟกต์ */}
            <div className="absolute inset-0 z-0">
                {bubbles.map((b, i) => (
                    <div
                        key={i}
                        className="absolute bg-green-400 rounded-full opacity-30 w-1 h-1 animate-pulse"
                        style={{
                            top: b.top,
                            left: b.left,
                            animationDelay: b.animationDelay,
                        }}
                    />
                ))}
            </div>

            {/* โลโก้ตรงกลาง */}
            <div className="relative z-10 mb-6">
                <Image
                    src="/images/logo_chatbot.png" // เปลี่ยนเป็น path โลโก้ของคุณ
                    alt="Logo"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    );
}
