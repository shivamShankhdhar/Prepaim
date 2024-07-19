"use client";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "@/app/mcq/v1/components/ChapterSideBar/Sidebar";
import Actions from "@/app/mcq/v1/components/Actions";
import Footer from "@/app/components/Footer/Footer";
import SidebarSlider from "@/app/components/Global/SidebarSlider";
import Breadcrum from "@/app/components/Global/Breadcrum";
import QuestionPageLayoutToggle from "@/app/mcq/v1/components/QuestionPageLayoutToggle";
import QuestionListView from "@/app/mcq/v1/components/Question/QuestionListView";
import { useCookies } from "next-client-cookies";
import toast from "react-hot-toast";

const QuestionPage = () => {
  const router = useRouter();
  const cookies = useCookies();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      console.log(cookies.get("pageViewLayout"));
      if (cookies.get("pageViewLayout") === undefined) {
        cookies.set("pageViewLayout", "listPageView");
      } else {
        toast.success("Switched to Prepration mode");
        // cookies.set("pageViewLayout", "listPageView");
      }
    }
  }, [cookies, isClient]);

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
          setQuestions(res.data);
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
          error;
        });
    } catch (error: any) {
      error.message;
    }
  }, []);

  return (
    <>
      <div className="flex justify-between h-[92vh] overflow-hidden ">
        <SidebarSlider
          uniqueKey="chapters"
          open={openSidebarSlider}
          items={chapters}
          setOpen={setOpenSidebarSlider}
          itemType="chapters"
        />

        <SidebarSlider
          pageView="list-view"
          uniqueKey="question_board"
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
          <Sidebar requestingPage={"list-view-question-page"} error={error} />
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
            {/* page layout toggle button */}
            <QuestionPageLayoutToggle />

            <div className="w-full px-2 flex justify-between items-center flex-wrap flex-row gap-2">
              {/* question*/}
              <QuestionListView />
            </div>
          </div>
          <Footer />
        </div>

        {/* question board  */}
        {/* <div className="sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
          <QuestionBoard
            error={error}
            questions={questions}
            questionNo={questionNo - 1}
            setQuestionNo={setQuestionNo}
            loading={loading}
            setIsCommentSection={setIsCommentSection}
            setIsAnswerExplanationOpen={setIsAnswerExplanationOpen}
          />
        </div> */}
      </div>
    </>
  );
};

export default QuestionPage;
