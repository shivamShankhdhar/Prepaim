import ErrorMessage from "@/app/components/Global/ErrorMessage";
import Loader from "@/app/components/Global/Loader";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

const SubjectsList = () => {
  const [subjects, setSubjects] = useState(
    [
      {
        question: "",
        answer: [{ ans: "", isTrue: false }],
        explanation: [{ answer: "", explanation: "" }],
      },
    ].filter((q) => q.question !== "")
  );

  const [loadingSubjects, setloadingSubjects] = useState(true);

  const [subjectError, setsubjectError] = useState("");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:10001/admin/mcq/getallsubjects")
        .then((response) => {
          setSubjects(response.data);
          setloadingSubjects(false);
        })
        .catch((e) => {
          setsubjectError("error");
          setloadingSubjects(false);
        });
    } catch (error) {
      setloadingSubjects(false);
      console.log(error);
    }
  }, []);
  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg bg-white">
      {loadingSubjects === false ? (
        subjectError === "" ? (
          subjects.length > 0 ? (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Branch
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((data: any, index: number) => {
                  return (
                    <tr
                      key={`${data}-${index}`}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}.
                      </th>
                      <td className="px-6 py-4">{data.name}</td>
                      <td className="px-6 py-4">{data.branch}</td>

                      <td className="px-6 py-4 text-right text-green-700">
                        <Link href={""}>
                          <CiEdit size={20} />
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-right text-red-700">
                        <Link href={""}>
                          <MdOutlineDeleteOutline size={20} />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <ErrorMessage
              text={`No question founds`}
              isButton={false}
              isBg={false}
            />
          )
        ) : (
          <ErrorMessage
            text={`Can't Load subjects`}
            isButton={false}
            isBg={false}
          />
        )
      ) : (
        <Loader size={20} cls="text-gray-800" text={`Loading subjects...`} />
      )}
    </div>
  );
};

export default SubjectsList;
