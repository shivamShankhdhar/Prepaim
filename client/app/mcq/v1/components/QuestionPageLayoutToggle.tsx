import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ShareBtn from "@/app/components/Global/ShareBtn";

import { VscChecklist } from "react-icons/vsc";
import { RiBookReadLine } from "react-icons/ri";


import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import StoreProgressToggleBtn from "./ActionBarForQuestion/ActionBarItems/StoreProgressToggleBtn";

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

const QuestionPageLayoutToggle = ({
  handleClickOnTrackProgressBtn,
  isTrackingProgress,
}: any) => {
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
    <div className="w-full flex justify-end items-center pt-1 gap-2 px-5">
      {/* share buttons shows only on prepration mode */}
      <StoreProgressToggleBtn
        handleClick={handleClickOnTrackProgressBtn}
        isTrackingProgress={isTrackingProgress}
      />
      <ShareBtn />

      <div className="flex  items-center border  bg-white border-purple-900 rounded-[3px] text-purple-900">
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
                ? "text-white bg-purple-900 font-semibold"
                : "text-purple-900"
            } items-center px-3 py-1 cursor-pointer  `}
            // onClick={() => setPageLayoutView("test-mode")}
          >
            {/* navigate to the exact question with using id  */}
            <Link
              href={`/mcq/v1/${subject}/${chapter}/Test-Prepration-Mode/${question
                .toString()
                .replaceAll(" ", "-")}`}
            >
              <VscChecklist size={23} />
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
                ? "text-white bg-purple-900 font-semibold"
                : "text-purple-900"
            } items-center px-3 py-1 cursor-pointer`}
            // onClick={() => setPageLayoutView("prepration-mode")}
          >
            <Link
              href={`/mcq/v1/${subject}/${chapter}/Prepration-Mode/${question}`}
            >
              <RiBookReadLine size={23} />
            </Link>
          </div>
        </LightTooltip>
      </div>
    </div>
  );
};

export default QuestionPageLayoutToggle;
