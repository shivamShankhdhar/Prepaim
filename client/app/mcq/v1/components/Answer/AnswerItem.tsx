import React, { useEffect, useState } from "react";

const AnswerItem = ({ questions, questionNo, answer, index, isTrue }: any) => {
  // const answerPrefix
  const handleAnserClicked = (id: any) => {
    const questionById = document.getElementById(id);
    if (isTrue) {
      questionById?.classList.add("bg-green-100");
      questionById?.classList.add("hover:bg-green-100");
      questionById?.classList.add("border-green-600");
      questionById?.classList.add("hover:border-green-600");
    } else {
      questionById?.classList.add("bg-red-100");
      questionById?.classList.add("hover:bg-red-100");
      questionById?.classList.add("border-red-800");
      questionById?.classList.add("hover:border-red-800");
    }
  };
  const answerPrefix = "";
  const items = ["A", "B", "C", "D"];
  return (
    <div
      className={`border gap-2 self-stretch rounded-md hover:shadow-sm shadow-purple-500  cursor-pointer  py-2 px-3 sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] flex`}
      onClick={() =>
        handleAnserClicked(
          `id-at-answeritem-for-click-event-${questions[
            questionNo
          ].question.replaceAll(" ", "-")}-${answer}-${items[index]}`
        )
      }
      id={`id-at-answeritem-for-click-event-${questions[
        questionNo
      ].question.replaceAll(" ", "-")}-${answer}-${items[index]}`}
    >
      <div className="w-[fit-content]">{`${answerPrefix}${items[index]}`}.</div>
      <div className="py-0">{answer}</div>
    </div>
  );
};
export default AnswerItem;
