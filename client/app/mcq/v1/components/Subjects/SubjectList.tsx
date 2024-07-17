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

  const [isLoading, setLoading] = useState(true);

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

  useEffect(() => {
    try {
      axios
        .get("/admin/getallsubjects")
        .then((response) => {
          setSubjects(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setAllSubjectsError(error.response.data.msg);
        });
    } catch (error: any) {
      setAllSubjectsError(error);
      setLoading(false);
    }
  }, []);

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
        .get(`/mcq/getallchaptersbysubject/${selectedSubjectForQuiz}`)
        .then((data) => {
          // fetch question according to the subject and chapter
          if (data.data.length > 0) {
            axios
              .get(
                `/mcq/getallquestionsbysubjectandchapter/${selectedSubjectForQuiz}/${data.data[0].name}`
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
                    ("Something went wrong...!");
                    // toast.error("Something went wrong...!")
                  }
                } catch (error: any) {
                  setSearchingChapters(false);
                  error.messgae;
                  // toast.error("Something went wrong...!")
                }
              })
              .catch((err) => {
                setSearchingChapters(false);
                err.messgae;
                // toast.error("Something went wrong...!")
              });
          } else {
            setSearchingChapters(false);
            toast.error("No chapters found...!");
          }
        })
        .catch((e) => e);
    }
  }, [selectedSubjectForQuiz]);

  function handleNavigateToQuestion(subject: string) {
    setSelectedSubject(subject);
    setSelectedSubjectForQuiz(subject);
    // alert(subject)
  }
  // dropdowns
  return (
    <div className="flex w-full flex-col p-3 mt-1 items-center">
      {/* navigations for grid and list */}
      {!isLoading ? (
        <div className=" w-full">
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
      <div className="w-full flex flex-col px-3 border py-3 gap-2 bg-white border-purple-200 mt-1 rounded-md justify-center">
        {!isLoading ? (
          allSubjectsError === "" ? (
            subjectsAfterFilter.length > 0 ? (
              subjectsAfterFilter.sort().map((item, index) => (
                <SubjectItem
                  key={`${item._id}-${index}`} //${index}
                  item={item}
                  subjectItemLength={subjectsAfterFilter.length}
                  index={index}
                  selectedSubject={selectedSubject}
                  searchingChapters={searchingChapters}
                  handleNavigateToQuestion={handleNavigateToQuestion}
                />
              ))
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
