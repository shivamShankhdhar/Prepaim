"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogFooter from "../components/BlogFooter";
import Image from "next/image";
import axios from "axios";
import FormatedDate from "@/app/components/Global/FormatedDate";
import { Markup } from "interweave";

const BlogPost = () => {
  const { slug } = useParams();
  const title = slug?.toString().replaceAll("-", " ");
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

  useEffect(() => {
    //  if (process.env.NEXT_PUBLIC_RUN_ENVIRONMENT == "PRODUCTION") {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    //  }
  }, []);

  // useEffect(() => {}, []);
  return (
    <div className=" flex  overflow-y-auto m-auto w-[80%]">
      {/* blog page content  */}
      <div className="flex flex-1 overflow-y-auto">
        {/* adsense ads unit left  */}
        {/* <div className="bg-white w-[120px] sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
          adsense ads here
        </div> */}
        {/* main content section */}
        <div className="bg-white flex-1 flex-col">
          {/* blog content */}
          <div className="w-full flex-1 px-2 min-h-[100vh] max-h-[fit-content] overflow-y-auto mt-5">
            {/* post title  */}
            <div className="w-full text-3xl font-semibold">
              {slug.toString().replaceAll("-", " ").charAt(0).toUpperCase() +
                slug.toString().replaceAll("-", " ").slice(1)}
            </div>
            <div className="w-full text-sm flex gap-2">
              <div className="w-[fit-content] rounded-md bg-purple-200 px-2">
                {post.length > 0 && post[0].category}
              </div>
              <div className="w-[fit-content]">
                <FormatedDate date={post.length > 0 && post[0].date_added} />
              </div>
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
            <div className="w-full bg-white h-[80px] text-center block">
              <div className="w-full text-center text-sm block">
                ADVERTISEMENT
              </div>
              <ins
                className="adsbygoogle inline-block text-center w-full h-[100px]"
                data-ad-client="ca-pub-1113302487630583"
                data-ad-slot="7957270938"
                data-ad-format="horizontal"
                data-full-width-responsive="true"
              ></ins>
            </div>
            <div className="w-full">
              {post.length > 0 && <Markup content={post[0].description} />}
            </div>
          </div>
          {/* <div className="w-full">
            here are comments and add comment section
          </div> */}

          <BlogFooter category={postCategory} />
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
