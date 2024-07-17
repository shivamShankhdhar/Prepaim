import { CircularProgress } from "@mui/material";
import React from "react";

const SimpleLoader = ({ size, cls, clr }: any) => {
  return (
    <CircularProgress
      sx={{ color: `${clr}` }}
      className={`${cls}`}
      size={size}
    />
  );
};

export default SimpleLoader;
