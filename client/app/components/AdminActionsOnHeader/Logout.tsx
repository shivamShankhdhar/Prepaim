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
    cookies.remove("logged_in_user_full_name");
    cookies.remove("token");
    cookies.remove("loged_in_user_id");
    cookies.remove("user_profile_image");
    window.location.reload();
    // alert("you are logged out");
  };
  return (
    <>
      {cookies !== undefined && (
        <div
          className="flex justify-center items-center gap-1 py-0"
          onClick={handleLogout}
        >
          <CgLogOut size={15} />
          Log Out
        </div>
      )}
    </>
  );
};

export default Logout;
