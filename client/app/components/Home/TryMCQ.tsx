import React, { useEffect, useState } from "react";
import SimpleLoader from "../Global/SimpleLoader";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const TryMCQ = ({ subjects, loading }: any) => {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = React.useState("");

  const [loadingChapters, setLoadingChapters] = useState(false);

  useEffect(() => {
    if (selectedSubject !== "") {
      try {
        setLoadingChapters(true);
        axios
          .get(
            `http://localhost:10001/mcq/getallchaptersbysubject/${selectedSubject}`
          )
          .then((res) => {
            if (res.data.length > 0) {
              router.push(
                `/mcq/v1/${selectedSubject}/${res.data[0].name.replaceAll(
                  " ",
                  "-"
                )}/1`
              );
              // setLoadingChapters(false);
            } else {
              setLoadingChapters(false);
              return toast.error("No chapters found for this subject");
            }
            // console.log(res.data);
          })
          .catch((err) => console.log(err));
      } catch (error) {}
    }
  }, [selectedSubject]);
  console.log(selectedSubject);
  return (
    <div id="trymcq" className="w-full px-11 gap-5">
      <Toaster />
      <div className="w-[fit-content] text-center text-gray-700 py-1 font-semibold text-2xl">
        Try MCQ&apos;s
      </div>
      {loading ? (
        <SimpleLoader size={15} clr={"purple"} />
      ) : (
        <div className="w-full flex justify-center gap-5 flex-wrap">
          {subjects.map((language: any) => (
            <div
              key={language.name}
              onClick={() => {
                setSelectedSubject(language.name);
              }}
              title={`Try MCQ for ${language.name}`}
              className="flex justify-center cursor-pointer border-purple-300 items-center py-3 border rounded-md bg-purple-100 hover:bg-purple-200"
            >
              {loadingChapters ? (
                selectedSubject === language.name ? (
                  <>
                    <div className="w-full px-4 ">
                      <Image
                        src={language.image}
                        height={80}
                        width={80}
                        title={`Try MCQ for ${language.name}`}
                        alt={`Try MCQ for ${language.name}`}
                      />
                    </div>

                    <div className="w-[80px] flex justify-center items-center h-[100px] rounded-md absolute bg-white/50 backdrop:blur ">
                      <SimpleLoader clr={"purple"} />
                    </div>
                  </>
                ) : (
                  <div className="w-full px-4">
                    <Image
                      src={language.image}
                      height={80}
                      width={80}
                      title={`Try MCQ for ${language.name}`}
                      alt={`Try MCQ for ${language.name}`}
                    />
                  </div>
                )
              ) : (
                <div className="w-full px-4">
                  <Image
                    src={language.image}
                    height={80}
                    width={80}
                    title={`Try MCQ for ${language.name}`}
                    alt={`Try MCQ for ${language.name}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TryMCQ;
