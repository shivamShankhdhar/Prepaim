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

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import CommentToggleBtn from "../ActionBarForQuestion/ActionBarItems/CommentToggleBtn";
import ToggleAnswerExplanationBtn from "../ActionBarForQuestion/ActionBarItems/ToggleAnswerExplanationBtn";
import AnswerExplanation from "../Answer/AnswerExplanation";
import AllDiscuss from "../Discuss/AllDiscuss";
import AddDiscuss from "../Discuss/AddDiscuss";
import toast from "react-hot-toast";
import axios from "axios";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[4],
    fontSize: 13,
  },
}));

interface Props {
  questions: any;
  chapter: any;
  error: String;
  loading: boolean;
  pageMode?: String;
  handleCommentToggle?: any;
  isCommentSection?: boolean;
  isAnswerExplanationOpen?: boolean;
  handleAnswerExplanationToggle?: any;
  questionNo: number;
}

const TestPreprationQuestionItem = ({
  questions,
  questionNo,
  chapter,
  error,
  loading,
  pageMode,
  handleCommentToggle,
  isCommentSection,
  isAnswerExplanationOpen,
  handleAnswerExplanationToggle,
}: Props) => {
  const cookies = useCookies();

  const { subject } = useParams();
  const { question } = useParams();
  // const questionNo = Number(question);

  const [isQuestionNavigationOpen, setIsQuestionNavigationOpen] =
    useState(false);

  const handleQuestionNavigationOpen = () => {
    setIsQuestionNavigationOpen((prev: any) => !prev);
  };

  const [commentLength, setCommentLength] = useState(0);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentsError, setCommentsError] = useState("");

  return (
    <div className="w-full flex flex-col items-center gap-2">
      {Object.values(error).toString() === "" ? (
        loading === false ? (
          questions.length > 0 ? (
            questionNo > 0 && questionNo < questions.length + 1 ? (
              <div
                key={`question-${questionNo}-${
                  questions[questionNo - 1]?.question
                }`}
                className=" bg-white px-5 w-full h-[fit-content] shadow-lg rounded-md mx-auto mt-2 items-center "
              >
                {/* question hardship level  */}
                <div className="w-full mt-2 h-5 flex justify-end items-center">
                  <QuestionLevel
                    level={questions[questionNo - 1]?.level}
                    isText={true}
                  />
                </div>

                {/* question component  */}
                <div className="py-2">
                  <div className="text-lg px-2 font-semibold py-1 text-purple-950 ">
                    Q{questionNo}.&nbsp;
                    {questions.length > 0 &&
                      questions[questionNo - 1]?.question}
                  </div>
                </div>
                {/* question guide  */}
                {cookies.get("isQuestionGuideClosed") !== "true" && (
                  <div className="bg-purple-100 border border-purple-300 text-purple-800 rounded-sm flex justify-between items-center gap-2 px-5 py-1 text-[0.8rem] hover:cursor-pointer animate-pulse hover:animate-none">
                    <div className="flex-1 ">
                      Try clicking an answer to check whether it is right or
                      wrong
                    </div>
                    <LightTooltip title="Close">
                      <div
                        // title="Close"
                        className="flex cursor-pointer justify-center items-center h-4 w-4 rounded-full bg-purple-700 text-white"
                        onClick={() =>
                          cookies.set("isQuestionGuideClosed", "true")
                        }
                      >
                        <IoIosClose size={20} />
                      </div>
                    </LightTooltip>
                  </div>
                )}

                {/* answers */}
                <div
                  className={`flex ${
                    pageMode === "stack-page-mode" &&
                    "border border-dashed border-b-1 border-purple-700 border-t-1 border-r-0 border-l-0"
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
                  <div className="flex flex-col gap-1">
                    <div className="flex w-full justify-between py-2 ">
                      {/* previous button  */}
                      <Button
                        href={`/mcq/v1/${subject}/${chapter}/Test-Prepration-Mode/${
                          questionNo - 1
                        }`}
                        className="bg-gray-200 focus:ring-2 focus:outline-none flex gap-1 justify-center items-center focus:ring-gray-100 text-gray-600 hover:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed !py-1"
                        disabled={questionNo === 1}
                        // onClick={handlePrevQuestion}
                      >
                        <IoIosArrowDropleft size={20} />
                        Prev
                      </Button>
                      {/* question other navigations  */}
                      {/* for large screens  */}
                      <div className="flex-1 sm:hidden max-sm:hidden md:flex max-md:flex lg:flex xl:flex 2xl:flex justify-center gap-1 items-center">
                        <ToggleAnswerExplanationBtn
                          handleQuestionNavigationOpen={
                            handleQuestionNavigationOpen
                          }
                          handleAnswerExplanationToggle={
                            handleAnswerExplanationToggle
                          }
                          isAnswerExplanationOpen={isAnswerExplanationOpen}
                        />
                        <CommentToggleBtn
                          handleQuestionNavigationOpen={
                            handleQuestionNavigationOpen
                          }
                          commentLength={commentLength}
                          loadingComments={loadingComments}
                          handleCommentToggle={handleCommentToggle}
                          isCommentSection={isCommentSection}
                          question={questions[questionNo - 1]}
                          commentsError={commentsError}
                        />
                      </div>
                      {/* next button  */}
                      <Button
                        sx={{
                          "&.Mui-disabled": {
                            background: "#eaeaea",
                            color: "#c0c0c0",
                          },
                        }}
                        href={`/mcq/v1/${subject}/${chapter}/Test-Prepration-Mode/${
                          questionNo + 1
                        }`}
                        className=" bg-purple-900 focus:ring-2 flex justify-center items-center focus:outline-none focus:ring-purple-200 hover:bg-purple-950 text-white disabled:text-white disabled:bg-purple-50 gap-1 disabled:cursor-not-allowed py-1"
                        disabled={questionNo === questions.length}
                        // onClick={handleNextQuestion}
                      >
                        Next <IoIosArrowDropright size={20} />
                      </Button>
                    </div>
                    {/* for mobile screens only  */}
                    <div className="flex-1 border border-purple-600 py-2 border-dashed border-t-1 border-r-0 border-l-0 border-b-0 sm:flex max-sm:flex md:hidden max-md:hidden lg:flex xl:hidden 2xl:hidden justify-between gap-1 items-center">
                      <ToggleAnswerExplanationBtn
                        handleQuestionNavigationOpen={
                          handleQuestionNavigationOpen
                        }
                        handleAnswerExplanationToggle={
                          handleAnswerExplanationToggle
                        }
                        isAnswerExplanationOpen={isAnswerExplanationOpen}
                      />
                      <CommentToggleBtn
                        handleQuestionNavigationOpen={
                          handleQuestionNavigationOpen
                        }
                        commentLength={commentLength}
                        loadingComments={loadingComments}
                        handleCommentToggle={handleCommentToggle}
                        isCommentSection={isCommentSection}
                        question={questions[questionNo - 1]}
                        commentsError={commentsError}
                      />
                    </div>
                    {/* {isQuestionNavigationOpen && ( */}
                    <div className="w-full">
                      {isAnswerExplanationOpen && (
                        <div className="w-full py-3 border border-dashed border-purple-600 border-t-1 border-l-0 border-b-0 border-r-0">
                          <AnswerExplanation
                            question={questions[questionNo - 1]}
                          />
                        </div>
                      )}
                      {isCommentSection && (
                        <>
                          <div className="w-full py-3 border border-dashed border-purple-600 border-t-1 border-l-0 border-b-0 border-r-0">
                            <AddDiscuss
                              question={questions[questionNo - 1].question}
                            />
                          </div>
                          <div className="w-full py-3 border border-dashed border-purple-600 border-t-1 border-l-0 border-b-0 border-r-0">
                            <AllDiscuss
                              setCommentsError={setCommentsError}
                              setLoadingComments={setLoadingComments}
                              question={questions[questionNo - 1]}
                              setCommentLength={setCommentLength}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    {/* )} */}
                  </div>
                )}
              </div>
            ) : (
              <WrongQuestionSelectedInURL questionNo={questionNo} />
            )
          ) : (
            <ErrorMessage
              text={`No questions found `}
              isButton={false}
              isBg={true}
            />
          )
        ) : (
          <QuestionSkeleton requestedPage="Test-Prepration-Page" />
        )
      ) : (
        <ErrorMessage isBg={true} isButton={true} text={error} />
      )}
    </div>
    // here is the end of top
  );
};
export default TestPreprationQuestionItem;
