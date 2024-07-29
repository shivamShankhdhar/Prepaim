import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

const AddDiscuss = ({ question }: any) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const [commentFromUser, setCommentFromUser] = useState("");
  const [userNameForComment, setUserNameForComment] = useState("");

  const [isPostingComment, setIsPostingComment] = useState(false);

  const handleCommentSubmit = async () => {
    setIsPostingComment(true);
    if (commentFromUser === "") {
      setIsPostingComment(false);
      return toast.error("Comment can't be empty");
    } else if (userNameForComment === "") {
      setIsPostingComment(false);
      return toast.error("Please enter your name");
    } else {
      try {
        await axios
          .post("https://api.data.prepaim.com/mcq/postcomment", {
            comment: commentFromUser,
            subject: subject,
            chapter: chapter,
            question: question,
            user: userNameForComment,
          })
          .then((response) => {
            if (response.status === 201) {
              setIsPostingComment(false);
              toast.success(
                "We have added your discuss to this question discuss,but before posting it we will run some checks on it to protect our community privacy,thanks for your time."
              );
            }
          })
          .catch((error) => {
            setIsPostingComment(false);
            toast.error(error.response.data.error);
          });
      } catch (error: any) {
        setIsPostingComment(false);
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="flex justify-center items-center bg-white gap-2 py-2 px-2 w-full border rounded-md">
      {/* comment text area  */}
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex items-center gap-2 py-1 font-semibold w-full ">
          Let&apos;s Discuss
        </div>
        <input
          type="text"
          placeholder="Enter your name (required)"
          className="w-full px-3 py-1 rounded-md outline-0 border border-purple-200 text-gray-600 "
          onChange={(e: any) => setUserNameForComment(e.target.value)}
        />
        <div className="w-full">
          <textarea
            rows={3}
            id="comment-box"
            className="w-full px-3 py-1 rounded-md outline-0 border text-gray-600 border-purple-200 max-h-auto min-h-[50px]"
            placeholder="write a comment (required)"
            onChange={(e: any) => {
              setCommentFromUser(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="w-full flex flex-row justify-center items-center ">
          <Button
            className="bg-purple-900 text-white flex rounded-sm justify-center items-center py-1 w-[fit-content] cursor-pointer hover:bg-purple-950 px-3 gap-2"
            onClick={handleCommentSubmit}
          >
            {isPostingComment && <SimpleLoader size={15} cls="text-white" />}
            Add Discuss
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddDiscuss;
