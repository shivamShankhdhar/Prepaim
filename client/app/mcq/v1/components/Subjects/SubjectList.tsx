"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SubjectListSkeleton from "./SubjectListSkeleton";
import ActionBarForSubjectSkeleton from "../ActionBarForSubjects/ActionBarForSubjectSkeleton";
import { SlReload } from "react-icons/sl";
import SubjectsNotFoundForSelectedCategory from "./SubjectsNotFoundForSelectedCategory";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import ActionBarForSubjects from "../ActionBarForSubjects/ActionBarForSubjects";
import SubjectItemListView from "./SubjectItemListView";
import toast from "react-hot-toast";
import SubjectItemGridView from "./SubjectItemGridView";
import LayoutToggle from "../../../../components/Global/LayoutToggle";

const SubjectList = ({ setSubjectLength }: any) => {
  // options for dropdown for layout
  const router = useRouter();
  let [subjects, setSubjects] = useState([
    { _id: "", name: "", image: "", branch: "" },
  ]);

  const [layOutView, setLayoutView] = useState("grid");

  const [isLoading, setLoading] = useState(true);

  const [Branch, setBranch] = useState("Engineering");

  const [allSubjectsError, setAllSubjectsError] = useState("");

  const [reloadSubjects, setReloadSubjects] = useState(false);

  const [subjectsAfterFilter, setSubjectsAfterFilter] = useState(
    // subjects.filter((subject) => subject.branch === `${Branch}`)
    [{ _id: "null", name: "", image: "", branch: "" }]
  );

  const [filterBySubjectName, setFilterBySubjectName] = useState("");
  // trying different things here
  const [subjectsCombinedFilters, SetSubjectsCombinedFilters] = useState([
    { _id: "null", name: "", image: "", branch: "" },
  ]);

  useEffect(() => {
    try {
      axios
        .get(
          `/mcq/getSubjectsbyBranchAndSubject/${Branch}/${filterBySubjectName}`
        )
        .then((response) => {
          setSubjects(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setAllSubjectsError(err.message);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }, [Branch, filterBySubjectName]);

  useEffect(() => {
    if (Branch !== "") {
      setSubjectsAfterFilter(
        subjects.filter((subject) => subject.branch === Branch)
      );
    }
  }, [Branch, subjects]);

  useEffect(() => {
    if (filterBySubjectName !== "") {
      setSubjectsAfterFilter(
        subjectsAfterFilter.filter(
          (subject) =>
            subject.name === filterBySubjectName && subject.branch === Branch
        )
      );
    }
  }, [subjectsAfterFilter, filterBySubjectName]);

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
                    setSelectedSubjectForQuiz("");
                    setSelectedSubject("");
                    // return toast.error("Something went wrong...!");
                  }
                } catch (error: any) {
                  setSearchingChapters(false);
                  setSelectedSubjectForQuiz("");
                  setSelectedSubject("");
                  // return toast.error("Something went wrong...!");
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

  function handleNavigateToQuestion(subject: string) {
    setSelectedSubject(subject);
    setSelectedSubjectForQuiz(subject);
    // alert(subject)
  }
  // dropdowns
  return (
    <div className="flex w-full flex-col py-2 px-3 items-center">
      {/* navigations for grid and list */}
      {!isLoading ? (
        <div className=" w-full">
          <ActionBarForSubjects
            isLoading={isLoading}
            Branch={Branch}
            setBranch={setBranch}
            subjects={subjects}
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
        {!isLoading ? (
          allSubjectsError === "" ? (
            subjects.length > 0 ? (
              subjects.sort().map((item, index) =>
                layOutView === "list" ? (
                  <SubjectItemListView
                    key={`${item._id}-${index}`} //${index}
                    item={item}
                    subjectItemLength={subjects.length}
                    index={index}
                    selectedSubject={selectedSubject}
                    searchingChapters={searchingChapters}
                    handleNavigateToQuestion={handleNavigateToQuestion}
                  />
                ) : (
                  <SubjectItemGridView
                    key={`${item._id}-${index}`} //${index}
                    item={item}
                    subjectItemLength={subjects.length}
                    index={index}
                    selectedSubject={selectedSubject}
                    searchingChapters={searchingChapters}
                    handleNavigateToQuestion={handleNavigateToQuestion}
                  />
                )
              )
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
