import React from "react";

const BlogCategorySkeleton = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex gap-2">
      {items.map((item) => (
        <div
          key={`key-for-blog-category-skeleton-${item}`}
          className="w-[200px] py-2 rounded-md bg-gray-100 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default BlogCategorySkeleton;
