import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderUi from "@/components/home/HeaderUi";
import FooterUi from "@/components/home/FooterUi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatBot Web",
  description: "เว็บแชทบอทด้วย Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] via-[#1a0000] to-[#000000] text-white`}
      >
        {/* ✅ Header อยู่บน */}
        <HeaderUi />

        {/* ✅ เนื้อหาหลัก: ทำให้ footer อยู่ล่างเสมอ */}
        <main className="flex-1 flex flex-col justify-center w-full">
          {children}
        </main>

        {/* ✅ Footer อยู่ล่าง */}
        <FooterUi />
      </body>
    </html>
  );
}
