import Link from "next/link";
import React from "react";
import { SiTicktick } from "react-icons/si";
import { FiPlusCircle } from "react-icons/fi";
import { useParams } from "next/navigation";
const SidebarItem = ({
  item,
  index,
  totalLengthOfChapters,
  pageViewMode,
}: any) => {
  const { subject } = useParams();
  const { chapter } = useParams();
  return (
    <div
      className={`flex border flex-row border-dashed justify-start border-purple-900 border-t-0 border-l-0 ${
        index < totalLengthOfChapters - 1 ? "border-b-1" : "border-b-0"
      } border-r-0 items-center gap-2 w-full px-2 py-2  ${
        String(item.name.replaceAll(" ", "-")) === chapter
          ? " bg-purple-900 border-l-1 border-l-white text-white hover:bg-purple-950 "
          : "border-purple-300 hover:bg-purple-200 text-gray-800"
      }`}
    >
      <Link
        className="flex items-center gap-2 min-w-[250px] max-w-[fit-content]"
        key={`${index}-${item}`}
        href={`/mcq/v1/${subject}/${item.name.replaceAll(
          " ",
          "-"
        )}/${pageViewMode}/1`}
      >
        {String(item.name.replaceAll(" ", "-")) === chapter ? (
          <SiTicktick size={15} />
        ) : (
          <FiPlusCircle size={15} />
        )}
        {/* </span> */}
        {item.name}
      </Link>
    </div>
  );
};

export default SidebarItem;
