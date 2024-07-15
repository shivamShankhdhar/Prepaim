import useFetch from "@/app/hooks/fetch.hook";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Chapters = () => {
  const [chapters, setChapters] = useState(
    [{ name: "", subject: "" }].filter((data) => data.name !== "")
  );
  const [loadingChapters, setLoadingChapters] = useState(true);
  const [chaptersError, setChaptersError] = useState("");
  const { data } = useFetch("");
  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/getallchapters")
        .then((response) => {
          setChapters(response.data);
          setLoadingChapters(false);
          console.log(response);
        })
        .catch((e) => {
          setChaptersError("error");
          setLoadingChapters(false);
        });
    } catch (error) {
      console.log(error);
      setLoadingChapters(false);
    }
  }, []);
  return (
    <div className="border flex justify-between w-[400px] h-[150px] rounded-lg p-3 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-2xl font-semibold">
      <h1>Total Chapters</h1>
      <p className="underline">
        {loadingChapters ? (
          <CircularProgress size={15} sx={{ color: "white" }} />
        ) : chaptersError === "" ? (
          `${chapters.length}`
        ) : (
          "error"
        )}
      </p>
    </div>
  );
};

export default Chapters;
