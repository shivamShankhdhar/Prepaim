import React from "react";

const AnswerItemSkeleton = () => {
  const items = [1, 2, 3, 4];
  return (
    <>
      {items.map((item) => {
        return (
          <div className="bg-gray-100 w-[49%] animate-pulse py-4 h-10 rounded-md"></div>
        );
      })}
    </>
  );
};

export default AnswerItemSkeleton;
