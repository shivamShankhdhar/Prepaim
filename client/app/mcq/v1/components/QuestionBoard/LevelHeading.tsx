import React from "react";

const LevelHeading = ({ index, item, medium, advance }: any) => {
  return (
    <>
      {index === 0 && item.level === "a" && (
        <div className="flex w-full px-2 rounded-[5px] font-[13px] justify-center items-center bg-purple-400 border border-purple-900 mb-2 text-purple-50 mt-0">
          BASIC
        </div>
      )}
      {index === medium && item.level === "b" && (
        <div className="flex w-full px-2 rounded-[5px]  font-[13px] justify-center items-center bg-yellow-500 border border-[#F49D1A] text-purple-50 mb-2 mt-2">
          MEDIUM
        </div>
      )}
      {index === advance && item.level === "c" && (
        <div className="flex w-full px-2 rounded-[5px]  font-[13px] justify-center items-center bg-rose-400 border border-rose-700 text-rose-50 mb-2 mt-2">
          ADVANCE
        </div>
      )}
    </>
  );
};

export default LevelHeading;
