import React from "react";
import { LuCopyright } from "react-icons/lu";

const CopyrightInfo = () => {
  return (
    <div className="flex  items-center gap-1 text-sm ">
      <LuCopyright />
      <div>copyright 2024, all rights reserved.</div>
    </div>
  );
};

export default CopyrightInfo;
