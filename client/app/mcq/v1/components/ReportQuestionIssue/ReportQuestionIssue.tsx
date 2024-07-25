import { useCookies } from "next-client-cookies";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { MdOutlineReportProblem } from "react-icons/md";

import { TransitionProps } from "@mui/material/transitions";
import SimpleLoader from "@/app/components/Global/SimpleLoader";
import axios from "axios";
import toast from "react-hot-toast";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ReportQuestionIssue = ({ question_id, question }: any) => {
  const cookies = useCookies();
  const user_id = cookies.get("logged_in_user_id");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [questionIssues, setQuestionIssues] = React.useState("");

  const [userName, setUserName] = React.useState("");

  const [isseueObject, setIssueObject] = useState({
    user_id: user_id,
    userName: "",
    question_id,
    reason: "",
  });

  useEffect(() => {
    setIssueObject({
      ...isseueObject,
      userName: userName,
      reason: questionIssues,
    });
  }, [userName, questionIssues]);

  const handleSubmitIssue = async () => {
    setIsSubmitting(true);
    if (userName === "") {
      setIsSubmitting(false);
      return toast.error("Please enter your name");
    } else if (questionIssues === "") {
      setIsSubmitting(false);
      return toast.error("Please enter your issue");
    } else {
      try {
        await axios
          .post(
            "https://api.data.prepaim.com/mcq/postMcqQuestionMistakeReport",
            { data: isseueObject }
          )
          .then((data) => {
            toast.success(
              "Thanks for your time, Report submitted successfully"
            );
            setIsSubmitting(false);
            // setOpen(false);
            handleClose();
          })
          .catch((err) => {
            toast.error("Something went wrong...");
            setIsSubmitting(false);
            setOpen(false);
          });
      } catch (error) {
        toast.error("Something went wrong...");
        setIsSubmitting(false);
        setOpen(false);
      }
    }
  };
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        className=" flex justify-center items-center px-2"
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Submit Report for this Question"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="sm:w-[320px] max-sm:w-[350px] md:w-[450px] max-md:w-[450px] lg:w-[550px] xl:w-[550px] 2xl:w-[550px]">
              Q. {question}
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col gap-2 mt-3">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="w-full outline-none p-2 border rounded-md"
                  placeholder="Enter your name (mandatory)"
                />
                <textarea
                  onChange={(e) => setQuestionIssues(e.target.value)}
                  rows={10}
                  className="w-full outline-none p-2 border rounded-md"
                  placeholder="Enter issue here Please describe it in details."
                />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="flex justify-center items-center pb-8">
          <Button
            className="bg-gray-200 py-1 text-black hover:bg-gray-300"
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            onClick={handleSubmitIssue}
            className="bg-red-600 flex gap-2 py-1 focus:ring-2 focus:ring-red-300 focus:ring-offset-1 text-white hover:bg-red-700"
            // onClick={handleClose}
          >
            {isSubmitting && <SimpleLoader clr={"white"} size={15} />}Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        title="Report Issue for this question if you think any.Your suggestion will be helpful."
        className="bg-red-100 text-red-600 py-1 focus:ring-1 focus:ring-red-400 hover:bg-red-200 flex flex-row focus:outline-none px-2 w-[fit-content] h-9 border cursor-pointer rounded-md justify-center gap-2"
        onClick={handleClickOpen}
      >
        <MdOutlineReportProblem size={15} /> Report Issue
      </Button>
    </>
  );
};

export default ReportQuestionIssue;
