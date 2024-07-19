import { Button } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const QuestionItems = ({ index, item }: any) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();
  const questionNo = Number(question) - 1;
  return (
    <Button
      sx={{ minHeight: 0, minWidth: 0 }}
      href={`/mcq/v1/${subject}/${chapter}/QuestionStackViewPage/${index + 1}`}
      className={`px-0 py-0 rounded-full h-9 w-9 ${
        // on item level
        item.level === "a"
          ? `${
              questionNo === index
                ? "bg-indigo-600 focus:ring-2 focus:ring-inset focus:ring-white text-white hover:bg-indigo-700"
                : "bg-indigo-100 focus:ring-2 focus:ring-inset focus:ring-white text-indigo-800 hover:bg-indigo-700 hover:text-white"
            }`
          : item.level === "b"
          ? `${
              questionNo === index
                ? "bg-purple-600 text-white hover:bg-purple-900 focus:ring-2 focus:ring-inset focus:ring-white"
                : "bg-purple-200 text-purple-900 focus:ring-2 focus:ring-white focus:ring-inset hover:bg-purple-600 hover:text-white"
            }`
          : `${
              questionNo === index
                ? "bg-rose-600 text-white hover:bg-rose-900 focus:ring-2 focus:ring-inset focus:ring-white"
                : "bg-rose-200 text-rose-900 focus:ring-2 focus:ring-inset focus:ring-white hover:bg-rose-600 hover:text-white"
            }`
      } ${
        // on active item
        (questionNo === index &&
          item.level === "a" &&
          "bg-indigo-600  rounded-full focus:ring-2 focus:ring-inset focus:ring-white text-white hover:text-white hover:bg-indigo-700") ||
        (questionNo === index &&
          item.level === "b" &&
          "  bg-purple-600  rounded-full focus:ring-2 focus:ring-inset focus:ring-white text-white hover:text-white hover:bg-purple-700") ||
        (questionNo === index &&
          item.level === "c" &&
          "bg-rose-600 rounded-full text-white focus:ring-2 focus:ring-inset focus:ring-white hover:text-white hover:bg-rose-700")
      }`}
      title={`${
        questionNo === index
          ? "Current selected Question"
          : "focus to select this Question"
      }`}
    >
      {index + 1}
    </Button>
  );
};

export default QuestionItems;
