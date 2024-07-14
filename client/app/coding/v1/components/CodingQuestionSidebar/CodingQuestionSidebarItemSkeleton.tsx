import React from "react";

const CodingQuestionSidebarItemSkeleton = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col gap-1">
      {items.map((item: any) => {
        return <div key={item} className="h-8 bg-gray-200 animate-pulse"></div>;
      })}
    </div>
  );
};

export default CodingQuestionSidebarItemSkeleton;
