import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import React from "react";
import { FiSend } from "react-icons/fi";

const AddDiscuss = ({
  setComment,
  setUserName,
  postingComment,
  handleCommentSubmit,
}: any) => {
  return (
    <div className="flex justify-center items-center gap-2 py-3 w-full ">
      {/* comment text area  */}
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex items-center gap-2 py-3 font-semibold w-full ">
          Let&apos;s Discuss
        </div>
        <input
          type="text"
          placeholder="Enter your name (optional)"
          className="w-full px-3 py-1 rounded-md outline-0 border border-indigo-200 text-gray-600 "
          onChange={(e: any) => setUserName(e.target.value)}
        />
        <div className="w-full">
          <textarea
            rows={3}
            id="comment-box"
            className="w-full px-3 py-1 rounded-md outline-0 border text-gray-600 border-indigo-200 max-h-auto min-h-[50px]"
            placeholder="write a comment (required)"
            onChange={(e: any) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="w-full flex flex-row justify-center items-center ">
          <div
            className="bg-indigo-800 text-white flex rounded-md justify-center items-center py-1 w-[fit-content] cursor-pointer hover:bg-indigo-900 px-3"
            onClick={handleCommentSubmit}
          >
            {postingComment ? "Posting..." : "Post"}&nbsp;
            {!postingComment && <FiSend size={15} />}
            {postingComment && <SimpleLoader size={15} cls="text-white" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDiscuss;
