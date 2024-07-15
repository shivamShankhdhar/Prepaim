import React from "react";
import CommentsItem from "./DiscussItemForQuestion";
import NoCommentAvailable from "./NoDiscussAvailable";
import { Button } from "@mui/material";
import { SlReload } from "react-icons/sl";
import CommentSkeleton from "./DiscussSkeleton";
import ErrorMessage from "@/app/components/Global/ErrorMessage";

const AllDiscuss = ({
  comments,
  loadingComment,
  error,
  handleReloadComment,
}: any) => {
  return (
    <div className="flex flex-col px-0 py-1 gap-1 w-full mt-2 text-gray-700 border border-indigo-400 border-t-1 border-b-0 border-l-0 border-r-0">
      <div className="flex items-center gap-2 py-3 px-0 font-semibold w-full ">
        All Discuss
      </div>
      {loadingComment ? (
        <CommentSkeleton />
      ) : error ? (
        <div className="flex justify-center items-center flex-col gap-3">
          <ErrorMessage text={error} isButton={false} isBg={false} />{" "}
          <Button
            className="bg-indigo-800 text-white hover:bg-indigo-700 py-1"
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
