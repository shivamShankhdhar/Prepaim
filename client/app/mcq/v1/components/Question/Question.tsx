"use client";
import React from "react";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import QuestionSkeleton from "./QuestionSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import Link from "next/link";
import { useParams } from "next/navigation";
import WrongQuestionSelectedInURL from "./WrongQuestionSelectedInURL";
import { Button } from "@mui/material";
import QuestionLevel from "@/app/components/QuestionLevel/QuestionLevel";
import AnswerItem from "../Answer/AnswerItem";

interface Props {
  questions: any;
  chapter: any;
  error: String;
  loading: boolean;
}

const Question = ({ questions, chapter, error, loading }: Props) => {
  const { subject } = useParams();
  const { question } = useParams();
  const questionNo = Number(question);
  return (
    <>
      {Object.values(error).toString() === "" ? (
        loading === false ? (
          questions.length > 0 ? (
            questionNo > 0 && questionNo < questions.length + 1 ? (
              <div className=" bg-white px-5 py-2 rounded-md mx-auto mt-2 items-center ">
                {/* question hardship level  */}
                <div className="w-full mt-2 h-5 flex justify-end items-center">
                  <QuestionLevel
                    level={questions[questionNo - 1]?.level}
                    isText={true}
                  />
                </div>

                {/* question component  */}
                <div className="mt-0 py-0 font-semibold">
                  <div className="text-lg text-gray-600">
                    Q {questionNo}.
                    {questions.length > 0 &&
                      questions[questionNo - 1]?.question}
                    ?
                  </div>
                </div>
                {/* answers */}
                <div className=" flex justify-center items-center py-5 gap-2  max-sm:flex-col text-gray-700  max-md:flex-wrap md:flex-wrap">
                  {questions[questionNo - 1]?.answer.map(
                    (ans: any, index: number) => {
                      return (
                        <AnswerItem
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
                <div className="flex flex-col justify-between py-2">
                  <div className="flex w-full justify-between py-1 ">
                    <Button
                      className="bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed py-1"
                      disabled={questionNo === 1}
                      // onClick={handlePrevQuestion}
                    >
                      <Link
                        href={`/mcq/${subject}/${chapter}/${questionNo - 1}`}
                        className="flex"
                      >
                        <IoIosArrowDropleft size={20} />
                        &nbsp; Prev
                      </Link>
                    </Button>

                    <Button
                      className=" bg-purple-600 hover:bg-purple-700 text-white disabled:text-white disabled:bg-purple-200 disabled:cursor-not-allowed py-1"
                      disabled={questionNo === questions.length}
                      // onClick={handleNextQuestion}
                    >
                      <Link
                        href={`/mcq/${subject}/${chapter}/${questionNo + 1}`}
                        className="flex"
                      >
                        Next &nbsp; <IoIosArrowDropright size={20} />
                      </Link>
                    </Button>
                  </div>
                </div>
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
          <QuestionSkeleton />
        )
      ) : (
        <ErrorMessage isBg={false} isButton={true} text={error} />
      )}
    </>
  );
};
export default Question;
