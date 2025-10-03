'use client';
import React, { useRef, useEffect } from 'react';
import { Message } from '../../store/chatbotstore';
import MessageBubble from '../MessageBubble/page';
import LoadingIndicator from '../Loading/page';

interface MessageListProps {
    messages: Message[];
    isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isLoading]);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
                <MessageBubble key={index} message={msg} />
            ))}

            {isLoading && <LoadingIndicator />}

            <div ref={messagesEndRef} />
        </div>
    );
}
