"use client";
import SelectDropdown from "@/app/components/Global/SelectDropdown";
import SimpleLoader from "@/app/components/Global/SimpleLoader";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { SiTicktick } from "react-icons/si";
import { IoCloseOutline } from "react-icons/io5";
import { BsCloudUpload } from "react-icons/bs";
import FileInput from "@/app/components/FileInput/FileInput";
import useFetch from "@/app/hooks/fetch.hook";

const page = () => {
  const cookies = document.cookie;
  const token = cookies.split(";")[1].split("=")[1];
  const [SubjectName, setSubjectName] = useState("");
  const [IsPosting, SetIsPosting] = useState(false);
  const [Error, setError] = useState("");

  const [IsSubjectAvailableAsyncCheck, SetIsSubjectAvailableAsyncCheck] =
    useState(false);

  const [BranchesFromServer, setBranchsFromServer] = useState(
    [{ name: "" }].filter((item) => item.name !== "")
  );

  const [LoadingBranchesFromServer, setLoadingBranchesFromServer] =
    useState(true);

  const [ErrorFetchingBranchesFromServer, setErrorFetchingBranchesFromServer] =
    useState("");

  const [SelectedBranch, setSelectedBranch] = useState("");

  const [SelectedSubjectType, setSelectedType] = useState("");

  const [SubjectObj, setSubjectObj] = useState({
    name: "",
    type: "",
    branch: "",
    image: "",
  });

  const [ImageURL, setImageURL] = useState("");

  const [BranchesOption, setBranchesOptions] = useState([
    { value: "", label: "" },
  ]);

  const [SubjectTypeOptions, setSubjectTypeOptions] = useState([
    { value: "language", label: "Language" },
    { value: "framework", label: "Framework" },
    { value: "theory", label: "theory" },
  ]);
  // fetch data from api
  const { data, setData } = useFetch("admin/mcq/getallbranches");

  useEffect(() => {
    if (data.apiData !== undefined) {
      setBranchsFromServer(data.apiData);
      setLoadingBranchesFromServer(data.isLoading);
    }
  }, [data.apiData, data.isLoading, data.serverError]);

  useEffect(() => {
    BranchesFromServer.map((item) => {
      if (BranchesOption.find((i) => i.value === item.name)) {
      } else {
        setBranchesOptions((prev) => [
          ...prev,
          { value: item.name, label: item.name },
        ]);
      }
    });
  }, [BranchesFromServer]);

  useEffect(() => {
    setSubjectObj({
      name: SubjectName,
      branch: SelectedBranch,
      type: SelectedSubjectType,
      image: ImageURL,
    });
  }, [SelectedBranch, SubjectName, SelectedSubjectType, ImageURL]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (SubjectName === "") return toast.error("Subject name required...!");
      if (SelectedBranch === "") return toast.error("Branch name required...!");
      if (SelectedSubjectType === "")
        return toast.error("Subject type required...!");
      if (ImageURL === "") return toast.error("Subject image required...!");
      SetIsPosting(true);
      await axios
        .post("http://localhost:4000/admin/postsubject", {
          SubjectObj,
          token,
        })
        .then((response) => {
          SetIsPosting(false);
          return toast.success(response.data.msg);
        })
        .catch((err) => {
          SetIsPosting(false);
          setError(err.response.data.Error);
          console.log(err.response);
        });
    } catch (Error) {
      SetIsPosting(false);
      setError("Something went wrong...!");
      return toast.error("Something went wrong...!");
    }
  };
  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:4000/admin/checkSubjectAvailability/${SubjectName}`
        )
        .then((response) => {
          SetIsSubjectAvailableAsyncCheck(response.data.isSubjectAvailable);
        })
        .catch((Error) => {
          SetIsSubjectAvailableAsyncCheck(false);
        });
    } catch (Error) {}
  }, [SubjectName]);

  return (
    <div className="w-full flex justify-center py-[50px] h-[92vh]">
      <form
        className="p-5 w-[520px] flex flex-col gap-2 h-[fit-content] rounded-md bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl">Add Subject</h1>
        <div className="w-full flex flex-row justify-center items-center border border-gray-300 py-[5px] rounded-[5px]">
          <input
            type="text"
            className=" flex-1 outline-none w-full px-3 py-0 "
            placeholder="Enter Subject name"
            onChange={(e) => setSubjectName(e.target.value)}
          />

          <div className="flex justify-center items-center w-10">
            {SubjectName !== "" ? (
              IsSubjectAvailableAsyncCheck ? (
                <span className="text-red-500" title="it's available.">
                  <IoCloseOutline size={15} />
                </span>
              ) : (
                <span
                  className="text-green-500"
                  title="it's not available yet."
                >
                  <SiTicktick size={15} />
                </span>
              )
            ) : (
              <div className="w-6 flex justify-center items-center">
                <SimpleLoader size={15} />
              </div>
            )}
          </div>
        </div>

        <SelectDropdown
          options={BranchesOption.filter((item) => item.value !== "")}
          text={"Select Branch"}
          setProperty={setSelectedBranch}
          loading={LoadingBranchesFromServer}
        />

        <SelectDropdown
          options={SubjectTypeOptions}
          text={"Select Type"}
          setProperty={setSelectedType}
        />

        <FileInput setImageURLFromServer={setImageURL} />
        <button
          type="submit"
          className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
        >
          {IsPosting ? "Posting..." : "Add Subject"}
          {IsPosting && <SimpleLoader size={15} clr={"white"} />}
        </button>
      </form>
    </div>
  );
};

export default page;
