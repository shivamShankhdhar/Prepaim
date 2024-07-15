import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";

import toast from "react-hot-toast";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

// import Button from '@mui/material/Button';
import Snackbar from "@mui/material/Snackbar";
// import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import Loader from "@/app/components/Global/Loader";
import FormatedDate from "@/app/components/Global/FormatedDate";
const CommentList = () => {
  const [comments, setComments] = useState(
    [
      {
        user: "",
        question: "",
        comment: "",
        date_added: "",
        isApproved: false,
      },
    ].filter((q) => q.question !== "")
  );

  const [loadingComments, setloadingComments] = useState(true);

  const [commentsError, setCommentsError] = useState("");

  const [commentIdForApproval, setCommentIdForApproval] = useState("");

  const [approvalStatusError, setApprovalStatusError] = useState("");

  const [commentApproved, setCommentApproved] = useState(false);

  const [loadingApprovalStatus, setLoadingApprovalStatus] = useState(false);

  const [commentIdForDelete, setCommentIdForDelete] = useState("");

  const [isCommentDeleted, setIsCommentDeleted] = useState(false);
  // snackbar

  const [reloadComment, setReloadComment] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleReloadComment = () => {
    setReloadComment((prev) => !prev);
  };
  const handleClick = (id: any) => {
    setCommentIdForDelete(id);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    if (commentIdForDelete !== "") {
      try {
        axios
          .delete(
            `http://localhost:4000/api/delete-comment/${commentIdForDelete}`
          )
          .then((response) => {
            toast.success("Comment Deleted...!");
            setOpen(false);
            setIsCommentDeleted((prev) => !prev);
          })
          .catch((err) => {
            setOpen(false);
            toast.error(err.message);
          });
      } catch (error) {
        toast.error("Something went wrong...!");
      }
    }
  };

  const action = (
    <>
      <Button color="primary" size="small" onClick={handleClose}>
        DELETE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const handleApprovalCommentClick = (id: any) => {
    setCommentIdForApproval(id);
  };
  useEffect(() => {
    try {
      setloadingComments(true);
      axios
        .get("http://localhost:4000/admin/mcq/getallcomments")
        .then((response) => {
          setComments(response.data);
          setloadingComments(false);
        })
        .catch((e) => {
          setCommentsError("error");
          setloadingComments(false);
        });
    } catch (error) {
      setloadingComments(false);
    }
  }, [commentApproved, isCommentDeleted, reloadComment]);
  useEffect(() => {
    if (commentIdForApproval !== "") {
      setLoadingApprovalStatus(true);
      try {
        axios
          .put(
            `http://localhost:4000/admin/mcq/update-comment-approval/${commentIdForApproval}`
          )
          .then((response) => {
            setCommentApproved((prev) => !prev);
            setCommentIdForApproval("");
            toast.success(response.data.msg.toString());
            setLoadingApprovalStatus(false);
          })
          .catch((error) => {
            setApprovalStatusError("Something went wrong...!");
            setCommentIdForApproval("");
            setLoadingApprovalStatus(false);
          });
      } catch (error) {
        setApprovalStatusError("Something went wrong...!");
        setCommentIdForApproval("");
        setLoadingApprovalStatus(false);
      }
    }
  }, [commentIdForApproval]);
  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg bg-white">
      {loadingComments === false ? (
        commentsError === "" ? (
          comments.length > 0 ? (
            <>
              <div className="flex w-full justify-end">
                <div className="w-[200px]">
                  <Button
                    className="bg-purple-800 text-white hover:bg-purple-700 py-0 gap-10"
                    onClick={handleReloadComment}
                  >
                    Reload Comment
                  </Button>
                </div>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      user
                    </th>
                    <th scope="col" className="px-6 py-3">
                      question
                    </th>
                    <th scope="col" className="px-6 py-3">
                      comment
                    </th>
                    <th scope="col" className="px-6 py-3 w-[250px]">
                      date
                    </th>

                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Approve</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((data: any, index: number) => {
                    return (
                      <tr
                        key={`${index}-${data}`}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 cursor-pointer"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index + 1}.
                        </th>
                        <td className="px-6 py-4">{data.user}</td>
                        <td className="px-6 py-4">{data.question}</td>
                        <td className="px-6 py-4">{data.comment}</td>
                        <td className="px-6 py-4 w-[250px]">
                          <FormatedDate date={data.date_added} />
                        </td>
                        {data.isApproved === false ? (
                          <td className="px-6 py-4 ">
                            <Button
                              sx={{ border: "1px solid purple " }}
                              className="bg-purple-100 hover:bg-purple-300 border border-1 border-purple-800 py-1 text-purple-800"
                              onClick={() =>
                                handleApprovalCommentClick(data._id)
                              }
                            >
                              {loadingApprovalStatus ? "loading..." : "APPROVE"}
                            </Button>
                          </td>
                        ) : (
                          <td className="px-6 py-4 flex justify-center items-center text-right  text-purple-600">
                            <div>
                              <IoCheckmarkDoneSharp />
                            </div>
                          </td>
                        )}
                        <td className="px-6 py-4 text-right ">
                          <Button
                            onClick={() => handleClick(data._id)}
                            sx={{ border: "1px solid red " }}
                            className="bg-red-100 hover:bg-red-300 text-red-500 py-1 "
                          >
                            delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <ErrorMessage
              text={`No question founds`}
              isButton={false}
              isBg={false}
            />
          )
        ) : (
          <ErrorMessage
            text={`Can't Load comments`}
            isButton={false}
            isBg={false}
          />
        )
      ) : (
        <Loader size={20} cls="text-gray-800" text={`Loading comments...`} />
      )}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Do you want to DELETE this question"
        action={action}
      />
    </div>
  );
};

export default CommentList;
