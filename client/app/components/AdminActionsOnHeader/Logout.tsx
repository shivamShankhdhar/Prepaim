"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { TbLogout2 } from "react-icons/tb";

const Logout = () => {
  const router = useRouter();
  const cookies = document.cookie;
  // console.log(c)ookies;
  const handleLogout = () => {
    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "isAdmin=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.reload();
    // alert("you are logged out");
  };
  return (
    <>
      {cookies !== "" && (
        <div
          className="flex gap-1 justify-center items-center"
          onClick={handleLogout}
        >
          <TbLogout2 size={15} />
          LOG OUT
        </div>
      )}
    </>
  );
};

export default Logout;
