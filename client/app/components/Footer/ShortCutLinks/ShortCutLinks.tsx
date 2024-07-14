import React, { useEffect, useState } from "react";
import ShortcutLinksForMcq from "./ShortcutLinksForMcq";
import ShortcutLinksForCoding from "./ShortcutLinksForCoding";
import axios from "axios";

const ShortCutLinks = () => {
  const [allSubjects, setAllSubjects] = useState([{ name: "" }]);

  useEffect(() => {
    try {
      axios
        .get("/admin/getallsubjects")
        .then((response) => {
          setAllSubjects(response.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {}
  }, []);
  return (
    <div className="flex-1 flex-row flex justify-center  gap-2 p-2 flex-wrap">
      <ShortcutLinksForMcq allSubjects={allSubjects} />
      <ShortcutLinksForCoding allSubjects={allSubjects} />
    </div>
  );
};

export default ShortCutLinks;
