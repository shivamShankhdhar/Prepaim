"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { IoBookOutline } from "react-icons/io5";
import ChapterSideBarSkeleton from "./ChapterSideBarSkeleton";
import SidebarItem from "./SidebarItem";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
interface Props {
  error: String;
  requestedPage: String;
  loading: boolean;
}

const Sidebar = ({ error, requestedPage, loading }: Props) => {
  const { chapter } = useParams();
  const { subject } = useParams();
  const pathname = usePathname();
  const [chapters, setChapters] = useState(
    [{ name: "" }].filter((i) => i.name !== "")
  );
  const [loadingChapters, setLoadingChapters] = useState(false);

  useEffect(() => {
    setLoadingChapters(true);
    try {
      axios
        .get(
          `https://api.data.prepaim.com/mcq/getallchaptersbysubject/${subject}`
        )
        .then((response) => {
          setLoadingChapters(false);
          setChapters(response.data);
        })
        .catch((error) => {
          setLoadingChapters(false);
          // toast.error("Something went wrong");
        });
    } catch (error: any) {
      setLoadingChapters(false);
      // toast.error("Something went wrong");
    }
  }, []);

  const length = chapters.length;

  return (
    <div
      className={`w-[280px] border border-l-0  border-t-0  border-b-0 border-r-1 border-purple-300 mt-0 max-h-[92vh] bg-white overflow-y-auto`}
    >
      <div className="px-2 py-[10px] text-center border border-dashed border-t-0 border-b-1 border-l-0 border-r-0 border-purple-950 flex justify-center items-center font-semibold text-purple-900 ">
        <IoBookOutline size={20} />
        &nbsp;{" "}
        {chapters.length > 1
          ? `Chapters (${chapters.length})`
          : `Chapters (${chapters.length})`}
      </div>
      <div className="flex flex-col gap-0 w-[fit-content] ">
        {Object.values(error).toString().replaceAll(",", "") === "" ? (
          loadingChapters === false ? (
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
          <div className="w-full px-2">
            {" "}
            <ErrorMessage
              isBg={false}
              isButton={false}
              text={`Error !! Can't Load Chapters`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
