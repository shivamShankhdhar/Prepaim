"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CodingQuestionAdminSidebar = () => {
  const linkAddress = usePathname();
  const items = [
    { name: "Dashboard", link: "dashboard" },

    { name: "Add Question", link: "add-coding-question" },

    // { name: "Add Language", link: "add-coding-language" },
  ];
  return (
    <div className="sticky overflow-y-auto w-[220px] h-[92vh] px-2 bg-white border border-t-0 border-r-1 border-l-0 border-b-0">
      {items.map((item, index) => (
        <Link key={index} href={`/admin/v1/coding/${item.link}`}>
          <div
            key={index}
            className={`px-2 py-2 flex justify-start items-center gap-1 ${
              linkAddress.toString().split("/")[4] === item.link
                ? "bg-purple-800 text-white hover:bg-purple-900"
                : "text-gray-500  hover:bg-gray-100"
            }`}
          >
            <div>{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CodingQuestionAdminSidebar;
