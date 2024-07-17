import React from "react";
import { FcHome } from "react-icons/fc";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
interface Props {
  subject: String;
  chapter?: String;
  questionNo?: String;
  totalquestion?: String;
}

const Breadcrum = (props: Props) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();

  const pathname = usePathname();
  const splitedPath = pathname.split("/");
  const lastItemOfPathname = splitedPath[splitedPath.length - 1];

  return (
    <div className="w-full flex-wrap flex flex-row justify-center text-[16px] items-center ">
      <div className="flex w-full text-sm flex-wrap bg-white  text-gray-600 px-3 py-3 items-center justify-start ">
        <Link href={"/"}>
          <FcHome size={20} />
        </Link>
        &nbsp;
        {subject !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;
            {lastItemOfPathname === subject ? (
              <div className="flex justify-center items-center text-sm rounded-sm px-2 bg-purple-500 text-white">
                {subject}
              </div>
            ) : (
              <Link href={`/mcq/v1/subjects`}>
                {subject && subject.toString().replaceAll("-", " ")}
              </Link>
            )}
          </>
        )}
        &nbsp;
        {chapter !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;{" "}
            {lastItemOfPathname === chapter ? (
              <div className="flex justify-center items-center text-sm rounded-sm px-2 bg-purple-500 text-white">
                {chapter}
              </div>
            ) : (
              <Link href={`/mcq/v1/${subject}/chapters`}>
                {chapter && chapter.toString().replaceAll("-", " ")}
              </Link>
            )}
          </>
        )}
        &nbsp;
        {question !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;
            {lastItemOfPathname === question ? (
              <div className="flex justify-center items-center text-sm rounded-sm px-2 bg-purple-500 text-white">
                {props.questionNo} / {props.totalquestion}
              </div>
            ) : (
              <Link href={`/mcq/v1/${subject}/chapters/${chapter}/questions`}>
                {question && question.toString().replaceAll("-", " ")}
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrum;
