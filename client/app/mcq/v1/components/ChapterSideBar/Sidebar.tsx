"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { IoBookOutline } from "react-icons/io5";
import ChapterSideBarSkeleton from "./ChapterSideBarSkeleton";
import SidebarItem from "./SidebarItem";
import ErrorMessage from "@/app/components/Global/ErrorMessage";

interface Props {
  error: any;
}

const Sidebar = ({ error }: Props) => {
  const { chapter } = useParams();
  const { subject } = useParams();

  const [chapters, setChapters] = useState(
    [{ name: "" }].filter((i) => i.name !== "")
  );

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:100001/mcq/getallchaptersbysubject/${subject}`)
        .then((response) => {
          setChapters(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  }, [subject]);

  const length = chapters.length;

  return (
    <div
      className={`w-[250px]  border border-l-0  border-t-0  border-b-0 md: border-gray-200 mt-0 bg-white  ${
        length > 14 ? "overflow-y-scroll" : ""
      }`}
    >
      <div className="px-2 py-[10px] text-center flex justify-center  items-center font-bold text-gray-500 border border-gray-200 border-l-0  border-t-0  border-r-0">
        <IoBookOutline size={20} />
        &nbsp; Chapters
      </div>
      <div className="flex flex-col gap-0 pl-2 pr-1 w-full ">
        {Object.values(error).toString().replaceAll(",", "") === "" ? (
          chapters.length > 0 ? (
            chapters
              .filter((i) => i.name !== "")
              .map((item, index) => (
                <SidebarItem
                  key={item.name}
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
