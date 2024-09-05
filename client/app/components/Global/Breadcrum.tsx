import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Button } from "@mui/material";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[4],
    fontSize: 13,
  },
}));

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
  const commonClassForActiveElements = `flex justify-center items-center text-sm py-0  px-2 bg-purple-100 hover:bg-purple-100 hover:text-purple-800 hover:cursor-text border border-purple-300 rounded-full text-purple-800`;

  // render
  return (
    <div className="w-full flex-wrap sticky top-0 flex flex-row justify-center text-[15px] items-center ">
      <div className="flex w-full text-sm flex-wrap bg-white  text-gray-600 px-3 py-[12px] items-center justify-start ">
        <Link href={"/"}>
          <LightTooltip className="text-purple-800" title="click to go to Home">
            <div>Home</div>
          </LightTooltip>
        </Link>
        &nbsp;
        {subject !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;
            {lastItemOfPathname === subject ? (
              <LightTooltip title="Total Subjects">
                <Button
                  sx={{ textTransform: "none" }}
                  className={`${commonClassForActiveElements}`}
                >
                  {Number(props.subjectLength) > 1
                    ? `Total Subjects - ${props.subjectLength}`
                    : `Total Subject - ${props.subjectLength}`}
                </Button>
              </LightTooltip>
            ) : (
              <Link href={`/mcq/v1/subjects`}>
                <LightTooltip title="Click to see all subjects">
                  <div>
                    {subject && subject.toString() === "CPP"
                      ? "C++"
                      : subject.toString().replaceAll("-", " ")}
                  </div>
                </LightTooltip>
              </Link>
            )}
          </>
        )}
        &nbsp;
        {chapter !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;{" "}
            {lastItemOfPathname === chapter ? (
              <LightTooltip title="Total Chapters">
                <Button
                  sx={{ textTransform: "none" }}
                  className={`${commonClassForActiveElements}`}
                >
                  {Number(props.chaptersLength) > 1
                    ? `Total Chapters - ${props.chaptersLength}`
                    : `Total Chapter - ${props.chaptersLength}`}
                </Button>
              </LightTooltip>
            ) : (
              <Link href={`/mcq/v1/${subject}/chapters`}>
                <LightTooltip title={`Click to see all chapters of ${subject}`}>
                  <div>
                    {chapter && chapter.toString().includes("CPP")
                      ? chapter
                          .toString()
                          .replaceAll("CPP", "C++")
                          .replaceAll("-", " ")
                      : chapter.toString().replaceAll("-", " ")}
                  </div>
                </LightTooltip>
              </Link>
            )}
          </>
        )}
        &nbsp;
        {question !== undefined && (
          <>
            <FaChevronRight size={10} /> &nbsp;
            {lastItemOfPathname === question ? (
              <LightTooltip
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
                    : "Oops no question there,we are working hard to make your experience better with us."
                }
              >
                <Button
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
              </LightTooltip>
            ) : (
              <Link
                href={`/mcq/v1/${subject}/chapters/${chapter}/${`Test-Prepration-Mode`}/questions`}
              >
                <LightTooltip title="Click to see all questions">
                  <div>
                    {question && question.toString().replaceAll("-", " ")}
                  </div>
                </LightTooltip>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrum;
