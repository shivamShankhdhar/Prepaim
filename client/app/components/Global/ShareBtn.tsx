import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";

const ShareBtn = () => {
  const [linkCopied, setLinkCopied] = useState(false);
  const hostName = window.location.host;
  const pathname = usePathname();

  const link = `https://www.${hostName}${pathname}`;

  const handleShare = () => {
    navigator.clipboard;
    navigator.clipboard.writeText(link);
    setLinkCopied(true);
    toast.success("Link copied to clipboard, you can share it with others");
    setTimeout(() => {
      setLinkCopied(false);
    }, 3000);
  };

  return (
    <div
      className={`rounded-md px-2 flex gap-2 py-0 justify-center cursor-pointer items-center border  ${
        linkCopied
          ? "text-indigo-800 bg-indigo-100 border-indigo-800 hover:bg-indigo-200"
          : "bg-indigo-100 text-indigo-800  border-indigo-300 hover:bg-indigo-200"
      }`}
      title={`Share with your friends on ${link}`}
      onClick={() => handleShare()}
    >
      {linkCopied ? (
        <LuCopyCheck size={20} className="text-indigo-800" />
      ) : (
        <IoShareSocialOutline size={20} />
      )}
      {linkCopied ? "Link Copied" : "Share"}
    </div>
  );
};

export default ShareBtn;
