import React from "react";
import { Button } from "@mui/material";
import FormatedDate from "@/app/components/Global/FormatedDate";
// const { htmlToText } = require("html-to-text");
// import { convert } from "html-to-text";

const PostItem = ({
  title,
  imageUrl,
  description,
  date_added,
  category,
}: any) => {
  const { convert } = require("html-to-text");
  return (
    <div className="w-full flex flex-row flex-wrap mt-3 border rounded-md p-3">
      <div className="flex sm:w-full max-sm:w-full aspect-16/9 md:w-full max-md:w-full lg:w-[350px] mb-2 xl:w-[350px] 2xl:w-[350px]">
        <img
          src={imageUrl}
          height={"100%"}
          width={"100%"}
          className="rounded-md"
          alt="image"
        />
      </div>
      <div className="flex flex-1 flex-col sm-:px-0 max-sm:px-0 md:px-0 max-md:px-0 lg:px-4 xl:px-4 2xl:px-4 justify-center gap-1">
        <div className="w-full flex items-center gap-1">
          {/* date */}
          <div className="w-[fit-content]">
            <FormatedDate date={date_added} />
          </div>
          <div>-</div>
          {/* category  */}
          <div className="w-[fit-content] text-[11px] uppercase text-purple-900 rounded-xl">
            {category}
          </div>
        </div>
        <h1 className="text-2xl">{title}</h1>
        <div>{convert(description.slice(0, 150), { wordwrap: 150 })}...</div>
        <Button
          sx={{ textTransform: "none" }}
          href={`/blog/${title.toString().replace(/\s+/g, "-")}`}
          className="py-1 text-sm px-2 bg-purple-800 hover:bg-purple-900 text-white w-[fit-content]"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
