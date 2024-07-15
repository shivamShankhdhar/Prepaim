import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Question = ({ isDeleted }: any) => {
  const [questions, setQuestions] = useState(
    [
      {
        question: "",
        answer: [{ ans: "", isTrue: false }],
        explanation: [{ answer: "", explanation: "" }],
      },
    ].filter((q) => q.question !== "")
  );

  const [loadingQuestions, setLoadingQuestions] = useState(true);

  const [questionError, setQuestionError] = useState("");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:10001/api/getallquestions")
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
      console.log(error);
    }
  }, [isDeleted]);

  return (
    <div className="border flex justify-between items-center w-[400px] h-[50px] rounded-md p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-2xl font-semibold">
      <h1>Total Questions</h1>
      <p className="bg-white text-purple-700 rounded-full px-2">
        {loadingQuestions ? (
          <CircularProgress size={15} sx={{ color: "purple" }} />
        ) : questionError === "" ? (
          `${questions.length}`
        ) : (
          "error"
        )}
      </p>
    </div>
  );
};

export default Question;
