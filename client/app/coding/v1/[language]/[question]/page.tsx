"use client";
import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import ShareBtn from "@/app/components/Global/ShareBtn";
import Footer from "@/app/components/Footer/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import useFetch from "@/app/hooks/fetch.hook";
import { useParams } from "next/navigation";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import CodingSidebarDrawer from "../../components/Drawer/Drawer";
import CodingQuestionSidebar from "../../components/CodingQuestionSidebar/CodingQuestionSidebar";
import LanguagePanel from "../../components/LanguagePanel/LanguagePanel";
import CodingQuestionItemSkeleton from "../../components/CodingQustion/CodingQuestionItemSkeleton";
import CodingQuestionItem from "../../components/CodingQustion/CodingQuestionItem";
import EditorSkeleton from "../../components/CodingQustion/EditorSkeleton";

const CodingQuestionPage = () => {
  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false);
  const { language } = useParams();
  const { question } = useParams();
  const [loadingQuestionFromServer, setLoadingQuestionFromServer] =
    useState(true);
  const [errorLoadingQuestion, setErrorLoadingQuestion] = useState("");
  const [questionForQuestionheading, setQustionForQuestionHeading] =
    useState("");
  language;
  const [questionObjectFromServer, setQuestionObjectFromServer] = useState(
    [
      {
        question: "",
        solutions: [
          {
            solution: "",
            language: "",
          },
          {
            solution: "",
            language: "",
          },
          {
            solution: "",
            language: "",
          },
          {
            solution: "",
            language: "",
          },
        ],
        date_added: "",
        level: "String",
      },
    ].filter((item) => item.question !== "")
  );

  const { data } = useFetch(
    `coding/getQuestionsFromCodingByQuestionName/${question
      .toString()
      .replaceAll("-", " ")}`
  );
  data;
  useEffect(() => {
    if (data.apiData !== undefined) {
      setQuestionObjectFromServer(data.apiData);
      setLoadingQuestionFromServer(data.isLoading);
    }
  }, [data]);

  useEffect(() => {
    questionObjectFromServer.map((item) => {
      setQustionForQuestionHeading(item.question);
    });
  }, [questionObjectFromServer]);

  questionObjectFromServer;
  return (
    <div className="flex justify-around h-[100vh] w-full">
      <div className="w-[250px] max-sm:h-[85vh] max-md:h-[85vh] md:h-[85vh] sm:h-[85vh] sticky top-[-40px] z-10  lg:h-[100vh] max-lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] border border-l-0  border-t-0  border-b-0 md: border-gray-200 mt-0 bg-white sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
        <CodingSidebarDrawer
          open={openSidebarDrawer}
          setOpen={setOpenSidebarDrawer}
        />
        <CodingQuestionSidebar />
      </div>
      <div className=" flex-1 flex items-center flex-col overflow-y-auto h-[92vh]">
        {/* action bar for mobile */}
        <div className="w-full px-5 bg-white h-[fit-content] py-1 flex justify-start items-center sm:hidden max-sm:flex md:flex max-md:flex lg:hidden xl:hidden 2xl:hidden">
          <div
            className="px-2 cursor-pointer py-2 hover:bg-gray-100 rounded-md"
            onClick={() => setOpenSidebarDrawer(true)}
          >
            <RxHamburgerMenu size={18} />
          </div>
          <div className="flex-1 flex flex-wrap ">
            <LanguagePanel layoutType={"horizontal"} />
          </div>
        </div>
        {/* question panel  */}
        <div className="w-full flex flex-col text-gray-700 py-3  justify-start items-center bg-white px-5">
          <div className="w-full">
            {loadingQuestionFromServer ? (
              <CodingQuestionItemSkeleton />
            ) : (
              <>
                <div className="w-full flex gap-2 justify-end items-center">
                  {/* code run button  */}
                  {/* <RunCode /> */}
                  <ShareBtn />
                </div>
                <CodingQuestionItem
                  questionObjectFromServer={questionForQuestionheading}
                  error={errorLoadingQuestion}
                />
              </>
            )}
          </div>
        </div>
        <div className="w-full px-5 pb-5 h-[100vh]">
          <>
            {loadingQuestionFromServer ? (
              <EditorSkeleton />
            ) : errorLoadingQuestion !== "" ? (
              <div className="h-[100vh]">
                <ErrorMessage
                  text={errorLoadingQuestion}
                  isBg={false}
                  isButton={false}
                />
              </div>
            ) : questionObjectFromServer.length > 0 ? (
              questionObjectFromServer.map((sol: any) => {
                return (
                  <>
                    {sol.solutions
                      .filter(
                        (item: any) =>
                          item.language.toString().toLowerCase() ===
                          language.toString().toLowerCase()
                      )
                      .map((data: any) => {
                        return (
                          <div key={data} className="h-[100vh]">
                            {data.solution !== "" ? (
                              <CopyBlock
                                text={data.solution}
                                language={
                                  language.toString() === "Cpp"
                                    ? "C++"
                                    : language.toString()
                                }
                                theme={dracula}
                                wrapLongLines={true}
                                showLineNumbers={true}
                                key={data.language}
                                startingLineNumber={1}
                              />
                            ) : (
                              <div>no code available for selected language</div>
                            )}
                          </div>
                        );
                      })}
                  </>
                );
              })
            ) : (
              <div>no solution available for this question</div>
            )}
            <Footer />
          </>
        </div>
      </div>

      <div className=" flex h-[100vh] overflow-y-auto sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
        <LanguagePanel layoutType={"vertical"} />
      </div>
    </div>
  );
};

export default CodingQuestionPage;


// export default page;
