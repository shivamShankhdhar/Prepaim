import React, { useEffect, useState } from "react";
import axios from "axios";
import ShortcutLinksForMcq from "./Mcq/ShortcutLinksForMcq";
import ShortcutLinksForCoding from "./Coding/ShortcutLinksForCoding";
import toast from "react-hot-toast";;

const ShortCutLinks = () => {
  const [allSubjects, setAllSubjects] = useState([{ name: "" }]);

  useEffect(() => {
    try {
      axios
        .get("/mcq/getallsubjects")
        .then((response) => {
          setAllSubjects(response.data);
        })
        .catch((error) => {
          if (error.response !== undefined)
            return toast.error(error.response.data.error);
        });
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="flex-1 sm:flex-col max-sm:flex-col md:flex-col max-md:flex-col lg:flex-row xl:flex-row 2xl:flex-row flex justify-center  gap-2 p-2 flex-wrap">
      <ShortcutLinksForMcq allSubjects={allSubjects} />
      {/* <ShortcutLinksForCoding allSubjects={allSubjects} /> */}
    </div>
  );
};

export default ShortCutLinks;
