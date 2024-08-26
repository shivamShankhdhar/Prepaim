import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
import axios from "axios";
import BlogCategorySkeleton from "./Skeleton/BlogCategorySkeleton";
const BlogCategory = ({
  text,
  handleCategoryClick,
  RemoveCategory,
  cat,
}: any) => {
  const [catagories, setCategories] = useState(
    [
      {
        name: "",
      },
    ].filter((item) => item.name !== "")
  );

  const [loading, setLoading] = useState(true);

  const colorClass = [
    "bg-purple-200 border-purple-400",
    "bg-yellow-200 border-yellow-400",
    "bg-green-200 border-green-400",
    "bg-purple-200 border-purple-400",
    "bg-pink-200 border-pink-400",

    "bg-red-200 border-red-400",
    "bg-purple-200 border-purple-400",
  ];

  useEffect(() => {
    axios
      .get("https://api.data.admin-panel.prepaim.com/blog/getBlogCategories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full flex flex-col gap-2 flex-wrap mt-2 border border-dashed border-purple-900 p-3 rounded-md">
      <h1 className="text-2xl border border-dashed border-purple-900 border-t-0 border-l-0 border-r-0 border-b-1 py-1">
        {text}
      </h1>
      {loading ? (
        <BlogCategorySkeleton />
      ) : (
        <div className="w-full flex gap-2 flex-wrap">
          {catagories.map((category: any, index: any) => (
            <div
              key={`category-divs-key-${index}-${category.name}`}
              className={cn(
                `w-[fit-content] px-2 flex gap-1 py-1 rounded-md cursor-pointer justify-center border`,
                colorClass[index]
              )}
            >
              <div
                className="flex-1 flex justify-center items-center text-sm"
                onClick={() => handleCategoryClick(category.name)}
              >
                <Link href="/blog/#posts-container">{category.name}</Link>
              </div>
              {category.name === cat && (
                <div
                  className=" flex justify-center items-center"
                  onClick={RemoveCategory}
                >
                  <GrFormClose size={20} />
                </div>
              )}
            </div>
          ))}
          {/* individual component  */}
        </div>
      )}
    </div>
  );
};

export default BlogCategory;
