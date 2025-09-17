import React, { useState, useEffect } from "react";
import WindowHeader from "./components/common/WindowHeader";
import MenuBar from "./components/common/MenuBar";
import StatusBar from "./components/common/StatusBar";
import LabCard from "./components/lab/LabCard";
import FolderView from "./components/layout/FolderView";
import { labs } from "./data/labs";

export default function App() {
    useEffect(() => {
        document.title = "React Lab Collection";
    }, []);

    const [isMaximized, setIsMaximized] = useState(false);

    const handleClose = () => {
        alert("Закрити вікно");
    };

    const handleMinimize = () => {
        alert("Згорнути");
    };

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <div className="min-h-screen bg-teal-600 p-2 font-mono">
            <div
                className={`bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 ${
                    isMaximized ? "h-screen" : "max-w-6xl mx-auto mt-8"
                } flex flex-col`}
            >
                <WindowHeader
                    title="Збірник лабораторних робіт - React"
                    onClose={handleClose}
                    onMinimize={handleMinimize}
                    onMaximize={handleMaximize}
                />

                <MenuBar />

                <FolderView>
                    {labs.map((lab) => (
                        <LabCard
                            key={lab.id}
                            title={lab.title}
                            description={lab.description}
                            githubUrl={lab.githubUrl}
                            vercelUrl={lab.vercelUrl}
                            icon={lab.icon}
                        />
                    ))}
                </FolderView>

                <StatusBar itemsCount={labs.length} />
            </div>
        </div>
    );
}
