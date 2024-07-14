"use client";
import Link from "next/link";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
const CodingDashboardBtn = () => {
  // const isAdminFromCookie = document.cookie;
  // const c = isAdminFromCookie.split(";")[2].split("=")[1];
  // console.log(typeof c);

  return (
    <>
      <Link
        className="flex justify-center items-center gap-1"
        href="/admin/v1/coding/dashboard"
      >
        <LuLayoutDashboard /> CODING DASHBOARD
      </Link>
    </>
  );
};

export default CodingDashboardBtn;
