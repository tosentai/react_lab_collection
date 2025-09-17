import React from "react";

const WindowHeader = ({ title, onClose, onMinimize, onMaximize }) => (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-300 border border-blue-200 flex items-center justify-center text-xs">
                📁
            </div>
            <span className="text-sm font-normal">{title}</span>
        </div>
        <div className="flex gap-1">
            <button
                onClick={onMinimize}
                className="w-6 h-5 bg-gray-300 border-t border-l border-gray-100 border-r border-b border-gray-600 hover:bg-gray-200 flex items-center justify-center text-xs"
            >
                _
            </button>
            <button
                onClick={onMaximize}
                className="w-6 h-5 bg-gray-300 border-t border-l border-gray-100 border-r border-b border-gray-600 hover:bg-gray-200 flex items-center justify-center text-xs"
            >
                □
            </button>
            <button
                onClick={onClose}
                className="w-6 h-5 bg-gray-300 border-t border-l border-gray-100 border-r border-b border-gray-600 hover:bg-gray-200 flex items-center justify-center text-xs"
            >
                ✕
            </button>
        </div>
    </div>
);

export default WindowHeader;
