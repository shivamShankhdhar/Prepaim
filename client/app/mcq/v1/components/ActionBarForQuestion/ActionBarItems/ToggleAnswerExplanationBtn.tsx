import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

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
  handleAnswerExplanationToggle,
  isAnswerExplanationOpen,
}: any) => {
  return (
    <LightTooltip
      title={`${isAnswerExplanationOpen ? "Hide Answer" : "Show Answer"}`}
    >
      <Button
        className="bg-purple-100 focus:ring-2 focus:outline-none focus:ring-purple-300 min-w-[fit-content] flex-1 h-9 border rounded-md hover:bg-purple-200 flex items-center justify-center gap-2 px-2 py-0 cursor-pointer text-purple-900 border-purple-300 "
        onClick={handleAnswerExplanationToggle}
      >
        {isAnswerExplanationOpen && <IoEyeOffOutline />}
        {!isAnswerExplanationOpen && <IoEyeOutline />}
        {isAnswerExplanationOpen ? "Hide Answer" : "Show Answer"}

        <p>{isAnswerExplanationOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
      </Button>
    </LightTooltip>
  );
};

export default ToggleAnswerExplanationBtn;
