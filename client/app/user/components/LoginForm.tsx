import React from "react";

import SimpleLoader from "@/app/components/Global/SimpleLoader";
import axios from "axios";
import { useCookies } from "next-client-cookies";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdLogin } from "react-icons/md";
import { Button } from "@mui/material";

const LoginFormComponent = ({ setCloseMenuAfterLogin }: any) => {
  const cookies = useCookies();
  const pathname = usePathname();
  const hostName = window.location.host;
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  // const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userEmail === "") return toast.error("Username is required...!");
    else if (password === "") return toast.error("Password is required...!");
    else {
      try {
        setIsLogging(true);
        axios
          .post(`/user/login`, {
            data: { userEmail: userEmail, userPassword: password },
          })
          .then((response) => {
            console.log(response.data);
            setCloseMenuAfterLogin(false);
            // cookies.set("logged_in_user_username", response.data.username);
            cookies.set("logged_in_user_full_name", response.data.full_name);
            cookies.set("token", response.data.token);
            cookies.set("loged_in_user_id", response.data.user_id);
            cookies.set("user_profile_image", response.data.user_profile_image);
            // cookies.set("logged_in_user_email", response.data.user_email);
            toast.success(`Welcome back !! ${response.data.full_name}`);
            setIsLogging(false);
            router.push(`${hostName}/${pathname}`);
          })
          .catch((error) => {
            setIsLogging(false);
            return toast.error(error.response.data.error);
          });
      } catch (error: any) {
        setIsLogging(false);
        return toast.error(error.message);
      }
    }
  };

  return (
    <form
      className="flex flex-col w-full gap-2 p-5 items-center "
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-start text-3xl gap-2 font-semibold">
        Login
      </div>
      <input
        className="w-full outline-none  border px-2 rounded-md py-2"
        type="text"
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Enter your email..."
      />
      <input
        className="w-full outline-none  border px-2 rounded-md py-2"
        type="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password..."
      ></input>
      <Button
        className="justify-center focus:ring-4 focus:outline-none focus:ring-purple-300 outline-none gap-2 w-[fit-content] flex items-center bg-purple-800 text-white px-3 py-1 hover:bg-purple-900 rounded-sm"
        type="submit"
      >
        {isLogging && <SimpleLoader size={15} clr={"white"} />}
        Login
      </Button>
    </form>
  );
};

export default LoginFormComponent;
