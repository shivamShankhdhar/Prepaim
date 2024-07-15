import useFetch from "@/app/hooks/fetch.hook";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SimpleLoader from "../../Global/SimpleLoader";

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

  // console.log(allCodingQuestions);

  // first extract subject that has type language

  return (
    <div className="flex-1 px-1 flex flex-col">
      <>
        <div className="w-full text-2xl font-semibold text-purple-900 border-2 border-dotted pb-1 border-purple-900 border-t-0 border-r-0 border-l-0 border-b-1">
          Try Coding
        </div>
        <div className="py-3">
          {loading === true ? (
            <SimpleLoader size={15} clr="purple" />
          ) : (
            <ul className="w-full px-5 py-2">
              {allCodingQuestions.slice(0, 10).map((item, index) => (
                <li
                  key={item._id}
                  className="hover:text-purple-900 flex items-satrt gap-1"
                >
                  <Link
                    className="flex items-satrt gap-1"
                    href={`${`/coding/v1/${
                      allSubjects[0].name
                    }/${item.question?.replaceAll(" ", "-")}`}`}
                  >
                    <MdKeyboardDoubleArrowRight size={15} />
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
