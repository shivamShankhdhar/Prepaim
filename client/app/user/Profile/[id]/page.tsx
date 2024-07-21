import { useCookies } from "next-client-cookies";
import React from "react";

const page = () => {
  const cookies = useCookies();
  const loged_in_user_id = cookies.get("loged_in_user_id");
  return <div></div>;
};

export default page;
