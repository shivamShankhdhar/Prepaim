import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddBranch = () => {
  const cookies = document.cookie;
  const token = cookies.split(";")[1].split("=")[1];

  const [loading, setLoading] = useState(false);
  const [branch, setBranch] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (branch === "") {
      setLoading(false);
      return toast.error("Branch name is required");
    }
    try {
      await axios
        .post("http://localhost:100001/admin/mcq/postbranch", {
          name: branch,
          token,
        })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          return toast.success("Branch added...!");
        })
        .catch((err) => {
          setLoading(false);
          return toast.error(err.response.data.error);
        });
    } catch (error) {
      setLoading(false);
      setError("Something wrong...!");
      return;
    }
  };

  return (
    <div className="w-full flex justify-center py-[50px]">
      <form
        className="p-5 w-[420px] flex flex-col justify-center gap-2 h-[fit-content] rounded-md bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl">Add Branch</h1>
        <input
          type="text"
          className="px-2 w-full py-2 border  rounded-md focus:outline-purple-100"
          placeholder="Enter Branch Name"
          onChange={(e: any) => setBranch(e.target.value)}
        />
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="py-1 px-3 justify-center items-center flex gap-2 w-[fit-content] bg-purple-700 hover:bg-purple-800 text-white rounded-sm"
          >
            {loading && <SimpleLoader size={15} clr={"white"} />} Add Branch
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBranch;
