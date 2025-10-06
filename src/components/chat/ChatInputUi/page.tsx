'use client';
import React, { useState } from 'react';

interface ChatInputProps {
    onSendMessage: (input: string) => void;
    isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSendMessage(input);
        setInput('');
    };

    return (
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
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-150 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isLoading || !input.trim()}
                >
                    ส่ง
                </button>
            </div>
        </form>
    );
}
