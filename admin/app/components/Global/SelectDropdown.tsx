import React, { useState } from "react";

import Select from "react-select";

const SelectDropdown = ({
  options,
  text,
  setProperty,
  loading,
  defaultValue,
}: any) => {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      options={options}
      placeholder={text}
      isLoading={loading}
      onChange={(e: any) => setProperty(e.value)}
    />
  );
};
export default SelectDropdown;
