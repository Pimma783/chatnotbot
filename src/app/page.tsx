'use client';

import Header from '../components/HeaderUi/page';
import MessageList from '../components/MessageList/page';
import ChatInput from '../components/ChatInputUi/page';
import { useChatStore } from '../store/chatbotstore';

export default function ChatPage() {
  // ดึง State และฟังก์ชันมาจาก Store ที่เราสร้างไว้
  const { messages, isLoading, sendMessage } = useChatStore();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* 1. Component ส่วนหัว */}
      <Header />

      {/* 2. Component ส่วนแสดงข้อความ */}
      <MessageList messages={messages} isLoading={isLoading} />

      {/* 3. Component ส่วน Input */}
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}
