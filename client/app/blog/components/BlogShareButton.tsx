import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
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

const BlogShareButton = ({ cls }: Props) => {
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
    <LightTooltip title={`Share this question`}>
      <Button
        // sx={{ border: 1 }}
        className={`w-[fit-content] rounded-full flex gap-2 py-3 px-2 justify-center cursor-pointer items-center border  ${
          linkCopied
            ? " bg-green-200 text-green-950  hover:bg-green-300"
            : " bg-gray-200  hover:bg-gray-300 text-purple-800"
        }`}
        onClick={() => handleShare()}
      >
        {linkCopied ? (
          <LuCopyCheck size={15} />
        ) : (
          <IoShareSocialOutline size={15} />
        )}
        {/* {linkCopied ? "Link Copied" : "Share"} */}
      </Button>
    </LightTooltip>
  );
};

export default BlogShareButton;
