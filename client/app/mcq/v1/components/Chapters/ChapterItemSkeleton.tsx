import React from "react";

const ChapterItemSkeleton = () => {
  const items = [1, 2, 3, 4];
  return (
    <>
      {items.map((item: any) => {
        return (
          <div
            key={item}
            className="w-full px-2 py-2 gap-1 cursor-pointer flex justify-between items-center hover:text-purple-800 border border-b-1 border-t-0 border-l-0 border-r-0"
          >
            <div className="bg-gray-100 rounded-sm animate-pulse py-5 w-full"></div>
            <div className="bg-gray-100 rounded-sm animate-pulse py-5 w-[80px]"></div>
          </div>
        );
      })}
    </>
  );
};

export default ChapterItemSkeleton;
