import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Button } from "@mui/material";
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
  // split route to get the items
  const splitedPath = pathname.split("/");
  // check for the current route
  const lastItemOfPathname = splitedPath[splitedPath.length - 1];

  // common class for all active items in breadcrumb
  const commonClassForActiveElements = `flex justify-center items-center text-sm py-0  px-2 bg-purple-100 hover:bg-purple-100 hover:text-purple-900 hover:cursor-text border border-purple-300 rounded-full text-purple-900`;

  // render
  return (
    <div className="w-full flex-wrap sticky top-0 flex flex-row justify-center text-[15px] items-center ">
      <div className="flex w-full text-sm flex-wrap bg-white  text-gray-600 px-3 py-[12px] items-center justify-start ">
        <Link href={"/"}>
          {/* <FcHome size={20} /> */}
          Home
        </Link>
        &nbsp;
        {subject !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;
            {lastItemOfPathname === subject ? (
              <Button
                sx={{ textTransform: "none" }}
                className={`${commonClassForActiveElements}`}
              >
                {Number(props.subjectLength) > 1
                  ? `Total Subjects - ${props.subjectLength}`
                  : `Total Subject - ${props.subjectLength}`}
              </Button>
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
              <Button
                sx={{ textTransform: "none" }}
                className={`${commonClassForActiveElements}`}
              >
                {Number(props.chaptersLength) > 1
                  ? `Total Chapters - ${props.chaptersLength}`
                  : `Total Chapter - ${props.chaptersLength}`}
              </Button>
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
              <Button
                title={
                  Number(props.totalquestion) > 0
                    ? pathname.includes("Test-Prepration-Mode")
                      ? `There are ${props.totalquestion} ${
                          Number(props.totalquestion) > 1
                            ? "questions"
                            : "question"
                        } in total and you are currently on ${
                          props.questionNo
                        } of them. ${
                          Number(props.totalquestion) > 5
                            ? "Keep going you are doing good."
                            : ""
                        } `
                      : `There are ${props.totalquestion} ${
                          Number(props.totalquestion) > 1
                            ? "questions"
                            : "question"
                        } in total and you are visiting all of them.`
                    : ""
                }
                sx={{ textTransform: "none" }}
                className={`${commonClassForActiveElements}`}
              >
                {/* ---- first check for the visited page  */}
                {/* and then check the length of the questions accordingly show s after question  */}
                {pathname.includes("Test-Prepration-Mode")
                  ? Number(props.totalquestion) > 1
                    ? `Questions - ${props.questionNo} / ${props.totalquestion}`
                    : `Question - ${props.questionNo} / ${props.totalquestion}`
                  : Number(props.totalquestion) > 1
                  ? `Total Questions - ${props.totalquestion}`
                  : `Total Question - ${props.totalquestion}`}
              </Button>
            ) : (
              <Link
                href={`/mcq/v1/${subject}/chapters/${chapter}/${`Test-Prepration-Mode`}/questions`}
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
