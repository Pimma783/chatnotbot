'use client';

import Header from '../../components/chat/HeaderUi/page';
import MessageList from '../../components/chat/MessageList/page';
import ChatInput from '../../components/chat/ChatInputUi/page';
import { useChatStore } from '../../store/chatbotstore';

export default function ChatPage() {
    const { messages, isLoading, sendMessage } = useChatStore();

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* ส่วนหัว */}
            <Header />

            {/* ส่วนแสดงข้อความ */}
            <MessageList messages={messages} isLoading={isLoading} />

            {/* ส่วน Input */}
            <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
    );
}
