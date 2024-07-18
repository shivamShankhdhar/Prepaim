import SelectDropdown from "@/app/components/Global/SelectDropdown";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ActionBarForSubjects = ({
  setBranch,
  Branch,
  subjects,
  selectedSubjectBySearch,
  setSubjectBySearch,
}: any) => {
  const [branchesFromServer, setBranchesFromServer] = useState([{ name: "" }]);
  const [loadingBranches, setLoadingBranches] = useState(true);
  const [branchesOptions, setBranchesOptions] = useState([
    { value: "", label: "" },
  ]);
  const [error, setError] = useState("");

  const [subjectsOptions, setSubjectOptions] = useState([
    { value: "", label: "" },
  ]);

  const [loadingSubjectOptions, setLoadingSubjectOptions] = useState(true);

  useEffect(() => {
    setSubjectBySearch(selectedSubjectBySearch);
  }, [selectedSubjectBySearch]);

  useEffect(() => {
    axios
      .get("/admin/mcq/getallbranches")
      .then((response) => {
        setBranchesFromServer(response.data);
        setLoadingBranches(false);
      })
      .catch((error) => {
        setLoadingBranches(false);
      });
  }, []);

  useEffect(() => {
    branchesFromServer.map((item) => {
      if (branchesOptions.find((i) => i.value === item.name)) {
      } else {
        setBranchesOptions((prev) => [
          ...prev,
          { value: item.name, label: item.name },
        ]);
      }
    });
  }, [branchesFromServer]);

  useEffect(() => {
    setLoadingSubjectOptions(true);
    subjects.map((item: any) => {
      if (subjectsOptions.find((i) => i.value === item.name)) {
      } else {
        setSubjectOptions((prev) => [
          ...prev,
          { value: item.name, label: item.name },
        ]);
      }
    });
    setLoadingSubjectOptions(false);
  }, [subjects, Branch]);

  // useEffect(() => {
  //   setSubjectOptions([{ value: "", label: "" }]);
  // }, [Branch]);

  return (
    <div className="bg-white w-full flex sm:justify-start max-sm:justify-start md:justify-start max-md:justify-start lg:justify-between xl:justify-between 2xl:justify-between gap-1 py-1 flex-wrap rounded-md px-5 items-center">
      <>
        <div className="sm:flex-1 max-sm:flex-1  md:flex-1 max-md:flex-1 lg:w-[300px] xl:w-[300px] 2xl:w-[300px] flex gap-1 justify-start items-center flex-wrap">
          {/* <div className="sans-serif w-[fit-content]">Search Subject :</div> */}
          <div className="flex-1">
            <SelectDropdown
              options={subjectsOptions.filter((item) => item.value !== "")}
              setProperty={setSubjectBySearch}
              text={
                (selectedSubjectBySearch && selectedSubjectBySearch) ||
                "Search Subject"
              }
              loading={loadingSubjectOptions}
            />
          </div>
          <div
            className="px-2 bg-purple-800 text-white cursor-pointer py-1 rounded-sm"
            onClick={() => setSubjectBySearch("")}
          >
            Reset Search
          </div>
        </div>
        <div className="min-w-[fit-content] gap-1 flex sm:justify-start max-sm:justify-start md:justify-start max-md:justify-start lg:justify-end xl:justify-end 2xl:justify-end  items-center flex-1">
          <div className="flex justify-center items-center sans-serif">
            {/* Filter By Branch Category : */}Category
          </div>
          <div className="lg:w-[fit-content] xl:w-[fit-content] 2xl:w-[fit-content] sm:flex-1 max-sm:flex-1 md:flex-1 max-md:flex-1">
            <SelectDropdown
              options={branchesOptions.filter((item) => item.value !== "")}
              setProperty={setBranch}
              text={Branch || "Select Branch"}
              loading={loadingBranches}
              defaultValue={Branch}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default ActionBarForSubjects;
