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
      className={`min-w-[fit-content] flex-1 rounded-md px-2 flex gap-2 py-0 justify-center cursor-pointer items-center border  ${
        linkCopied
          ? "text-purple-800 bg-purple-100 border-purple-800 hover:bg-purple-200"
          : "bg-purple-100 text-purple-800  border-purple-300 hover:bg-purple-200"
      }`}
      title={`Share with your friends on ${link}`}
      onClick={() => handleShare()}
    >
      {linkCopied ? (
        <LuCopyCheck size={20} className="text-purple-800" />
      ) : (
        <IoShareSocialOutline size={20} />
      )}
      {linkCopied ? "Link Copied" : "Share"}
    </div>
  );
};

export default ShareBtn;