import React from "react";
import { LuCopyright } from "react-icons/lu";
import Link from "next/link";

const CopyrightInfo = () => {
  return (
    <div className="flex justify-center items-center gap-1 text-sm ">
      <LuCopyright />
      copyright 2024 || Powered by{" "}
      <Link href="/" className="underline">
        www.prepaim.com.
      </Link>
    </div>
  );
};

export default CopyrightInfo;
