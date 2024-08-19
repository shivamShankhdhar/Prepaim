import { Button } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

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
const QuestionItems = ({ index, item }: any) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();
  const questionNo = Number(question) - 1;
  return (
    <Button
      sx={{ minHeight: 0, minWidth: 0 }}
      href={`/mcq/v1/${subject}/${chapter}/Test-Prepration-Mode/${index + 1}`}
      className={`px-0 py-0 rounded-full h-9 w-9 ${
        // on item level
        item.level === "a"
          ? `${
              questionNo === index
                ? "bg-indigo-600 focus:ring-2 focus:ring-inset focus:ring-white text-white hover:bg-indigo-900"
                : "bg-indigo-100 focus:ring-2 focus:ring-inset focus:ring-white text-indigo-900 hover:bg-indigo-900 hover:text-white"
            }`
          : item.level === "b"
          ? `${
              questionNo === index
                ? "bg-[#F49D1A] text-white hover:bg-yellow-500 focus:ring-2 focus:ring-inset focus:ring-white"
                : "bg-yellow-200 text-yellow-600 focus:ring-2 focus:ring-white focus:ring-inset hover:bg-yellow-600 hover:text-white"
            }`
          : `${
              questionNo === index
                ? "bg-rose-600 text-white hover:bg-rose-900 focus:ring-2 focus:ring-inset focus:ring-white"
                : "bg-rose-200 text-rose-900 focus:ring-2 focus:ring-inset focus:ring-white hover:bg-rose-600 hover:text-white"
            }`
      } ${
        // on active item
        (questionNo === index &&
          item.level === "a" &&
          "bg-indigo-600  rounded-full focus:ring-2 focus:ring-inset focus:ring-white text-white hover:text-white hover:bg-indigo-900") ||
        (questionNo === index &&
          item.level === "b" &&
          "  bg-indigo-900  rounded-full focus:ring-2 focus:ring-inset focus:ring-white text-white hover:text-white hover:bg-indigo-900") ||
        (questionNo === index &&
          item.level === "c" &&
          "bg-rose-600 rounded-full text-white focus:ring-2 focus:ring-inset focus:ring-white hover:text-white hover:bg-rose-700")
      }`}
    >
      <LightTooltip
        title={`${
          questionNo === index
            ? "Current selected Question"
            : "Click to navigate to this Question"
        }`}
      >
        {index + 1}
      </LightTooltip>
    </Button>
    // </LightTooltip>
  );
};

export default QuestionItems;
