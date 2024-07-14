import React from "react";

const SelectProgrammingLanguage = ({ setLanguage, SelectLanguageNo }: any) => {
  const languages = ["Java", "CPP", "Python", "C"];
  return (
    <select
      onChange={(e) => setLanguage(e.target.value)}
      className="py-2 px-2 w-full rounded-md border outline-none cursor-pointer"
      name=""
      id=""
    >
      <option>{`Select ${SelectLanguageNo} Programming Langugae`}</option>
      {languages.map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </select>
  );
};

export default SelectProgrammingLanguage;
