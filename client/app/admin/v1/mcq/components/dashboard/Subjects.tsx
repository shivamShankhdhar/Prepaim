import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Subjects = () => {
  const [subjects, setSubjects] = useState(
    [{ name: "", image: "" }].filter((data) => data.name !== "")
  );
  const [loadingSubjects, setLoadingSubjects] = useState(true);
  const [subjectsError, setSubjectsError] = useState("");

  useEffect(() => {
    try {
      axios
        .get("https://api.data.prepaim.com/admin/mcq/getallsubjects")
        .then((response) => {
          setSubjects(response.data);
          setLoadingSubjects(false);
        })
        .catch((e) => {
          setSubjectsError("error");
          setLoadingSubjects(false);
        });
    } catch (error) {
      setLoadingSubjects(false);
      console.log(error);
    } finally {
    }
  }, []);

  return (
    <div className="border flex justify-between w-[400px] items-center h-[50px] rounded-md p-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-2xl font-semibold">
      <h1>Total Subjects</h1>
      <p className="bg-white text-orange-700 rounded-full px-2">
        {loadingSubjects ? (
          <CircularProgress size={15} sx={{ color: "dark-orange" }} />
        ) : subjectsError === "" ? (
          `${subjects.length}`
        ) : (
          "error"
        )}
      </p>
    </div>
  );
};

export default Subjects;
