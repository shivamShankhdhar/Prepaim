import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import CodingQuestionSidebar from "../CodingQuestionSidebar/CodingQuestionSidebar";
const CodingSidebarDrawer = ({ open, setOpen }: any) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Drawer open={open} onClose={handleClose}>
        <div className="p-2 flex flex-col">
          <div className="py-3 text-2xl font-semibold flex justify-center items-center">
            Questions
          </div>
          <CodingQuestionSidebar />
        </div>
      </Drawer>
    </div>
  );
};

export default CodingSidebarDrawer;
