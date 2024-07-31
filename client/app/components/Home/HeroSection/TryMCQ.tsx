import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import SubjectItemGridView from "@/app/mcq/v1/components/Subjects/Layouts/Grid/SubjectItemGridView";
import SubjctGridViewSkeleton from "@/app/mcq/v1/components/Subjects/Layouts/Grid/SubjctGridViewSkeleton";
import { Button } from "@mui/material";

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
                )}/Test-Prepration-Mode/1`
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
    <>
      <div className="w-full  text-gray-700 border border-dashed border-b-1 border-t-0 border-l-0 border-r-0 border-purple-800 py-2 flex justify-center items-center font-semibold text-2xl">
        Try MCQ&apos;s
      </div>

      <div className="w-full flex justify-center gap-5 py-2 flex-wrap">
        {loading ? (
          <SubjctGridViewSkeleton />
        ) : (
          subjects
            .filter(
              (item: any) =>
                item.name === "Java" ||
                item.name === "Python" ||
                item.name === "C++" ||
                item.name === "C" ||
                item.name === "React"
            )
            .map((language: any) => (
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
      {subjects.length > 4 && (
        <div className="w-full flex justify-center py-5 itms-center">
          <Button
            sx={{ textTransform: "none" }}
            href={`/mcq/v1/subjects`}
            className="px-4 py-1 bg-purple-900 hover:bg-purple-950 text-white"
          >
            View all Subjects
          </Button>
        </div>
      )}
    </>
  );
};

export default TryMCQ;
