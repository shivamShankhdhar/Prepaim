import React, { useEffect, useState } from "react";
import ShortcutPostItem from "./ShortcutPostItem";
import axios from "axios";

const BlogFooter = ({ category }: any) => {
  const [posts, setPosts] = useState([
    {
      title: "",
      description: "",
      // date_added: "",
      image: "",
      category: "",
      added_by: "",
    },
  ]);
  const [filteredPosts, setFilteredPosts] = useState([
    {
      title: "",
      description: "",
      // date_added: "",
      image: "",
      category: "",
    },
  ]);
  useEffect(() => {
    if (category !== "") {
      setFilteredPosts(
        posts.filter(
          (item) => item.category.toLowerCase() === category.toLocaleLowerCase()
        )
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, category]);

  useEffect(() => {
    try {
      axios
        .get("https://api.data.admin-panel.prepaim.com/blog/getBlogPosts")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {}
  }, []);

  return (
    <>
      {filteredPosts.length > 0 && (
        <div className="w-full p-5 border border-purple-50 rounded-md gap-2 flex flex-col">
          <div className="w-full text-2xl">
            Related Posts ({filteredPosts.length}){" "}
            {category !== "" && (
              <span className="text-sm">
                Showing Results for &nbsp;-&nbsp;
                <span className="text-purple-900 bg-purple-100 px-2 rounded-md">
                  {category}
                </span>
              </span>
            )}
          </div>
          <div className="w-full flex gap-2 flex-row flex-wrap">
            {filteredPosts.map((post: any) => {
              return (
                <ShortcutPostItem key={post.id} post={post} isImage={true} />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogFooter;
