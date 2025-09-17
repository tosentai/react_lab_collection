import { useState, useEffect } from "react";
import WindowHeader from "./components/common/WindowHeader";
import MenuBar from "./components/common/MenuBar";
import StatusBar from "./components/common/StatusBar";
import LabCard from "./components/lab/LabCard";
import FolderView from "./components/layout/FolderView";
import { labs } from "./data/labs";

export default function App() {
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.title = "React Lab Collection";
    }, []);

    const handleClose = () => {
        alert("Закрити вікно");
    };

    const handleMinimize = () => {
        alert("Згорнути");
    };

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const handleMouseDown = (e) => {
        if (isMaximized) return;

        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging || isMaximized) return;

        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, dragStart]);

    return (
        <div className="min-h-screen bg-teal-600 font-mono overflow-hidden">
            <div
                className={`bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 flex flex-col ${
                    isMaximized
                        ? "fixed inset-0 w-full h-full"
                        : "absolute w-4/5 max-w-4xl h-auto"
                }`}
                style={
                    !isMaximized
                        ? {
                              left: position.x,
                              top: position.y,
                              cursor: isDragging ? "grabbing" : "default",
                          }
                        : {}
                }
            >
                <div
                    onMouseDown={handleMouseDown}
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                >
                    <WindowHeader
                        title="Збірник лабораторних робіт - React"
                        onClose={handleClose}
                        onMinimize={handleMinimize}
                        onMaximize={handleMaximize}
                    />
                </div>

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
