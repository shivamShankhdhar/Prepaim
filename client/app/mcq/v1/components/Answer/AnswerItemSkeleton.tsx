import React from "react";

const AnswerItemSkeleton = () => {
  const items = [1, 2, 3, 4];
  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={`${item}`}
            className="bg-gray-100  sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] animate-pulse py-4 h-10 rounded-md"
          ></div>
        );
      })}
    </>
  );
};

export default AnswerItemSkeleton;
