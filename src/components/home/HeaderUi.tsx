'use client';

import Link from 'next/link';
import { MessageCircleHeart } from 'lucide-react';

export default function HeaderUi() {
    return (
        <header className="w-full py-4 px-8 bg-white/90 backdrop-blur-sm shadow-sm flex justify-between items-center sticky top-0 z-50">
            <div className="flex items-center gap-2 text-emerald-600 font-extrabold text-2xl">
                <MessageCircleHeart className="w-6 h-6" />
                ChatBot Web
            </div>

            <nav className="flex gap-6 text-gray-600 font-medium">
                <Link href="/" className="hover:text-emerald-600 transition">หน้าแรก</Link>
                <Link href="/chat" className="hover:text-emerald-600 transition">เริ่มแชท</Link>
                <Link href="/login" className="hover:text-emerald-600 transition">เข้าสู่ระบบ</Link>
            </nav>
        </header>
    );
}
