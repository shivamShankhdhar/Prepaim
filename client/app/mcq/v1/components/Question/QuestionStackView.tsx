"use client";
import React, { useState } from "react";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import QuestionSkeleton from "./QuestionSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import Link from "next/link";
import { useParams } from "next/navigation";
import WrongQuestionSelectedInURL from "./WrongQuestionSelectedInURL";
import { Button } from "@mui/material";
import QuestionLevel from "@/app/components/QuestionLevel/QuestionLevel";
import AnswerItem from "../Answer/AnswerItem";
import { IoIosClose } from "react-icons/io";
import { useCookies } from "next-client-cookies";
interface Props {
  questions: any;
  chapter: any;
  error: String;
  loading: boolean;
  pageMode?: String;
}

const QuestionStackView = ({
  questions,
  chapter,
  error,
  loading,
  pageMode,
}: Props) => {
  const cookies = useCookies();

  const { subject } = useParams();
  const { question } = useParams();
  const questionNo = Number(question);

  return (
    <>
      {Object.values(error).toString() === "" ? (
        loading === false ? (
          questions.length > 0 ? (
            questionNo > 0 && questionNo < questions.length + 1 ? (
              <div className=" bg-white px-5 py-2 shadow-lg rounded-md mx-auto mt-2 items-center ">
                {/* question hardship level  */}
                <div className="w-full mt-2 h-5 flex justify-end items-center">
                  <QuestionLevel
                    level={questions[questionNo - 1]?.level}
                    isText={true}
                  />
                </div>

                {/* question component  */}
                <div className="mt-3 py-0">
                  <div className="text-lg text-gray-600">
                    Q {questionNo}.
                    {questions.length > 0 &&
                      questions[questionNo - 1]?.question}
                    ?
                  </div>
                </div>
                {/* question guide  */}
                {cookies.get("isQuestionGuideClosed") !== "true" && (
                  <div className="bg-purple-100 border border-purple-300 text-purple-800 rounded-sm flex justify-between items-center gap-2 px-5 py-1 text-[0.8rem] hover:cursor-pointer animate-pulse hover:animate-none">
                    <div className="flex-1 ">
                      Try clicking an answer to check whether it is right or
                      wrong
                    </div>
                    <div
                      title="Close"
                      className="flex cursor-pointer justify-center items-center h-4 w-4 rounded-full bg-purple-700 text-white"
                      onClick={() =>
                        cookies.set("isQuestionGuideClosed", "true")
                      }
                    >
                      <IoIosClose size={20} />
                    </div>
                  </div>
                )}

                {/* answers */}
                <div
                  className={`flex ${
                    pageMode === "stack-page-mode" &&
                    "border border-dashed border-b-1 border-t-0 border-r-0 border-l-0"
                  }  justify-center items-center pb-5 pt-3 gap-2  max-sm:flex-col text-gray-700  max-md:flex-wrap md:flex-wrap`}
                >
                  {questions[questionNo - 1]?.answer.map(
                    (ans: any, index: number) => {
                      return (
                        <AnswerItem
                          key={`ket-prop-at-question-answer-item-${index}-${ans}`}
                          questions={questions}
                          questionNo={questionNo - 1}
                          answer={ans.ans}
                          index={index}
                          isTrue={ans.isTrue}
                        />
                      );
                    }
                  )}
                </div>
                {pageMode === "stack-page-mode" && (
                  <div className="flex flex-col justify-between py-2">
                    <div className="flex w-full justify-between py-1 ">
                      <Button
                        href={`/mcq/v1/QuestionStackViewPage/${subject}/${chapter}/${
                          questionNo - 1
                        }`}
                        className="bg-gray-200 focus:ring-4 focus:outline-none flex gap-1 justify-center items-center focus:ring-purple-300 text-gray-600 hover:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed py-1"
                        disabled={questionNo === 1}
                        // onClick={handlePrevQuestion}
                      >
                        <IoIosArrowDropleft size={20} />
                        Prev
                      </Button>

                      <Button
                        sx={{
                          "&.Mui-disabled": {
                            background: "#eaeaea",
                            color: "#c0c0c0",
                          },
                        }}
                        href={`/mcq/v1/QuestionStackViewPage/${subject}/${chapter}/${
                          questionNo + 1
                        }`}
                        className=" bg-purple-900 focus:ring-4 flex justify-center items-center focus:outline-none focus:ring-purple-300 hover:bg-purple-950 text-white disabled:text-white disabled:bg-purple-50 gap-1 disabled:cursor-not-allowed py-1"
                        disabled={questionNo === questions.length}
                        // onClick={handleNextQuestion}
                      >
                        Next <IoIosArrowDropright size={20} />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <WrongQuestionSelectedInURL questionNo={questionNo} />
            )
          ) : (
            <ErrorMessage
              text={`No questions found for chapter - ${chapter
                .toString()
                .replaceAll("-", " ")}`}
              isButton={false}
              isBg={false}
            />
          )
        ) : (
          <QuestionSkeleton requestedPage="grid-view" />
        )
      ) : (
        <ErrorMessage isBg={false} isButton={true} text={error} />
      )}
    </>
  );
};
export default QuestionStackView;
