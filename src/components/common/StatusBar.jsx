import React from "react";

const StatusBar = ({ itemsCount }) => (
    <div className="bg-gray-200 border-t-2 border-gray-100 p-1">
        <div className="flex justify-between items-center text-xs">
            <div className="flex gap-4">
                <span>Готово</span>
                <span>Елементів: {itemsCount}</span>
            </div>
            <div className="flex items-center gap-2">
                <span>{new Date().toLocaleDateString("uk-UA")}</span>
                <span>
                    {new Date().toLocaleTimeString("uk-UA", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </span>
            </div>
        </div>
    </div>
);

export default StatusBar;
