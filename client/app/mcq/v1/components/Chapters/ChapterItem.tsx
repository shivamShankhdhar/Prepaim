import { Button } from "@mui/material";
import Link from "next/link";
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
const ChapterItem = ({ data, index, chapterItemLength }: any) => {
  return (
    <div
      key={data.name}
      className={`w-full px-2 py-2 gap-2 flex justify-between items-center ${
        index !== chapterItemLength - 1 &&
        "border border-b-1 border-t-0 border-l-0 border-r-0"
      } `}
    >
      <div
        className="flex w-full gap-1 items-center"
        // title={`Click to go to quizz for chapter \`${data.name}\``}
      >
        <div className="w-[fit-content]">{index + 1}.</div>

        <div className="flex w-full justify-between items-center">
          <div className="w-full flex-1">
            <LightTooltip
              title={`Click to go to quizz for chapter \`${data.name}\``}
            >
              <Button
                sx={{ textTransform: "none" }}
                className="hover:bg-white w-full py-1 justify-start text-black"
                href={`/mcq/v1/${data.subject.replaceAll(
                  " ",
                  "-"
                )}/${data.name.replaceAll(" ", "-")}/Test-Prepration-Mode/1`}
              >
                <div>
                  {data.name.includes("CPP")
                    ? data.name.replace("CPP", "C++")
                    : data.name}
                </div>
              </Button>
            </LightTooltip>
          </div>
          <div className="">
            <LightTooltip
              title={`Click to go to quizz for chapter \`${data.name}\``}
            >
              <Button
                sx={{ textTransform: "none" }}
                className="text-white focus:ring-4 focus:outline-none focus:ring-white bg-purple-800 py-1 hover:bg-purple-900 gap-2"
                href={`/mcq/v1/${data.subject.replaceAll(
                  " ",
                  "-"
                )}/${data.name.replaceAll(" ", "-")}/Test-Prepration-Mode/1`}
              >
                Quizz
              </Button>
            </LightTooltip>
          </div>
        </div>
        {/* </LightTooltip> */}
      </div>
    </div>
  );
};

export default ChapterItem;
