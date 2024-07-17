import React from "react";
import { FcHome } from "react-icons/fc";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
interface Props {
  subject: String;
  chapter?: String;
  questionNo?: String;
  totalquestion?: String;
}

const Breadcrum = (props: Props) => {
  return (
    <div className="w-full flex-wrap flex flex-row justify-center text-[16px] items-center ">
      <div className="flex w-full text-sm flex-wrap bg-white  text-gray-600 px-3 py-3 items-center justify-start ">
        <Link href={"/"}>
          <FcHome size={20} />
        </Link>
        &nbsp; <FaChevronRight size={10} /> &nbsp;
        <Link href={`/mcq/v1/${props.subject}`}>
          <span className="">
            {props.subject && props.subject?.replaceAll("-", " ")}
          </span>
        </Link>
        &nbsp;
        {props.chapter && <FaChevronRight size={10} />}&nbsp;
        <span className="">
          <Link href={`/mcq/v1/${props.subject}/chapters`}>
            {props.chapter?.replaceAll("-", " ")}
          </Link>
        </span>
        &nbsp;
        {props.questionNo && <FaChevronRight size={10} />} &nbsp;
        {props.questionNo && (
          <span className="">
            ( {props.questionNo} / {props.totalquestion} )
          </span>
        )}
      </div>
    </div>
  );
};

export default Breadcrum;
