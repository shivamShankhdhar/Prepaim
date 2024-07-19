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
    <Button
      className={`min-w-[fit-content]   rounded-sm px-2 flex gap-2 py-1 justify-center cursor-pointer items-center border  ${
        linkCopied
          ? "text-green-800 bg-green-100 border-green-800 hover:bg-green-200 focus:ring-2 focus:outline-none focus:ring-green-300"
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
    </Button>
  );
};

export default ShareBtn;
