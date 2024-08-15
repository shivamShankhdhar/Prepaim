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

        <div className="w-full inline-block justify-center items-center text-center mt-2">
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

        <Breadcrum
          subject={subject.toString()}
          subjectLength={subjectLengthAfterAllFilters}
        />

        {/* all subjects  */}
        <SubjectList setSubjectLength={stSubjectLengthAfterAllFilters} />
        <div className="w-full block text-center mt-2">
          <ins
            className="adsbygoogle text-center"
            style={{ display: "block" }}
            data-ad-format="auto"
            data-ad-client="ca-pub-1113302487630583"
            data-ad-slot="7384794981"
          ></ins>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SubjectPage;
