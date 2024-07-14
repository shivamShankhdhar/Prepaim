import React from "react";

const SubjectListSkeleton = () => {
  const items = [1, 2, 3, 4];
  return (
    <div className="w-full flex flex-col px-2 py-2 mt-2 rounded-md gap-1 justify-center items-center bg-white h-[fit-content]">
      {items.map((item: any) => {
        return (
          <div
            key={item}
            className="flex justify-between flex-row h-10 items-center w-full gap-1"
          >
            <div className="h-10 w-[80%] bg-gray-100 animate-pulse rounded-sm"></div>
            <div className="flex h-10 w-[20%] gap-1 flex-row">
              <div className="h-10 w-[50%] flex bg-gray-100 justify-between items-center animate-pulse rounded-sm"></div>
              <div className="h-10 w-[50%] flex bg-gray-100 justify-between items-center animate-pulse rounded-sm"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubjectListSkeleton;
