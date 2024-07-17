import React from "react";
import { Button } from "@mui/material";
import { SlReload } from "react-icons/sl";
import { VscError } from "react-icons/vsc";
interface Props {
  text: String;
  isButton: any;
  isBg: any;
}
const ErrorMessage = ({ text, isButton, isBg }: Props) => {
  return (
    <div className="w-full flex gap-3 text-rose-800 text-center items-center flex-col justify-center mt-5">
      <div
        className={`${
          isBg &&
          "bg-rose-100 w-full border-2 border-rose-800 px-5 py-2 rounded-md"
        }`}
      >
        <div className="flex justify-center items-center">
          <VscError size={30} />
        </div>
        <div>{text}</div>
      </div>
      {isButton && (
        <div className="w-[fit-content]">
          <div
            className="bg-purple-800 flex px-3 justify-center cursor-pointer items-center rounded-md text-white hover:bg-purple-700 py-1"
            onClick={() => window.location.reload()}
          >
            <SlReload size={18} />
            &nbsp; Reload
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
