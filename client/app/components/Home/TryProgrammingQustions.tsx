import React, { useEffect, useState } from "react";

import Image from "next/image";
import useFetch from "@/app/hooks/fetch.hook";
import { useRouter } from "next/navigation";
import SimpleLoader from "../Global/SimpleLoader";
import toast from "react-hot-toast";

const TryProgrammingQustions = ({ subjects }: any) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isLoadingQuestionFromServer, setIsLoadingQuestionFromServer] =
    useState(false);
  const router = useRouter();

  const { data } = useFetch(
    `/coding/getQuestionsFromCodingByQuestionName/${selectedSubject}`
  );

  const [
    firstQuestionFromCodingBySubject,
    setFirstQuestionFromCodingBySubject,
  ] = useState([{ question: "" }].filter((i) => i.question !== ""));

  const [
    loadingQuestionForSelectedSubject,
    setloadingQuestionForSelectedSubject,
  ] = useState(false);

  useEffect(() => {
    if (data.apiData !== undefined) {
      setFirstQuestionFromCodingBySubject(data.apiData);
      setIsLoadingQuestionFromServer(data.isLoading);
    }
  }, [data]);

  useEffect(() => {
    if (firstQuestionFromCodingBySubject.length > 0) {
      router.push(
        `/coding/v1/${selectedSubject}/${firstQuestionFromCodingBySubject[0].question}`
      );
    } else {
      toast.error("No question found for this subject");
    }
  }, [firstQuestionFromCodingBySubject]);

  return (
    <div id="trycoding" className="w-full px-11 gap-5">
      <div className="w-[fit-content] text-gray-700 py-1 font-semibold text-2xl">
        Try Coding Questions
      </div>

      <div className="w-full flex justify-center gap-5 flex-wrap">
        {subjects.map((subject: any) => (
          <div
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
