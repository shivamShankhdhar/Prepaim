import useFetch from "@/app/hooks/fetch.hook";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SimpleLoader from "../../../Global/SimpleLoader";
import ShortCutLinksForCodingSkeleton from "./ShortCutLinksForMcqSkeleton";

const ShortcutLinksForCoding = ({ allSubjects }: any) => {
  const { data: CodingQuestion } = useFetch(
    "/admin/coding/getallquestionsFromCoding"
  );
  const [allCodingQuestions, setAllCodingQuestions] = useState(
    [{ _id: "", question: "" }].filter((item) => item.question !== "")
  );
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);
  useEffect(() => {
    if (
      CodingQuestion.apiData !== undefined &&
      CodingQuestion.isLoading === false
    ) {
      setAllCodingQuestions(CodingQuestion.apiData);
      setLoading(CodingQuestion.isLoading);
      if (CodingQuestion.serverError !== null)
        setLoadingError(CodingQuestion.serverError);
    }
  }, [CodingQuestion]);

  // (allCodingQuestions);

  // first extract subject that has type language

  return (
    <div className="flex-1 px-1 flex flex-col">
      <>
        <div className="w-full text-2xl font-semibold text-purple-900 ">
          Try Coding
        </div>
        <div className="py-3">
          {loading === true ? (
            <ShortCutLinksForCodingSkeleton />
          ) : (
            <ul className="w-full  py-2">
              {allCodingQuestions.length > 0 &&
                allCodingQuestions?.slice(0, 10)?.map((item, index) => (
                  <li
                    key={item._id}
                    className="hover:text-purple-900 flex gap-1"
                  >
                    <MdKeyboardDoubleArrowRight size={20} />
                    <Link
                      className="flex items-satrt gap-1"
                      href={`${`/coding/v1/${
                        allSubjects[0].name
                      }/${item.question?.replaceAll(" ", "-")}`}`}
                    >
                      {item.question}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </>
    </div>
  );
};

export default ShortcutLinksForCoding;
