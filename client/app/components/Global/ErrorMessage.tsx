import React from "react";
import { SlReload } from "react-icons/sl";
import { MdOutlineErrorOutline } from "react-icons/md";
import Router from "next/router";
interface Props {
  text: String;
  isButton: any;
  isBg: any;
}
const ErrorMessage = ({ text, isButton, isBg }: Props) => {
  return (
    <div className="w-full flex gap-3 text-red-500 text-center items-center flex-col justify-center mt-2">
      <div
        className={`${
          isBg && "bg-red-50 w-full ring-2 ring-red-500 px-5 py-2 rounded-md"
        }`}
      >
        <div className="flex justify-center items-center">
          <MdOutlineErrorOutline size={30} />
        </div>
        <div>{text}</div>
      </div>
      {isButton && (
        <div className="w-[fit-content]">
          <div
            className="bg-purple-800 flex px-3 justify-center cursor-pointer items-center rounded-md text-white hover:bg-purple-700 py-1"
            onClick={() => Router.reload()}
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
