import React from "react";
import { CiImageOn } from "react-icons/ci";
const PostItemSkeleton = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex gap-2 flex-wrap">
      {items.map((item) => (
        <div
          key={`skeleton-post-item-${item}`}
          className="flex gap-2 sm:flex-col max-sm:flex-col md:flex-col max-md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row rounded-md animate-pulse "
        >
          <div className="sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[300px] xl:w-[300px] h-[300px] animate-pulse">
            <CiImageOn size={300} />
          </div>

          <div className="w-full h-[300px] flex flex-col gap-1">
            <div className="flex w-full bg-purple-200 animate-pulse py-6"></div>
            <div className="flex w-full bg-purple-200 animate-pulse py-10"></div>
            <div className="flex w-full bg-purple-200 animate-pulse py-6 ">
              <div className="w-[150px] py-4 bg-purple-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostItemSkeleton;
