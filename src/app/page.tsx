// app/page.tsx
'use client'; // ต้องมี เพราะเราใช้ Hooks (useState, useRef)

import { useState, useRef, useEffect } from 'react';

// กำหนด Type ของข้อความ
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { 
        role: 'assistant', 
        content: 'สวัสดีครับ! ผมคือ MJU Chatbot ผู้ช่วยตอบคำถามเกี่ยวกับภาควิชาวิทยาการคอมพิวเตอร์ ม.แม่โจ้ คุณมีคำถามอะไรไหมครับ?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ฟังก์ชันสำหรับเลื่อนหน้าจอลงไปข้อความล่าสุด
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    
    // 1. เพิ่มข้อความผู้ใช้
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. เรียก API Route RAG ที่เราสร้างไว้ (/api/chat)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      // 3. เพิ่มคำตอบจาก Chatbot
      const assistantMessage: Message = { role: 'assistant', content: data.message };
      setMessages((prev) => [...prev, assistantMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage: Message = { role: 'assistant', content: 'ขออภัยครับ เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่อีกครั้ง' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-green-700 text-white p-4 shadow-md sticky top-0">
        <h1 className="text-xl font-bold">MJU CS RAG Chatbot (Demo)</h1>
        <p className="text-sm">Powered by nongPhone and Ai(all India)</p>
      </header>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl shadow-md ${
                msg.role === 'user'
                  ? 'bg-green-500 text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-xs p-3 rounded-xl shadow-md bg-white text-gray-800 rounded-tl-none border border-gray-200">
              <div className="animate-pulse flex space-x-2">
                <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200 sticky bottom-0">
        <div className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="สอบถามข้อมูลเกี่ยวกับวิทยาการคอมพิวเตอร์ ม.แม่โจ้..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-150 disabled:bg-gray-400"
            disabled={isLoading}
          >
            ส่ง
          </button>
        </div>
      </form>
    </div>
  );
}