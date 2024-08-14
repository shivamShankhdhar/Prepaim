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
  return (
    <>
      <div className="flex w-full items-center flex-col">
        {/* breadcrum */}

        <Breadcrum
          subject={subject.toString()}
          subjectLength={subjectLengthAfterAllFilters}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-1113302487630583"
          data-ad-slot="7384794981"
        ></ins>
        <script>{`adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        {/* all subjects  */}
        <SubjectList setSubjectLength={stSubjectLengthAfterAllFilters} />

        <Footer />
      </div>
    </>
  );
};

export default SubjectPage;
