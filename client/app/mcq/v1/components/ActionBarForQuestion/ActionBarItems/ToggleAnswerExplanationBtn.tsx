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
        className="bg-purple-200 hover:bg-purple-300 w-[fit-content] border rounded-md flex items-center justify-center gap-2 px-4 py-1 cursor-pointer text-purple-950"
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
