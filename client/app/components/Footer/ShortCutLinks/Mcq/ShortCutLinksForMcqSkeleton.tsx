import React from "react";

const ShortCutLinksForMcqSkeleton = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-full flex flex-col gap-2">
      {items.map((item: any) => {
        return (
          <div
            key={`key-at-shortcut-link-for-mcq-skeleton-${item}`}
            className="w-full flex flex-row flex-wrap gap-2 py-2 bg-gray-100 animate-pulse px-[50%] rounded-md"
          ></div>
        );
      })}
    </div>
  );
};

export default ShortCutLinksForMcqSkeleton;
