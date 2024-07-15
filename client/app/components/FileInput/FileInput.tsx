import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import UploadFileProgress from "./UploadFileProgress";
import PreviewImage from "./PreviewImage";

const FileInput = ({ setImageURLFromServer }: any) => {
  const [imageFile, setImageFile] = useState(null);

  const [progress, setProgress] = useState({ started: false, progress: 0 });

  const [isUploading, setIsUploading] = useState(false);

  const [msg, setMessage] = useState("");
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    setImageURLFromServer(imageURL);
  }, [imageURL, setImageURLFromServer]);

  const handleUpload = (e: any) => {
    e.preventDefault();
    setIsUploading(true);
    if (imageFile === null) return;
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      setProgress((prev) => {
        return { ...prev, started: true };
      });
      axios
        .post("http://localhost:10002/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            console.log(progressEvent);
            setProgress((prev) => {
              if (progressEvent.progress === undefined) return prev;
              return { ...prev, progress: progressEvent.progress };
            });
            const { loaded, total } = progressEvent;
            if (total === undefined) return;
            let percent = Math.floor((loaded * 100) / total);
            setMessage(`${loaded}kb of ${total}kb | ${percent}%`);
            console.log(`${loaded}kb of ${total}kb | ${percent}%`);
          },
        })
        .then((response) => {
          console.log(response.data);
          setImageURL(response.data.image_url);

          setIsUploading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsUploading(false);
        });
    } catch (error) {
      console.log(error);
      setIsUploading(false);
    }
  };

  return (
    <div className="px-2 w-full py-2 border gap-3 rounded-md focus:outline-indigo-100 flex flex-col justify-between items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex-1">
          <input
            type="file"
            onChange={(e: any) => {
              setImageFile(e.target.files[0]);
            }}
          />
        </div>
        <div>
          {imageFile !== null && (
            <div
              onClick={handleUpload}
              className="px-3 py-1 cursor-pointer bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-200 text-white rounded-md flex justify-center items-center gap-1"
            >
              <BsCloudUpload size={18} /> Upload
            </div>
          )}
        </div>
      </div>
      {imageFile !== null && (
        <div className="w-full justify-center flex flex-col gap-2 items-center">
          {/* <div className="w-full">{msg}</div> */}
          <div className="w-full">
            {progress.started && (
              <>
                <UploadFileProgress value={progress.progress} />
              </>
            )}
          </div>
          <div className="w-fill justify-center items-center">
            {isUploading && "Uploading..."}
          </div>
          <div className="w-fill justify-center items-center">
            {imageURL !== "" && "Uploaded Successfully"}
          </div>
          {imageFile !== null && <PreviewImage imageFile={imageFile} />}
        </div>
      )}
    </div>
  );
};

export default FileInput;
