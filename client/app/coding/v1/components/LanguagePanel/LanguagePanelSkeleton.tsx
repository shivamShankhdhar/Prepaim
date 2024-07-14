import React from "react";

const LanguagePanelSkeleton = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1">
      {items.map((item) => {
        return <div className="h-11 w-full bg-gray-200 animate-pulse"></div>;
      })}
    </div>
  );
};

export default LanguagePanelSkeleton;
