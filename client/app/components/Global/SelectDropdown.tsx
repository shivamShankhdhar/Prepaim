import React, { useState } from "react";

import Select from "react-select";

interface Props {
  options?: any;
  text?: any;
  setProperty?: any;
  loading?: any;
  defaultValue?: any;
  isSearchable?: any;
  isClearable?: any;
}
const SelectDropdown = ({
  options,
  text,
  setProperty,
  loading,
  defaultValue,
  isSearchable,
  isClearable,
}: Props) => {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      options={options}
      placeholder={text}
      isLoading={loading}
      onChange={(e: any) => setProperty(e.value)}
      defaultValue={defaultValue}
    />
  );
};
export default SelectDropdown;
