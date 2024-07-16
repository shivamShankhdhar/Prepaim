import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "./Question";
import Subjects from "./Subjects";
import Chapters from "./Chapters";

const MainSection = ({ isDeleted }: any) => {
  return (
    <div className="flex justify-center w-full h-[fit-content] bg-white py-3 gap-1 mt-0 px-0 rounded-md flex-wrap">
      <Question isDeleted={isDeleted} />
      <Subjects />
    </div>
  );
};

export default MainSection;
