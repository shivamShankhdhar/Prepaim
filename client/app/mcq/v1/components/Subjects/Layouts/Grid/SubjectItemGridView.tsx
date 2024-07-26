import React, { useEffect } from "react";
import Link from "next/link";
import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import Image from "next/image";

const SubjectItemGridView = ({
  item,
  handleNavigateToQuestion,
  searchingChapters,
  selectedSubject,
}: any) => {
  return (
    <div
      className={`sm:w-full max-sm:w-full md:w-[300px] lg:w-[300px] xl:w-[300px] 2xl:w-[300px] flex flex-col shadow-xl h-[fit-content] hover:shadow-2xl border border-purple-200 bg-white justify-center py-5 px-2 items-center rounded-md gap-2`}
    >
      <div className="w-full flex gap-2 overflow-hidden justify-center items-center flex-col">
        <div className="flex justify-center m-5 items-center rounded-full  h-[150px] w-[150px] ">
          <Image
            // item.image ||
            src={item.image || "/assets/django.svg"}
            alt="image"
            height={200}
            width={250}
            style={{
              objectFit: "fill",
              objectPosition: "center",
              width: "auto",
              height: "auto",
            }}
            className=" p-2 object-fill"
          />
        </div>
      </div>

      <div className="text-lg  text-purple-950 font-semibold">{item.name}</div>
      <div className="flex w-[70%] flex-col gap-3 ">
        <Button
          onClick={() => handleNavigateToQuestion(item.name)}
          className="py-1 flex-1 flex w-[100%] rounded-sm focus:ring-4 focus:outline-none focus:ring-purple-300 justify-center items-center gap-1 cursor-pointer px-2 bg-purple-800 text-white  hover:bg-purple-900"
          title="Start Quizz"
        >
          {selectedSubject === item.name && searchingChapters && (
            <SimpleLoader clr="white" size={15} />
          )}
          quizz
        </Button>
        <Button
          className="py-1 flex-1 w-full bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-sm text-black px-2 hover:bg-gray-300"
          href={`/mcq/v1/${item.name.replaceAll(" ", "-")}/chapters`}
          title={`Explore all Chapters of ${item.name}`}
        >
          Chapters
        </Button>
      </div>
    </div>
  );
};

export default SubjectItemGridView;
