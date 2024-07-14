"use client";
import SimpleLoader from "@/app/components/SimpleLoader";
import Link from "next/link";
import React, { useState } from "react";

const ChapterItem = ({ data, index, subject }: any) => {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigating = () => {
    setIsNavigating(true);
  };
  return (
    <div
      key={data.name}
      className="w-full px-2 py-2 gap-2 cursor-pointer flex justify-between items-center  border border-b-1 border-t-0 border-l-0 border-r-0"
    >
      <div className="flex gap-1">
        <div className="w-[fit-content] font-semibold">{index + 1}.</div>
        <div>{data.name}</div>
      </div>

      <div>
        <Link
          href={`/mcq/v1/${subject}/${data.name.replaceAll(" ", "-")}/1`}
          onClick={handleNavigating}
          className="flex justify-center items-center gap-2 bg-purple-100 rounded-md border px-2 py-0 border-purple-300"
        >
          {isNavigating && <SimpleLoader size={15} clr={"purple"} />} Take Quiz
        </Link>
      </div>
    </div>
  );
};

export default ChapterItem;
