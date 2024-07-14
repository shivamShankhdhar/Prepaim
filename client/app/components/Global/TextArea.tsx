import React from "react";
import SimpleLoader from "./SimpleLoader";

const TextArea = ({
  setProperty,
  text,
  rows,
  defaultValue,
  loading,
  loadingText,
  cls,
}: any) => {
  return (
    <textarea
      onChange={(e) => setProperty(e.target.value)}
      rows={rows}
      className={`w-full h-[fit-content] outline-none p-2 rounded-md ${
        cls && `${cls}`
      } border`}
      placeholder={`${loading === true ? `${loadingText}` : `${text}`}`}
      defaultValue={defaultValue}
    ></textarea>
  );
};

export default TextArea;
