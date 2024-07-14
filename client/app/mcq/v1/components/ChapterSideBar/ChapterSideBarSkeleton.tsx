import React from "react";

const ChapterSideBarSkeleton = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      {items.map((item: any) => {
        return (
          <div
            key={item}
            className="flex flex-col justify-center items-center animate-pulse py-4 w-full rounded-sm bg-gray-200"
          ></div>
        );
      })}
    </div>
  );
};

export default ChapterSideBarSkeleton;
