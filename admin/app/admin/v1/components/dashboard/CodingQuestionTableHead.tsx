import React from "react";

const CodingQuestionTableHead = () => {
  return (
    <div className="flex w-full flex-col gap-0">
      <div className="w-full flex py-2 gap-2 bg-gray-200 items-center px-2">
        <div className="w-[10px]">#</div>
        <div className="flex-1">Question</div>
        <div className="w-[100px] justify-center items-center flex">
          Date added
        </div>
        <div className="w-[100px] justify-center items-center flex">Level</div>
        {/* <div className="w-[50px] justify-center items-center flex">Edit</div> */}
        <div className="w-[50px] justify-center items-center flex">Delete</div>
      </div>
    </div>
  );
};

export default CodingQuestionTableHead;
