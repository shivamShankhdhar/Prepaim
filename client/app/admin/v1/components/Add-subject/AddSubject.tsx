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

const AddSubject = () => {
  const cookies = document.cookie;
  const token = cookies.split(";")[1].split("=")[1];
  const [subjectName, setSubjectName] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const [isSubjectAvailableAsyncCheck, setIsSubjectAvailableAsyncCheck] =
    useState(false);

  const [branchesFromServer, setBranchsFromServer] = useState(
    [{ name: "" }].filter((item) => item.name !== "")
  );

  const [loadingBranchesFromServer, setLoadingBranchesFromServer] =
    useState(true);

  const [errorFetchingBranchesFromServer, setErrorFetchingBranchesFromServer] =
    useState("");

  const [selectedBranch, setSelectedBranch] = useState("");

  const [selectedSubjectType, setSelectedType] = useState("");

  const [subjectObj, setSubjectObj] = useState({
    name: "",
    type: "",
    branch: "",
    image: "",
  });

  const [imageURL, setImageURL] = useState("");

  const [branchesOption, setBranchesOptions] = useState([
    { value: "", label: "" },
  ]);

  const [subjectTypeOptions, setSubjectTypeOptions] = useState([
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
    branchesFromServer.map((item) => {
      if (branchesOption.find((i) => i.value === item.name)) {
      } else {
        setBranchesOptions((prev) => [
          ...prev,
          { value: item.name, label: item.name },
        ]);
      }
    });
  }, [branchesFromServer]);

  useEffect(() => {
    setSubjectObj({
      name: subjectName,
      branch: selectedBranch,
      type: selectedSubjectType,
      image: imageURL,
    });
  }, [selectedBranch, subjectName, selectedSubjectType, imageURL]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (subjectName === "") return toast.error("Subject name required...!");
      if (selectedBranch === "") return toast.error("Branch name required...!");
      if (selectedSubjectType === "")
        return toast.error("Subject type required...!");
      if (imageURL === "") return toast.error("Subject image required...!");
      setIsPosting(true);
      await axios
        .post("https://api.data.prepaim.com/admin/postsubject", {
          subjectObj,
          token,
        })
        .then((response) => {
          setIsPosting(false);
          return toast.success(response.data.msg);
        })
        .catch((err) => {
          setIsPosting(false);
          setError(err.response.data.error);
          console.log(err.response);
        });
    } catch (error) {
      setIsPosting(false);
      setError("Something went wrong...!");
      return toast.error("Something went wrong...!");
    }
  };
  useEffect(() => {
    try {
      axios
        .get(
          `https://api.data.prepaim.com/admin/checkSubjectAvailability/${subjectName}`
        )
        .then((response) => {
          setIsSubjectAvailableAsyncCheck(response.data.isSubjectAvailable);
        })
        .catch((error) => {
          setIsSubjectAvailableAsyncCheck(false);
        });
    } catch (error) {}
  }, [subjectName]);

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
            {subjectName !== "" ? (
              isSubjectAvailableAsyncCheck ? (
                <span className="text-red-500" title="it's available.">
                  <IoCloseOutline size={15} />
                </span>
              ) : (
                <span
                  className="text-purple-500"
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
          options={branchesOption.filter((item) => item.value !== "")}
          text={"Select Branch"}
          setProperty={setSelectedBranch}
          loading={loadingBranchesFromServer}
        />

        <SelectDropdown
          options={subjectTypeOptions}
          text={"Select Type"}
          setProperty={setSelectedType}
        />

        <FileInput setImageURLFromServer={setImageURL} />
        <button
          type="submit"
          className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md"
        >
          {isPosting ? "Posting..." : "Add Subject"}
          {isPosting && <SimpleLoader size={15} clr={"white"} />}
        </button>
      </form>
    </div>
  );
};

export default AddSubject;
