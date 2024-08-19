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

    useEffect(() => {
      if (process.env.RUN_ENVIRONMENT! === "PRODUCTION") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      }
    }, []);
    return (
      <>
        <div className="flex w-full items-center flex-col mb-3">
          {process.env.RUN_ENVIRONMENT! === "PRODUCTION" && (
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
              crossOrigin="anonymous"
            ></script>
          )}

          {/* HERO SECTION  */}
          <HeroSection />
          <div className="w-full mt-2 inline-block justify-center items-center text-center">
            <ins
              className="adsbygoogle text-center"
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

          {/* MCQ Questions LIST  */}
          <div className="w-full flex px-2 flex-col">
            {/* try mcq questions  */}
            <div className="w-full flex gap-2 flex-wrap rounded-md items-center mt-3 p-2 bg-white ">
              {errorLoadingSubjects === "" ? (
                <TryMCQ
                  loading={loadingSubjects}
                  subjects={subjectsFromServer}
                />
              ) : (
                <ErrorMessage
                  text={errorLoadingSubjects}
                  isBg={false}
                  isButton={false}
                />
              )}
            </div>
          </div>
          <div className="w-full text-center mt-2">
            <ins
              className="adsbygoogle text-center"
              style={{ display: "block" }}
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-1113302487630583"
              data-ad-slot="7384794981"
            ></ins>
          </div>

          <Footer />
        </div>
      </>
    );
}
