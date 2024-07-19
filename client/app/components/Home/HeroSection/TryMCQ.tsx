import React, { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import SubjectItemGridView from "@/app/mcq/v1/components/Subjects/Layouts/Grid/SubjectItemGridView";
import SubjctGridViewSkeleton from "@/app/mcq/v1/components/Subjects/Layouts/Grid/SubjctGridViewSkeleton";

const TryMCQ = ({ subjects, loading }: any) => {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = React.useState("");

  const [loadingChapters, setLoadingChapters] = useState(false);

  useEffect(() => {
    if (selectedSubject !== "") {
      try {
        setLoadingChapters(true);
        axios
          .get(`/mcq/getallchaptersbysubject/${selectedSubject}`)
          .then((res) => {
            if (res.data.length > 0) {
              router.push(
                `/mcq/v1/${selectedSubject}/${res.data[0].name.replaceAll(
                  " ",
                  "-"
                )}/1`
              );
            } else {
              setLoadingChapters(false);
              setSelectedSubject("");
              return toast.error(
                `No chapters found for subject - ${selectedSubject}`
              );
            }
          })
          .catch((err) => {
            setLoadingChapters(false);
            setSelectedSubject("");
            return toast.error("Something went wrong");
          });
      } catch (error) {
        setLoadingChapters(false);
        setSelectedSubject("");
        toast.error("Something went wrong");
      }
    }
  }, [selectedSubject]);
  // (selectedSubject);
  return (
    <div id="trymcq" className="w-full px-11 gap-5">
      <div className="w-[fit-content] text-center text-gray-700 py-1 font-semibold text-2xl">
        Try MCQ&apos;
      </div>

      <div className="w-full flex justify-center gap-5 py-5 flex-wrap">
        {loading ? (
          <SubjctGridViewSkeleton />
        ) : (
          subjects.map((language: any) => (
            <SubjectItemGridView
              key={`key-at-subject-grid-view-at-home-page-for-${language._id}`} // ${language._id}
              item={language}
              handleNavigateToQuestion={setSelectedSubject}
              selectedSubject={selectedSubject}
              searchingChapters={loadingChapters}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TryMCQ;