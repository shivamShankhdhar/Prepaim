import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const QuestionItems = ({ index, item }: any) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();
  const questionNo = Number(question) - 1;
  return (
    <Link href={`/mcq/v1/${subject}/${chapter}/${index + 1}`}>
      <p
        className={`flex justify-center items-center h-9 w-9 cursor-pointer rounded-full ${
          // on item level
          item.level === "a"
            ? `${
                questionNo === index
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-indigo-100 text-indigo-800 hover:bg-indigo-700 hover:text-white"
              }`
            : item.level === "b"
            ? `${
                questionNo === index
                  ? "bg-purple-600 text-white hover:bg-purple-900 "
                  : "bg-purple-200 text-purple-900  hover:bg-purple-600 hover:text-white"
              }`
            : `${
                questionNo === index
                  ? "bg-rose-600 text-white hover:bg-rose-900 "
                  : "bg-rose-200 text-rose-900  hover:bg-rose-600 hover:text-white"
              }`
        } ${
          // on active item
          (questionNo === index &&
            item.level === "a" &&
            "bg-indigo-600  rounded-full text-white hover:text-white hover:bg-indigo-700") ||
          (questionNo === index &&
            item.level === "b" &&
            "  bg-purple-600  rounded-full text-white hover:text-white hover:bg-purple-700") ||
          (questionNo === index &&
            item.level === "c" &&
            "bg-rose-600 rounded-full text-white hover:text-white hover:bg-rose-700")
        }`}
        title={`${
          questionNo === index
            ? "Current selected Question"
            : "Click to select this Question"
        }`}
      >
        {index + 1}
      </p>
    </Link>
  );
};

export default QuestionItems;
