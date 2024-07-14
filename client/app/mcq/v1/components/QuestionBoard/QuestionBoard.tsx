import React, { useEffect, useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";
import LevelHeading from "./LevelHeading";
import QuestionItems from "./QuestionItems";
import QuestionBoardSkeleton from "./QuestionBoardSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
// import { green } from '@mui/material/colors'

const QuestionBoard = ({
  questions,
  questionNo,
  setQuestionNo,
  loading,
  error,
  setIsCommentSection,
  setIsAnswerExplanationOpen,
}: any) => {
  const [medium, setMedium] = useState(0);
  const [advance, setAdvance] = useState(0);

  useEffect(() => {
    for (let index = 0; index < questions.length; index++) {
      if (medium === 0 && questions[index].level === "b") {
        setMedium(index);
        break;
      }
    }
    for (let index = 0; index < questions.length; index++) {
      if (advance === 0 && questions[index].level === "c") {
        setAdvance(index);
        break;
      }
    }
  }, [questions]);

  return (
    <div
      className={`bg-white sticky gap-0 top-[0px]  border-r-0 border-t-0 border-b-0 border border-gray-200 flex-col flex-grow-1  w-[350px]`}
      id="question_board"
    >
      <div className="w-full text-gray-500 text-center px-2 py-[10px] border border-t-0 border-l-0 border-r-0 flex items-center justify-center font-bold">
        <IoClipboardOutline size={20} />
        &nbsp; Question Board
      </div>
      <div className="pb-5 mt-2  overflow-y-auto px-2">
        <div className="w-full flex flex-row gap-2 sans-serif bg-purple-50 rounded-md border border-purple-300 px-5 flex-wrap py-5">
          {Object.values(error).toString().replaceAll(",", "") === "" ? (
            !loading ? (
              questions.length > 0 ? (
                questions.map((item: any, index: number) => {
                  return (
                    <>
                      <LevelHeading
                        index={index}
                        item={item}
                        medium={medium}
                        advance={advance}
                      />
                      <QuestionItems
                        index={index}
                        item={item}
                        questionNo={questionNo}
                        setQuestionNo={setQuestionNo}
                        setIsCommentSection={setIsCommentSection}
                        setIsAnswerExplanationOpen={setIsAnswerExplanationOpen}
                      />
                    </>
                  );
                })
              ) : (
                <ErrorMessage
                  text={`No questions found.`}
                  isButton={false}
                  isBg={false}
                />
              )
            ) : (
              <QuestionBoardSkeleton />
            )
          ) : (
            <div className="text-rose-600 w-full text-center">
              Error ! Can't Load questions...!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBoard;
