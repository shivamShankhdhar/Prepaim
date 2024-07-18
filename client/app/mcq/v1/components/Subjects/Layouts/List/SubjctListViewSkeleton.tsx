import React from "react";

const SubjctListViewSkeleton = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {items.map((item: any) => {
        <div className="w-full flex flex-row flex-wrap gap-2 bg-white rounded-md">
          <div className="flex-1 animate-pulse bg-gray-100 py-4"></div>
          <div className="w-[100px] animate-pulse bg-gray-100 py-4"></div>
          <div className="w-[100px] animate-pulse bg-gray-100 py-4"></div>
        </div>;
      })}
    </>
  );
};

export default SubjctListViewSkeleton;
