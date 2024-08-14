"use client";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ErrorMessage from "./components/Global/ErrorMessage";

import useFetch from "./hooks/fetch.hook";
import TryMCQ from "./components/Home/HeroSection/TryMCQ";

export default function Home() {
  const [subjectsFromServer, setSubjectsFromServer] = useState(
    [{ name: "", branch: "", type: "", image: "" }].filter(
      (data) => data.name !== ""
    )
  );

  const [loadingSubjects, setLoadingSubjects] = useState(true);

  const { data } = useFetch("/mcq/getallsubjects");

  useEffect(() => {
    if (data.apiData !== undefined) {
      setSubjectsFromServer(data.apiData);
      setLoadingSubjects(data.isLoading);
    }
  }, [data.apiData, data.isLoading, data.serverError]);

  const [errorLoadingSubjects, setErrorLoadingSubjects] = useState("");

  return (
    <>
      <div className="flex w-full items-center flex-col mb-3">
        <div className="w-full"></div>
        {/* HERO SECTION  */}
        <HeroSection />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-bw-d+1k-5q+9s"
          data-ad-client="ca-pub-1113302487630583"
          data-ad-slot="3637121664"
        ></ins>
        <script>{`adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        {/* MCQ Questions LIST  */}
        <div className="w-full flex px-2 flex-col">
          {/* try mcq questions  */}
          <div className="w-full flex gap-2 flex-wrap rounded-md items-center mt-3 p-2 bg-white ">
            {errorLoadingSubjects === "" ? (
              <TryMCQ loading={loadingSubjects} subjects={subjectsFromServer} />
            ) : (
              <ErrorMessage
                text={errorLoadingSubjects}
                isBg={false}
                isButton={false}
              />
            )}
          </div>
        </div>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-1113302487630583"
          data-ad-slot="2452828664"
        ></ins>
        <script>{`adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        <Footer />
      </div>
    </>
  );
}
