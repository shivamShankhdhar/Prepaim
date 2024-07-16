"use client";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "@/app/mcq/v1/components/ChapterSideBar/Sidebar";
import Question from "@/app/mcq/v1/components/Question/Question";
import Navigation from "@/app/mcq/v1/components/Question/Navigation";
import QuestionBoard from "@/app/mcq/v1/components/QuestionBoard/QuestionBoard";
import Actions from "@/app/mcq/v1/components/Actions";
import Footer from "@/app/components/Footer/Footer";
import SidebarSlider from "@/app/components/Global/SidebarSlider";
import Breadcrum from "@/app/components/Global/Breadcrum";

const QuestionPage = () => {
  const router = useRouter();

  const { subject } = useParams();
  const { question } = useParams();
  const { chapter } = useParams();

  const questionFromParams = Number(question);

  const [questions, setQuestions] = useState(
    [
      {
        question: "",
        answer: [{ ans: "", isTrue: false }],
        explanation: [{ answer: "", explanation: "" }],
      },
    ].filter((q) => q.question !== "")
  );

  const [questionNo, setQuestionNo] = useState(0);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [isCommentSection, setIsCommentSection] = useState(false);

  const [isAnswerExplanationOpen, setIsAnswerExplanationOpen] = useState(false);

  const [openSidebarSlider, setOpenSidebarSlider] = useState(false);
  const [openQuestionBoard, setOpenQuestionBoard] = useState(false);

  useEffect(() => {
    if (questionFromParams > 0) setQuestionNo(questionFromParams);
    else {
      setQuestionNo(0);
    }
  }, [question, questions]);
  const handleCommentToggle = () => {
    setIsCommentSection((prev) => !prev);
    setIsAnswerExplanationOpen(false);
  };
  const handleAnswerExplanationToggle = () => {
    setIsAnswerExplanationOpen((prev) => !prev);
    setIsCommentSection(false);
  };

  useEffect(() => {
    try {
      axios
        .get(
          `/mcq/getallquestionsbysubjectandchapter/${subject}/${chapter
            .toString()
            .replaceAll("-", " ")}`
        )
        .then((res) => {
          const fetchedData = res.data.sort((a: any, b: any) =>
            String(a.level).localeCompare(String(b.level))
          );
          setQuestions(fetchedData);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(true);
        });
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, []);

  const questionsLength = questions.length;
  const handleNextQuestion = () => {
    setQuestionNo(questionNo + 1);

    router.push(`/mcq/${subject}/${chapter}/${questionNo}`);
    // setIsConfetti(false)
    setIsCommentSection(false);
    setIsAnswerExplanationOpen(false);
    // router.push(`/${subject}/${chapter}/${q}`)
  };

  const handlePrevQuestion = () => {
    setQuestionNo((prev) => prev - 1);

    router.push(`/mcq/${subject}/${chapter}/${questionNo}`);
    // setIsConfetti(false)
    setIsCommentSection(false);
    setIsAnswerExplanationOpen(false);
  };

  const [chapters, setChapters] = useState(
    [{ name: "" }].filter((item) => item.name !== "")
  );

  useEffect(() => {
    try {
      axios
        .get(`/mcq/getallchaptersbysubject/${subject}`)
        .then((response) => {
          setChapters(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between overflow-hidden ">
        <SidebarSlider
          open={openSidebarSlider}
          items={chapters}
          setOpen={setOpenSidebarSlider}
          itemType="chapters"
        />

        <SidebarSlider
          open={openQuestionBoard}
          setOpen={setOpenQuestionBoard}
          itemType="question-board"
          error={error}
          questions={questions}
          questionNo={questionNo - 1}
          setQuestionNo={setQuestionNo}
          loading={loading}
          setIsCommentSection={setIsCommentSection}
          setIsAnswerExplanationOpen={setIsAnswerExplanationOpen}
        />
        <div
          className="sm:hidden max-sm:hidden md:hidden max-md:hidden sticky top-[-40px] lg:flex xl:flex 2xl:flex"
          id="question_board"
        >
          <Sidebar error={error} />
        </div>
        <div className="grow flex flex-col h-[92vh] overflow-y-auto mb-12">
          <div className="w-full">
            {/* breadcrumb  */}
            <Actions
              setProperty1={setOpenSidebarSlider}
              setProperty2={setOpenQuestionBoard}
              subject={subject.toString()}
              chapter={chapter.toString()}
              totalquestion={questionsLength.toString()}
              questionNo={(questions.length === 0 ? 0 : questionNo).toString()}
            />
            <div className="sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
              <Breadcrum
                subject={subject.toString()}
                chapter={chapter.toString()}
                totalquestion={questionsLength.toString()}
                questionNo={(questions.length === 0
                  ? 0
                  : questionNo
                ).toString()}
              />
            </div>

            <div className="px-2">
              {/* question*/}
              <Question
                questions={questions}
                chapter={chapter}
                error={error}
                loading={loading}
              />
            </div>
            <div className="flex w-full px-2 justify-center mb-5">
              <Navigation
                questionsLength={questions.length}
                questionItm={questions[questionNo - 1]?.question}
                questionObject={questions[questionNo - 1]}
                loading={loading}
                errorForActionBar={error}
                handleCommentToggle={handleCommentToggle}
                isCommentSection={isCommentSection}
                handleAnswerExplanationToggle={handleAnswerExplanationToggle}
                isAnswerExplanationOpen={isAnswerExplanationOpen}
                subject={subject}
                chapter={chapter}
              />
            </div>
          </div>
          <Footer />
        </div>

        {/* question board  */}
        <div
          className="sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex"
          id="question_board"
        >
          <QuestionBoard
            error={error}
            questions={questions}
            questionNo={questionNo - 1}
            setQuestionNo={setQuestionNo}
            loading={loading}
            setIsCommentSection={setIsCommentSection}
            setIsAnswerExplanationOpen={setIsAnswerExplanationOpen}
          />
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
