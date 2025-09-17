import React from "react";

const MenuBar = () => (
    <div className="bg-gray-200 border-b border-gray-600 px-1">
        <div className="flex">
            {["Файл", "Правка", "Вид", "Довідка"].map((item, index) => (
                <button
                    key={index}
                    className="px-3 py-1 text-sm hover:bg-blue-600 hover:text-white"
                >
                    {item}
                </button>
            ))}
        </div>
    </div>
);

export default MenuBar;
