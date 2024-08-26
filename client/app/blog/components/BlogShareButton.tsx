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
    <LightTooltip title={`Share this post`}>
      <Button
        // sx={{ border: 1 }}
        className={`rounded-full flex h-8 w-8 px-0 py-0 justify-center cursor-pointer items-center aspect-square ${
          linkCopied
            ? " bg-green-200 text-green-950  hover:bg-green-300"
            : " bg-white  hover:bg-purple-100 text-purple-800"
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
