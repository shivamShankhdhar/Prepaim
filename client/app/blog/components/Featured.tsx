import React from "react";
import PostItem from "./PostItem";
const Featured = ({ post }: any) => {
  return (
    <div className="w-full py-1 flex flex-col">
      <h1 className="text-[2.5rem]">
        <span className="font-semibold">Hello, Welcome to our Blog</span>,
        Discover Technologies and creative ideas.
      </h1>
      <div className="w-full text-xl">Post of the day</div>
      <PostItem
        title={post.title}
        description={post.description}
        imageUrl={post.image}
        category={post.category}
        date_added={post.date_added}
      />
    </div>
  );
};

export default Featured;
