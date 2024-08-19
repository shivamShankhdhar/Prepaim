import React, { useEffect, useState } from "react";
import ShortcutPostItem from "./ShortcutPostItem";

const BlogFooter = ({ category }: any) => {
  const [posts, setPosts] = useState([
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "webdevelopment",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "data-structures",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "web-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "mobile-development",
    },
    {
      title: "this is title",
      description: "this is short description",
      date_added: Date.now(),
      imageUrl: "/assets/blog/subjectbg.jpg",
      category: "Artificial Intelligence",
    },
  ]);
  const [filteredPosts, setFilteredPosts] = useState(
    [
      {
        title: "",
        description: "",
        date_added: 0,
        imageUrl: "",
        category: "",
      },
    ].filter((item) => item.title !== "")
  );
  useEffect(() => {
    if (category !== "") {
      setFilteredPosts(
        posts.filter(
          (item) => item.category.toLowerCase() === category.toLocaleLowerCase()
        )
      );
    } else {
      setFilteredPosts(posts.slice(0, 10));
    }
  }, [category]);

  return (
    <>
      {filteredPosts.length > 0 && (
        <div className="w-full p-5 border border-indigo-50 rounded-md gap-2 flex flex-col">
          <div className="w-full text-2xl">
            Related Posts ({filteredPosts.length}){" "}
            {category !== "" && (
              <span className="text-sm">
                Showing Results for &nbsp;-&nbsp;
                <span className="text-indigo-900 bg-indigo-100 px-2 rounded-md">
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
