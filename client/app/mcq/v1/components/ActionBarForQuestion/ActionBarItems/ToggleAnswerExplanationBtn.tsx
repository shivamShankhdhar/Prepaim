import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ToggleAnswerExplanationBtn = ({
  handleAnswerExplanationToggle,
  isAnswerExplanationOpen,
}: any) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="bg-purple-100 min-w-[fit-content] flex-1 h-9 border rounded-sm hover:bg-purple-200 flex items-center justify-center gap-2 px-2 py-0 cursor-pointer text-purple-900 border-purple-300 "
      onClick={handleAnswerExplanationToggle}
    >
      {isClient && isAnswerExplanationOpen && <IoEyeOffOutline />}
      {!isAnswerExplanationOpen && <IoEyeOutline />}
      {isAnswerExplanationOpen ? "Hide Answer" : "Show Answer"}

      <div>
        {isAnswerExplanationOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </div>
  );
};

export default ToggleAnswerExplanationBtn;
