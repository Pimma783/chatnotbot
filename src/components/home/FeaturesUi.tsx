"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const newsList = [
    {
        title: "ผู้บริหาร ม.แม่โจ้ ร่วมแสดงความยินดีกับผู้ว่าราชการจังหวัดเชียงใหม่",
        date: "07 ตุลาคม 2568",
        img: "/images/1.png", // อัปโหลดรูปภาพของข่าวนี้
    },
    {
        title: "คณะกรรมการส่งเสริมฯ มอบทุนสำหรับหลักสูตรประกาศนียบัตรพนักงานให้การ",
        date: "03 ตุลาคม 2568",
        img: "/images/2.png",
    },
    {
        title: "ม.แม่โจ้ จับมือ บริษัท โทรคมนาคมแห่งชาติ ร่วมพัฒนาระบบเครือข่าย",
        date: "02 ตุลาคม 2568",
        img: "/images/3.png",
    },
];

export default function NewsUi() {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#001100] via-[#002200] to-[#001100] py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center mb-14 px-4"
            >
                <h2 className="text-4xl font-bold text-white mb-2">ข่าวสารและกิจกรรม</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-6 md:px-12">
                {newsList.map((news, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            ease: "easeOut",
                        }}
                        className="bg-[#011100]/80 border border-green-700/20 backdrop-blur-lg 
                       rounded-2xl overflow-hidden hover:border-green-500/40 hover:shadow-green-600/30 
                       hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={news.img}
                                alt={news.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-lg font-semibold text-white mb-2">{news.title}</h3>
                            <p className="text-gray-400 text-sm">{news.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
