import React from "react";
import QuestionLevelSkeleton from "@/app/components/QuestionLevel/QuestionLevelSkeleton";
import AnswerItemSkeleton from "../Answer/AnswerItemSkeleton";

const QuestionSkeleton = ({ requestedPage }: any) => {
  return (
    <div
      className={` bg-white mt-2 shadow-md rounded-md border border-indigo-200 mx-auto mt- px-5 items-center ${
        requestedPage !== "Test-Prepration-Page"
          ? "sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] gap-2"
          : "w-full"
      }`}
    >
      <QuestionLevelSkeleton />
      <div className="w-full flex justify-center items-center mb-2">
        <div
          className={`rounded-md animate-pulse bg-gray-100 py-5 px-5 w-full flex`}
        ></div>
      </div>
      <hr className="text-indigo-800 bg-indigo-800 animate-pulse" />
      {/* answers */}
      <div className="flex justify-center items-center py-5 gap-2 text-gray-700  flex-wrap ">
        <AnswerItemSkeleton />
      </div>
      {requestedPage !== "list-view" && (
        <div className="flex flex-col justify-between py-2">
          <div className="flex w-full justify-between">
            <div className="bg-gray-100 animate-pulse py-4 rounded-sm w-[100px] disabled:text-gray-400 disabled:cursor-not-allowed "></div>

            <div className="bg-gray-100 animate-pulse py-4 rounded-sm w-[100px] disabled:text-gray-400 disabled:cursor-not-allowed "></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionSkeleton;
