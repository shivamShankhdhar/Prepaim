import React from "react";
import FormatedDate from "../../components/Global/FormatedDate";
import Link from "next/link";
import Image from "next/image";

const ShortcutPostItem = ({ post, isImage }: any) => {
  return (
    <div className="flex gap-1 border border-purple-50 hover:bg-purple-50 p-2 rounded-md">
      {isImage !== false && (
        <div className="h-[50px] w-[50px] ">
          <img
            src={post.image}
            width={100}
            height={100}
            alt={post.title}
            className="aspect-square rounded-full"
          />
        </div>
      )}

      <div className="flex flex-col">
        <div className="w-full flex gap-2">
          {/* <div className="w-[fit-content] flex justify-center items-center bg-purple-200 text-purple-900 h-[15px] text-[11px] uppercase rounded-md px-2">
            username
          </div>
          <div className="flex justify-center items-center">-</div> */}
          <div className="w-[fit-content] text-purple-900 h-[auto] text-[11px] uppercase rounded-md">
            {post.category}
          </div>
        </div>
        <div className="w-full">
          <Link href={`/blog/${post.title.replaceAll(" ", "-")}`}>
            {post.title}
          </Link>
        </div>
        <div className="w-[fit-content] h-[12px] text-[11px] uppercase rounded-md">
          <FormatedDate date={post.date_added} />
          {/* {post.date_added} */}
        </div>
      </div>
    </div>
  );
};

export default ShortcutPostItem;
