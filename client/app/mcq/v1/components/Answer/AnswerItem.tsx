import React, { useEffect, useState } from "react";

const AnswerItem = ({
  questions,
  questionNo,
  answer,
  index,
  isTrue,
  setIsAnswerLocked,
}: any) => {
  // const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  // const answerPrefix
  const handleAnserClicked = (id: any) => {
    const questionById = document.getElementById(id);
    if (isTrue) {
      // setIsAnswerClicked(true);
      questionById?.classList.add("bg-green-100");
      questionById?.classList.add("!hover:bg-green-600");
      questionById?.classList.add("!border-green-800");
      questionById?.classList.add("!hover:border-green-800");
    } else {
      // setIsAnswerClicked(true);
      questionById?.classList.add("bg-red-100");
      questionById?.classList.add("!hover:bg-red-600");
      questionById?.classList.add("border-red-800");
      questionById?.classList.add("!hover:border-red-800");
    }
    setIsAnswerLocked(false);
  };
  const answerPrefix = "";
  const items = ["A", "B", "C", "D"];
  return (
    <div
      className={`border border-purple-300 gap-2 self-stretch rounded-md hover:shadow-md shadow-purple-900  cursor-pointer  py-2 px-3 sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] flex`}
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
