import React from "react";
import { FaRegImage } from "react-icons/fa";
const SubjctGridViewSkeleton = () => {
  const skeletonItems = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full">
      {skeletonItems.map((item: any) => {
        return (
          <div
            key={`key-for-gridlayout-skeleton-${item}`}
            className="flex w-[300px] flex-col  shadow-lg px-3 py-3 animate-pulse justify-center items-center"
          >
            <div className="bg-gray-100 w-[200px] h-[200px] animate-pulse rounded-full border-gray-200 justify-center items-center">
              <FaRegImage size={200} />
            </div>
            <div className="bg-gray-100 w-full py-4 animate-pulse rounded-sm"></div>
            <div className="bg-gray-100 w-full py-4 animate-pulse rounded-sm"></div>
          </div>
        );
      })}
    </div>
  );
};

export default SubjctGridViewSkeleton;
