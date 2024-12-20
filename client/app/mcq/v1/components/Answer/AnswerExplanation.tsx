import Loader from "@/app/components/Global/Loader";
import React, { useEffect, useState } from "react";

const AnswerExplanation = ({ question, loading }: any) => {
  const rightAnswerOptionSuffix = ["A", "B", "C", "D"];
  return (
    <div className="flex flex-col px-5 py-1 max-h-auto min-h-[50px] rounded-md border border-purple-300 bg-white w-full text-purple-800">
      {/* <div className="border flex border-dotted gap-1 py-1 border-purple-800 border-t-0 border-b-1 border-r-0 border-l-0 text-gray-600">
            Answer
          </div> */}
      <div className="w-full flex flex-wrap">
        {/* <>
          {question?.answer
            // .filter((i: any) => i.isTrue === true)
            .map((item: any, index: any) => {
              return (
                <>
                  {item.isTrue && (
                    <div
                      key={`${item.ans}-${index}`}
                      className="flex flex-wrap py-2 "
                    >
                      <div className="font-semibold">Right Answer :</div>
                      &nbsp;
                      <div className="w-[fit-content] ">
                        {`(${rightAnswerOptionSuffix[index]}) `}
                        {item.ans}
                      </div>
                    </div>
                  )}
                </>
              );
            })}
        </> */}
        <>
          {loading ? (
            <Loader text={"Loading Explanation..."} size={25} />
          ) : (
            question?.explanation.map((explanation: any, index: number) => {
              return (
                <div
                  key={`${explanation}-${index}`}
                  className="flex flex-wrap  py-1"
                >
                  <div className="font-semibold w-full">Explanation :</div>
                  <div className="w-full">{explanation.explanation}</div>
                </div>
              );
            })
          )}
        </>
      </div>
    </div>
  );
}
 

export default AnswerExplanation;
