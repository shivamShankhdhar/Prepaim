import SimpleLoader from "@/app/components/Global/SimpleLoader";
import useFetch from "@/app/hooks/fetch.hook";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ShortCutLinksForMcqSkeleton from "./ShortCutLinksForMcqSkeleton";
const ShortcutLinksForMcq = ({ allSubjects }: any) => {
  // fetch all questions from db
  const { data } = useFetch("/admin/mcq/getallquestions");
  const [allMcqQuestions, setAllMcqQuestions] = useState(
    [{ _id: "", question: "", chapter: "", subject: "" }].filter(
      (item) => item.question !== ""
    )
  );
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);
  useEffect(() => {
    if (data.apiData !== undefined && data.isLoading === false) {
      // (data.apiData);
      setAllMcqQuestions(data.apiData);
      setLoading(data.isLoading);
      if (data.serverError !== null) setLoadingError(data.serverError);
    }
  }, [data]);
  // (allMcqQuestions);
  return (
    <div className="flex-1 px-1 flex flex-col">
      <div className="w-full text-2xl font-semibold text-purple-900 ">
        Try MCQ
      </div>
      <div className="py-3">
        {loading === true ? (
          <ShortCutLinksForMcqSkeleton />
        ) : (
          <ul className="w-full py-2">
            {allMcqQuestions.length > 0 &&
              allMcqQuestions?.slice(0, 10)?.map((item, index) => (
                <li
                  key={item._id}
                  className="hover:text-purple-900 flex justify-between items-center flex-row gap-1"
                >
                  <p>
                    <MdKeyboardDoubleArrowRight size={20} />
                  </p>

                  <Link
                    className="flex flex-1 gap-1"
                    href={`/mcq/v1/${item.subject?.replaceAll(
                      " ",
                      "-"
                    )}/${item.chapter?.replaceAll(
                      " ",
                      "-"
                    )}/QuestionStackViewPage/1`}
                  >
                    {item.question}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShortcutLinksForMcq;
