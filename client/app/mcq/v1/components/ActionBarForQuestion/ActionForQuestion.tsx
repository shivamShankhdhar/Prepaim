import React, { useEffect, useState } from "react";
import ActionBarSkeleton from "./ActionBarSkeleton";
import ToggleAnswerExplanationBtn from "./ActionBarItems/ToggleAnswerExplanationBtn";
import CommentToggleBtn from "./ActionBarItems/CommentToggleBtn";
import ShareBtn from "@/app/components/Global/ShareBtn";

const ActionForQuestion = ({
  comments,
  error,
  loading,
  loadingComment,
  errorForActionBar,
  isAnswerExplanationOpen,
  handleAnswerExplanationToggle,
  handleCommentToggle,
  isCommentSection,
  subject,
  isShareBtn,
  chapter,
}: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className=" w-full gap-1 mt-1 flex flex-col items-center ">
      {isClient && errorForActionBar === "" ? (
        !loading ? (
          <div className="flex w-full justify-center items-center max-h-auto min-h-[50px] ">
            <div className="flex gap-3 w-full flex-wrap rounded-md bg-white py-2 px-5">
              {/* answer explanation button  */}
              <ToggleAnswerExplanationBtn
                handleAnswerExplanationToggle={handleAnswerExplanationToggle}
                isAnswerExplanationOpen={isAnswerExplanationOpen}
              />
              {/* comment button  */}
              <CommentToggleBtn
                comments={comments}
                handleCommentToggle={handleCommentToggle}
                loadingComment={loadingComment}
                isCommentSection={isCommentSection}
                error={error}
              />
              {/* share button  */}
              {isShareBtn && <ShareBtn />}
              {/* <ShareBtn /> */}
              {/* <SocialShare /> */}
            </div>
          </div>
        ) : (
          <ActionBarSkeleton />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default ActionForQuestion;
