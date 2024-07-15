import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import Loader from "@/app/components/Global/Loader";

const QuestionsList = ({
  setQuestionIdForDelete,
  setIsSheetOpen,
  setQuestionName,
  isDeleted,
}: any) => {
  const [questions, setQuestions] = useState(
    [
      {
        _id: "",
        question: "",
        answer: [{ ans: "", isTrue: false }],
        explanation: [{ answer: "", explanation: "", timestamp: "" }],
      },
    ].filter((q) => q.question !== "")
  );
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [questionError, setQuestionError] = useState("");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/admin/mcq/getallquestions")
        .then((response) => {
          setQuestions(response.data);
          setLoadingQuestions(false);
        })
        .catch((e) => {
          setQuestionError("error");
          setLoadingQuestions(false);
        });
    } catch (error) {
      setLoadingQuestions(false);
    }
  }, [isDeleted]);

  const handleDelete = (id: any, question: any) => {
    setIsSheetOpen(true);
    setQuestionIdForDelete(id);
    setQuestionName(question);
  };

  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg bg-white">
      {loadingQuestions === false ? (
        questionError === "" ? (
          questions.length > 0 ? (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Question
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Chapter
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Added Date
                  </th>

                  <th scope="col" className="py-3 flex justify-center">
                    Level
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {questions.map((data: any, index: number) => {
                  return (
                    <tr
                      key={`${data._id}-${index}`}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}.
                      </th>
                      <td className="px-6 py-4">{data.question}</td>
                      <td className="px-6 py-4">{data.subject}</td>
                      <td className="px-6 py-4">{data.chapter}</td>
                      <td className="px-6 py-4">{data.date_added}</td>

                      <td className="py-4 flex justify-center">
                        <div className=" px-5 mb-0">
                          {data.level === "a" && (
                            <div className="bg-indigo-100 text-indigo-800 px-3  text-sm border border-indigo-800 rounded-full">
                              basic
                            </div>
                          )}

                          {data.level === "b" && (
                            <div className="bg-indigo-100 text-indigo-800 px-3 py-1/2 text-sm border border-indigo-800 rounded-full">
                              medium
                            </div>
                          )}

                          {data.level === "c" && (
                            <div className="bg-rose-100 text-rose-800 px-3 py-1/2 text-sm border border-rose-800 rounded-full">
                              advanced
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-right text-indigo-700">
                        <Link href={`/admin/update-question/${data._id}`}>
                          <CiEdit size={20} />
                        </Link>
                      </td>
                      <td
                        className="px-6 py-4 text-right text-red-700"
                        onClick={() => handleDelete(data._id, data.question)}
                      >
                        <MdOutlineDeleteOutline size={20} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <ErrorMessage
              text={`No question founds`}
              isButton={false}
              isBg={false}
            />
          )
        ) : (
          <ErrorMessage
            text={`Can't Load questions`}
            isButton={false}
            isBg={false}
          />
        )
      ) : (
        <Loader size={20} cls="text-gray-800" text={`Loading questions...`} />
      )}
    </div>
  );
};

export default QuestionsList;
