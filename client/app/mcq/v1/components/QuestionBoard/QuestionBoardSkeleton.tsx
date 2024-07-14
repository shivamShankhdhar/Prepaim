import React from "react";

const QuestionBoardSkeleton = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex flex-col gap-3 flex-wrap w-full">
        <div className="flex justify-center items-center animate-pulse py-3 w-full rounded-sm bg-gray-200"></div>
        <div className="flex flex-row gap-2 justify-center flex-wrap items-center">
          {items.map((item: any) => {
            return (
              <div className="py-4 px-4 rounded-full justify-center bg-gray-200 animate-pulse"></div>
            );
          })}
        </div>

        <div className="flex justify-center items-center animate-pulse py-3 w-full rounded-sm bg-gray-200"></div>
        <div className="flex flex-row gap-2 justify-center flex-wrap items-center">
          {items.map((item: any) => {
            return (
              <div className="py-4 px-4 rounded-full bg-gray-200 animate-pulse"></div>
            );
          })}
        </div>

        <div className="flex justify-center items-center animate-pulse py-3 w-full rounded-sm bg-gray-200"></div>
        <div className="flex flex-row gap-2 justify-center flex-wrap items-center">
          {items.map((item: any) => {
            return (
              <div className="py-4 px-4 rounded-full bg-gray-200 animate-pulse"></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionBoardSkeleton;
