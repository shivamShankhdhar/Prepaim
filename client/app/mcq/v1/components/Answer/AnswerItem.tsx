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
      questionById?.classList.add("bg-purple-100");
      questionById?.classList.add("hover:bg-purple-100");
      questionById?.classList.add("border-purple-800");
      questionById?.classList.add("hober:border-purple-800");
    } else {
      questionById?.classList.add("bg-rose-100");
      questionById?.classList.add("hover:bg-rose-100");
      questionById?.classList.add("border-rose-800");
      questionById?.classList.add("hover:border-rose-800");
    }
  };
  return (
    <>
      {isClient && (
        <div
          className={`border gap-5 rounded-md cursor-pointer  hover:bg-purple-50 py-2 px-5 sm:w-full max-sm:w-full md:w-full max-md:w-full lg:w-[49%] 2xl:w-[49%] xl:w-[49%] flex`}
          onClick={() =>
            handleAnserClicked(
              `id-at-answeritem-for-click-event-${questions[
                questionNo
              ].question.replaceAll(" ", "-")}-${answer}`
            )
          }
          id={`id-at-answeritem-for-click-event-${questions[
            questionNo
          ].question.replaceAll(" ", "-")}-${answer}`}
        >
          <div className="w-2 font-bold">{index + 1}.</div>
          <div className="py-0">{answer}</div>
        </div>
      )}
    </>
  );
};

export default AnswerItem;
