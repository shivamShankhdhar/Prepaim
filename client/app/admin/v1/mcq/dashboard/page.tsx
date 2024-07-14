"use client";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CommentList from "../components/Lists/CommentList";
import MainSection from "../components/dashboard/MainSection";
import QuestionsList from "../components/Lists/QuestionsList";
import SubjectsList from "../components/Lists/SubjectsList";

const page = () => {
  const [questionIdForDelete, setQuestionIdForDelete] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [questionName, setQuestionName] = useState("");

  const handleDelete = () => {
    try {
      axios
        .delete(
          `http://localhost:4000/admin/mcq/delete-question/${questionIdForDelete}`
        )
        .then((response) => {
          toast.success("Question deleted successfully");
          setIsDeleted((prev) => !prev);
        })
        .catch((error) => {
          toast.error("Error deleting question");
        });
    } catch (error) {
      toast.error("Something went wrong...!");
    } finally {
      isSheetOpen && setIsSheetOpen(false);
    }
  };
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <div className="flex px-5 mt-2 flex-col gap-1 w-full mb-5">
      <MainSection isDeleted={isDeleted} />

      <div id="question-list-admin-panel">
        <CommentList />
      </div>
      <div id="question-list-admin-panel">
        <QuestionsList
          setQuestionIdForDelete={setQuestionIdForDelete}
          isDeleted={isDeleted}
          setIsSheetOpen={setIsSheetOpen}
          setQuestionName={setQuestionName}
        />
      </div>

      <SubjectsList />
      {isSheetOpen && (
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
              outline: "none",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={2}
              mt={2}
            >
              <h1 className="text-gray-700 text-center">{questionName}</h1>
            </Typography>
            <Typography
              id="modal-desc"
              textColor="text.tertiary"
              className="flex flex-col justify-center items-center"
            >
              <span className="text-gray-700 w-[350px] text-center">
                Do you want to delete this question?
              </span>
              <div className="flex justify-between items-center gap-1 mt-3 w-[200px]">
                <Button
                  className="bg-purple-700 hover:bg-purple-600 text-white"
                  onClick={() => {
                    setIsSheetOpen(false);
                  }}
                >
                  No,Cancel
                </Button>
                <Button
                  className="text-white bg-red-700 hover:bg-red-600"
                  onClick={() => handleDelete()}
                >
                  Delete
                </Button>
              </div>
            </Typography>
          </Sheet>
        </Modal>
      )}
    </div>
  );
};

export default page;
