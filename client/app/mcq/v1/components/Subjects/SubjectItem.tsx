import React from "react";
import Link from "next/link";
import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";

const SubjectItem = ({
  item,
  index,
  handleNavigateToQuestion,
  searchingChapters,
  selectedSubject,
  subjectItemLength,
}: any) => {
  return (
    <div
      className={`w-full flex flex-wrap items-center rounded-sm gap-2 ${
        index !== subjectItemLength - 1 &&
        "border-b-1 border-l-0  border-r-0 border-t-0 border"
      } py-2`}
    >
      <div className="flex-1 flex ">
        <div className="px-3 flex-none font-semibold flex items-center justify-center ">
          {index + 1}.
        </div>
        <div className="flex-1 py-1">{item.name}</div>
      </div>
      <div className="flex-none flex justify-center gap-1 items-center">
        <div className="flex justify-between items-center gap-3 ">
          <div
            onClick={() => handleNavigateToQuestion(item.name)}
            className="py-1 flex rounded-md justify-center items-center gap-1 cursor-pointer px-5 bg-purple-800 text-white  hover:bg-purple-900"
            title="Start Quizz"
          >
            {selectedSubject === item.name && searchingChapters && (
              <SimpleLoader clr="white" size={15} />
            )}
            {selectedSubject === item.name
              ? searchingChapters
                ? "wait..."
                : "Quizz"
              : "Quizz"}
          </div>
          <Link
            className="py-1 bg-gray-200 rounded-md text-black px-5  hover:bg-gray-300"
            href={`/mcq/v1/${item.name.replaceAll(" ", "-")}/chapters`}
            title={`Explore all Chapters of ${item.name}`}
          >
            Chapters
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubjectItem;
