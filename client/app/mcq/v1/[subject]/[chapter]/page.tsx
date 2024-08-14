"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";;
import ChapterItemSkeleton from "../../components/Chapters/ChapterItemSkeleton";
import ChapterItem from "../../components/Chapters/ChapterItem";
import Breadcrum from "@/app/components/Global/Breadcrum";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import Footer from "@/app/components/Footer/Footer";

const ChapterPage = () => {
  const { subject } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [chapters, setChapters] = useState(
    [{ name: "", subject: "" }].filter((i) => i.name !== "")
  );
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      axios
        .get(`/mcq/getallchaptersbysubject/${subject}`)
        .then((response) => {
          setChapters(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          toast.error("Something went wrong...!");
          setError("Something went wrong...!");
          setIsLoading(false);
        });
    } catch (error) {
      setError("Something went wrong...!");
      setIsLoading(false);
    }
  }, []);
   useEffect(() => {
     ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
   }, []);

   return (
     <div className="flex flex-col items-center  w-full">
       <Breadcrum chaptersLength={chapters.length} />
       <div className="w-full grid content-between">
         <ins
           className="adsbygoogle"
           style={{
             display: "inline-block",
             width: "100%",
             height: "100px",
           }}
           data-ad-client="ca-pub-1113302487630583"
           data-ad-slot="7957270938"
           data-ad-format=" horizontal"
           data-full-width-responsive="true"
         ></ins>
       </div>
       <div className="w-full px-2 min-h-[92vh] max-[fit-content]">
         <div className="w-full gap-1/2 bg-white px-5 py-0 flex flex-col mt-1 rounded-md border">
           {isLoading === true ? (
             <ChapterItemSkeleton />
           ) : error === "" ? (
             chapters.length > 0 ? (
               chapters.map((data, index) => {
                 return (
                   <ChapterItem
                     key={index}
                     chapterItemLength={chapters.length}
                     data={data}
                     index={index}
                     subject={subject}
                   />
                 );
               })
             ) : (
               <ErrorMessage
                 text={"No chapters Found"}
                 isBg={false}
                 isButton={false}
               />
             )
           ) : (
             <ErrorMessage text={error} isButton={true} isBg={false} />
           )}
         </div>
       </div>

       <Footer />
     </div>
   );
};

export default ChapterPage;
