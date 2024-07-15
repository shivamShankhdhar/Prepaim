import React from "react";
import { IoIosPlay } from "react-icons/io";
const RunCode = () => {
  return (
    <div
      title="Run this code"
      className="w-[fit-content] py-1 px-3 text-sm cursor-pointer bg-indigo-800 text-white flex justify-center items-center gap-1"
    >
      <IoIosPlay /> Run Code
    </div>
  );
};

export default RunCode;
