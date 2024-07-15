import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import SidebarItem from "@/app/mcq/v1/components/ChapterSideBar/SidebarItem";
import QuestionBoard from "@/app/mcq/v1/components/QuestionBoard/QuestionBoard";
const SidebarSlider = ({
  open,
  setOpen,
  items,
  itemType,
  questions,
  questionNo,
  setQuestionNo,
  loading,
  error,
  setIsCommentSection,
  setIsAnswerExplanationOpen,
}: any) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Drawer
        open={open}
        onClose={handleClose}
        anchor={itemType === "chapters" ? "left" : "right"}
      >
        {itemType === "chapters" ? (
          <div className="w-[250px] px-3">
            <div className="w-full flex justify-end items-center"></div>
            <div
              className={`w-full h-11 pt-2 px-2 gap-2 font-semibold flex ${
                itemType === "chapters"
                  ? "justify-between"
                  : "justify-between-reverse"
              } justify-between items-center`}
            >
              {itemType === "chapters" && (
                <div className="flex flex-1 justify-center items-center gap-2">
                  <IoBookOutline /> Chapters
                </div>
              )}

              <div className="bg-indigo-100 m-2 border-indigo-300 cursor-pointer text-gray-500 hover:bg-indigo-100 p-1 border rounded-md">
                <IoIosClose size={20} onClick={handleClose} />
              </div>
            </div>

            {items.map((item: any) => (
              <SidebarItem item={item} key={item.name} />
            ))}
          </div>
        ) : (
          <>
            <QuestionBoard
              {...{
                questions,
                handleClose,
                questionNo,
                setQuestionNo,
                loading,
                error,
                setIsCommentSection,
                setIsAnswerExplanationOpen,
              }}
            />
          </>
        )}
      </Drawer>
    </div>
  );
};

export default SidebarSlider;
