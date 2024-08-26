import React from "react";
import { CiImageOn } from "react-icons/ci";
const PostItemSkeleton = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={`skeleton-post-item-${item}`}
          className="flex gap-2 sm:flex-col max-sm:flex-col md:flex-col max-md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row "
        >
          <div className="sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[300px] xl:w-[300px] h-[300px]  animate-pulse">
            <CiImageOn size={400} />
          </div>

          <div className="flex-1 h-[300px] bg-purple-200 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default PostItemSkeleton;
