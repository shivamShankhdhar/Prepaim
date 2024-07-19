import React from "react";
import { FaRegImage } from "react-icons/fa";
const SubjctGridViewSkeleton = () => {
  const skeletonItems = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full flex gap-2 flex-wrap py-5 justify-center items-center">
      {skeletonItems.map((item: any) => {
        return (
          <div
            key={`key-for-gridlayout-skeleton-${item}`}
            className="flex w-[300px] border border-purple-400 rounded-md  flex-col gap-2 shadow-lg px-3 py-3  justify-center items-center"
          >
            <div className="bg-gray-100 text-gray-400 flex w-[200px] h-[200px] animate-pulse rounded-full border-gray-200 justify-center items-center">
              <FaRegImage size={100} />
            </div>
            <div className="bg-gray-100 w-1/2 py-3 animate-pulse rounded-lg"></div>
            <div className="bg-gray-100 w-full py-4 animate-pulse rounded-sm"></div>
            <div className="bg-gray-100 w-full py-4 animate-pulse rounded-sm"></div>
          </div>
        );
      })}
    </div>
  );
};

export default SubjctGridViewSkeleton;
