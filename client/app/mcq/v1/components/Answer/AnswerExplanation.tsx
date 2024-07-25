import Loader from "@/app/components/Global/Loader";
import React, { useEffect, useState } from "react";

const AnswerExplanation = ({ question, loading }: any) => {
  return (
    <div className="flex flex-col px-5 py-1 max-h-auto min-h-[50px] rounded-md border border-purple-200 bg-white w-full">
      {/* <div className="border flex border-dotted gap-1 py-1 border-purple-600 border-t-0 border-b-1 border-r-0 border-l-0 text-gray-600">
        Answer
      </div> */}
      <div className="w-full">
        {question?.answer
          .filter((i: any) => i.isTrue === true)
          .map((item: any, index: any) => {
            return (
              <div
                key={`${item.ans}-${index}`}
                className="text-gray-600 py-2 flex"
              >
                <div className="">
                  Right Answer <span className="">:</span>{" "}
                </div>
                &nbsp;
                <div className="flex-1">{item.ans}</div>
                &nbsp;
              </div>
            );
          })}

        {loading ? (
          <Loader text={"Loading Explanation..."} size={25} />
        ) : (
          question?.explanation.map((explanation: any, index: number) => {
            return (
              <div
                key={`${explanation}-${index}`}
                className="border flex border-dotted gap-1 py-1 border-purple-600 border-t-1 border-b-0 border-r-0 border-l-0 text-gray-600"
              >
                <div className="">EXPLANATION :</div>
                <div className="flex-1">{explanation.explanation}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AnswerExplanation;
