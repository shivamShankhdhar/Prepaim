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

  return (
    <div className="flex flex-col items-center  w-full">
      <Breadcrum chaptersLength={chapters.length} />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
        crossOrigin="anonymous"
      ></script>
      {/* display afs  */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1113302487630583"
        data-ad-slot="6071713317"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{`adsbygoogle = window.adsbygoogle || []).push({});`}</script>
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
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
        crossOrigin="anonymous"
      ></script>
      {/* display afs  */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1113302487630583"
        data-ad-slot="6071713317"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{`adsbygoogle = window.adsbygoogle || []).push({});`}</script>
      <Footer />
    </div>
  );
};

export default ChapterPage;
