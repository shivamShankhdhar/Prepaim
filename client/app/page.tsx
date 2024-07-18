"use client";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ErrorMessage from "./components/Global/ErrorMessage";
import SimpleLoader from "./components/Global/SimpleLoader";
import TryProgrammingQustions from "./components/Home/HeroSection/TryProgrammingQustions";

import useFetch from "./hooks/fetch.hook";
import TryMCQ from "./components/Home/HeroSection/TryMCQ";
import TryMcqSkeleton from "./components/Home/HeroSection/TryMcqSkeleton";

export default function Home() {
  const [subjectsFromServer, setSubjectsFromServer] = useState(
    [{ name: "", branch: "", type: "", image: "" }].filter(
      (data) => data.name !== ""
    )
  );

  const [loadingSubjects, setLoadingSubjects] = useState(true);

  const { data } = useFetch("/admin/getallsubjects");

  useEffect(() => {
    if (data.apiData !== undefined) {
      setSubjectsFromServer(data.apiData);
      setLoadingSubjects(data.isLoading);
    }
  }, [data.apiData, data.isLoading, data.serverError]);

  const [errorLoadingSubjects, setErrorLoadingSubjects] = useState("");

  return (
    <div className="flex w-full items-center flex-col mb-3">
      <div className="w-full"></div>
      {/* HERO SECTION  */}
      <HeroSection />
      {/* MCQ Questions LIST  */}
      <div className="w-full flex px-2 flex-col">
        {/* try coding questions  */}
        {/* <div className="w-full flex flex-col gap-2 flex-wrap rounded-md items-center mt-3 px-5 py-2 bg-white border">
          {loadingSubjects === false ? (
            errorLoadingSubjects === "" ? (
              <TryProgrammingQustions
                loading={loadingSubjects}
                subjects={subjectsFromServer
                  .filter((data: any) => data.type === "language")
                  .sort((a, b) => a.name.localeCompare(b.name))}
              />
            ) : (
              <ErrorMessage
                text={errorLoadingSubjects}
                isBg={false}
                isButton={false}
              />
            )
          ) : (
            <SimpleLoader size={40} clr={"purple"} />
          )}
        </div> */}
        {/* try mcq questions  */}
        <div className="w-full flex flex-col gap-2 flex-wrap rounded-md items-center mt-3 px-5 py-2 bg-white border">
          {loadingSubjects === false ? (
            errorLoadingSubjects === "" ? (
              <TryMCQ
                loading={loadingSubjects}
                subjects={subjectsFromServer.sort((a, b) =>
                  a.name.localeCompare(b.name)
                )}
              />
            ) : (
              <ErrorMessage
                text={errorLoadingSubjects}
                isBg={false}
                isButton={false}
              />
            )
          ) : (
            <TryMcqSkeleton />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
