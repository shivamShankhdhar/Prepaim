import React, { useEffect, useState } from "react";
import BranchItemSkeleton from "./Branch/BranchItemSkeleton";

const ActionBarForSubjectSkeleton = () => {
  

  return (
    <div className="w-full h-10 flex justify-center items-center mb-2 px-2 mt-2">
      <div className="w-full bg-white flex py-2 justify-end items-center px-3 gap-2 mt-2 rounded-md ">
        <BranchItemSkeleton />
        <BranchItemSkeleton />
      </div>
    </div>
  );
};

export default ActionBarForSubjectSkeleton;
