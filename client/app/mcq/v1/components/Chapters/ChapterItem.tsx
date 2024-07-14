import React from "react";

const ChapterItem = ({ data, index }: any) => {
  return (
    <div
      key={data.name}
      className="w-full px-2 py-2 gap-2 cursor-pointer flex justify-between items-center  border border-b-1 border-t-0 border-l-0 border-r-0"
    >
      <div className="flex gap-1">
        <div className="w-[fit-content] font-semibold">{index + 1}.</div>
        <div>{data.name}</div>
      </div>
    </div>
  );
};

export default ChapterItem;
