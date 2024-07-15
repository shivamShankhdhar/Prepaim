import FormatedDate from "@/app/components/Global/FormatedDate";
import QuestionLevel from "@/app/components/QuestionLevel/QuestionLevel";
import Link from "next/link";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const CodingQuestionItem = ({ item, index, id }: any) => {
  return (
    <div className="w-full flex px-2 rounded-md py-2 gap-2 items-center hover:bg-gray-100 cursor-pointer">
      <div className="w-[10px]">{index + 1}.</div>

      <div className="flex-1">
        <Link href={`/coding/v1/Java/${item.question.replaceAll(" ", "-")}`}>
          {item.question}
        </Link>
      </div>

      <div className="w-[fit-content] justify-center items-center flex">
        <FormatedDate date={item.date_added} cls={"text-[15px]"} />
      </div>
      <div className="w-[100px] justify-center items-center flex">
        <QuestionLevel level={item.level} isText={false} />
      </div>
      {/* <div className="w-[50px] justify-center items-center flex">
        <Link href={`/admin/v1/coding/edit-coding-question/${id}`}>
          <CiEdit size={20} className="text-indigo-700 hover:text-indigo-800" />
        </Link>
      </div> */}
      <div className="w-[50px] justify-center items-center flex">
        <Link
          href={`/admin/v1/coding/delete-coding-question/${id}/${item.question.replaceAll(
            " ",
            "-"
          )}`}
        >
          <RiDeleteBin6Line
            size={20}
            className="text-rose-700 hover:text-rose-800"
          />
        </Link>
      </div>
    </div>
  );
};

export default CodingQuestionItem;
