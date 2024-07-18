import React from "react";

const TryMcqSkeleton = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {items.map((item: any) => {
        return (
          <div
            key={item}
            className="flex flex-col justify-center items-center animate-pulse h-[100px] px-[150px] rounded-md bg-gray-100"
          ></div>
        );
      })}
    </>
  );
};

export default TryMcqSkeleton;
