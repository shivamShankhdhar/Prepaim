"use client";
import React from "react";

import SimpleLoader from "@/app/components/Global/SimpleLoader";
import axios from "axios";
import { useCookies } from "next-client-cookies";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";;
import { Button } from "@mui/material";

interface Props {
  isRequestingFromModel?: boolean;
  setProperty?: any;
  setCloseMenuAfterLogin?: any;
}
const LoginFormComponent = ({
  isRequestingFromModel,
  setProperty,
  setCloseMenuAfterLogin,
}: Props) => {
  const cookies = useCookies();
  // const pathname = usePathname();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  // console.log(`${email} ${password}`);
  // const router = useRouter();
  const handleSubmit = (e: any) => {
    setIsLogging(true);
    e.preventDefault();
    setIsLogging(true);
    if (email === "") {
      setIsLogging(false);
      return toast.error("Username is required...!");
    } else if (password === "") {
      setIsLogging(false);
      return toast.error("Password is required...!");
    } else {
      try {
        axios
          .post(`/user/login`, {
            data: { email: email, password: password },
          })
          .then((response) => {
            console.log(response.data);
            setCloseMenuAfterLogin(false);
            cookies.set("logged_in_user_first_name", response.data.first_name);
            cookies.set("logged_in_user_last_name", response.data.last_name);
            cookies.set("token", response.data.token);
            cookies.set("loged_in_user_id", response.data.user_id);
            cookies.set("user_profile_image", response.data.user_profile_image);
            toast.success(`Welcome back !! ${response.data.first_name}`);
            setIsLogging(false);
          })
          .catch((error) => {
            setIsLogging(false);
            console.log(error);
            return toast.error(error.response.data.error);
          });
      } catch (error: any) {
        setIsLogging(false);
        return toast.error("Something went wrong...");
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 py-5">
      <form
        className="flex flex-col w-full gap-2 px-5 py-2 items-center "
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-start text-3xl gap-2 font-semibold">
          Login
        </div>
        <input
          className="w-full outline-none  border px-2 rounded-md py-2"
          type="text"
          onChange={(e) => setemail(e.target.value)}
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
          sx={{ textTransform: "none" }}
          className="justify-center focus:ring-4 focus:outline-none focus:ring-indigo-300 outline-none gap-2 w-[fit-content] flex items-center bg-indigo-800 text-white px-3 py-1 hover:bg-indigo-900 rounded-sm"
          type="submit"
        >
          {isLogging && <SimpleLoader size={15} clr={"white"} />}
          Login
        </Button>
      </form>
      {isRequestingFromModel && (
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center items-center w-[fit-content]">
            Don&apos;t have an account ?{" "}
            <div
              className="text-indigo-800 bg-indigo-200 rounded-full px-5 py-1 text-sm hover:bg-indigo-300  focus:ring-3 focus:ring-indigo-300 ml-2 cursor-pointer"
              onClick={() => setProperty("register")}
            >
              Sign now
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginFormComponent;
