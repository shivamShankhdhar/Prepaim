"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogFooter from "../components/BlogFooter";

import axios from "axios";
import FormatedDate from "@/app/components/Global/FormatedDate";
import { Markup } from "interweave";

import { RxSlash } from "react-icons/rx";
import BlogShareButton from "../components/BlogShareButton";

const BlogPost = () => {
  const { slug } = useParams();
  const title = slug?.toString().replaceAll("-", " ");
  const [loading, setLoading] = useState(true);
  const [postCategory, setPostCategory] = useState("");
  const [post, setPost] = useState(
    [
      {
        title: "",
        image: "",
        description: "",
        category: "",
        date_added: new Date(),
      },
    ].filter((item) => item.title != "")
  );

  useEffect(() => {
    axios
      .get(
        `https://api.data.admin-panel.prepaim.com/blog/getBlogPostByTitle/${slug}`
      )
      .then((res) => {
        setPost(res.data);
      });
  }, [slug]);

  useEffect(() => {
    if (post.length > 0 && post[0].category !== "") {
      setPostCategory(post[0].category);
    }
  }, [post]);

  useEffect(() => {
    if (slug) {
      document.title = `${slug.toString().replaceAll("-", " ")} | Blog`;
    }
  }, [slug]);

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

  // useEffect(() => {}, []);
  return (
    <div className="w-full text-gray-700 flex flex-col fixed bg-white overflow-y-auto h-[92vh] sm:px-[10px] max-sm:px-[10px] md:px-[10px] max-md:px-[10px] lg:px-[100px] xl:px-[100px] 2xl:px-[100px]">
      {/* blog page content  */}
      <div className="flex flex-1 text-[20px] pb-10">
        {/* adsense ads unit left  */}
        {/* <div className="bg-white w-[120px] sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
          adsense ads here
        </div> */}
        {/* main content section */}
        <div className=" flex-1 flex-col pb-5">
          {/* blog content */}
          <div className="w-full flex-1 px-2 mt-5">
            {/* post title  */}
            <div className="w-full text-[45px] font-semibold">
              {post.length > 0 && post[0].title}
            </div>
            <div className="w-full text-sm flex gap-1">
              <div className="w-[fit-content] rounded-md text-purple-950">
                {post.length > 0 && post[0].category}
              </div>
              <div className="flex justify-center items-center text-sm">
                <RxSlash size={10} />
              </div>
              <div className="w-[fit-content]">
                <FormatedDate date={post.length > 0 && post[0].date_added} />
              </div>
              {/* <ShareBtn /> */}
            </div>
            {/* post image  */}
            {/* <div className="w-full h-[200px] rounded-md bg-gray-100 mt-3 mb-3 px-2 relative">
              {post.length > 0 && (
                <Image
                  src={post[0].image}
                  alt={`${slug.toString().replaceAll("-", " ")}`}
                  layout="fill"
                  objectFit="cover"
                  className="relative rounded-md"
                />
              )}
            </div> */}
            {/* post description */}
            <div className="w-[98%] bg-white h-[80px] text-center block">
              <div className="w-full text-center text-sm block">
                ADVERTISEMENT
              </div>
              <ins
                className="adsbygoogle block text-center w-full h-[100px]"
                style={{ display: "block", width: "98%" }}
                data-ad-client="ca-pub-1113302487630583"
                data-ad-slot="7957270938"
                data-ad-format="horizontal"
                data-full-width-responsive="true"
              ></ins>
            </div>
            <div className="w-full flex flex-col gap-2 ">
              {post.length > 0 && <Markup content={post[0].description} />}
            </div>
            <div className="w-full flex gap-2 bg-purple-200 py-3 mt-2 mb-3 px-5">
              <BlogShareButton />
            </div>
          </div>
          {/* <div className="w-full">
            here are comments and add comment section
          </div> */}
          <div className="w-full">
            <BlogFooter
              category={postCategory}
              dontIncludePostTitle={post.length > 0 && post[0].title}
            />
          </div>
          <div className="w-[98%] block text-center mt-2">
            <div className="w-full text-center text-sm block">
              ADVERTISEMENT
            </div>
            <ins
              className="adsbygoogle text-center"
              style={{ display: "block", width: "98%" }}
              data-ad-format="auto"
              data-ad-client="ca-pub-1113302487630583"
              data-ad-slot="7384794981"
            ></ins>
          </div>
        </div>
        {/* right ads sectioin  */}
      </div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default BlogPost;
