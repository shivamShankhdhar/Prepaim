import React, { useEffect, useState } from "react";
import CommentsItem from "./DiscussItemForQuestion";
import NoCommentAvailable from "./NoDiscussAvailable";
import { Button } from "@mui/material";
import { SlReload } from "react-icons/sl";
import CommentSkeleton from "./DiscussSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import axios from "axios";

const AllDiscuss = ({
  question,
  setCommentLength,
  setLoadingComments,
  setCommentsError,
}: any) => {
  const [comments, setComments] = React.useState([]);
  const [loadingComment, setLoadingComment] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    setCommentLength(comments.length);
    setLoadingComments(loadingComment);
    setCommentsError(error);
  }, [question, comments, loadingComment]);

  const handleReloadComment = () => {
    setIsReload((prev: any) => !prev);
  };
  useEffect(() => {
    try {
      setLoadingComment(true);
      axios
        .get(`/mcq/getcommentbyquestion/${question}`)
        .then((response) => {
          setComments(response.data);
          setLoadingComment(false);
        })
        .catch((error) => {
          setError(error.response.data.error);
          setLoadingComment(false);
        });
    } catch (error: any) {
      setError(error);
      setLoadingComment(false);
    }
  }, [question, isReload]);

  return (
    <div className="flex flex-col py-1 gap-1 w-full mt-2 text-gray-700 bg-white px-2 border rounded-md">
      <div className="flex items-center gap-2 py-3 px-0 font-semibold w-full ">
        All Discuss
      </div>
      {loadingComment ? (
        <CommentSkeleton />
      ) : error ? (
        <div className="flex justify-center items-center flex-col gap-3">
          <ErrorMessage text={error} isButton={false} isBg={false} />{" "}
          <Button
            className="bg-purple-900 text-white hover:bg-purple-900 py-1"
            onClick={handleReloadComment}
          >
            <SlReload size={18} />
            &nbsp; Reload
          </Button>
        </div>
      ) : comments.length > 0 ? (
        comments.map((item: any, index: any) => {
          return (
            <CommentsItem
              key={`${index}-${item.comment}`}
              user={item.user}
              comment={item.comment}
              date_added={item.date_added}
              isApproved={item.isApproved}
            />
          );
        })
      ) : (
        <NoCommentAvailable />
      )}
    </div>
  );
};

export default AllDiscuss;
