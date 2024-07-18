import React from "react";
import { LuCopyright } from "react-icons/lu";

const CopyrightInfo = () => {
  return (
    <div className="flex justify-center items-center gap-1 text-sm ">
      <LuCopyright />
      <div>copyright 2024 || Powered by www.prepaim.com.</div>
    </div>
  );
};

export default CopyrightInfo;
