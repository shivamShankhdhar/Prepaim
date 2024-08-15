"use client";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "@/app/mcq/v1/components/ChapterSideBar/Sidebar";
import QuestionBoard from "@/app/mcq/v1/components/QuestionBoard/QuestionBoard";
import Actions from "@/app/mcq/v1/components/Actions";
import Footer from "@/app/components/Footer/Footer";
import SidebarSlider from "@/app/components/Global/SidebarSlider";
import Breadcrum from "@/app/components/Global/Breadcrum";

import QuestionPageLayoutToggle from "@/app/mcq/v1/components/QuestionPageLayoutToggle";
import { useCookies } from "next-client-cookies";
import toast from "react-hot-toast";;
import TestPreprationQuestionItem from "@/app/mcq/v1/components/Question/TestPreprationQuestionItem";
import AdsenseHorizontalAds from "@/app/components/GoogleAds/AdsenseHorizontalAds";

// const generateMetadata = () => {

// }

// export async function generateMetadata({ params }: any) {
//   return {
//     title: "...",
//   };
// }

const QuestionPage = () => {
  const router = useRouter();
  const cookies = useCookies();
  const [isClient, setIsClient] = useState(false);

  const [isAnswerLocked, setIsAnswerLocked] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (cookies.get("questionPageMode") === undefined) {
        cookies.set("questionPageMode", "test-prepration-mode");
      } else {
        if (cookies.get("questionPageMode") !== "test-prepration-mode") {
          toast.success("Switched to Test / Prepration mode");
          // cookies.remove("pageViewLayout");
          cookies.set("questionPageMode", "test-prepration-mode");
        }
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
        _id: "",
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

  // track progress
  const [isTrackingProgress, setIsTrackingProgress] = useState(false);
  const handleClickOnTrackProgressBtn = () => {
    setIsTrackingProgress((prev) => !prev);
    // alert("yes its working man");
  };
  useEffect(() => {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
        crossOrigin="anonymous"
      ></script>
      <SidebarSlider
        uniqueKey="chapters"
        open={openSidebarSlider}
        items={chapters}
        chaptersLength={chapters.length}
        setOpen={setOpenSidebarSlider}
        itemType="chapters"
        requestedPage={"Test-Prepration-Mode"}
      />

      <SidebarSlider
        uniqueKey="question_board"
        open={openQuestionBoard}
        setOpen={setOpenQuestionBoard}
        itemType="question-board"
        error={error}
        questions={questions}
        questionNo={questionNo - 1}
        setQuestionNo={setQuestionNo}
        loading={loading}
      />
      <div className="flex justify-between h-[92vh] overflow-hidden">
        <div
          className="sm:hidden max-sm:hidden md:hidden max-md:hidden sticky top-[-40px] lg:flex xl:flex 2xl:flex"
          id="question_board"
        >
          <Sidebar
            requestedPage={"Test-Prepration-Mode"}
            error={error}
            loading={loading}
          />
        </div>

        <div className="grow flex flex-col h-[92vh] overflow-y-auto mb-12">
          {/* <AdsenseHorizontalAds /> */}
          <div className="w-[90%] inline-block justify-center items-center">
            <center>
              <ins
                className="adsbygoogle inline-block w-[100%] h-[100px]"
                style={{
                  display: "inline-block",
                  width: "98%",
                  height: "100px",
                }}
                data-ad-client="ca-pub-1113302487630583"
                data-ad-slot="7957270938"
                data-ad-format=" horizontal"
                data-full-width-responsive="true"
              ></ins>
            </center>
          </div>
          <div className="w-full">
            {/* breadcrumb  */}
            <Actions
              requestedPage={"Test-Prepration-Page"}
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
            <QuestionPageLayoutToggle
              handleClickOnTrackProgressBtn={handleClickOnTrackProgressBtn}
              isTrackingProgress={isTrackingProgress}
            />

            <div className="px-2 w-full min-h-[92vh] flex-col max-[fit-content] ">
              {/* question*/}
              <TestPreprationQuestionItem
                isTrackingProgress={isTrackingProgress}
                questionNo={questionNo}
                isAnswerLocked={isAnswerLocked}
                setIsAnswerLocked={setIsAnswerLocked}
                pageMode={"stack-page-mode"}
                questions={questions}
                chapter={chapter}
                error={error}
                loading={loading}
                handleCommentToggle={handleCommentToggle}
                isCommentSection={isCommentSection}
                isAnswerExplanationOpen={isAnswerExplanationOpen}
                setIsAnswerExplanationOpen={setIsAnswerExplanationOpen}
                handleAnswerExplanationToggle={handleAnswerExplanationToggle}
              />
            </div>
            <div className="w-[90%] inline-block justify-center items-center">
              <center>
                <ins
                  className="adsbygoogle inline-block w-[95%] h-[100px]"
                  style={{
                    display: "inline-block",
                    width: "98%",
                    height: "100px",
                  }}
                  data-ad-client="ca-pub-1113302487630583"
                  data-ad-slot="7957270938"
                  data-ad-format=" horizontal"
                  data-full-width-responsive="true"
                ></ins>
              </center>
            </div>
          </div>
          <Footer />
        </div>

        {/* question board  */}
        <div className="sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex h-[92vh]">
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
