import React from 'react';
import { Message } from '../../store/chatbotstore'; // Import  มาจาก Store

interface MessageBubbleProps {
    message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
    const isUser = message.role === 'user';

    const bubbleClasses = `max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl shadow-md ${isUser
            ? 'bg-green-500 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
        }`;

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={bubbleClasses}>
                <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
        </div>
    );
}
