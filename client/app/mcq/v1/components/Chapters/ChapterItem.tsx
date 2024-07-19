import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const ChapterItem = ({ data, index, chapterItemLength }: any) => {
  return (
    <div
      key={data.name}
      className={`w-full px-2 py-2 gap-2 flex justify-between items-center ${
        index !== chapterItemLength - 1 &&
        "border border-b-1 border-t-0 border-l-0 border-r-0"
      } `}
    >
      <div
        className="flex w-full gap-1 items-center"
        title={`Click to go to quizz for chapter \`${data.name}\``}
      >
        <div className="w-[fit-content]">{index + 1}.</div>
        <div className="flex w-full justify-between items-center">
          <div className="w-full flex-1">
            <Button
              className="hover:bg-white w-full py-1 justify-start text-black"
              href={`/mcq/v1/${data.subject.replaceAll(
                " ",
                "-"
              )}/${data.name.replaceAll(" ", "-")}/1`}
            >
              <div>{data.name}</div>
            </Button>
          </div>
          <div className="">
            <Button
              className="text-white focus:ring-4 focus:outline-none focus:ring-purple-300 bg-purple-900 py-1 hover:bg-purple-950 justify-start"
              href={`/mcq/v1/${data.subject.replaceAll(
                " ",
                "-"
              )}/${data.name.replaceAll(" ", "-")}/1`}
            >
              Quizz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterItem;
