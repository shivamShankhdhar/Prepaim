// import { headers } from "next/headers";
import { cn } from "@/lib/utils";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";;
import { IoShareSocialOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[4],
    fontSize: 13,
  },
}));

interface Props {
  cls?: any;
}

const ShareBtn = ({ cls }: Props) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const pathname = usePathname();

  const link = `https://www.prepaim.com${pathname}`;

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
    <LightTooltip title={`Share with your friends on ${link}`}>
      <Button
        className={`min-w-[fit-content] rounded-md px-2 flex gap-2 py-1 justify-center cursor-pointer items-center border  ${
          linkCopied
            ? "text-green-800 bg-green-100 border-green-800 hover:bg-green-200 focus:ring-2 focus:outline-none focus:ring-green-300"
            : `${cn(
                " text-purple-800  border-purple-300 hover:bg-purple-200",
                cls
              )}`
        }`}
        onClick={() => handleShare()}
      >
        {linkCopied ? (
          <LuCopyCheck size={20} className="text-green-800" />
        ) : (
          <IoShareSocialOutline size={20} />
        )}
        {linkCopied ? "Link Copied" : "Share"}
      </Button>
    </LightTooltip>
  );
};

export default ShareBtn;
