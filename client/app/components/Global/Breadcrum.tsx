import React from "react";
import { FcHome } from "react-icons/fc";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
interface Props {
  subject?: String;
  chapter?: String;
  questionNo?: String;
  totalquestion?: String;
  subjectLength?: Number;
  chaptersLength?: Number;
}

const Breadcrum = (props: Props) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();

  const pathname = usePathname();
  const splitedPath = pathname.split("/");
  const lastItemOfPathname = splitedPath[splitedPath.length - 1];
  // common class for all active items in breadcrumb
  const commonClassForActiveElements = `flex justify-center items-center text-sm  px-2 bg-purple-100  border border-purple-300 rounded-full text-purple-900`;
  return (
    <div className="w-full flex-wrap flex flex-row justify-center text-[16px] items-center ">
      <div className="flex w-full text-sm flex-wrap bg-white  text-gray-600 px-3 py-[11px] items-center justify-start ">
        <Link href={"/"}>
          {/* <FcHome size={20} /> */}
          Home
        </Link>
        &nbsp;
        {subject !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;
            {lastItemOfPathname === subject ? (
              <div
                className={`${commonClassForActiveElements}`}
              >{` ${subject} - ${props.subjectLength || 0} `}</div>
            ) : (
              <Link href={`/mcq/v1/QuestionStackViewLayout/subjects`}>
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
              <div
                className={`${commonClassForActiveElements}`}
              >{` ${chapter} - ${props.chaptersLength || 0} `}</div>
            ) : (
              <Link
                href={`/mcq/v1/QuestionStackViewLayout/${subject}/chapters`}
              >
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
              <div className={`${commonClassForActiveElements}`}>
                {props.questionNo} / {props.totalquestion}
              </div>
            ) : (
              <Link
                href={`/mcq/v1/QuestionStackViewLayout/${subject}/chapters/${chapter}/questions`}
              >
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
