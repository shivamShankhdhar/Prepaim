// import React from "react";
import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import SelectDropdown from "@/app/components/Global/SelectDropdown";
import { usePathname } from "next/navigation";
import TextArea from "@/app/components/Global/TextArea";
import useFetch from "@/app/hooks/fetch.hook";

const AddCodingQuestion = () => {
  const cookies = document.cookie;
  const token = cookies.split(";")[1].split("=")[1];

  const pathname = usePathname();
  const [question, setQuestion] = useState("");
  const [language1, setLanguage1] = useState("");
  const [language2, setLanguage2] = useState("");
  const [language3, setLanguage3] = useState("");
  const [language4, setLanguage4] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [isQuestionAvailable, setIsQuestionAvailable] = useState(false);

  useEffect(() => {
    try {
      if (question !== "") {
        axios
          .get(
            `https://www.api.data.prepaim.com/admin/coding/checkCodingQuestionAvailability/${question}`
          )
          .then((res) => {
            // console.log(`this is from success ${res.data.isAvailable}`);
            setIsQuestionAvailable(res.data.isAvailable);
          })
          .catch((error) => {
            // console.log(`this is from error ${error.data.isAvailable}`);
            setIsQuestionAvailable(error.data.isAvailable);
          });
      }
    } catch (error) {
      setIsQuestionAvailable(false);
    }
  }, [question]);

  const [solution1, setSolution1] = useState("");
  const [solution2, setSolution2] = useState("");
  const [solution3, setSolution3] = useState("");
  const [solution4, setSolution4] = useState("");

  const level = [
    { value: "a", label: "Basic" },
    { value: "b", label: "Medium" },
    { value: "c", label: "Advance" },
    // { value: "d", label: "Pro" },
  ];
  const [programmingLanguagesFromServer, setProgrammingLanguagesFromServer] =
    useState([{ name: "", type: "" }]);

  const [programmingLanguageOptions, setProgrammingLanguageOptions] = useState([
    { value: "", label: "" },
  ]);

  const [languageOptionSet, setLanguageOptionSet] = useState(false);
  const [postingQuestion, setPostingQuestion] = useState(false);

  const [questionObj, setQuestionObj] = useState({});

  const [error, setError] = useState("");

  const [loadingProgrammingLanguage, setLoadingProgrammingLanguage] =
    useState(true);

  const { data } = useFetch("admin/getAllSubjects");
  // console.log(data);
  useEffect(() => {
    if (data.apiData !== undefined) {
      setProgrammingLanguagesFromServer(data.apiData);
      setLoadingProgrammingLanguage(data.isLoading);
    }
  }, [data.apiData, data.isLoading, data.serverError]);

  useEffect(() => {
    programmingLanguagesFromServer
      .filter((item) => item.type === "language")
      .map((item: any) => {
        if (programmingLanguageOptions.find((i) => i.value === item.name)) {
        } else {
          setProgrammingLanguageOptions((prev) => [
            ...prev,
            { value: item.name, label: item.name },
          ]);
        }
      });
  }, [programmingLanguagesFromServer]);

  useEffect(() => {
    const obj = {
      question,
      solutions: [
        { language: language1, solution: solution1 },
        { language: language2, solution: solution2 },
        { language: language3, solution: solution3 },
        { language: language4, solution: solution4 },
      ],
      date_added: new Date(),
      level: selectedLevel,
    };
    setQuestionObj(obj);
  }, [
    question,
    language1,
    solution1,
    language2,
    solution2,
    language3,
    solution3,
    language4,
    solution4,
    selectedLevel,
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (question === "") {
      return toast.error("Question is required");
    } else if (language1 === "") {
      return toast.error("Language 1 is required");
    } else if (solution1 === "") {
      return toast.error("TextArea 1 is required");
    } else if (language2 === "") {
      return toast.error("Language 2 is required");
    } else if (solution2 === "") {
      return toast.error("TextArea 2 is required");
    } else if (language3 === "") {
      return toast.error("Language 3 is required");
    } else if (solution3 === "") {
      return toast.error("TextArea 3 is required");
    } else if (language4 === "") {
      return toast.error("Language 4 is required");
    } else if (solution4 === "") {
      return toast.error("TextArea 4 is required");
    } else if (selectedLevel === "") {
      return toast.error("Level is required");
    } else {
      setPostingQuestion(true);
      // return alert({ questionObj });
      try {
        axios
          .post(
            "https://www.api.data.prepaim.com/admin/coding/postquestionforcoding",
            {
              questionObj,
              token,
            }
          )
          .then((response) => {
            setPostingQuestion(false);
            toast.success("Question added successfully");
          })
          .catch((error) => {
            // console.log(error.response.data.error);
            toast.error(error.response.data.error);
            setError(error.response.data.error);
            setPostingQuestion(false);
          });
      } catch (error: any) {
        // console.log(error.messgae);
        setError(error.messgae);
        setPostingQuestion(false);
      }
    }
  };
  return (
    <div className="w-full flex justify-center ">
      <div className=" flex w-full justify-center overflow-y-scroll h-[92vh]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white w-full py-2 px-11 flex flex-col h-[fit-content]"
        >
          <h1 className="text-3xl font-semibold">Add Question</h1>
          <hr />

          <div className="w-full flex flex-col mt-3">
            <TextArea
              setProperty={setQuestion}
              text={"Type coding question here..."}
              rows={2}
              cls={
                question !== ""
                  ? isQuestionAvailable === false
                    ? "border-purple-600"
                    : "border-rose-500"
                  : ""
              }
            />
          </div>
          {/* first row  */}
          <div className="flex w-full justify-between flex-row flex-wrap">
            <div className="w-[49%] flex flex-col mt-3 gap-1">
              <SelectDropdown
                options={programmingLanguageOptions
                  .filter((item) => item.value !== "")
                  .sort((a, b) => a.value.localeCompare(b.value))}
                setProperty={setLanguage1}
                text="Select First Programming Language"
                loading={loadingProgrammingLanguage}
              />
              <TextArea
                setProperty={setSolution1}
                text={"add First solution"}
                rows={10}
              />
            </div>
            <div className="w-[49%] flex flex-col mt-3 gap-1">
              <SelectDropdown
                options={programmingLanguageOptions
                  .filter((item) => item.value !== "")
                  .sort((a, b) => a.value.localeCompare(b.value))}
                setProperty={setLanguage2}
                text="Select Second Programming Language"
                loading={loadingProgrammingLanguage}
              />
              <TextArea
                setProperty={setSolution2}
                text={"add Second solutiion"}
                rows={10}
              />
            </div>

            {/* first row  */}
            <div className="flex w-full justify-between flex-row flex-wrap"></div>
            <div className="w-[49%] flex flex-col mt-3 gap-1">
              <SelectDropdown
                options={programmingLanguageOptions
                  .filter((item) => item.value !== "")
                  .sort((a, b) => a.value.localeCompare(b.value))}
                setProperty={setLanguage3}
                text="Select Third Programming Language"
                loading={loadingProgrammingLanguage}
              />
              <TextArea
                setProperty={setSolution3}
                text={"Add Third solution"}
                rows={10}
              />
            </div>

            <div className="w-[49%] flex flex-col mt-3 gap-1">
              {/* TextArea here */}
              <SelectDropdown
                options={programmingLanguageOptions
                  .filter((item) => item.value !== "")
                  .sort((a, b) => a.value.localeCompare(b.value))}
                setProperty={setLanguage4}
                text="Select Fourth Programming Language"
                loading={loadingProgrammingLanguage}
              />

              <TextArea
                setProperty={setSolution4}
                text={"Add Fourth solution"}
                rows={10}
              />
            </div>
            <div className="w-full mt-2">
              <SelectDropdown
                options={level}
                setProperty={setSelectedLevel}
                text="Select Level"
              />
            </div>
            <div className="flex w-full justify-center mt-2">
              <button
                type="submit"
                className="px-3 flex gap-2 rounded-sm justify-center items-center py-1 bg-purple-800 text-white hover:bg-purple-900 "
              >
                {postingQuestion ? "Posting Question" : "Add Question"}
                {postingQuestion && <SimpleLoader size={15} clr={"white"} />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCodingQuestion;
