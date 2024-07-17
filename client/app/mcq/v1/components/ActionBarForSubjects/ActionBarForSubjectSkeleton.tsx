import React, { useEffect, useState } from "react";
import BranchItemSkeleton from "./Branch/BranchItemSkeleton";

const ActionBarForSubjectSkeleton = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-10 flex justify-center items-center mb-2 px-2 mt-2">
      {isClient && (
        <div className="w-full bg-white flex py-2 justify-end items-center px-3 mt-2 rounded-md gap-1">
          <BranchItemSkeleton />
        </div>
      )}
    </div>
  );
};

export default ActionBarForSubjectSkeleton;
