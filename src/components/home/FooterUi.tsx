'use client';

export default function FooterUi() {
    return (
        <footer className="w-full py-6 bg-white border-t text-center text-gray-500 text-sm mt-10">
            © {new Date().getFullYear()} ChatBot Web 💚 สร้างด้วยความรักโดยทีมของคุณ
        </footer>
    );
}
