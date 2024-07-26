import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ShareBtn from "@/app/components/Global/ShareBtn";

import { VscChecklist } from "react-icons/vsc";
import { RiBookReadLine } from "react-icons/ri";


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

const QuestionPageLayoutToggle = () => {
  const { subject } = useParams();
  const { chapter } = useParams();
  const { question } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [PageLayoutView, setPageLayoutView] = useState(
    pathname.includes("Test-Prepration-Mode") ? "test-mode" : "prepration-mode"
  );
  // useEffect(() => {
  //   if (PageLayoutView === "test-mode") {
  //     router.push(
  //       `/mcq/v1/Test-Prepration-Mode/${subject}/${chapter}/${question}`
  //     );
  //   } else {
  //     router.push(
  //       `/mcq/v1/Questionprepration-modeViewPage/${subject}/${chapter}/${question}`
  //     );
  //   }
  // }, [PageLayoutView]);
  return (
    <div className="w-full flex justify-end items-center gap-3 py-1 px-5">
      {/* share buttons shows only on prepration mode */}
      {!pathname.includes("Test-Prepration-Mode") && (
        <ShareBtn cls={"bg-purple-200"} />
      )}
      <div className="flex justify-center w-[fit-content]  items-center py-2 border bg-white border-purple-300 rounded-md text-purple-800">
        <LightTooltip
          title={`${
            PageLayoutView === "test-mode"
              ? "Test/Prepration Mode Selected"
              : "Select to change Prepration Mode to Test/Prepration Mode "
          }`}
        >
          <div
            className={`flex justify-center  ${
              PageLayoutView === "test-mode"
                ? "text-purple-900 font-semibold"
                : "text-purple-300"
            } items-center px-4 cursor-pointer  border-2 border-t-0 border-r-1 border-l-0 border-b-0 border-purple-300`}
            // onClick={() => setPageLayoutView("test-mode")}
          >
            <Link
              href={`/mcq/v1/${subject}/${chapter}/Test-Prepration-Mode/${question}`}
            >
              <VscChecklist size={20} />
            </Link>
          </div>
        </LightTooltip>
        <LightTooltip
          title={`${
            PageLayoutView === "prepration-mode"
              ? "Prepration Mode Selected"
              : "Select to change Test/Prepration Mode to Prepration Mode"
          }`}
        >
          <div
            className={`flex justify-center  ${
              PageLayoutView === "prepration-mode"
                ? "text-purple-900 font-semibold"
                : "text-purple-300"
            } items-center px-4 cursor-pointer  `}
            // onClick={() => setPageLayoutView("prepration-mode")}
          >
            <Link
              href={`/mcq/v1/${subject}/${chapter}/Prepration-Mode/${question}`}
            >
              <RiBookReadLine size={20} />
            </Link>
          </div>
        </LightTooltip>
      </div>
    </div>
  );
};

export default QuestionPageLayoutToggle;
