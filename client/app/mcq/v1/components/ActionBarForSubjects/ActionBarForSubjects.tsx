import SelectDropdown from "@/app/components/Global/SelectDropdown";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const ActionBarForSubjects = ({
  subjects,
  selectedBySearch,
  setSubjectBySearch,
}: any) => {
  const [subjectsOptions, setSubjectOptions] = useState([
    { value: "", label: "" },
  ]);

  const [loadingSubjectOptions, setLoadingSubjectOptions] = useState(true);

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
  }, [subjects]);

  // useEffect(() => {
  //   setSubjectOptions([{ value: "", label: "" }]);
  // }, [Branch]);

  return (
    <div className="bg-white w-full flex sm:justify-start max-sm:justify-start md:justify-start max-md:justify-start lg:justify-between xl:justify-between 2xl:justify-between gap-1 py-1 flex-wrap rounded-md px-5 items-center  sm:flex-col max-sm:flex-col md:flex-col max-md:flex col lg:flex-row xl:flex-row 2xl:flex-row">
      <>
        <div className="sm:w-full max-sm:w-full  md:w-full max-md:w-full lg:w-[300px] xl:w-[300px] 2xl:w-[300px] flex gap-1 justify-start items-center flex-wrap">
          {/* <div className="sans-serif w-[fit-content]">Search Subject :</div> */}
          <Button
            sx={{ textTransform: "none" }}
            className="px-2 focus:ring-2 focus:ring-purple-800 hover:bg-purple-900 hover:text-white  focus:outline-none bg-purple-200 text-purple-800  cursor-pointer py-1 rounded-sm"
            onClick={() => setSubjectBySearch("")}
          >
            RESET
          </Button>
          <div className="flex-1 w-full ">
            <SelectDropdown
              options={subjectsOptions.filter((item) => item.value !== "")}
              setProperty={setSubjectBySearch}
              text={selectedBySearch || "Search Subject"}
              loading={loadingSubjectOptions}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default ActionBarForSubjects;
