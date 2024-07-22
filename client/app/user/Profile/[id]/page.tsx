"use client";
import { useCookies } from "next-client-cookies";
import { useParams } from "next/navigation";
// import React from "react";

const Profile = () => {
  // const { id } = useParams();
  const cookies = useCookies();
  const user_id = cookies.get("loged_in_user_id");

  return <div className="w-full flex px-2">{user_id}</div>;
};

export default Profile;
