import React from "react";

const ActionBarSkeleton = () => {
  return (
    <div className=" w-full gap-1 mt-1 flex flex-col items-center ">
      <div className="flex w-full justify-center items-center max-h-auto min-h-[50px] ">
        <div className="flex gap-2 w-full sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[90%] max-lg:w-[80%] xl:w-[80%] 2xl:w-[80%]  rounded-md border  border-indigo-200 animate-pulse bg-white py-2 px-5">
          {/* answer explanation button  */}
          <div className="bg-gray-200 cursor-default rounded-sm animate-pulse w-[120px] py-4"></div>
          {/* comment button  */}
          <div className="bg-gray-200 cursor-default rounded-sm animate-pulse w-[50px] py-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ActionBarSkeleton;
