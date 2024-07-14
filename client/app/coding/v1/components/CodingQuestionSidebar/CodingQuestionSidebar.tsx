import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CodingQuestionSidebarItemSkeleton from "./CodingQuestionSidebarItemSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import axios from "axios";
import CodingQuestionItemForSidebar from "./CodingQuestionItemForSidebar";

const CodingQuestionSidebar = () => {
  const { language } = useParams();
  const { question } = useParams();
  const questionFromParams = question.toString().replaceAll("-", " ");
  const [loadingQuestionFromServer, setLoadingQuestionFromServer] =
    useState(true);
  const [errorLoadingQuestion, setErrorLoadingQuestion] = useState("");
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

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/admin/coding/getAllQuestionsFromCoding")
        .then((response) => {
          console.log(response.data);
          setQuestionObjectFromServer(response.data);
          setLoadingQuestionFromServer(false);
        })
        .catch((error) => {
          setLoadingQuestionFromServer(false);
        });
    } catch (error: any) {
      setLoadingQuestionFromServer(false);
      setErrorLoadingQuestion(error.message);
    }
  }, []);
  return (
    <div className="sticky overflow-y-auto w-[250px]  px-2 bg-white border border-t-0 border-r-1 border-l-0 border-b-0">
      {!loadingQuestionFromServer ? (
        errorLoadingQuestion === "" ? (
          questionObjectFromServer.map((item: any, index: any) => {
            return (
              <CodingQuestionItemForSidebar
                key={`${item}-${index}`}
                language={language}
                item={item.question}
                question={item.question}
                index={index}
                questionFromParams={questionFromParams}
              />
            );
          })
        ) : (
          <ErrorMessage
            text={errorLoadingQuestion}
            isBg={false}
            isButton={false}
          />
        )
      ) : (
        <CodingQuestionSidebarItemSkeleton />
      )}
    </div>
  );
};

export default CodingQuestionSidebar;
