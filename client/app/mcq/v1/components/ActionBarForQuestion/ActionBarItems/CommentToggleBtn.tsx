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
    <LightTooltip
      title={`Total Comments : [ ${comments.length} ] ${
        isCommentSection ? "Hide discuss" : "Show discuss"
      }`}
    >
      <Button
        // sx={{ border: 1 }}
        className="bg-purple-200 hover:bg-purple-300 w-[fit-content] border rounded-md flex items-center justify-center gap-2 px-4 py-1 cursor-pointer text-purple-950"
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
                <div className="flex ">
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
