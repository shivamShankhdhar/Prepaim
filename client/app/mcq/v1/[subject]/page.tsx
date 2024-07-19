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
        {/* all subjects  */}
        <SubjectList setSubjectLength={stSubjectLengthAfterAllFilters} />
        <Footer />
      </div>
    </>
  );
};

export default SubjectPage;
