import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import toast from "react-hot-toast";
import axios from "axios";
import SimpleLoader from "@/app/components/Global/SimpleLoader";
import TextArea from "@/app/components/Global/TextArea";
import SelectDropdown from "@/app/components/Global/SelectDropdown";
import { Button } from "@mui/material";
import useFetch from "@/app/hooks/fetch.hook";
import { useCookies } from "next-client-cookies";

const label = { inputProps: { "aria-label": "Switch demo" } };
const AddQuestionForMcq = () => {
  const cookies = useCookies();
  const token = cookies.get("token");

  const level = [
    { value: "a", label: "basic" },
    { value: "b", label: "medium" },
    { value: "c", label: "advanced" },
  ];
  let question = {};
  const [checked, setChecked] = useState(false);
  const [checkedId, setCheckedId] = useState("");

  const [que, setQue] = useState("");

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");

  const [correct1, setCorrect1] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [correct3, setCorrect3] = useState(false);
  const [correct4, setCorrect4] = useState(false);

  const [answerExplanation, setAnserExplanation] = useState("");

  const [subjects, setsubjects] = useState(
    [{ name: "", image: "" }].filter((item) => item.name !== "")
  );
  const [selectedSubject, setSelectedSubject] = useState("");
  const [error, setError] = useState("");

  const [chapters, setChapters] = useState(
    [{ name: "" }].filter((item) => item.name !== "")
  );
  const [loadingSubjects, setLoadingSubjects] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [loadingChapters, setLoadingChapters] = useState(true);
  const [chapterError, setChapterError] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [allSubjectOptions, setAllSubjectOptions] = useState([
    { value: "", label: "" },
  ]);

  const [allChapterOptions, setAllChapterOptions] = useState([
    { value: "", label: "" },
  ]);
  const handleClickCheckbox = (e: any) => {
    const id = e.target.id;
    setChecked((prev) => !prev);
    setCheckedId(id);
  };
  useEffect(() => {
    if (checkedId !== "") {
      switch (checkedId) {
        case "1": {
          setCorrect1(true);
          setCorrect2(false);
          setCorrect3(false);
          setCorrect4(false);
          break;
        }
        case "2": {
          setCorrect1(false);
          setCorrect2(true);
          setCorrect3(false);
          setCorrect4(false);
          break;
        }
        case "3": {
          setCorrect1(false);
          setCorrect2(false);
          setCorrect3(true);
          setCorrect4(false);
          break;
        }
        case "4": {
          setCorrect1(false);
          setCorrect2(false);
          setCorrect3(false);
          setCorrect4(true);
          break;
        }
      }
    }
  }, [checkedId]);
  const handleQuestion = (e: any) => {
    setQue(e.target.value);
  };

  const handleAnswer1 = (e: any) => {
    setAns1(e.target.value);
  };

  const handleAnswer2 = (e: any) => {
    setAns2(e.target.value);
  };

  const handleAnswer3 = (e: any) => {
    setAns3(e.target.value);
  };

  const handleAnswer4 = (e: any) => {
    setAns4(e.target.value);
  };
  useEffect(() => {
    question = {
      question: que,
      answer: [
        { ans: ans1, isTrue: correct1 },
        { ans: ans2, isTrue: correct2 },
        { ans: ans3, isTrue: correct3 },
        { ans: ans4, isTrue: correct4 },
      ],
      subject: selectedSubject,
      chapter: selectedChapter,
      explanation: [{ explanation: answerExplanation }],
      level: selectedLevel,
    };
  }, [
    que,
    selectedChapter,
    selectedSubject,
    ans1,
    ans2,
    ans3,
    ans4,
    correct1,
    correct2,
    correct3,
    correct4,
    answerExplanation,
    selectedLevel,
  ]);

  useEffect(() => {
    subjects.map((item) => {
      if (allSubjectOptions.find((itm) => itm.value === item.name)) {
      } else {
        setAllSubjectOptions((prev) => [
          ...prev,
          { value: item.name.toString(), label: item.name.toString() },
        ]);
      }
    });
  }, [subjects]);

  useEffect(() => {
    chapters.map((item) => {
      setAllChapterOptions((prev) => [
        ...prev,
        { value: item.name.toString(), label: item.name.toString() },
      ]);
    });
  }, [chapters, selectedSubject]);
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (que === "") return toast.error("Question  is required");
    else if (ans1 === "") return toast.error("Answer 1 is required");
    else if (ans2 === "") return toast.error("Answer 2 is required");
    else if (ans3 === "") return toast.error("Answer 3 is required");
    else if (ans4 === "") return toast.error("Answer 4 is required");
    else if (checked === false)
      return toast.error("Please select correct answer");
    else if (selectedLevel === "")
      return toast.error("Choose level of the question");
    else if (selectedSubject === "") return toast.error("Subject is required");
    else if (selectedChapter === "") return toast.error("Chapter is required");
    else if (answerExplanation === "")
      return toast.error("Answer Explanation is Required");
    else {
      // (isPosting)
      setIsPosting(true);
      // (isPosting)

      try {
        // post question to db
        axios
          .post("https://www.api.data.prepaim.com/admin/mcq/postquestion", {
            question,
            token,
          })
          .then((response) => {
            setTimeout(() => {
              setIsPosting(false);
              toast.success(response.data.msg);
            }, 500);
          })
          .catch((error) => {
            setTimeout(() => {
              setIsPosting(false);
              toast.error(error.response.data.msg);
            }, 500);
          });
      } catch (error) {
        toast.error("Something went wrong...!");
      }
    }
  };

  const handleAnswerExplanation = (e: any) => {
    setAnserExplanation(e.target.value);
  };

  const { data } = useFetch("/admin/getallsubjects");
  // fetch subjects
  useEffect(() => {
    if (data.apiData !== undefined) {
      setsubjects(data.apiData);
      setLoadingSubjects(data.isLoading);
      // setSubjectError(data.serverError);
    }
  }, [data.apiData, data.isLoading, data.serverError]);

  useEffect(() => {
    subjects.map((item) => {
      if (allSubjectOptions.find((subject) => subject.value !== item.name)) {
        setAllSubjectOptions((prev) => [
          ...prev,
          { value: item.name, label: item.name },
        ]);
      }
    });
  }, []);

  // fetch chapters
  useEffect(() => {
    setAllChapterOptions([{ value: "", label: "" }]);
    setLoadingChapters(true);
    try {
      axios
        .get(
          `https://www.api.data.prepaim.com/mcq/getallchaptersbysubject/${selectedSubject}`
        )
        .then((response) => {
          setChapters(response.data);
          setLoadingChapters(false);
        })
        .catch((err) => {
          setChapters([{ name: "" }]);
          setChapterError("Something wrong...!");
        });
    } catch (error) {
      setChapters([{ name: "" }]);
      setChapterError("error");
    } finally {
      setLoadingChapters(false);
    }
  }, [selectedSubject]);

  return (
    <div className="w-full flex flex-col px-10 items-center">
      <form
        className="px-[50px] w-full mt-5 py-5 flex flex-col text-gray-700 h-[fit-content] rounded-md bg-white border border-purple-300"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-semibold mb-3">Add Question</h1>
        <div className="flex flex-col gap-2">
          <TextArea
            setProperty={setQue}
            text={"Type your question here"}
            rows={1}
          />
          <div className="flex w-full gap-2">
            <div className="flex w-full justify-between gap-2 border border-gray-300  rounded-md items-center overflow-hidden">
              <input
                type="text"
                className="px-2 flex-1 py-2 border-purple-300 border-r-1 border-l-0 border-t-0 border-b-0 border  focus:outline-none"
                placeholder="Answer 1"
                onChange={handleAnswer1}
              />
              <Switch
                {...label}
                id="1"
                onChange={handleClickCheckbox}
                disabled={checkedId === "1" ? false : checked}
              />
            </div>
            <div className="flex w-full justify-between gap-2 border rounded-md border-gray-300 items-center overflow-hidden">
              <input
                type="text"
                className="px-2 flex-1 py-2 border-purple-300 border-r-1 border-l-0 border-t-0 border-b-0 border  focus:outline-none"
                placeholder="Answer 2"
                onChange={handleAnswer2}
              />

              <Switch
                {...label}
                id="2"
                onChange={handleClickCheckbox}
                disabled={checkedId === "2" ? false : checked}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex w-full justify-between gap-2 rounded-md border border-gray-300 items-center overflow-hidden">
              <input
                type="text"
                className="px-2 flex-1 py-2 border-purple-300 border-r-1 border-l-0 border-t-0 border-b-0 border  focus:outline-none"
                placeholder="Answer 3"
                onChange={handleAnswer3}
              />

              <Switch
                {...label}
                id="3"
                onChange={handleClickCheckbox}
                disabled={checkedId === "3" ? false : checked}
              />
            </div>
            <div className="flex w-full justify-between gap-2 items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                className="px-2 flex-1 py-2 border-purple-300 border-r-1 border-l-0 border-t-0 border-b-0 border focus:outline-none"
                placeholder="Answer 4"
                onChange={handleAnswer4}
              />
              <Switch
                {...label}
                id="4"
                onChange={handleClickCheckbox}
                disabled={checkedId === "4" ? false : checked}
              />
            </div>
          </div>

          <div className="w-full flex gap-2">
            {/* question level */}
            <div className="w-full">
              <SelectDropdown
                options={level}
                text={"Question Level"}
                setProperty={setSelectedLevel}
                loading={false}
              />
            </div>

            {/* subjects */}
            <div className="w-full">
              <SelectDropdown
                options={allSubjectOptions.filter((item) => item.value !== "")}
                text={"Select Subject"}
                setProperty={setSelectedSubject}
                loading={loadingSubjects}
              />
            </div>

            <div className="w-full">
              <SelectDropdown
                options={allChapterOptions.filter((item) => item.value !== "")}
                text={"Select Chapter"}
                setProperty={setSelectedChapter}
                loading={loadingChapters}
              />
            </div>
          </div>
          <TextArea
            setProperty={setAnserExplanation}
            text={"Type your explanation here"}
            rows={4}
          />
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="w-[fit-content] flex gap-2 justify-center items-center py-1 px-3 bg-purple-700 text-white rounded-sm focus:outline-purple-100 hover:bg-purple-900"
            >
              {isPosting && <SimpleLoader size={15} clr={"white"} />}
              Add Question
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQuestionForMcq;
