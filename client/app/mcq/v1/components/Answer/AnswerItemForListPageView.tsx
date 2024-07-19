import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AnswerItemForListPageView = ({
  question,
  questionNo,
  qustion_id,
  uniqueKeyCombination,
  answer,
  index,
  isTrue,
}: any) => {
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
  const answerPrefix = "";
  const items = ["A", "B", "C", "D"];
  return (
    <>
      <div
        className={`border gap-2 rounded-sm  cursor-pointer  py-2 px-3 w-full flex`}
        // onClick={() =>
        //   handleAnserClicked(
        //     `id-at-list-view-page-answeritem-for-click-event-${question.replaceAll(
        //       " ",
        //       "-"
        //     )}-${answer}-${
        //       items[index]
        //     }-${qustion_id}-uniqueKeyCombination-${uniqueKeyCombination}`
        //   )
        // }
        onClick={() => {
          return toast.error(
            "You are on prepration Page view for trying question with your knowlegde please switch to Test/Prepration mode from toggle button",
            {
              position: "top-center",
            }
          );
        }}
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
