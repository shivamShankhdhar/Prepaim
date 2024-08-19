import React from "react";

const ApprovedBy = ({ isApproved }: any) => {
  return (
    <>
      {isApproved === true && (
        <div className="bg-indigo-100  text-indigo-900 border border-indigo-900 rounded-full px-2 py-1/2 text-[11px]">
          approved by admin
        </div>
      )}
    </>
  );
};

export default ApprovedBy;
