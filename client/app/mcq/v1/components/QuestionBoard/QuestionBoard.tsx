import React, { useEffect, useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";
import LevelHeading from "./LevelHeading";
import QuestionItems from "./QuestionItems";
import QuestionBoardSkeleton from "./QuestionBoardSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import { IoIosClose } from "react-icons/io";
// import { indigo } from '@mui/material/colors'



const QuestionBoard = ({
  questions,
  questionNo,
  setQuestionNo,
  loading,
  error,
  handleClose,
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
  }, [questions, medium, advance]);

  return (
    <div className={`bg-white gap-0 flex-col flex-grow-1  w-[350px] h-[92vh]`}>
      <div className="w-full text-gray-500 text-center px-2 py-[10px] border border-indigo-300 border-t-0 border-l-0 border-r-0 border-b-1 flex items-center font-bold">
        <div className="w-[fit-content] bg-indigo-100 border-indigo-300 cursor-pointer text-indigo-800 hover:bg-indigo-100 p-1 border rounded-md sm:flex max-sm:flex md:flex max-md:flex lg:hidden xl:hidden 2xl:hidden">
          <IoIosClose size={20} onClick={handleClose} />
        </div>
        <div className="flex-1 justify-center items-center flex">
          <IoClipboardOutline size={20} />
          &nbsp; Question Board
        </div>
      </div>
      <div className="pb-5 mt-2 sm:h-[90vh] max-sm:h-[90vh] md:h-[90vh] max-md:h-[90vh] lg:h-[86vh] xl:h-[86vh] 2xl:h-[86vh] overflow-y-auto px-2">
        <div className="w-full flex flex-row gap-2 rounded-md shadow-lg hover:shadow-xl border border-indigo-300 px-5 flex-wrap py-5">
          {Object.values(error).toString().replaceAll(",", "") === "" ? (
            !loading ? (
              questions.length > 0 ? (
                questions.map((item: any, index: number) => {
                  return (
                    <>
                      <LevelHeading
                        key={`key-at-levelheading-at-mcq-question-for-question-board-${index}-levelheading`}
                        index={index}
                        item={item}
                        medium={medium}
                        advance={advance}
                      />
                      <QuestionItems
                        key={`key-at-questionboard-for-question-items-${index}-${questionNo}-${item._id}`}
                        index={index}
                        item={item}
                        questionNo={questionNo}
                        setQuestionNo={setQuestionNo}
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
              Error ! Can not Load questions...!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBoard;
