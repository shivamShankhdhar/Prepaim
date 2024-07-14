"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import NoLanguageFound from "./NoLanguageFound";
import LanguagePanelItem from "./LanguagePanelItem";
import LanguagePanelSkeleton from "./LanguagePanelSkeleton";
import useFetch from "@/app/hooks/fetch.hook";

const LanguagePanel = ({ layoutType }: any) => {
  const { question } = useParams();
  const [languagesFromServer, setLanguagesFromServer] = useState(
    [{ name: "", type: "", image: "" }].filter((item) => item.name !== "")
  );
  const [loadingLanguages, setLoadingLanguages] = useState(true);
  const [errorLoadingLanguages, setErrorLoadingLanguages] = useState(null);

  const { data } = useFetch("/admin/getAllSubjects");
  // if (data.apiData !== undefined) {
  //   console.log(data.apiData.filter((i: any) => i.type === "language"));
  // }
  useEffect(() => {
    if (data.apiData !== undefined) {
      setLanguagesFromServer(data.apiData);
      setLoadingLanguages(data.isLoading);
      setErrorLoadingLanguages(data.serverError);
    }
  }, [data]);
  return (
    <div className="sticky top-0">
      <div
        className={`flex ${
          layoutType === "vertical"
            ? "flex-col h-[92vh] w-[120px] gap-2 bg-white"
            : "h-[fit-content] flex-row gap-2"
        }  px-1 gap-0 mt-1 justify-start sticky items-center`}
      >
        {loadingLanguages ? (
          <LanguagePanelSkeleton />
        ) : errorLoadingLanguages !== null ? (
          <>{errorLoadingLanguages}</>
        ) : (
          languagesFromServer
            .filter((i) => i.type === "language")
            .map((subject: any) => (
              <LanguagePanelItem
                layoutType={layoutType}
                item={subject}
                question={question}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default LanguagePanel;
