import React from "react";

const LabCard = ({ title, description, githubUrl, vercelUrl, icon }) => (
    <div className="bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 p-4 hover:bg-gray-100 cursor-pointer">
        <div className="flex items-start gap-3">
            <div className="text-2xl">{icon}</div>
            <div className="flex-1">
                <h3 className="font-bold text-sm mb-2">{title}</h3>
                <p className="text-xs text-gray-700 mb-3">{description}</p>
                <div className="flex gap-2">
                    <button
                        onClick={() => window.open(githubUrl, "_blank")}
                        className="bg-gray-300 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 px-3 py-1 text-xs hover:bg-gray-200 active:border-t-gray-600 active:border-l-gray-600 active:border-r-gray-100 active:border-b-gray-100"
                    >
                        📁 GitHub
                    </button>
                    <button
                        onClick={() => window.open(vercelUrl, "_blank")}
                        className="bg-gray-300 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 px-3 py-1 text-xs hover:bg-gray-200 active:border-t-gray-600 active:border-l-gray-600 active:border-r-gray-100 active:border-b-gray-100"
                    >
                        🌐 Demo
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default LabCard;
