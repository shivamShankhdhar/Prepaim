import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import SimpleLoader from "../Global/SimpleLoader";
import toast from "react-hot-toast";
import axios from "axios";
import useFetch from "@/app/hooks/fetch.hook";

const TryProgrammingQustions = ({ subjects }: any) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isLoadingQuestionFromServer, setIsLoadingQuestionFromServer] =
    useState(false);
  const router = useRouter();

  const [
    loadingQuestionForSelectedSubject,
    setloadingQuestionForSelectedSubject,
  ] = useState(false);
  // get all questions and navigate it to the selected language
  const {
    data: apiData,
    data: isLoading,
    data: serverError,
  } = useFetch("/admin/coding/getAllQuestionsFromCoding");

  useEffect(() => {
    if (selectedSubject !== "") {
      if (apiData !== undefined) {
        router.push(
          `/coding/v1/${selectedSubject}/${apiData.apiData[0].question.replaceAll(
            " ",
            "-"
          )}`
        );
      } else {
        toast.error("No question available for this subject");
      }
    }
  }, [selectedSubject]);

  // useEffect(() => {
  //   if (data.apiData !== undefined) {
  //     setFirstQuestionFromCodingBySubject(data.apiData);
  //     setIsLoadingQuestionFromServer(data.isLoading);
  //   }
  // }, [data]);

  // (firstQuestionFromCodingBySubject);
  // useEffect(() => {
  //   if (selectedSubject !== "") {
  //     if (
  //       firstQuestionFromCodingBySubject !== undefined &&
  //       firstQuestionFromCodingBySubject.question !== ""
  //     ) {
  //       router.push(
  //         `/coding/v1/${selectedSubject}/${firstQuestionFromCodingBySubject.question}`
  //       );
  //     } else {
  //       toast.error("No question found for this subject");
  //     }
  //   }
  // }, [selectedSubject, firstQuestionFromCodingBySubject]);

  return (
    <div id="trycoding" className="w-full px-11 gap-5">
      <div className="w-[fit-content] text-gray-700 py-1 font-semibold text-2xl">
        Try Coding Questions
      </div>

      <div className="w-full flex justify-center gap-5 flex-wrap">
        {subjects.map((subject: any) => (
          <div
            key={`${subject.name}-key-at-home-page-trycoding-questions`}
            onClick={() => {
              setSelectedSubject(subject.name);
              setIsLoadingQuestionFromServer(true);
            }}
            title={`Try MCQ for ${subject.name}`}
            className="flex justify-center cursor-pointer border-purple-300 items-center py-3 border rounded-md bg-purple-100 hover:bg-purple-200"
          >
            {isLoadingQuestionFromServer ? (
              selectedSubject === subject.name ? (
                <>
                  <div className="w-full px-4 ">
                    <Image
                      src={subject.image}
                      height={80}
                      width={80}
                      title={`Try MCQ for ${subject.name}`}
                      alt={`Try MCQ for ${subject.name}`}
                    />
                  </div>

                  <div className="w-[80px] flex justify-center items-center h-[100px] rounded-md absolute bg-white/50 backdrop:blur ">
                    <SimpleLoader clr={"purple"} />
                  </div>
                </>
              ) : (
                <div className="w-full px-4">
                  <Image
                    src={subject.image}
                    height={80}
                    width={80}
                    title={`Try MCQ for ${subject.name}`}
                    alt={`Try MCQ for ${subject.name}`}
                  />
                </div>
              )
            ) : (
              <div className="w-full px-4">
                <Image
                  src={subject.image}
                  height={80}
                  width={80}
                  title={`Try MCQ for ${subject.name}`}
                  alt={`Try MCQ for ${subject.name}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TryProgrammingQustions;
