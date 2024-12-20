import React from "react";
import Link from "next/link";
const PaginationItem = ({ paginationItem, setProperty, page }: any) => {
  return (
    <div
      key={`key-for-pagination-item-${paginationItem}`}
      onClick={() => setProperty(paginationItem + 1)}
      className={`w-[30px] h-[30px] flex justify-center items-center rounded-full cursor-pointer ${
        paginationItem + 1 === Number(page)
          ? "bg-purple-800 hover:bg-purple-900 text-white"
          : "bg-white hover:bg-purple-900 hover:text-white text-purple-900"
      }  py-1 flex justify-center items-center `}
    >
      <Link href={"/blog/#posts-container"}>{paginationItem + 1}</Link>
    </div>
  );
};

export default PaginationItem;
