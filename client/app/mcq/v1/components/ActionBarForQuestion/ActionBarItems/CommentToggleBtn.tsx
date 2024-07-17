import SimpleLoader from "@/app/components/Global/SimpleLoader";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LiaCommentSlashSolid, LiaCommentSolid } from "react-icons/lia";
import { MdOutlineErrorOutline } from "react-icons/md";

const CommentToggleBtn = ({
  comments,
  isCommentSection,
  handleCommentToggle,
  loadingComment,
  error,
}: any) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div
      title={`Total Comments : ${comments.length}`}
      className="px-2 flex flex-row min-w-[fit-content] flex-1 h-9 border cursor-pointer  rounded-sm bg-purple-100 justify-center gap-2 hover:bg-purple-200 border-purple-300 text-purple-900 py-1"
      onClick={handleCommentToggle}
    >
      {isClient && isCommentSection ? (
        <LiaCommentSlashSolid size={25} />
      ) : (
        <LiaCommentSolid size={25} />
      )}
      <div className="flex flex-row text-[15px] justify-start items-center gap-1">
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
    </div>
  );
};

export default CommentToggleBtn;
