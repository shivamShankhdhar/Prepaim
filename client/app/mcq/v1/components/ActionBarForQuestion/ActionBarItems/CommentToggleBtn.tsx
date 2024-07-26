import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LiaCommentSlashSolid, LiaCommentSolid } from "react-icons/lia";
import { MdOutlineErrorOutline } from "react-icons/md";

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

const CommentToggleBtn = ({
  comments,
  isCommentSection,
  handleCommentToggle,
  loadingComment,
  error,
}: any) => {
  return (
    <LightTooltip title={`Total Comments : ${comments.length}`}>
      <Button
        className="px-2 flex flex-row focus:ring-2 focus:outline-none focus:ring-purple-300 min-w-[fit-content] flex-1 h-9 border cursor-pointer  rounded-md bg-purple-100 justify-center gap-2 hover:bg-purple-200 border-purple-300 text-purple-900 py-1"
        onClick={handleCommentToggle}
      >
        {isCommentSection ? (
          <LiaCommentSlashSolid size={25} />
        ) : (
          <LiaCommentSolid size={25} />
        )}
        <div className="flex flex-row text-[15px]  justify-start items-center gap-1">
          {!loadingComment ? (
            error === "" ? (
              <>
                <div className="">({comments.length})</div>
                <div
                  className="flex "
                  title={`${
                    isCommentSection ? "Hide Comments" : "Show Comments"
                  }`}
                >
                  {!loadingComment && isCommentSection ? (
                    <IoIosArrowUp size={15} />
                  ) : (
                    <IoIosArrowDown size={15} />
                  )}
                </div>
              </>
            ) : (
              <MdOutlineErrorOutline size={15} className="px-0" />
            )
          ) : (
            <SimpleLoader size={15} cls={"text-purple-800 "} />
          )}
        </div>
      </Button>
    </LightTooltip>
  );
};

export default CommentToggleBtn;
