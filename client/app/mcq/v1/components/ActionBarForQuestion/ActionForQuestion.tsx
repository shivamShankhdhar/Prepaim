import React, { useEffect, useState } from "react";
import ActionBarSkeleton from "./ActionBarSkeleton";
import ToggleAnswerExplanationBtn from "./ActionBarItems/ToggleAnswerExplanationBtn";
import CommentToggleBtn from "./ActionBarItems/CommentToggleBtn";
import ShareBtn from "@/app/components/Global/ShareBtn";
import ReportQuestionIssue from "../ReportQuestionIssue/ReportQuestionIssue";

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
  questionItm,
  questionId,
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
          <div className="flex w-full  max-h-auto min-h-[50px] ">
            <div className="flex gap-1 justify-center items-center w-full flex-wrap rounded-md bg-white py-2 px-5">
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
              {/* {isShareBtn && <ShareBtn cls={"bg-purple-100"} />}
              {/* <ShareBtn /> */}
              {/* <SocialShare /> */}
              {/* <ReportQuestionIssue
                question={questionItm}
                question_id={questionId}
              />  */}
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
