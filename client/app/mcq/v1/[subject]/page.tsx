"use client";
import React, { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Breadcrum from "@/app/components/Global/Breadcrum";
import SubjectList from "../components/Subjects/SubjectList";
import Footer from "@/app/components/Footer/Footer";

const SubjectPage = () => {
  const [subjectLengthAfterAllFilters, stSubjectLengthAfterAllFilters] =
    useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const [isRouteFalse, setIsRouteFalse] = React.useState(true);
  useEffect(() => {
    if (!pathname.includes("subjects")) {
      router.push("/mcq/v1/subjects");
    }
    setIsRouteFalse(false);
  }, [pathname]);

  const { subject } = useParams();
  return (
    <>
      {isRouteFalse ? (
        "Hold on... Checking Route..."
      ) : (
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
      )}
    </>
  );
};

export default SubjectPage;
