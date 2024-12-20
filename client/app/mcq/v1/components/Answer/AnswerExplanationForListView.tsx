import Loader from "@/app/components/Global/Loader";
import React, { useEffect, useState } from "react";

const AnswerExplanationForListView = ({
  question,
  loading,
  clickedId,
  rightOptionIndex,
}: any) => {
  const rightAnswerOptionSuffix = ["A", "B", "C", "D"];

  const [isAnswerExplanationOpen, setIsAnswerExplanationOpen] = useState(false);

  useEffect(() => {
    if (clickedId !== "" && clickedId === question._id) {
      setIsAnswerExplanationOpen(true);
    } else {
      setIsAnswerExplanationOpen(false);
    }
  }, [clickedId, question._id]);

  // useEffect(() => {
  //   if (clickedToCloseId !== "" && clickedToCloseId === question._id) {
  //     setIsAnswerExplanationOpen(false);
  //   }
  // }, [clickedId, question._id]);

  return (
    <>
      {isAnswerExplanationOpen && (
        <div className="flex flex-col px-5 py-1 max-h-auto min-h-[50px] rounded-md border border-purple-200 bg-white text-purple-800 w-full">
          {/* <div className="border flex border-dotted gap-1 py-1 border-purple-800 border-t-0 border-b-1 border-r-0 border-l-0 text-gray-600">
            Answer
          </div> */}
          <div className="w-full">
            <>
              {question?.answer
                // .filter((i: any) => i.isTrue === true)
                .map((item: any, index: any) => {
                  return (
                    <>
                      {item.isTrue && (
                        <div
                          key={`${item.ans}-${index}`}
                          className="flex  flex-wrap py-2 "
                        >
                          <div className="font-semibold">Right Answer :</div>
                          &nbsp;
                          <div className="w-[fit-content] ">
                            {`Option (${rightAnswerOptionSuffix[index]}) - `}
                            {item.ans}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
            </>
            <>
              {loading ? (
                <Loader text={"Loading Explanation..."} size={25} />
              ) : (
                question?.explanation.map((explanation: any, index: number) => {
                  return (
                    <div
                      key={`${explanation}-${index}`}
                      className="border flex flex-wrap border-dotted py-1 border-purple-800 border-t-1 border-b-0 border-r-0 border-l-0 "
                    >
                      <div className="font-semibold">Explanation :</div>
                      <div className="min-w-[fit-content] max-w-full">
                        {explanation.explanation}
                      </div>
                    </div>
                  );
                })
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswerExplanationForListView;
