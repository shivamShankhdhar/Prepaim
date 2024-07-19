import Loader from "@/app/components/Global/Loader";
import React, { useEffect, useState } from "react";

const AnswerExplanation = ({ question, loading }: any) => {
  return (
    <div className="flex flex-col px-5 py-1 max-h-auto min-h-[50px] rounded-md border border-purple-200 bg-white w-full">
      <div className="uppercase border border-dotted border-purple-200 border-b-1 border-t-0 border-r-0 border-l-0 py-2 font-semibold">
        Answer
      </div>
      <div className="w-full">
        {question?.answer
          .filter((i: any) => i.isTrue === true)
          .map((item: any, index: any) => {
            return (
              <div
                key={`${item.ans}-${index}`}
                className="text-gray-600 py-2 text-[13px] flex"
              >
                <div className=" text-black uppercase ">
                  Right Answer <span className="font-semibold">:</span>{" "}
                </div>
                &nbsp;
                <div className="font-semibold flex-1 text-purple-800 ">
                  {item.ans}
                </div>
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
                className="border flex border-dotted gap-1 py-1 text-[13px] border-purple-200 border-t-1 border-b-0 border-r-0 border-l-0 text-gray-600"
              >
                <div className="text-black">EXPLANATION :</div>
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
