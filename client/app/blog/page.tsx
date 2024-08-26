"use client";
import React, { useEffect, useState } from "react";
import BlogCategory from "./components/BlogCategory";
import Featured from "./components/Featured";
import PostItem from "./components/PostItem";
import Pagination from "./components/Pagination";
import ShortcutPostItem from "./components/ShortcutPostItem";
import ErrorMessage from "../components/Global/ErrorMessage";
import BlogFooter from "./components/BlogFooter";
import axios from "axios";
import PostItemSkeleton from "./components/Skeleton/PostItemSkeleton";

const Blog = () => {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([
    {
      title: "",
      description: "",
      date_added: new Date(),
      image: "",
      category: "",
      added_by: "",
    },
  ]);
  const [loading, setLoading] = useState(true);

  const [filteredPosts, setFilteredPosts] = useState([
    {
      title: "",
      description: "",
      date_added: new Date(),
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
  }, [posts, category, page]);

  useEffect(() => {
    try {
      axios
        .get("https://api.data.admin-panel.prepaim.com/blog/getBlogPosts")
        .then((res) => {
          setPosts(res.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const handleCategoryClick = (category: any) => {
    setPage(1);
    setCategory(category);
  };

  const RemoveCategory = () => {
    setCategory("");
    setPage(1);
  };

  useEffect(() => {
    //  if (process.env.NEXT_PUBLIC_RUN_ENVIRONMENT == "PRODUCTION") {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    //  }
  }, []);

  useEffect(() => {
    //  if (process.env.NEXT_PUBLIC_RUN_ENVIRONMENT == "PRODUCTION") {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    //  }
  }, []);

  useEffect(() => {
    //  if (process.env.NEXT_PUBLIC_RUN_ENVIRONMENT == "PRODUCTION") {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    //  }
  }, []);

  useEffect(() => {
    //  if (process.env.NEXT_PUBLIC_RUN_ENVIRONMENT == "PRODUCTION") {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    //  }
  }, []);

  console.log(posts);
  return (
    <div className="w-full h-[92vh] flex fixed">
      {/* adsense ads div */}

      {/* blog page content  */}
      <div className="flex flex-1 overflow-y-auto sm:w-[100%] max-sm:w-[100%] md:w-[80%] max-md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] m-auto">
        {/* adsense ads unit left  */}
        {/* <div className="h-full bg-white w-[90px] sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1113302487630583"
            data-ad-slot="7783819032"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div> */}
        {/* main content section */}
        <div className="h-full bg-white overflow-y-auto flex-1 flex-col px-5">
          {/* featured post */}
          {/* <Featured post={posts.filter((item) => item.title !== "")[0]} /> */}
          <div className="w-full bg-white h-[80px] text-center block">
            <div className="w-full text-center text-sm block">
              ADVERTISEMENT
            </div>
            <ins
              className="adsbygoogle block text-center w-[100%] h-[100px]"
              style={{
                display: "block",
                width: "100%",
                height: "100px",
              }}
              data-ad-client="ca-pub-1113302487630583"
              data-ad-slot="7957270938"
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            ></ins>
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
                {filteredPosts.filter((item) => item.title !== "").length > 0
                  ? `Posts (${filteredPosts.length})`
                  : `Post (${filteredPosts.length})`}
              </h1>
              {/* blog details  */}
              <div className="flex-1 flex-wrap gap-5 h-[fit-content]">
                {loading ? (
                  // <PostItemSkeleton />
                  "Loading..."
                ) : filteredPosts.filter((item) => item.title !== "").length >
                  0 ? (
                  filteredPosts
                    .filter((item) => item.title !== "")
                    .slice(page * 10 - 10, page * 10)
                    .map((post: any, index: any) => (
                      <PostItem
                        key={post.title}
                        title={post.title}
                        description={post.description}
                        imageUrl={post.image}
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
              {filteredPosts.filter((item) => item.title !== "").length >
                10 && (
                <Pagination
                  items={filteredPosts.filter((item) => item.title !== "")}
                  setProperty={setPage}
                  page={page}
                />
              )}

              <div className="w-full bg-white h-[80px] text-center block">
                <div className="w-full text-center text-sm block">
                  ADVERTISEMENT
                </div>
                <ins
                  className="adsbygoogle block text-center w-[100%] h-[100px]"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100px",
                  }}
                  data-ad-client="ca-pub-1113302487630583"
                  data-ad-slot="7957270938"
                  data-ad-format="horizontal"
                  data-full-width-responsive="true"
                ></ins>
              </div>
            </div>
            {/* right section  */}
            <div className="w-[300px] sm:hidden max-sm:hidden p-3 flex gap-1 flex-col md:hidden rounded-md border max-md:hidden lg:flex xl:flex 2xl:flex h-[fit-content] sticky top-0">
              <h2 className="text-md">What&apos;s hot ?</h2>
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
                <div className="w-[300px] h-[300px] mt-2 block">
                  <div className="w-full text-center text-sm block">
                    ADVERTISEMENT
                  </div>
                  <ins
                    className="adsbygoogle block w-[280px] h-[300px]"
                    data-ad-layout="in-article"
                    // data-ad-format="rectangle"
                    data-ad-client="ca-pub-1113302487630583"
                    data-ad-slot="8194517617"
                  ></ins>
                </div>
              </div>
            </div>
            {/* right ads sectioin  */}
            {/* <div className="h-full sticky top-0 bg-white w-[90px] sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
              <ins
                className="adsbygoogle inline-block text-center w-[90px] h-[100%]"
                style={{
                  display: "inline-block",
                  width: "100px",
                  height: "100%",
                }}
                data-ad-client="ca-pub-1113302487630583"
                data-ad-slot="7957270938"
                data-ad-format="vertical"
                data-full-width-responsive="true"
              ></ins>
            </div> */}
          </div>
          {/* multiplex ads unit here  */}
          <div className="w-full inline-block text-center mt-2">
            <div className="w-full text-center text-sm block">
              ADVERTISEMENT
            </div>
            <ins
              className="adsbygoogle text-center"
              style={{ display: "block" }}
              data-ad-format="auto"
              data-ad-client="ca-pub-1113302487630583"
              data-ad-slot="7384794981"
            ></ins>
          </div>
          <BlogFooter category={category} />
        </div>
      </div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Blog;
