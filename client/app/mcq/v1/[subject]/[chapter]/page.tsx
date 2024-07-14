"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
        .get(`http://localhost:4000/mcq/getallchaptersbysubject/${subject}`)
        .then((response) => {
          setChapters(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          // setIsLoading(false)
          // setError(error.response.data.msg)
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
    <div className="flex flex-col items-center h-[100vh] w-full">
      <Breadcrum subject={subject.toString()} />
      <div className="w-full px-2">
        <div className="w-full gap-1/2 bg-white px-5 py-0 flex flex-col mt-1 rounded-md border">
          {isLoading === true ? (
            <ChapterItemSkeleton />
          ) : error === "" ? (
            chapters.length > 0 ? (
              chapters.map((data, index) => {
                return (
                  <ChapterItem
                    key={index}
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
