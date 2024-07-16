"use client";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import React from "react";
import { TbLogout2 } from "react-icons/tb";

const Logout = () => {
  const router = useRouter();
  const cookies = useCookies();
  // console.log(c)ookies;
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
