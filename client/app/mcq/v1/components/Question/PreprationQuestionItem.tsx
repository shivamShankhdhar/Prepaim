"use client";
import QuestionLevel from "@/app/components/QuestionLevel/QuestionLevel";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import QuestionSkeleton from "./QuestionSkeleton";
import AnswerItemForListPageView from "../Answer/AnswerItemForListPageView";
import { Button } from "@mui/material";
import AnswerExplanationForListView from "../Answer/AnswerExplanationForListView";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import ErrorMessage from "@/app/components/Global/ErrorMessage";

const PreprationQuestionItem = () => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const [questionsFromServer, setQuestionsFromServer] = useState([
    {
      _id: "",
      question: "",
      answer: [{ ans: "", isTrue: false }],
      explanation: [{ answer: "", explanation: "" }],
      level: "",
      subject: "",
      chapter: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const [isAnswerExplanationOpen, setIsAnswerExplanationOpen] = useState(false);

  const loadingItemShowingSkeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [clickedId, setClickedId] = useState("");

  const [clickedToCloseId, setClickedToCloseId] = useState("");

  useEffect(() => {
    try {
      axios
        .get(
          `/mcq/getallquestionsbysubjectandchapter/${subject}/${chapter
            .toString()
            .replaceAll("-", " ")}`
        )
        .then((res) => {
          setQuestionsFromServer(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(true);
        });
    } catch (error) {
      error;
    } finally {
    }
  }, [subject, chapter]);

  // const handleCommentToggle = () => {
  //   setIsCommentSection((prev) => !prev);
  //   setIsAnswerExplanationOpen(false);
  // };
  // const handleAnswerExplanationToggle = () => {
  //   setIsAnswerExplanationOpen((prev) => !prev);
  //   setIsCommentSection(false);
  // };
  // const [isAnswerHide, setIsAnswerHide] = useState(false);

  //   const [rightAnswerIndex, setRightAnswerIndex] = useState(0);

  //  useEffect(() => {
  //    questionsFromServer.map((item: any, index: any) => {

  //    })
  //  })
  return (
    <div className="w-full flex-wrap flex items-start justify-center px-2 gap-3 py-3">
      {/* question item */}
      {loading ? (
        <>
          {loadingItemShowingSkeleton.map((item: any) => {
            return (
              <QuestionSkeleton
                key={`key-at-question-list-view-skeleton-${item}`}
                requestedPage={"Prepration-Page"}
              />
            );
          })}
        </>
      ) : error === "" ? (
        questionsFromServer.length > 0 ? (
          questionsFromServer
            .filter((item: any) => item.question !== "")
            .sort((a, b) => a.level.localeCompare(b.level))
            .map((question: any, questionNo: any) => {
              return (
                <>
                  <div
                    id={`${question
                      .toString()
                      .replace(
                        /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                        ""
                      )
                      .replaceAll(" ", "-")}`}
                    key={`key-at-list-view-page-mode-for-question-${question._id}-${questionNo}`}
                    className="sm:w-full h-[fit-content] items-stretch max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] flex flex-col bg-white rounded-md border py-2 px-5 shadow-md"
                  >
                    {/* question level  */}
                    <div className="w-full mt-2 h-5 flex justify-end items-center">
                      <QuestionLevel
                        key={`key-at-question-level-at-list-page-view-${question._id}`}
                        level={question?.level}
                        isText={true}
                      />
                    </div>
                    {/* question heading  */}
                    <div className="w-full text-lg flex justify-start font-semibold text-purple-800 items-center py-3">
                      Q&nbsp;{questionNo + 1}. {question.question}
                    </div>

                    {/* answer  */}
                    <>
                      <div
                        key={`key-at-list-view-page-mode-answer-for-div-${question._id}-${questionNo}-for-answer-container`}
                        className={`flex "border border-dashed border-b-1 border-t-0 border-r-0 border-l-0"  justify-center items-center pb-5 pt-3 gap-2  max-sm:flex-col text-gray-700  max-md:flex-wrap md:flex-wrap`}
                      >
                        {question.answer.map((item: any, index: any) => {
                          return (
                            <>
                              {/* set right answer index for showing right option in the answer explanation  */}

                              <AnswerItemForListPageView
                                key={`key-at-list-view-page-mode-answer-item-${question._id}-${item.ans}-${index}--${questionNo}`}
                                uniqueKeyCombination={`${question._id}-${item.ans}-${index}`}
                                qustion_id={question._id}
                                index={index}
                                question={question.question}
                                answer={item.ans}
                                questionNo={questionNo + 1}
                                isTrue={item.isTrue}
                              />
                            </>
                          );
                        })}
                      </div>
                    </>
                    {/* <AnswerItem
                    questions={question}
                    questionNo={index + 1}
                    answer={[question?.answer]}
                    index={index}
                    isTrue={question?.isTrue}
                  /> */}

                    <div className="flex w-full justify-start items-start gap-2 flex-col mb-5">
                      {/* {clickedId == "" && (
                     
                    )} */}
                      {clickedId === question._id ? (
                        <Button
                          className="bg-purple-200 flex text-sm  focus:ring-3 focus:ring-purple-300 hover:bg-purple-300 gap-1 border border-purple-400 cursor-pointer w-[fit-content] justify-start items-center px-3 py-1 text-purple-800 rounded-sm"
                          onClick={() => {
                            setClickedId("");
                          }}
                        >
                          <>
                            <IoEyeOffOutline /> Hide Answer
                          </>
                        </Button>
                      ) : (
                        <Button
                          className="bg-purple-200 flex text-sm focus:ring-3 focus:ring-purple-300 hover:bg-purple-300 gap-1 border border-purple-400 cursor-pointer w-[fit-content] justify-start items-center px-3 py-1 text-purple-800 rounded-sm"
                          onClick={() => {
                            setClickedId(question._id);
                          }}
                        >
                          <>
                            <IoEyeOutline /> Show Answer
                          </>
                        </Button>
                      )}
                      <AnswerExplanationForListView
                        question={question}
                        loading={loading}
                        // rightOptionIndex={rightAnswerIndex}
                        // isAnswerHide={isAnswerHide}
                        clickedId={clickedId}
                        clickedToCloseId={clickedToCloseId}
                      />
                      {/* <Navigation
                      questionId={question._id}
                      questionsLength={questionsFromServer.length}
                      questionItm={question}
                      questionObject={question}
                      loading={loading}
                      errorForActionBar={error}
                      handleCommentToggle={handleCommentToggle}
                      isCommentSection={isCommentSection}
                      handleAnswerExplanationToggle={
                        handleAnswerExplanationToggle
                      }
                      subject={subject}
                      chapter={chapter}
                      isShareBtn={false}
                    /> */}
                    </div>
                    {/* <ActionForQuestion
                </div>
                /> */}
                  </div>
                </>
              );
            })
        ) : (
          <ErrorMessage
            text={`No questions found, we are working on it questions will be available soon.Thanks for your patience.`}
            isButton={false}
            isBg={true}
          />
        )
      ) : (
        <ErrorMessage text="Something went wrong" isButton={true} isBg={true} />
      )}
    </div>
  );
};

export default PreprationQuestionItem;
