import React, { useEffect, useState } from "react";
import { TbGridDots, TbListDetails } from "react-icons/tb";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ShareBtn from "@/app/components/Global/ShareBtn";

const QuestionPageLayoutToggle = () => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [PageLayoutView, setPageLayoutView] = useState(
    pathname.includes("QuestionStackViewPage") ? "grid" : "list"
  );
  // useEffect(() => {
  //   if (PageLayoutView === "grid") {
  //     router.push(
  //       `/mcq/v1/QuestionStackViewPage/${subject}/${chapter}/${question}`
  //     );
  //   } else {
  //     router.push(
  //       `/mcq/v1/QuestionListViewPage/${subject}/${chapter}/${question}`
  //     );
  //   }
  // }, [PageLayoutView]);
  return (
    <div className="w-full flex justify-end items-center gap-3 py-1 px-5">
      <ShareBtn />
      <div className="flex justify-center w-[fit-content]  items-center py-2 border bg-white border-purple-300 rounded-md text-purple-800">
        <div
          title={`${
            PageLayoutView === "grid"
              ? "Cureently Displaying Test/Prepration Mode "
              : "Select to change Prepration Mode to Test/Prepration Mode "
          }`}
          className={`flex justify-center  ${
            PageLayoutView === "grid"
              ? "text-purple-900 font-semibold"
              : "text-purple-300"
          } items-center px-4 cursor-pointer  border-2 border-t-0 border-r-1 border-l-0 border-b-0 border-purple-300`}
          // onClick={() => setPageLayoutView("grid")}
        >
          <Link
            href={`/mcq/v1/${subject}/${chapter}/QuestionStackViewPage/${question}`}
          >
            <TbGridDots size={20} />
          </Link>
        </div>
        <div
          title={`${
            PageLayoutView === "list"
              ? "Cureently Displaying Prepration Mode"
              : "Select to change Test/Prepration Mode to Prepration Mode"
          }`}
          className={`flex justify-center  ${
            PageLayoutView === "list"
              ? "text-purple-900 font-semibold"
              : "text-purple-300"
          } items-center px-4 cursor-pointer  `}
          // onClick={() => setPageLayoutView("list")}
        >
          <Link
            href={`/mcq/v1/${subject}/${chapter}/QuestionListViewPage/${question}`}
          >
            <TbListDetails size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionPageLayoutToggle;
