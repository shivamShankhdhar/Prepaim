"use client";
import React, { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Breadcrum from "@/app/components/Global/Breadcrum";
import SubjectList from "../components/Subjects/SubjectList";
import Footer from "@/app/components/Footer/Footer";

const SubjectPage = () => {
  const [subjectLengthAfterAllFilters, stSubjectLengthAfterAllFilters] =
    useState(0);

  const { subject } = useParams();
   useEffect(() => {
     ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
   }, []);
  return (
    <>
      <div className="flex w-full items-center flex-col">
        {/* breadcrum */}

        <Breadcrum
          subject={subject.toString()}
          subjectLength={subjectLengthAfterAllFilters}
        />
        <div className="w-full h-[100px] ">
          <ins
            className="adsbygoogle"
            style={{
              display: "inline-block",
              width: "100%",
              height: "100px",
            }}
            data-ad-client="ca-pub-1113302487630583"
            data-ad-slot="7957270938"
            data-ad-format="rectanle, horizontal"
            data-full-width-responsive="true"
          ></ins>
        </div>
        {/* all subjects  */}
        <SubjectList setSubjectLength={stSubjectLengthAfterAllFilters} />

        <Footer />
      </div>
    </>
  );
};

export default SubjectPage;
