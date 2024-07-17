"use client";
import { Button } from "@mui/material";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import React from "react";
import { CgLogOut } from "react-icons/cg";

const Logout = () => {
  const router = useRouter();
  const cookies = useCookies();
  // (c)ookies;
  const handleLogout = () => {
    cookies.remove("username");
    cookies.remove("token");
    // cookies.remove("role");
    cookies.remove("isAdmin");
    window.location.reload();
    // alert("you are logged out");
  };
  return (
    <>
      {cookies !== undefined && (
        <Button
          className="text-white flex justify-center items-center gap-1 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm px-2 py-1 text-center"
          onClick={handleLogout}
        >
          <CgLogOut size={15} />
          Log Out
        </Button>
      )}
    </>
  );
};

export default Logout;
