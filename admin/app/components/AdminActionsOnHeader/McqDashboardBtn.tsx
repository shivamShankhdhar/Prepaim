"use client";
import Link from "next/link";
import React from "react";

import { LuLayoutDashboard } from "react-icons/lu";
const McqDashboardBtn = () => {
  // const isAdminFromCookie = document.cookie;
  // let c = "";
  // if (isAdminFromCookie !== "") {
  //   c = isAdminFromCookie.split(";")[2].split("=")[1];
  // }

  return (
    <Link
      className="flex justify-center items-center gap-1"
      href="/admin/v1/mcq/dashboard"
    >
      <LuLayoutDashboard />
      MCQ DASHBOARD
    </Link>
  );
};

export default McqDashboardBtn;
