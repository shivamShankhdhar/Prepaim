"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiDocumentAdd } from "react-icons/ti";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
const Sidebar = () => {
  const pathname = usePathname();

  const sidebarList = [
    { name: "Dashboard", link: "dashboard" },
    { name: "Add Question", link: "actions/add/add-question" },
    { name: "Add Subject", link: "actions/add/add-subject" },
    { name: "Add Chapter", link: "actions/add/add-chapter" },
    { name: "Add Branch", link: "actions/add/add-branch" },
  ];
  return (
    <div className="w-[250px] border-r-2  border-gray-200 px-2 h-[91vh] sticky top-[50px] bg-white">
      <div className="mt-2 flex flex-col">
        {sidebarList.map((items: any) => {
          return (
            <Link
              href={
                items.name === "Add Subject"
                  ? `/admin/v1/add-subject`
                  : `/admin/v1/mcq/${items.link}`
              }
              key={items.name}
            >
              <div
                key={items.name}
                className={`flex justify-start items-center gap-1 text-gray-500 ${
                  pathname.includes(
                    items.name.replaceAll(" ", "-").toLowerCase()
                  )
                    ? "border-r-2  border-purple-500 bg-gray-100"
                    : ""
                } px-2 py-2  hover:bg-gray-100`}
              >
                <div>
                  {items.name === "Dashboard" && <LuLayoutDashboard />}{" "}
                  {items.name === "Add Question" && <MdOutlinePlaylistAdd />}{" "}
                  {items.name === "Add Subject" && <TiDocumentAdd />}{" "}
                  {items.name === "Add Chapter" && <MdAssignmentAdd />}
                  {items.name === "Add Branch" && <FaCodeBranch />}
                </div>

                <div className="w-[130px]">{items.name.toUpperCase()}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
