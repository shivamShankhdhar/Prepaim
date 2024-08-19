import React from "react";

const StoreProgressToggleBtn = ({ handleClick, isTrackingProgress }: any) => {
  return (
    <div
      className="bg-indigo-900 hover:bg-indigo-900 font-extralight text-white rounded-sm cursor-pointer py-1 px-2"
      onClick={handleClick}
    >
      {isTrackingProgress ? "Stop Tracking My Progress" : "Store My Progress"}
    </div>
  );
};

export default StoreProgressToggleBtn;
