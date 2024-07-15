import Link from "next/link";
import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const CodingQuestionItemForSidebar = ({
  language,
  item,
  question,
  index,
  questionFromParams,
}: any) => {
  return (
    <Link
      href={`/coding/v1/${language || `Java`}/${question?.replaceAll(
        " ",
        "-"
      )}`}
      key={`${index}${question}`}
    >
      <p
        key={index}
        className={`${
          question === questionFromParams
            ? "bg-indigo-800 text-white hover:bg-indigo-900"
            : "text-gray-500 hover:bg-gray-100"
        } flex flex-row gap-2 justify-start items-center px-2 py-2 `}
      >
        <span className="w-full flex justify-start gap-2 items-center">
          {question === questionFromParams ? (
            <IoMdCheckmarkCircleOutline size={18} />
          ) : (
            <GoPlusCircle size={18} />
          )}
          {`${question?.charAt(0).toUpperCase()}${question?.slice(1)}`}
        </span>
      </p>
    </Link>
  );
};

export default CodingQuestionItemForSidebar;
