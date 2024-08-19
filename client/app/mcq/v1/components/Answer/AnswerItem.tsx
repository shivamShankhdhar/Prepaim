import React, { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { HiMiniXMark } from "react-icons/hi2";
const AnswerItem = ({
  questions,
  setIsAnswerExplanationOpen,
  questionNo,
  answer,
  index,
  isTrue,
  setIsAnswerLocked,
}: any) => {
  // const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  // const answerPrefix
  const [showEmojy0, setShowEmoji0] = useState(false);
  const [showEmojy1, setShowEmoji1] = useState(false);
  const [showEmojy2, setShowEmoji2] = useState(false);
  const [showEmojy3, setShowEmoji3] = useState(false);

  const handleAnserClicked = (id: any, index: any) => {
    if (index === 0) {
      setShowEmoji0(true);
    } else if (index === 1) {
      setShowEmoji1(true);
    } else if (index === 2) {
      setShowEmoji2(true);
    } else if (index === 3) {
      setShowEmoji3(true);
    }

    const questionById = document.getElementById(id);
    if (isTrue) {
      setIsAnswerLocked(false);
      setIsAnswerExplanationOpen(true);
      // setIsAnswerClicked(true);
      // questionById?.classList.add("bg-green-100");
      // questionById?.classList.add("!hover:bg-green-600");
      questionById?.classList.add("!border-green-600");
      questionById?.classList.add("!hover:border-green-700");
    } else {
      // setIsAnswerClicked(true);
      // questionById?.classList.add("bg-red-100");
      // questionById?.classList.add("!hover:bg-red-600");
      questionById?.classList.add("border-red-600");
      questionById?.classList.add("!hover:border-red-700");
    }
  };
  const answerPrefix = "";
  const items = ["A", "B", "C", "D"];
  return (
    <div
      className={`border border-indigo-300 gap-2 self-stretch rounded-sm hover:shadow-md shadow-indigo-800  cursor-pointer py-2 px-2 sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] flex`}
      onClick={() =>
        handleAnserClicked(
          `id-at-answeritem-for-click-event-${questions[
            questionNo
          ].question.replaceAll(" ", "-")}-${answer}-${items[index]}`,
          index
        )
      }
      id={`id-at-answeritem-for-click-event-${questions[
        questionNo
      ].question.replaceAll(" ", "-")}-${answer}-${items[index]}`}
    >
      <div className="w-[fit-content]">{`${answerPrefix}${items[index]}`}.</div>
      <div className="py-0 flex-1">{answer}</div>
      <div className="w-[fit-content] flex justify-center items-center">
        {index === 0 && showEmojy0 && (
          <div className="flex justify-center items-center">
            {isTrue === true ? (
              <FcCheckmark />
            ) : (
              <HiMiniXMark className="text-red-600" size={20} />
            )}
          </div>
        )}
        {index === 1 && showEmojy1 && (
          <div className="flex justify-center items-center">
            {isTrue === true ? (
              <FcCheckmark />
            ) : (
              <HiMiniXMark className="text-red-600" size={20} />
            )}
          </div>
        )}
        {index === 2 && showEmojy2 && (
          <div className="flex justify-center items-center">
            {isTrue === true ? (
              <FcCheckmark />
            ) : (
              <HiMiniXMark className="text-red-600" size={20} />
            )}
          </div>
        )}
        {index === 3 && showEmojy3 && (
          <div className="flex justify-center items-center">
            {isTrue === true ? (
              <FcCheckmark />
            ) : (
              <HiMiniXMark className="text-red-600" size={20} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default AnswerItem;
