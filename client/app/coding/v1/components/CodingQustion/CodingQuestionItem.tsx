import React from "react";

const CodingQuestionItem = ({ questionObjectFromServer, error }: any) => {
  console.log(questionObjectFromServer);
  return (
    <div className="text-2xl font-semibold ">
      {error === "" && `Q. ${questionObjectFromServer}`}
    </div>
  );
};

export default CodingQuestionItem;
