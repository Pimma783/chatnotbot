import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderUi from "@/components/home/HeaderUi";
import FooterUi from "@/components/home/FooterUi";
import { AuthProvider } from "@/context/AuthContext";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-white via-[#f7f9f7] to-[#e9eeea] text-gray-900`}
      >
        <AuthProvider>
          <HeaderUi />
          <main className="flex-1 flex flex-col justify-center w-full">{children}</main>
          <FooterUi />
        </AuthProvider>
      </body>
    </html>
  );
}
