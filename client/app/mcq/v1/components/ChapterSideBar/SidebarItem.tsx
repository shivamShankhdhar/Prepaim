import Link from "next/link";
import React from "react";
import { SiTicktick } from "react-icons/si";
import { FiPlusCircle } from "react-icons/fi";
import { useParams } from "next/navigation";
const SidebarItem = ({ item, index, pageViewMode }: any) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  return (
    <Link
      key={`${index}-${item}`}
      href={`/mcq/v1/${subject}/${item.name.replaceAll(
        " ",
        "-"
      )}/${pageViewMode}/1`}
    >
      <p
        className={`flex border border-t-0 border-l-1 border-b-0 border-r-0 items-center gap-2 w-full px-2 py-2  ${
          String(item.name.replaceAll(" ", "-")) === chapter
            ? " border-purple-800 bg-purple-100 hover:bg-purple-200 text-purple-800"
            : "  border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800"
        }`}
      >
        <span className="flex items-center justify-center h-full">
          {String(item.name.replaceAll(" ", "-")) === chapter ? (
            <SiTicktick size={15} />
          ) : (
            <FiPlusCircle size={15} />
          )}
        </span>
        <span className="flex flex-1">{item.name}</span>
      </p>
    </Link>
  );
};

export default SidebarItem;
