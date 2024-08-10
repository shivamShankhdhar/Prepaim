import React from "react";
import toast from "react-hot-toast";;
import { TbGridDots, TbListDetails } from "react-icons/tb";
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

const LayoutToggle = ({ layOutView, setLayoutView }: any = {}) => {
  return (
    <div className="w-full mt-1 flex justify-end pr-5 px-2 items-center ">
      <div className="flex justify-center  items-center py-2 border bg-white border-purple-300 rounded-md text-purple-900">
        <LightTooltip
          title={`${
            layOutView === "grid"
              ? "Cureently Displaying Grid View"
              : "Select to change layout to Grid View"
          }`}
        >
          <div
            className={`flex justify-center  ${
              layOutView === "grid"
                ? "text-purple font-semibold"
                : "text-purple-300"
            } items-center px-4 cursor-pointer  border-2 border-t-0 border-r-1 border-l-0 border-b-0 border-purple-300`}
            onClick={() => {
              setLayoutView("grid");
              toast.success("Changed to Grid View.");
            }}
          >
            <TbGridDots size={20} />
          </div>
        </LightTooltip>
        <LightTooltip
          title={`${
            layOutView === "list"
              ? "Cureently Displaying List View"
              : "Select to change layout to List View"
          }`}
        >
          <div
            className={`flex justify-center  ${
              layOutView === "list"
                ? "text-purple font-semibold"
                : "text-purple-300"
            } items-center px-4 cursor-pointer  `}
            onClick={() => {
              setLayoutView("list");
              toast.success("Changed to List View.");
            }}
          >
            <TbListDetails size={20} />
          </div>
        </LightTooltip>
      </div>
    </div>
  );
};

export default LayoutToggle;
