import React from "react";

import ApprovedBy from "./ApprovedBy";
import FormatedDate from "@/app/components/Global/FormatedDate";

const DiscussItemForQuestion = ({
  user,
  comment,
  date_added,
  isApproved,
}: any) => {
  return (
    <div className="flex flex-col gap-1 py-2 px-3 rounded-[3px] border-purple-400 border bg-purple-50">
      <div className="w-full flex items-center gap-2 px-3 ">
        <img
          src={"/assets/user_profile_fake.png"}
          className="w-8 h-8 rounded-full"
        />
        <p className=" text-gray-500 font-semibold">{user}</p>
      </div>
      <div className=" px-5 py-2 border border-dotted border-purple-400 border-t-1 border-b-1 border-l-0 border-r-0">
        <p className=" text-[13px]">{comment}</p>
      </div>
      <div className="px-3 flex gap-1 py-1/2 items-center text-gray-600 w-full font-semibold">
        <FormatedDate date={date_added} />
        <ApprovedBy isApproved={isApproved} />
      </div>
    </div>
  );
};

export default DiscussItemForQuestion;
