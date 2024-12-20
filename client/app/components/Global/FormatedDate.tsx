import React from "react";

import { format } from "date-fns";
const FormatedDate = ({ date, cls, isTime }: any) => {
  return (
    <div className={`${cls || "text-[11px]"}`}>
      {date && format(new Date(date), "MMM dd, yyyy")}
    </div>
  );
};

export default FormatedDate;
