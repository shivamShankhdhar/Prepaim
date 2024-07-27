import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import SidebarItem from "@/app/mcq/v1/components/ChapterSideBar/SidebarItem";
import QuestionBoard from "@/app/mcq/v1/components/QuestionBoard/QuestionBoard";
const SidebarSlider = ({
  uniqueKey,
  chaptersLength,
  open,
  setOpen,
  requestedPage,
  items,
  itemType,
  questions,
  questionNo,
  setQuestionNo,
  loading,
  error,
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
          <div className="w-[fit-content]">
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

              <div className="bg-purple-100 m-2 border-purple-300 cursor-pointer text-gray-500 hover:bg-purple-100 p-1 border rounded-md">
                <IoIosClose size={20} onClick={handleClose} />
              </div>
            </div>

            {items.map((item: any, index: number) => (
              <SidebarItem
                index={index}
                totalLengthOfChapters={chaptersLength}
                pageViewMode={requestedPage}
                item={item}
                key={`${item.name}-${itemType}-${item.id}-key-at-sidebarslider-forquestionboard-${uniqueKey}`}
              />
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
              }}
            />
          </>
        )}
      </Drawer>
    </div>
  );
};

export default SidebarSlider;
