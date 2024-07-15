import useFetch from "@/app/hooks/fetch.hook";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SimpleLoader from "../../Global/SimpleLoader";
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
      // console.log(data.apiData);
      setAllMcqQuestions(data.apiData);
      setLoading(data.isLoading);
      if (data.serverError !== null) setLoadingError(data.serverError);
    }
  }, [data]);

  return (
    <div className="flex-1 px-1 flex flex-col">
      <div className="w-full text-2xl font-semibold text-purple-900 border-2 border-dotted pb-1 border-purple-900 border-t-0 border-r-0 border-l-0 border-b-1">
        Try MCQ
      </div>
      <div className="py-3">
        {loading === true ? (
          <SimpleLoader size={15} clr="purple" />
        ) : (
          <ul className="w-full px-5 py-2">
            {allMcqQuestions.slice(0, 10).map((item, index) => (
              <li
                key={item._id}
                className="hover:text-purple-900 flex items-satrt gap-1"
              >
                <Link
                  className="flex gap-1"
                  href={`/mcq/v1/${item.subject?.replaceAll(
                    " ",
                    "-"
                  )}/${item.chapter?.replaceAll(" ", "-")}/${index}`}
                >
                  <MdKeyboardDoubleArrowRight />
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
