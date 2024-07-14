import React from "react";
import Link from "next/link";
import SimpleLoader from "@/app/components/Global/SimpleLoader";

const SubjectItem = ({
  item,
  index,
  handleNavigateToQuestion,
  searchingChapters,
  selectedSubject,
}: any) => {
  return (
    <div key={index} className=" flex flex-col w-full gap-1/2 px-2">
      <div className=" w-full py-1 flex items-center rounded-sm bg-white gap-2">
        <div className="flex-1 flex">
          <div className="px-3 flex-none font-semibold flex items-center justify-center ">
            {index + 1}.
          </div>
          <div className="flex-1 py-1">{item.name}</div>
        </div>
        <div className="flex-none flex justify-center gap-1 items-center">
          <div className="flex justify-between items-center gap-3 ">
            <div
              onClick={() => handleNavigateToQuestion(item.name)}
              className="py-1 flex justify-center items-center gap-1 cursor-pointer px-5 bg-purple-800 text-white  hover:bg-purple-900"
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
            <Link href={`/mcq/v1/${item.name.replaceAll(" ", "-")}/chapters`}>
              <div
                className="cursor-pointer py-1 bg-gray-200 text-black px-5 border border-gray-400 hover:bg-gray-300"
                title={`Explore all Chapters of ${item.name}`}
              >
                Chapters
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectItem;
