"use client";

import { useState } from "react";

// กำหนด Type ของข้อความ สามารถนำไปใช้ที่อื่นได้
export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

// Custom Hook ที่รวบรวม State และ Logic ทั้งหมด
export function useChatStore() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "สวัสดีครับ! ผมคือ MJU Chatbot ผู้ช่วยตอบคำถามเกี่ยวกับภาควิชาวิทยาการคอมพิวเตอร์ ม.แม่โจ้ คุณมีคำถามอะไรไหมครับ?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // ฟังก์ชันสำหรับส่งข้อความ (แยก Logic มาจาก handleSubmit เดิม)
  const sendMessage = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: prompt };

    // 1. เพิ่มข้อความผู้ใช้ และตั้งค่าสถานะเป็นกำลังโหลด
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 2. เรียก API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      // 3. เพิ่มคำตอบจาก Chatbot
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        role: "assistant",
        content: "ขออภัยครับ เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่อีกครั้ง",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // 4. สิ้นสุดการโหลด
      setIsLoading(false);
    }
  };

  // คืนค่า State และฟังก์ชันเพื่อให้ Component นำไปใช้
  return {
    messages,
    isLoading,
    sendMessage,
  };
}
