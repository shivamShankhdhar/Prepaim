import React, { useEffect, useState } from "react";

const AnswerItem = ({ questions, questionNo, answer, index, isTrue }: any) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // const answerPrefix
  const handleAnserClicked = (id: any) => {
    const questionById = document.getElementById(id);
    if (isTrue) {
      questionById?.classList.add("bg-green-100");
      questionById?.classList.add("hover:bg-green-100");
      questionById?.classList.add("border-green-800");
      questionById?.classList.add("hober:border-green-800");
    } else {
      questionById?.classList.add("bg-rose-100");
      questionById?.classList.add("hover:bg-rose-100");
      questionById?.classList.add("border-rose-800");
      questionById?.classList.add("hover:border-rose-800");
    }
  };
  const answerPrefix = "";
  const items = ["A", "B", "C", "D"];
  return (
    <>
      {isClient && (
        <div
          className={`border gap-2 rounded-sm cursor-pointer  py-2 px-3 sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] flex`}
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
          <div className="w-[fit-content]">
            {`${answerPrefix}${items[index]}`}.
          </div>
          <div className="py-0">{answer}</div>
        </div>
      )}
    </>
  );
};
export default AnswerItem;
