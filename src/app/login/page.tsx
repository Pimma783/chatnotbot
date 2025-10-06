"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#141212] via-[#1a0000] to-[#ff0000]/20 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1b1b1b]/90 rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">
                {/* LEFT - FORM */}
                <div className="p-10 flex flex-col justify-center">
                    <h1 className="text-3xl font-extrabold mb-6 text-white">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 mb-8">
                        Sign in to continue to your dashboard
                    </p>

                    <form className="space-y-5">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] text-white border border-gray-700 focus:border-red-500 focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] text-white border border-gray-700 focus:border-red-500 focus:outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-all"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    <p className="text-gray-400 text-sm mt-6 text-center">
                        Don’t have an account?{" "}
                        <a href="#" className="text-red-500 hover:text-red-400 font-medium">
                            Sign up
                        </a>
                    </p>
                </div>

                {/* RIGHT - 3D IMAGE */}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-bl from-[#ff0000]/30 to-[#141212]">
                    <Image
                        src="/images/3d-avatar.png"
                        alt="3D Avatar"
                        width={400}
                        height={400}
                        className="rounded-2xl drop-shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
}
