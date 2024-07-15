import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useFetch from "@/app/hooks/fetch.hook";
import { Switch } from "@mui/material";
import Loader from "@/app/components/Global/Loader";
import ErrorMessage from "@/app/components/Global/ErrorMessage";
import { useCookies } from "next-client-cookies";

const label = { inputProps: { "aria-label": "Switch demo" } };
const UpdateQuestionForMcq = () => {
  const token = useCookies();
  const { id } = useParams();
  const [question, setQuestion] = useState(
    [
      {
        question: "",
        answer: [{ ans: "", isTrue: false }],
        explanation: [{ explanation: { type: String } }],
        subject: "",
        chapter: "",
        level: "",
      },
    ].filter((q) => q.question !== "")
  );

  const level = ["basic", "medium", "advanced"];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { data } = useFetch(`/admin/mcq/getquestion/${id}`);
  useEffect(() => {
    if (data.apiData !== undefined) {
      setQuestion(data.apiData);
      setLoading(data.isLoading);
    }
  }, []);

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
  const [loadingSubjects, setLoadingSubjects] = useState(true);
  const [errorSubjects, setErrorSubjects] = useState("");

  const [chapters, setChapters] = useState(
    [{ name: "" }].filter((item) => item.name !== "")
  );
  const [selectedChapter, setSelectedChapter] = useState("");
  const [loadingChapters, setLoadingChapters] = useState(false);
  const [chapterError, setChapterError] = useState("");

  const [selectedLevel, setSelectedLevel] = useState("");

  const [isPosting, setIsPosting] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);

  const [questionFromServer, setQuestionFromServer] = useState({});
  const [updatedQuestion, setUpdatedQuestion] = useState({});

  useEffect(() => {
    question.map((data) => {
      if (data.answer[0].isTrue === true) {
        setCheckedId("1");
        setChecked(true);
      } else if (data.answer[1].isTrue === true) {
        setCheckedId("2");
        setChecked(true);
      } else if (data.answer[2].isTrue === true) {
        setCheckedId("3");
        setChecked(true);
      } else if (data.answer[3].isTrue === true) {
        setCheckedId("4");
        setChecked(true);
      }
    });
    question.map((data) => {
      let obj = {
        question: "",
        answer: [
          { ans: "", isTrue: false },
          { ans: "", isTrue: false },
          { ans: "", isTrue: false },
          { ans: "", isTrue: false },
        ],
        explanation: [{ explanation: "" }],
        subject: "",
        chapter: "",
        level: "",
      };

      obj = {
        question: data.question,
        answer: [
          { ans: data.answer[0].ans, isTrue: data.answer[0].isTrue },
          { ans: data.answer[1].ans, isTrue: data.answer[1].isTrue },
          { ans: data.answer[2].ans, isTrue: data.answer[2].isTrue },
          { ans: data.answer[3].ans, isTrue: data.answer[3].isTrue },
        ],
        explanation: [
          { explanation: data.explanation[0].explanation.toString() },
        ],
        subject: data.subject,
        chapter: data.chapter,
        level: data.level,
      };
      setQue(obj.question);
      setAns1(obj.answer[0].ans);
      setAns2(obj.answer[1].ans);
      setAns3(obj.answer[2].ans);
      setAns4(obj.answer[3].ans);
      setCorrect1(obj.answer[0].isTrue);
      setCorrect2(obj.answer[1].isTrue);
      setCorrect3(obj.answer[2].isTrue);
      setCorrect4(obj.answer[3].isTrue);
      setAnserExplanation(obj.explanation[0].explanation.toString());
      setSelectedSubject(obj.subject);
      setSelectedChapter(obj.chapter);
      setSelectedLevel(obj.level);
      setQuestionFromServer(obj);
    });

    // console.log(newQuestion)
  }, [question]);

  const handleClickCheckbox = (e: any) => {
    const id = e.target.id;
    setChecked((prev) => !prev);
    setCheckedId(id);
    setDataChanged(true);
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
    setDataChanged(true);
    setQue(e.target.value);
  };

  const handleAnswer1 = (e: any) => {
    setDataChanged(true);
    setAns1(e.target.value);
  };

  const handleAnswer2 = (e: any) => {
    setAns2(e.target.value);
    setDataChanged(true);
  };

  const handleAnswer3 = (e: any) => {
    setAns3(e.target.value);
    setDataChanged(true);
  };

  const handleAnswer4 = (e: any) => {
    setAns4(e.target.value);
    setDataChanged(true);
  };
  const handleAnswerExplanation = (e: any) => {
    setDataChanged(true);
    setAnserExplanation(e.target.value);
  };
  const handleLevel = (value: any) => {
    console.log(value);
    setDataChanged(true);
    setSelectedLevel(value);
  };

  const handleSelectedSubject = (value: any) => {
    setDataChanged(true);
    setSelectedSubject(value);
  };

  const handleSelectedChapter = (value: any) => {
    setDataChanged(true);
    setSelectedChapter(value);
  };
  useEffect(() => {
    let obj = {};
    obj = {
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
    console.log(obj);
    setUpdatedQuestion(obj);
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
  console.log(`${updatedQuestion}`);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsPosting(true);
    if (que === "") return toast.error("Question  is required");
    else if (ans1 === "") return toast.error("Answer 1 is required");
    else if (ans2 === "") return toast.error("Answer 2 is required");
    else if (ans3 === "") return toast.error("Answer 3 is required");
    else if (ans4 === "") return toast.error("Answer 4 is required");
    else if (checked === false)
      return toast.error("Please select correct answer");
    else if (selectedLevel === "") return toast.error("level is required");
    else if (selectedSubject === "") return toast.error("Subject is required");
    else if (selectedChapter === "") return toast.error("Chapter is required");
    else if (answerExplanation === "")
      return toast.error("Answer Explanation is Required");
    else {
      // console.log(updatedQuestion)
      try {
        // post question to db
        axios
          .put(`http://localhost:4000/api/update-question/${id}`, {
            updatedQuestion,
            token,
          })
          .then((response) => {
            toast.success("Question updated...!");
            setIsPosting(false);
          })
          .catch((error) => {
            toast.error(error.message);
            setIsPosting(false);
          });
      } catch (error) {
        toast.error("Something went wrong from client...!");
      }
    }
  };

  // fetch subjects
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("http://localhost:4000/api/getallsubjects")
        .then((response) => {
          if (response.data.length > 0) {
            setsubjects(response.data);
          } else {
            setErrorSubjects("No subjects found...!");
          }
        })
        .catch((err) => {
          setError("Something wrong...!");
        });
    } catch (error) {
      setError("error");
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch chapters
  useEffect(() => {
    if (selectedSubject !== "") {
      setLoadingChapters(true);
      setChapters([]);
      try {
        axios
          .get(
            `http://localhost:4000/api/getallchaptersbysubject/${selectedSubject}`
          )
          .then((response) => {
            if (response.data.length > 0) setChapters(response.data);
            else {
              setChapterError("No chapters Found for this Subject...!");
            }
          })
          .catch((err) => {
            setChapterError("Something wrong...!");
          });
      } catch (error) {
        setChapterError("error");
      } finally {
        setLoadingChapters(false);
      }
    }
  }, [selectedSubject]);

  return (
    <div className="w-full flex flex-col items-center">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader size={25} text={"Loading..."} />
        </div>
      ) : error === "" ? (
        question.map((data) => {
          return (
            <form
              key={data.question}
              className="px-[50px] w-[70%] mt-[5px] py-10 flex flex-col text-gray-700 h-[fit-content] rounded-md bg-white border border-gray-300"
              onSubmit={handleSubmit}
            >
              <h1 className="text-3xl font-semibold mb-3">Update Question</h1>
              <div className="flex flex-col gap-2">
                <textarea
                  className="px-2 w-full py-2 border border-gray-300  rounded-md focus:outline-indigo-100"
                  placeholder="Question"
                  defaultValue={data.question && data.question}
                  onChange={handleQuestion}
                />
                <div className="flex gap-2">
                  <div className="flex justify-between gap-2 border border-gray-300  rounded-md items-center overflow-hidden">
                    <input
                      type="text"
                      className="px-2 w-[325px] py-2 border-r-1 border-l-0 border-t-0 border-b-0 border  focus:outline-none"
                      placeholder="Answer 1"
                      defaultValue={data.answer[0].ans}
                      onChange={handleAnswer1}
                    />

                    <Switch
                      {...label}
                      id="1"
                      checked={checkedId === "1" && checked}
                      onChange={handleClickCheckbox}
                      disabled={checkedId === "1" ? false : checked}
                    />
                  </div>

                  <div className="flex justify-between gap-2 border rounded-md border-gray-300 items-center overflow-hidden">
                    <input
                      type="text"
                      className="px-2 w-[325px] py-2 border-r-1 border-l-0 border-t-0 border-b-0 border  focus:outline-none"
                      placeholder="Answer 2"
                      defaultValue={data.answer[1].ans}
                      onChange={handleAnswer2}
                    />

                    <Switch
                      {...label}
                      id="2"
                      checked={checkedId === "2" && checked}
                      onChange={handleClickCheckbox}
                      disabled={checkedId === "2" ? false : checked}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-between gap-2 rounded-md border border-gray-300 items-center overflow-hidden">
                    <input
                      type="text"
                      className="px-2 w-[325px] py-2 border-r-1 border-l-0 border-t-0 border-b-0 border  focus:outline-none"
                      placeholder="Answer 3"
                      defaultValue={data.answer[2].ans}
                      onChange={handleAnswer3}
                    />

                    <Switch
                      {...label}
                      id="3"
                      checked={checkedId === "3" && checked}
                      onChange={handleClickCheckbox}
                      disabled={checkedId === "3" ? false : checked}
                    />
                  </div>
                  <div className="flex justify-between gap-2 items-center border border-gray-300 rounded-md overflow-hidden">
                    <input
                      type="text"
                      className="px-2 w-[325px] py-2 border-r-1 border-l-0 border-t-0 border-b-0 border focus:outline-none"
                      placeholder="Answer 4"
                      defaultValue={data.answer[3].ans}
                      onChange={handleAnswer4}
                    />

                    <Switch
                      {...label}
                      id="4"
                      checked={checkedId === "4" && checked}
                      onChange={handleClickCheckbox}
                      disabled={checkedId === "4" ? false : checked}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  {/* question level */}
                  <select
                    className="px-2 w-full py-3 border border-gray-300 cursor-pointer rounded-md focus:outline-indigo-100"
                    defaultValue={data.level}
                    onChange={(e: any) => handleLevel(e.target.value)}
                  >
                    <option className="bg-gray-200" value="">
                      Select Level
                    </option>
                    {level?.map((lvl: any, index: any) => {
                      return (
                        <option
                          key={`${lvl}-${index}`}
                          value={
                            lvl === "basic" ? "a" : lvl === "medium" ? "b" : "c"
                          }
                          className="bg-gray-200 capitalize"
                        >
                          {lvl}
                        </option>
                      );
                    })}
                  </select>
                  {/* subjects */}
                  <select
                    className="px-2 w-full py-3 border border-gray-300 cursor-pointer rounded-md focus:outline-indigo-100 capitalize"
                    defaultValue={data.subject}
                    onChange={(e: any) => handleSelectedSubject(e.target.value)}
                  >
                    <option className="bg-gray-200">Select Subjects</option>
                    {subjects?.map((sub: any, index: any) => {
                      return (
                        <option
                          key={`${sub.name}-${index}`}
                          value={sub.name}
                          className="bg-gray-200"
                        >
                          {sub.name}
                        </option>
                      );
                    })}
                  </select>
                  {/* chapters  */}
                  <select
                    className="px-2 w-full py-3 border border-gray-300 cursor-pointer rounded-md focus:outline-indigo-100 capitalize"
                    defaultValue={data.chapter}
                    onChange={(e: any) => handleSelectedChapter(e.target.value)}
                  >
                    <option>Select Chapters</option>
                    {chapters?.map((chp: any, index: any) => {
                      return (
                        <option
                          key={`${chp.name}-${index}`}
                          selected={chp.name === selectedChapter}
                          value={chp.name}
                          className="bg-gray-200"
                        >
                          {chp.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <textarea
                  defaultValue={data.explanation[0].explanation.toString()}
                  className="px-2 w-full py-3 border border-gray-300 rounded-md focus:outline-indigo-100"
                  onChange={handleAnswerExplanation}
                  placeholder="Answer explanation"
                ></textarea>
                <div className="flex justify-center w-full">
                  <button
                    className="w-[fit-content] py-2 px-3 bg-indigo-800 text-white rounded-md focus:outline-indigo-100 hover:bg-indigo-900 disabled:bg-indigo-100"
                    disabled={dataChanged ? false : true}
                  >
                    {isPosting ? "Updating Question..." : "Update Question"}
                  </button>
                </div>
              </div>
            </form>
          );
        })
      ) : (
        <div className="flex justify-center items-center">
          <ErrorMessage isButton={true} isBg={false} text={error} />
        </div>
      )}
    </div>
  );
};

export default UpdateQuestionForMcq;
