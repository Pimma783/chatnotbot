'use client';

export default function FeaturesUi() {
    const features = [
        {
            title: 'คุยได้ทุกเรื่อง',
            desc: 'ไม่ว่าจะถามเล่น ถามจริง หรืออยากระบาย บอทก็พร้อมรับฟังเสมอ 💬',
            icon: '🧠',
            color: 'bg-emerald-100 text-emerald-600',
        },
        {
            title: 'ฉลาดขึ้นทุกวัน',
            desc: 'ระบบ AI ที่เรียนรู้จากการสนทนา เพื่อให้ตอบได้ดีขึ้นในแบบของคุณ 📈',
            icon: '⚡',
            color: 'bg-lime-100 text-lime-600',
        },
        {
            title: 'ใช้งานง่ายสุด ๆ',
            desc: 'แค่เปิดเว็บ กดเริ่มแชท ก็สนุกได้ทันทีโดยไม่ต้องติดตั้งแอป 💡',
            icon: '💬',
            color: 'bg-green-100 text-green-600',
        },
    ];

    return (
        <section className="py-16 px-6 bg-gradient-to-t from-emerald-50 to-white w-full">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">
                จุดเด่นของ ChatBot Web 🌿
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
                    >
                        <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full text-3xl ${f.color}`}>
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-emerald-700">{f.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
