"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SubjectListSkeleton from "./SubjectListSkeleton";
import ActionBarForSubjectSkeleton from "../ActionBarForSubjects/ActionBarForSubjectSkeleton";
import { SlReload } from "react-icons/sl";
import toast, { Toaster } from "react-hot-toast";
import SubjectItem from "./SubjectItem";
import SubjectsNotFoundForSelectedCategory from "./SubjectsNotFoundForSelectedCategory";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import ActionBarForSubjects from "../ActionBarForSubjects/ActionBarForSubjects";
import useFetch from "@/app/hooks/fetch.hook";

const SubjectList = () => {
  // options for dropdown for layout
  const router = useRouter();
  let [subjects, setSubjects] = useState([
    { _id: null, name: "", image: "", branch: "" },
  ]);

  const [isLoading, setLoading] = useState(false);

  const [Branch, setBranch] = useState("Engineering");

  const [allSubjectsError, setAllSubjectsError] = useState("");

  const [reloadSubjects, setReloadSubjects] = useState(false);

  const [subjectsAfterFilter, setSubjectsAfterFilter] = useState(
    subjects.filter((subject) => subject.branch === `${Branch}`)
  );

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
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleReloadSubjects = () => {
    setReloadSubjects((prev) => !prev);
  };
  const { data } = useFetch("admin/mcq/getallsubjects");
  useEffect(() => {
    if (data.apiData !== undefined && data.serverError !== null) {
      setSubjects(data.apiData);
      setLoading(data.isLoading);
      setAllSubjectsError(data.serverError);
    }
  }, [reloadSubjects, data.apiData, data.isLoading, data.serverError]);

  useEffect(() => {
    setSubjectsAfterFilter(
      subjects.filter((subject) => subject.branch === Branch)
    );
  }, [Branch, subjects]);

  useEffect(() => {
    if (selectedSubjectForQuiz !== "") {
      setSearchingChapters(true);
      // fetch chapters according to the subject
      axios
        .get(
          `http://localhost:10001/mcq/getallchaptersbysubject/${selectedSubjectForQuiz}`
        )
        .then((data) => {
          // fetch question according to the subject and chapter
          if (data.data.length > 0) {
            axios
              .get(
                `http://localhost:10001/mcq/getallquestionsbysubjectandchapter/${selectedSubjectForQuiz}/${data.data[0].name}`
              )
              .then((response) => {
                try {
                  setQuestionOne(response.data[0]);
                  if (response.data.length > 0) {
                    router.push(
                      `/mcq/v1/${selectedSubjectForQuiz}/${data.data[0].name.replaceAll(
                        " ",
                        "-"
                      )}/1`
                    );
                  } else {
                    setSearchingChapters(false);
                    console.log("Something went wrong...!");
                    // toast.error("Something went wrong...!")
                  }
                } catch (error: any) {
                  setSearchingChapters(false);
                  console.log(error.messgae);
                  // toast.error("Something went wrong...!")
                }
              })
              .catch((err) => {
                setSearchingChapters(false);
                console.log(err.messgae);
                // toast.error("Something went wrong...!")
              });
          } else {
            setSearchingChapters(false);
            toast.error("No chapters found...!");
          }
        })
        .catch((e) => console.log(e));
    }
  }, [selectedSubjectForQuiz]);

  function handleNavigateToQuestion(subject: string) {
    setSelectedSubject(subject);
    setSelectedSubjectForQuiz(subject);
    // alert(subject)
  }
  // dropdowns
  return (
    <div className="flex w-full flex-col mt-1 items-center h-[92vh] rounded-md overflow-hidden">
      {/* navigations for grid and list */}
      {!isLoading ? (
        <div className="px-2 w-full">
          <ActionBarForSubjects
            isLoading={isLoading}
            Branch={Branch}
            setBranch={setBranch}
          />
        </div>
      ) : (
        <ActionBarForSubjectSkeleton />
      )}
      {/* displaying subjects according to the layout */}
      <div className="w-full flex px-2 overhid justify-center">
        {!isLoading ? (
          allSubjectsError === "" ? (
            subjectsAfterFilter.length > 0 ? (
              <div
                className={`w-full flex flex-wrap justify-center gap-1 bg-white rounded-md mt-1`}
              >
                {subjectsAfterFilter.sort().map((item, index) => (
                  <SubjectItem
                    key={index}
                    item={item}
                    index={index}
                    selectedSubject={selectedSubject}
                    searchingChapters={searchingChapters}
                    handleNavigateToQuestion={handleNavigateToQuestion}
                  />
                ))}
              </div>
            ) : (
              <SubjectsNotFoundForSelectedCategory />
            )
          ) : (
            <div className="flex flex-col w-full justify-center items-center">
              <div className="bg-white flex flex-col justify-center items-center py-5 rounded-md w-full mt-2 gap-2">
                <ErrorMessage
                  text={"Something Went Wrong...!"}
                  isBg={false}
                  isButton={false}
                />
                <div
                  className="flex clex-row items-center justify-center gap-1 bg-purple-700 cursor-pointer rounded-sm text-white py-1 px-2"
                  onClick={handleReloadSubjects}
                >
                  <SlReload size={15} /> Reload
                </div>
              </div>
            </div>
          )
        ) : (
          <SubjectListSkeleton />
        )}
      </div>
    </div>
  );
};

export default SubjectList;
