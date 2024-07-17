import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ToggleAnswerExplanationBtn = ({
  handleAnswerExplanationToggle,
  isAnswerExplanationOpen,
}: any) => {
  return (
    <Button
      className="bg-purple-100 focus:ring-4 focus:outline-none focus:ring-purple-300 min-w-[fit-content] flex-1 h-9 border rounded-sm hover:bg-purple-200 flex items-center justify-center gap-2 px-2 py-0 cursor-pointer text-purple-900 border-purple-300 "
      onClick={handleAnswerExplanationToggle}
    >
      {isAnswerExplanationOpen && <IoEyeOffOutline />}
      {!isAnswerExplanationOpen && <IoEyeOutline />}
      {isAnswerExplanationOpen ? "Hide Answer" : "Show Answer"}

      <p>{isAnswerExplanationOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
    </Button>
  );
};

export default ToggleAnswerExplanationBtn;
