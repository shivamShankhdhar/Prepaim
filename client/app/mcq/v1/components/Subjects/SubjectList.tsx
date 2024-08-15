"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ActionBarForSubjectSkeleton from "../ActionBarForSubjects/ActionBarForSubjectSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import ActionBarForSubjects from "../ActionBarForSubjects/ActionBarForSubjects";
// import SubjectItemListView from "./SubjectItemListView";
import toast from "react-hot-toast";;
import SubjectItemGridView from "./Layouts/Grid/SubjectItemGridView";
import LayoutToggle from "../../../../components/Global/LayoutToggle";
import SubjectItemListView from "./Layouts/List/SubjectItemListView";
import SubjctListViewSkeleton from "./Layouts/List/SubjctListViewSkeleton";
import SubjctGridViewSkeleton from "./Layouts/Grid/SubjctGridViewSkeleton";

const SubjectList = ({ setSubjectLength }: any) => {
  // options for dropdown for layout
  const router = useRouter();
  let [subjects, setSubjects] = useState([{ _id: "", name: "", image: "" }]);
  const [isLoading, setLoading] = useState(true);
  const [allSubjectsError, setAllSubjectsError] = useState("");

  const [layOutView, setLayoutView] = useState("grid");

  const [reloadSubjects, setReloadSubjects] = useState(false);

  const [subjectsAfterFilter, setSubjectsAfterFilter] = useState([
    { _id: "", name: "", image: "" },
  ]);

  const [selectedSubject, setSelectedSubject] = useState("");

  const [filterBySubjectName, setFilterBySubjectName] = useState("");

  useEffect(() => {
    try {
      axios
        .get("/mcq/getallsubjects")
        .then((response) => {
          setAllSubjectsError("");
          setSubjects(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          if (error.respone !== undefined) {
            setAllSubjectsError(error.response.error);
            return toast.error(error.respone.error);
          } else {
            setAllSubjectsError(error.message);
            return toast.error(error.message);
          }
          // console.log(error);
        });
    } catch (error: any) {
      setAllSubjectsError(error.message);
      setLoading(false);
    }
  }, []);

  // trying different things here

  useEffect(() => {
    if (filterBySubjectName !== "") {
      setSubjectsAfterFilter(
        subjects.filter((subject) => subject.name === filterBySubjectName)
      );
    } else {
      setSubjectsAfterFilter(subjects);
    }
  }, [subjects, filterBySubjectName]);

  // useEffect(() => {
  //   if (filterBySubjectName !== "") {
  //     setSubjectsAfterFilter(
  //       subjectsAfterFilter.filter(
  //         (subject) =>
  //           subject.name === filterBySubjectName && subject.branch === Branch
  //       )
  //     );
  //   }
  // }, [subjectsAfterFilter, filterBySubjectName]);

  useEffect(() => {
    setSubjectLength(subjectsAfterFilter.length);
  }, [subjectsAfterFilter.length, filterBySubjectName]);

  //navigate to question
  const [selectedSubjectForQuiz, setSelectedSubjectForQuiz] = useState("");

  const [searchingChapters, setSearchingChapters] = useState(false);

  const [questionOne, setQuestionOne] = useState(
    [
      {
        question: "",
        answer: [{ ans: "", isTrue: false }],
        explanation: [{ answer: "", explanation: "" }],
      },
    ].filter((q) => q.question !== "")
  );

  // set this for identifying the current click subject button  to show simple loader or not

  const handleReloadSubjects = () => {
    setReloadSubjects((prev) => !prev);
  };

  useEffect(() => {
    if (selectedSubjectForQuiz !== "") {
      setSearchingChapters(true);
      // fetch chapters according to the subject
      axios
        .get(`/mcq/getallchaptersbysubject/${selectedSubjectForQuiz}`)
        .then((data) => {
          // fetch question according to the subject and chapter
          if (data.data.length > 0) {
            axios
              .get(
                `/mcq/getallquestionsbysubjectandchapter/${selectedSubjectForQuiz}/${data.data[0].name}`
              )
              .then((response) => {
                setQuestionOne(response.data[0]);
                if (response.data.length > 0) {
                  router.push(
                    `/mcq/v1/${selectedSubjectForQuiz}/${data.data[0].name.replaceAll(
                      " ",
                      "-"
                    )}/Test-Prepration-Mode/1`
                  );
                } else {
                  setSearchingChapters(false);
                  ("Something went wrong...!");
                  setSelectedSubjectForQuiz("");
                  setSelectedSubject("");
                  return toast.error(
                    `No Question found Chpater - ${data.data[0].name} Subject - ${selectedSubjectForQuiz}...!`
                  );
                }
              })
              .catch((err) => {
                setSearchingChapters(false);
                setSelectedSubjectForQuiz("");
                setSelectedSubject("");

                return toast.error("Something went wrong...!");
              });
          } else {
            setSearchingChapters(false);
            setSelectedSubjectForQuiz("");
            setSelectedSubject("");
            return toast.error("No chapters found...!");
          }
        });
    }
  }, [selectedSubjectForQuiz]);

  const handleNavigateToQuestion = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedSubjectForQuiz(subject);
    // alert(subject)
  };

  useEffect(() => {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []); // dropdowns
  return (
    <div className="flex w-full flex-col py-2 min-h-[92vh] max-h-[fit-content] px-3 items-center">
      {/* navigations for grid and list */}
      {isLoading === false ? (
        <div className=" w-full">
          <ActionBarForSubjects
            isLoading={isLoading}
            subjects={subjectsAfterFilter}
            selectedSubjectBySearch={filterBySubjectName}
            setSubjectBySearch={setFilterBySubjectName}
          />
        </div>
      ) : (
        <ActionBarForSubjectSkeleton />
      )}
      {/* toggle section for grid and list */}
      <LayoutToggle layOutView={layOutView} setLayoutView={setLayoutView} />
      {/* displaying subjects according to the layout */}
      <div
        className={`w-full flex ${
          layOutView === "list" ? "flex-col" : "flex-row flex-wrap"
        } px-2 border py-3 gap-2 bg-white border-purple-200 mt-1 rounded-md justify-center`}
      >
        {layOutView === "list" ? (
          // list view
          <>
            {isLoading ? (
              <SubjctListViewSkeleton />
            ) : allSubjectsError === "" ? (
              subjectsAfterFilter.filter((item) => item.name !== "").length >
              0 ? (
                subjectsAfterFilter
                  .filter((item) => item.name !== "")
                  .sort()
                  .map((item, index) => (
                    <>
                      {index % 5 === 0 && (
                        <div className="w-[300px] block text-center ">
                          <ins
                            className="adsbygoogle text-center"
                            style={{ display: "block", width: "300px" }}
                            data-ad-format="rectangle"
                            data-ad-layout-key="-bw-d+1k-5q+9s"
                            data-ad-client="ca-pub-1113302487630583"
                            data-ad-slot="3637121664"
                          ></ins>
                        </div>
                      )}

                      <SubjectItemListView
                        key={`${item._id}-${index}`} //${index}
                        item={item}
                        subjectItemLength={subjectsAfterFilter.length}
                        index={index}
                        selectedSubject={selectedSubject}
                        searchingChapters={searchingChapters}
                        handleNavigateToQuestion={handleNavigateToQuestion}
                      />
                    </>
                  ))
              ) : (
                <ErrorMessage
                  isBg={true}
                  isButton={false}
                  text={"Subjects not found for selected category..."}
                />
              )
            ) : (
              <ErrorMessage
                text={allSubjectsError}
                isBg={true}
                isButton={true}
              />
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <SubjctGridViewSkeleton />
            ) : allSubjectsError === "" ? (
              subjects.filter((item) => item.name !== "").length > 0 ? (
                subjectsAfterFilter
                  .filter((item) => item.name !== "")
                  .sort()
                  .map((item, index) => (
                    <>
                      {index % 5 === 0 && (
                        <div className="w-[300px] block text-center ">
                          <ins
                            className="adsbygoogle text-center"
                            style={{ display: "block", width: "300px" }}
                            data-ad-format="rectangle"
                            data-ad-layout-key="-bw-d+1k-5q+9s"
                            data-ad-client="ca-pub-1113302487630583"
                            data-ad-slot="3637121664"
                          ></ins>
                        </div>
                      )}
                      <SubjectItemGridView
                        key={`${item._id}-${index}`} //${index}
                        item={item}
                        subjectItemLength={subjectsAfterFilter.length}
                        index={index}
                        selectedSubject={selectedSubject}
                        searchingChapters={searchingChapters}
                        handleNavigateToQuestion={handleNavigateToQuestion}
                      />
                    </>
                  ))
              ) : (
                <ErrorMessage
                  text={"There are no Subjects..."}
                  isBg={true}
                  isButton={false}
                />
              )
            ) : (
              <ErrorMessage
                text={allSubjectsError}
                isBg={true}
                isButton={true}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SubjectList;
