import { useCookies } from "next-client-cookies";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";;

const AnswerItemForListPageView = ({
  question,
  questionNo,
  qustion_id,
  uniqueKeyCombination,
  answer,
  index,
  isTrue,
}: any) => {
  const cookies = useCookies();

  // const answerPrefix
  // const handleAnserClicked = (id: any) => {
  //   const questionById = document.getElementById(id);
  //   if (isTrue) {
  //     questionById?.classList.add("bg-green-100");
  //     questionById?.classList.add("hover:bg-green-100");
  //     questionById?.classList.add("border-green-600");
  //     questionById?.classList.add("hover:border-green-600");
  //   } else {
  //     questionById?.classList.add("bg-red-100");
  //     questionById?.classList.add("hover:bg-red-100");
  //     questionById?.classList.add("border-red-800");
  //     questionById?.classList.add("hover:border-red-800");
  //   }
  // };
  const handleAnserClicked = () => {
    if (cookies.get("answer-cliked-at-prepration-page") === undefined) {
      cookies.set("answer-cliked-at-prepration-page", "true");
      toast.error(
        "This feature is not enabled in Prepration Mode please switch to Test/Prepration mode from toggle button",
        {
          position: "top-center",
        }
      );
    }
  };

  const answerPrefix = "";

  const items = ["A", "B", "C", "D"];

  return (
    <>
      <div
        className={`border border-purple-300 gap-2 self-stretch rounded-md hover:shadow-md shadow-purple-900  cursor-pointer  py-2 px-3 w-full flex`}
        onClick={handleAnserClicked}
        id={`id-at-list-view-page-answeritem-for-click-event-${question.replaceAll(
          " ",
          "-"
        )}-${answer}-${
          items[index]
        }-${qustion_id}-uniqueKeyCombination-${uniqueKeyCombination}`}
      >
        <div className="w-[fit-content]">
          {`${answerPrefix}${items[index]}`}.
        </div>
        <div className="py-0">{answer}</div>
      </div>
    </>
  );
};
export default AnswerItemForListPageView;
