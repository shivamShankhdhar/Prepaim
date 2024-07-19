import React, { useEffect, useState } from "react";
import { TbGridDots, TbListDetails } from "react-icons/tb";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const QuestionPageLayoutToggle = () => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [PageLayoutView, setPageLayoutView] = useState(
    pathname.includes("QuestionStackViewLayout") ? "grid" : "list"
  );
  // useEffect(() => {
  //   if (PageLayoutView === "grid") {
  //     router.push(
  //       `/mcq/v1/QuestionStackViewLayout/${subject}/${chapter}/${question}`
  //     );
  //   } else {
  //     router.push(
  //       `/mcq/v1/QuestionListViewLayout/${subject}/${chapter}/${question}`
  //     );
  //   }
  // }, [PageLayoutView]);
  return (
    <div className="w-full flex justify-end items-center py-1">
      <div className="flex justify-center  items-center py-2 border bg-white border-purple-300 rounded-md text-purple-800">
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
            href={`/mcq/v1/QuestionStackViewLayout/${subject}/${chapter}/${question}`}
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
            href={`/mcq/v1/QuestionListViewLayout/${subject}/${chapter}/${question}`}
          >
            <TbListDetails size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionPageLayoutToggle;
