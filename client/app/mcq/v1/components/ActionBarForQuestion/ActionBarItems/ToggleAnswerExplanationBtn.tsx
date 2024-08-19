import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import toast from "react-hot-toast";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[4],
    fontSize: 13,
  },
}));

const ToggleAnswerExplanationBtn = ({
  isAnswerLocked,
  handleQuestionNavigationOpen,
  handleAnswerExplanationToggle,
  isAnswerExplanationOpen,
}: any) => {
  return (
    <LightTooltip
      title={`${
        isAnswerLocked
          ? "Answer explanation is locked right now, please click right option to unlock answer explanation."
          : isAnswerExplanationOpen
          ? "Hide Answer"
          : "Show Answer"
      }`}
    >
      <Button
        className="bg-indigo-200 hover:bg-indigo-300 w-[fit-content] border rounded-md flex items-center justify-center gap-2 px-4 py-1 cursor-pointer text-indigo-800"
        onClick={() => {
          if (isAnswerLocked) {
            toast.error(
              "Answer explanation is locked right now, please click right option to unlock answer explanation."
            );
            return;
          }
          handleAnswerExplanationToggle();
          handleQuestionNavigationOpen();
        }}
      >
        {isAnswerLocked && <FaLock />}
        {!isAnswerLocked && isAnswerExplanationOpen && <IoEyeOffOutline />}
        {!isAnswerLocked && !isAnswerExplanationOpen && <IoEyeOutline />}
        {isAnswerExplanationOpen ? "Hide Answer" : "Show Answer"}
        <p>
          {!isAnswerLocked &&
            (isAnswerExplanationOpen ? <IoIosArrowUp /> : <IoIosArrowDown />)}
        </p>
      </Button>
    </LightTooltip>
  );
};

export default ToggleAnswerExplanationBtn;
