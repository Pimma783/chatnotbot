import React from 'react';

export default function LoadingIndicator() {
    return (
        <div className="flex justify-start">
            <div className="max-w-xs p-3 rounded-xl shadow-md bg-white text-gray-800 rounded-tl-none border border-gray-200">
                <div className="animate-pulse flex space-x-2">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
