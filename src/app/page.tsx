'use client';

import Link from 'next/link';
import HeaderUi from '../components/home/HeaderUi';
import FeaturesUi from '../components/home/FeaturesUi';
import FooterUi from '../components/home/FooterUi';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800">
      <HeaderUi />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-emerald-600 drop-shadow-sm">
          ยินดีต้อนรับสู่ ChatBot Web 🤖
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
          คุยกับบอทสุดฉลาดในสไตล์ของคุณ
          สนุก เป็นกันเอง และพร้อมเรียนรู้จากทุกคำถาม 💬
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/chat"
            className="px-6 py-3 bg-emerald-500 text-white rounded-xl shadow-md hover:bg-emerald-600 hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            เริ่มแชทบอท 💚
          </Link>

          <Link
            href="/login"
            className="px-6 py-3 bg-white border border-emerald-400 text-emerald-600 rounded-xl shadow hover:bg-emerald-50 transition-transform transform hover:-translate-y-1"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </section>

      <FeaturesUi />
      <FooterUi />
    </main>
  );
}
