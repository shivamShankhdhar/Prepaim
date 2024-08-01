"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { IoBookOutline } from "react-icons/io5";
import ChapterSideBarSkeleton from "./ChapterSideBarSkeleton";
import SidebarItem from "./SidebarItem";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import { usePathname } from "next/navigation";
interface Props {
  error: String;
  requestedPage: String;
}

const Sidebar = ({ error, requestedPage }: Props) => {
  const { chapter } = useParams();
  const { subject } = useParams();
  const pathname = usePathname();
  const [chapters, setChapters] = useState(
    [{ name: "" }].filter((i) => i.name !== "")
  );

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.data.prepaim.com/mcq/getallchaptersbysubject/${subject}`
        )
        .then((response) => {
          setChapters(response.data);
        })
        .catch((error) => {
          error;
        });
    } catch (error: any) {
      error.message;
    }
  }, []);

  const length = chapters.length;

  return (
    <div
      className={`min-w-[220px] max-w-[fit-content]  border border-l-0  border-t-0  border-b-0 border-r-1 border-purple-300 mt-0 bg-white overflow-y-auto `}
    >
      <div className="px-2 py-[10px] text-center flex justify-center  items-center font-bold text-gray-500 border border-gray-200 border-l-0  border-t-0  border-r-0">
        <IoBookOutline size={20} />
        &nbsp; Chapters
      </div>
      <div className="flex flex-col gap-0 w-[fit-content] ">
        {Object.values(error).toString().replaceAll(",", "") === "" ? (
          chapters.length > 0 ? (
            chapters
              .filter((i) => i.name !== "")
              .map((item, index) => (
                <SidebarItem
                  totalLengthOfChapters={chapters.length}
                  pageViewMode={requestedPage}
                  key={`${index}-${item.name}`} //${item.name}
                  item={item}
                  index={index}
                  subject={subject}
                  chapter={chapter}
                />
              ))
          ) : (
            <ChapterSideBarSkeleton />
          )
        ) : (
          <ErrorMessage
            isBg={false}
            isButton={false}
            text={`Error !! Can't Load Chapters`}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
