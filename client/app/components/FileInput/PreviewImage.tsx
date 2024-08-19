import Image from "next/image";
import React, { useState } from "react";

const PreviewImage = ({ imageFile }: any) => {
  const [isPreviewImage, setIsPreviewImage] = useState(true);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-end items-center border py-3 border-b-1 border-t-0 border-l-0 border-r-0">
        <div
          className="px-3 py-1 flex justify-center items-center bg-purple-900 rounded-md hover:bg-purple-900 text-white cursor-pointer"
          onClick={() => setIsPreviewImage((prev) => !prev)}
        >
          {isPreviewImage ? "Hide Image" : "Show Image"}
        </div>
      </div>
      {isPreviewImage && (
        <div className="w-full flex justify-center items-center py-5">
          <Image
            style={{ width: "auto", height: "auto" }}
            src={URL.createObjectURL(imageFile)}
            alt="image preview"
            title="selected image"
            width={50}
            height={50}
          />
        </div>
      )}
    </div>
  );
};

export default PreviewImage;
