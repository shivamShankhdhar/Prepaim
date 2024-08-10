import React from "react";

const ApprovedBy = ({ isApproved }: any) => {
  return (
    <>
      {isApproved === true && (
        <div className="bg-purple-100  text-purple-900 border border-purple-950 rounded-full px-2 py-1/2 text-[11px]">
          approved by admin
        </div>
      )}
    </>
  );
};

export default ApprovedBy;
