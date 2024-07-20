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
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary25: "#f0ccff",
          primary: "#8f00cc",
        },
      })}
      classNames={{
        control: (state) =>
          state.isFocused
            ? "border-2 border-purple-400 hover:border-purple-400 ring-0"
            : "border-2 border-gray-200 hover:border-gray-200 ring-0",
        // state.isClicked ? "border-2 border-purple-400" : "border-2 border-gray-200",
      }}
      closeMenuOnSelect={true}
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
