import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import SelectDropdown from "@/app/components/Global/SelectDropdown";
import useFetch from "@/app/hooks/fetch.hook";
import { useCookies } from "next-client-cookies";
import SimpleLoader from "@/app/components/Global/SimpleLoader";

const AddChapter = () => {
  const cookies = useCookies();
  const token = cookies.get("token");

  const [subjects, setsubjects] = useState(
    [{ name: "", image: "", type: "", branch: "" }].filter(
      (item) => item.name !== ""
    )
  );
  const [selectedSubject, setSelectedSubject] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [chapter, setChapter] = useState("");
  const [chapterObj, setChapterObj] = useState({ name: "", subject: "" });
  const [allSubjectOptions, setAllSubjectOptions] = useState([
    { value: "", label: "" },
  ]);

  const [isPostingChapter, setIsPostingChapter] = useState(false);

  // fetch api data
  // set options for select
  useEffect(() => {
    subjects.map((item) => {
      if (allSubjectOptions.find((i) => i.value === item.name)) {
      } else {
        setAllSubjectOptions((prev) => [
          ...prev,
          { value: item.name.toString(), label: item.name.toString() },
        ]);
      }
    });
  }, [subjects]);
  // fetch subjects from api and set options
  const { data } = useFetch("/admin/getallsubjects");

  useEffect(() => {
    if (data.apiData !== undefined) {
      setsubjects(data.apiData);
      setLoading(data.isLoading);
    }
  }, [data.apiData, data.isLoading, data.serverError]);

  // set options for select
  useEffect(() => {
    subjects.map((item) => {
      if (allSubjectOptions.find((i) => i.value !== item.name)) {
        setAllSubjectOptions((prev) => [
          ...prev,
          { value: item.name, label: item.name },
        ]);
      }
    });
  }, []);

  // set chapterObj
  useEffect(() => {
    if (selectedSubject !== "" && chapter !== "") {
      setChapterObj({
        name: chapter,
        subject: selectedSubject,
      });
    }
  }, [selectedSubject, chapter]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedSubject === "") {
      setLoading(false);
      return toast.error("Subject is required");
    } else if (chapter === "") {
      setLoading(false);
      return toast.error("Chapter is required");
    }

    if (selectedSubject !== "" && chapter !== "") {
      try {
        setIsPostingChapter(true);
        axios
          .post("http://localhost:10001/admin/mcq/postchapter", {
            chapterObj,
            token,
          })
          .then((response) => {
            setIsPostingChapter(false);
            return toast.success("Chapter added successfully...!");
          })
          .catch((err) => {
            setIsPostingChapter(false);
            return toast.error(err.response.data.error);
          });
      } catch (error: any) {
        setIsPostingChapter(false);
        return toast.error(error.message);
      }
    }
  };

  return (
    <div className="w-full flex justify-center py-[50px]">
      <form
        className="p-5 w-[520px] flex flex-col gap-2 h-[fit-content] justify-center rounded-md bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl">Add Chapter</h1>
        <SelectDropdown
          options={allSubjectOptions.filter((item) => item.value !== "")}
          text="Select Subject"
          setProperty={setSelectedSubject}
          loading={loading}
        />
        <input
          type="text"
          className="px-2 w-full py-2 border  rounded-md focus:outline-purple-100"
          placeholder="Enter Chapter"
          onChange={(e: any) => setChapter(e.target.value)}
        />
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="w-[fit-content] px-3 flex justify-center items-center gap-2 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded-sm"
          >
            {isPostingChapter === true && (
              <SimpleLoader size={15} clr={"white"} />
            )}
            Add Chapter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddChapter;
