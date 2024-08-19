"use client";
import React, { useEffect, useState } from "react";
import BlogCategory from "./components/BlogCategory";
import Featured from "./components/Featured";
import PostItem from "./components/PostItem";
import Pagination from "./components/Pagination";
import ShortcutPostItem from "./components/ShortcutPostItem";
import ErrorMessage from "../components/Global/ErrorMessage";
import BlogFooter from "./components/BlogFooter";
const Blog = () => {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
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
      setFilteredPosts(posts);
    }
  }, [category, page]);

  const handleCategoryClick = (category: any) => {
    setPage(1);
    setCategory(category);
  };

  const RemoveCategory = () => {
    setCategory("");
    setPage(1);
  };
  return (
    <div className="w-full h-[92vh]  flex fixed">
      {/* adsense ads div */}

      {/* blog page content  */}
      <div className="flex flex-1 overflow-y-auto">
        {/* adsense ads unit left  */}
        <div className="h-full bg-white w-[90px] sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
          adsense ads here
        </div>
        {/* main content section */}
        <div className="h-full bg-white overflow-y-auto flex-1 flex-col px-5">
          {/* featured post */}
          <Featured />
          <div className="w-full bg-white h-[80px] text-center">
            adsense ads here
          </div>
          {/* blog categories  */}
          <div className="w-full" id="posts-container">
            <BlogCategory
              cat={category}
              RemoveCategory={RemoveCategory}
              handleCategoryClick={handleCategoryClick}
              text="Popular Categories"
            />
          </div>
          {/* ads unit here  */}
          {/* blog content */}
          <div className="w-full flex-1 px-2 flex mt-5 min-h-[60vh] max-h-[fit-content]">
            {/* recent posts section  */}
            <div className="flex flex-1 flex-col px-2">
              <h1 className="text-2xl">
                {filteredPosts.length > 0
                  ? `Posts (${filteredPosts.length})`
                  : `Post (${filteredPosts.length})`}
              </h1>
              {/* blog details  */}
              <div className=" flex-1 flex-wrap gap-5 h-[fit-content]">
                {filteredPosts.length > 0 ? (
                  filteredPosts
                    .slice(page * 10 - 10, page * 10)
                    .map((post: any, index: any) => (
                      <PostItem
                        key={post.title}
                        title={post.title}
                        description={post.description}
                        imageUrl={post.imageUrl}
                        category={post.category}
                        date_added={post.date_added}
                      />
                    ))
                ) : (
                  <ErrorMessage
                    text={
                      "No post found for this category, we are working on it check back it later, Thanks for your patience."
                    }
                    isBg={true}
                    isButton={false}
                  />
                )}
              </div>
              {/* pagination section */}
              <Pagination
                items={filteredPosts}
                setProperty={setPage}
                page={page}
              />
            </div>
            {/* right section  */}
            <div className="w-[300px] sm:hidden max-sm:hidden p-3 flex gap-1 flex-col md:hidden rounded-md border max-md:hidden lg:flex xl:flex 2xl:flex h-[fit-content] sticky top-0">
              <h2 className="text-md">What&apos;`s hot ?</h2>
              <div className="w-full text-2xl">Most Popular</div>
              <div className="w-full flex gap-1 flex-col">
                {posts.slice(0, 10).map((post) => {
                  return (
                    <ShortcutPostItem
                      key={post.title}
                      post={post}
                      isImage={true}
                    />
                  );
                })}
              </div>
              <div className="w-full">
                <BlogCategory
                  cat={category}
                  RemoveCategory={RemoveCategory}
                  handleCategoryClick={handleCategoryClick}
                  text="Read by Category"
                />
              </div>
            </div>
            {/* right ads sectioin  */}
            <div className="h-full sticky top-0 bg-white w-[90px] sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
              adsense ads here
            </div>
          </div>
          {/* multiplex ads unit here  */}
          <div className="w-full h-[fit-content] mt-5">multiplex ads</div>
          <BlogFooter category={category} />
        </div>
      </div>
    </div>
  );
};

export default Blog;