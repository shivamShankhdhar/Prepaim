// import React from "react";
import SimpleLoader from "@/app/components/Global/SimpleLoader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SlReload } from "react-icons/sl";
import CodingQuestionItem from "../../components/dashboard/CodingQuestionItem";
import CodingQuestionTableHead from "../../components/dashboard/CodingQuestionTableHead";
import useFetch from "@/app/hooks/fetch.hook";

const CodingDashboard = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reloadQuestions, setReloadQuestions] = useState(false);
  const [totalCodingQuestions, setTotalCodingQuestions] = useState(
    [
      {
        _id: "",
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

  const { data } = useFetch("/admin/coding/getAllQuestionsFromCoding");

  useEffect(() => {
    if (data.apiData !== undefined) {
      setTotalCodingQuestions(data.apiData);
      setLoading(data.isLoading);
    }
  }, [data.apiData, data.isLoading]);

  console.log(data.apiData);
  const handleReloadQuestion = () => {
    setReloadQuestions((prev) => !prev);
  };

  return (
    <div className="w-full py-0 flex flex-col gap-1">
      <div className="w-full flex gap-1 flex-wrap justify-center bg-white py-5 rounded-md mt-1">
        <div className="flex w-[450px] py-2 px-5 rounded-md bg-purple-500">
          <div className="flex justify-start items-center flex-1 text-white">
            Total questions
          </div>
          <div className="flex justify-center h-6 text-sm w-6 items-center bg-white rounded-full">
            {loading ? (
              <SimpleLoader size={10} clr={"purple"} />
            ) : (
              totalCodingQuestions.length
            )}
          </div>
        </div>
        {/* <div className="flex w-[450px] py-2 px-5 rounded-md bg-rose-500">
          <div className="flex justify-start items-center flex-1 text-white">
            this is question
          </div>
          <div className="flex justify-center h-6 text-sm w-6 items-center bg-white rounded-full">
            20
          </div>
        </div> */}
      </div>

      <div className="w-full bg-white rounded-md flex flex-col gap-2 p-3">
        <div className="flex items-center">
          <div className="w-full text-3xl flex-1 font-semibold ">
            Total questions
          </div>
          <div
            onClick={handleReloadQuestion}
            className="px-2 flex gap-2 py-1 bg-purple-800 text-white rounded-sm items-center cursor-pointer"
          >
            <SlReload size={15} /> {loading ? "Loading..." : "reload"}
          </div>
        </div>
        <CodingQuestionTableHead />

        {/* {loading ? (
          <SimpleLoader size={15} clr={"purple"} />
        ) : (
          totalCodingQuestions.map((item, index) => {
            return (
              <CodingQuestionItem
                key={index}
                item={item}
                index={index}
                id={item._id}
              />
            );
          })
        )} */}
      </div>
    </div>
  );
};

export default CodingDashboard;
