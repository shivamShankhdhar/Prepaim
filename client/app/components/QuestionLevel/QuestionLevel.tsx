import React from "react";

const QuestionLevel = ({ level, isText }: any) => {
  return (
    <div className="flex gap-1 py-1 border border-dashed border-b-1 border-t-0 border-r-0 border-l-0 text-[12px] items-center">
      {isText && <div className="font-semibold w-[fit-content]">Level :</div>}
      {level === "a" && (
        <div className="bg-purple-500 w-[fit-content] text-purple-50 px-3 rounded-full">
          basic
        </div>
      )}

      {level === "b" && (
        <div className="bg-yellow-500 w-[fit-content] text-yellow-50 px-3 py-1/2  rounded-full">
          medium
        </div>
      )}

      {level === "c" && (
        <div className="bg-rose-600 w-[fit-content] text-rose-50 px-3 py-1/2  rounded-full">
          advance
        </div>
      )}
    </div>
  );
};

export default QuestionLevel;
