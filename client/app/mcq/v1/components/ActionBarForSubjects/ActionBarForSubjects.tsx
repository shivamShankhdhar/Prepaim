import SelectDropdown from "@/app/components/Global/SelectDropdown";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ActionBarForSubjects = ({ setBranch, Branch }: any) => {
  const [branchesFromServer, setBranchesFromServer] = useState([{ name: "" }]);
  const [loadingBranches, setLoadingBranches] = useState(true);
  const [branchesOptions, setBranchesOptions] = useState([
    { value: "", label: "" },
  ]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://www.api.data.prepaim.com/admin/mcq/getallbranches")
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

  return (
    <div className="bg-white w-full flex justify-end gap-1 py-1 flex-wrap rounded-md px-5 items-center">
      <div className="flex justify-center items-center sans-serif">
        Filter By :
      </div>
      <div className="w-[fit-content]]">
        <SelectDropdown
          options={branchesOptions.filter((item) => item.value !== "")}
          setProperty={setBranch}
          text={"Select Branch"}
          loading={loadingBranches}
          defaultValue={Branch}
        />
      </div>
    </div>
  );
};

export default ActionBarForSubjects;
