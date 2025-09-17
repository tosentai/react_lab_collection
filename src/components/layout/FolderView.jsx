import React from "react";

const FolderView = ({ children }) => (
    <div className="bg-white border-2 border-t-gray-600 border-l-gray-600 border-r-gray-100 border-b-gray-100 m-2 p-4 flex-1 overflow-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">{children}</div>
    </div>
);

export default FolderView;
