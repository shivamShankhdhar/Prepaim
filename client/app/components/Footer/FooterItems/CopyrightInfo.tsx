import React from "react";
import { LuCopyright } from "react-icons/lu";
import Link from "next/link";

const CopyrightInfo = () => {
  return (
    <div className="flex justify-center items-center gap-1 text-sm flex-row">
      <div className="w-full flex justify-center items-center">
        <LuCopyright />
        &nbsp; copyright 2024 || Powered by &nbsp;
        <Link href="/" className="underline">
          www.prepaim.com.
        </Link>
      </div>
    </div>
  );
};

export default CopyrightInfo;
