import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AnswerExplanation from "../Answer/AnswerExplanation";
import { useParams } from "next/navigation";
import AllDiscuss from "../Discuss/AllDiscuss";
import DiscussInReviewModal from "../Discuss/DiscussInReviewModal";
import AddDiscuss from "../Discuss/AddDiscuss";
import ActionForQuestion from "../ActionBarForQuestion/ActionForQuestion";

const Navigation = ({
  questionsLength,
  questionItm,
  questionObject,
  loading,
  errorForActionBar,
  handleCommentToggle,
  isAnswerExplanationOpen,
  handleAnswerExplanationToggle,
  isCommentSection,
  subject,
  chapter,
}: any) => {
  const { question } = useParams();
  const questionNo = Number(question);
  const [comments, setComments] = useState(
    [
      {
        user: "",
        question: "",
        user_image: "",
        comment: "",
        date_added: "",
        isApproved: false,
      },
    ].filter((item) => item.question !== "")
  );

  const [loadingComment, setLoadingComment] = useState(false);

  const [error, setError] = useState("");

  const [userName, setUserName] = useState("");

  const [comment, setComment] = useState("");

  const [commentObj, setCommentObj] = useState({});

  const [postingComment, setPostingComment] = useState(false);

  const [isCommentAdded, setIsCommentAdded] = useState(false);

  const [reloadComment, setReloadComment] = useState(false);

  // const [commentsLength,setCommntsLength] = useState(comments?.length || null)

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const Obj = {
      user: userName !== "" ? userName : "user",
      question: question,
      // user_image: "/assets/user_profile_fake.png",
      comment: comment,
      date_added: new Date(),
      isApproved: false,
    };
    setCommentObj(Obj);
  }, [question, comment, userName, isCommentAdded]);

  const handleCommentSubmit = async () => {
    setPostingComment(true);
    if (comment === "") {
      setPostingComment(false);
      return toast.error("Please enter a comment");
    }
    try {
      await axios
        .post("https://api.data.prepaim.com/mcq/postcomment", commentObj)
        .then((data) => {
          setPostingComment(false);
          setIsCommentAdded((prev) => !prev);
          setPostingComment(false);
          handleOpen();
        })
        .catch((err) => {
          toast.error("Something went wrong...!");
          setPostingComment(false);
          setIsCommentAdded(false);
          setPostingComment(false);
        });
    } catch (error) {
      toast.error("Something went wrong...!");
      setPostingComment(false);
      setIsCommentAdded(false);
      setPostingComment(false);
    }
  };

  const handleReloadComment = () => {
    setReloadComment((prev) => !prev);
  };

  useEffect(() => {
    try {
      setLoadingComment(true);
      setError("");
      axios
        .get(
          `https://api.data.prepaim.com/mcq/getcommentbyquestion/${question}`
        )
        .then((response) => {
          const commentsFromServer = response.data;
          setComments(commentsFromServer);
          setLoadingComment(false);
        })
        .catch((error) => {
          setError("Something went wrong...!");
          setLoadingComment(false);
        });
    } catch (error) {
      setError("Something went wrong...!");
      setLoadingComment(false);
    }
  }, [question, reloadComment]);

  return (
    <>
      {/* modeal for approval  */}
      <DiscussInReviewModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      {questionNo > 0 && questionNo < questionsLength + 1 && (
        <div className="flex flex-col w-full justify-center items-center gap-1">
          <ActionForQuestion
            error={error}
            comments={comments}
            loading={loading}
            loadingComment={loadingComment}
            errorForActionBar={errorForActionBar}
            isAnswerExplanationOpen={isAnswerExplanationOpen}
            handleAnswerExplanationToggle={handleAnswerExplanationToggle}
            handleCommentToggle={handleCommentToggle}
            isCommentSection={isCommentSection}
            subject={subject}
            chapter={chapter}
          />

          {/* answer explanation  */}
          {isAnswerExplanationOpen && (
            <AnswerExplanation
              question={questionObject}
              loading={loadingComment}
            />
          )}
          {isCommentSection === true && (
            <div className=" flex w-full  justify-center flex-col items-center px-5 py-5 rounded-md bg-white ">
              {/* add comment  */}
              <AddDiscuss
                setComment={setComment}
                setUserName={setUserName}
                postingComment={postingComment}
                handleCommentSubmit={handleCommentSubmit}
              />

              {/* all comments */}
              <AllDiscuss
                comments={comments}
                loadingComment={loadingComment}
                error={error}
                handleReloadComment={handleReloadComment}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navigation;
