import React from "react";

import { format } from "date-fns";
const FormatedDate = ({ date, cls }: any) => {
  return (
    <div className={`${cls || "text-[11px]"}`}>
      {format(new Date(date), "eee, MMM dd, yyyy / hh:mm a")}
    </div>
  );
};

export default FormatedDate;