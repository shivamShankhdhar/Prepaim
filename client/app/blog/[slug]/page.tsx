"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogFooter from "../components/BlogFooter";
import Image from "next/image";

const BlogPost = () => {
  const { slug } = useParams();
  const [postCategory, setPostCategory] = useState("");

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
  return (
    <div className="w-full flex fixed overflow-y-auto">
      {/* blog page content  */}
      <div className="flex flex-1 overflow-y-auto">
        {/* adsense ads unit left  */}
        <div className="h-full bg-white w-[120px] sm:hidden max-sm:hidden md:hidden max-md:hidden lg:flex xl:flex 2xl:flex">
          adsense ads here
        </div>
        {/* main content section */}
        <div className="h-full bg-white overflow-y-auto flex-1 flex-col">
          {/* blog content */}
          <div className="w-full flex-1 px-2 min-h-[100vh] max-h-[fit-content] overflow-y-auto mt-5">
            {/* post title  */}
            <div className="w-full text-3xl font-semibold">
              {slug.toString().replaceAll("-", " ").charAt(0).toUpperCase() +
                slug.toString().replaceAll("-", " ").slice(1)}
            </div>
            <div className="w-full text-sm">Extra information about post</div>
            {/* post image  */}
            <div className="w-full h-[200px] rounded-md bg-gray-100 mt-3 mb-3 px-2 relative">
              <Image
                src="/assets/blog/subjectbg.jpg"
                alt={`${slug.toString().replaceAll("-", " ")}`}
                layout="fill"
                objectFit="cover"
                className="relative rounded-md"
              />
            </div>
            {/* post description */}
            <div className="w-full bg-white h-[80px] text-center">
              <ins
                className="adsbygoogle inline-block text-center w-[100%] h-[100px]"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100px",
                }}
                data-ad-client="ca-pub-1113302487630583"
                data-ad-slot="7957270938"
                data-ad-format="horizontal"
                data-full-width-responsive="true"
              ></ins>
            </div>
            <div className="w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              mollitia deleniti aperiam tempora, similique dignissimos sequi ab
              perferendis quia obcaecati soluta magni laboriosam. Nesciunt neque
              quam dolores error sint, labore porro vero, totam ut delectus
              laudantium adipisci optio. Qui voluptas minus enim officiis
              dolorum iusto architecto commodi harum error quibusdam veritatis
              fuga, voluptates dolor modi exercitationem omnis ab. Expedita nemo
              necessitatibus tempora, harum cupiditate ex esse consectetur iusto
              quibusdam magni laboriosam nisi, qui natus perferendis veritatis?
              Provident, id corporis eos in et optio quisquam eligendi aperiam
              excepturi dolorum odit, aliquid esse est. Molestias expedita vitae
              soluta odio totam, enim repellat.
            </div>
          </div>
          {/* <div className="w-full">
            here are comments and add comment section
          </div> */}

          <BlogFooter category={postCategory} />
          <div className="w-full h-[auto]">adsense multiplex ads here</div>
        </div>
        {/* right ads sectioin  */}
      </div>
    </div>
  );
};

export default BlogPost;
