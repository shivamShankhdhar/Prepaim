import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import axios from "axios";
import { useCookies } from "next-client-cookies";
import React, { useState } from "react";
import toast from "react-hot-toast";

const SignUpComponent = ({ isRequestingFromModel, setProperty }: any) => {
  const cookies = useCookies();
  const [userEmail, setUserEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [isSigningUp, setIsSigningUp] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userEmail === "") return toast.error("Email is required...");
    else if (firstName === "") return toast.error("First name is required...");
    else if (lastName === "") return toast.error("Last name is required...");
    else if (password === "") return toast.error("Password is required...");
    else {
      try {
        setIsSigningUp(true);
        axios
          .post(`/user/register`, {
            data: {
              email: userEmail,
              first_name: firstName,
              last_name: lastName,
              password: password,
              user_image_url: "",
            },
          })
          .then((response) => {
            cookies.set(
              "logged_in_user_first_name",
              `${response.data.data.first_name}` || ""
            );

            cookies.set(
              "logged_in_user_last_name",
              `${response.data.data.last_name}` || ""
            );
            cookies.set("token", response.data.token);
            cookies.set("loged_in_user_id", response.data.data._id);
            cookies.set(
              "user_profile_image",
              response.data.data.user_profile_image
            );
            toast.success(response.data.message);
            // toast.success(response.data);
            setIsSigningUp(false);
            window.location.reload();
          })
          .catch((error) => {
            setIsSigningUp(false);
            console.log(`this is from error ${error}`);
            return toast.error(error.response.data);
          });
      } catch (error: any) {
        console.log(error.message);
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
          Join Us
        </div>

        <input
          className="w-full outline-none  border px-2 rounded-md py-2"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name..."
        />

        <input
          className="w-full outline-none  border px-2 rounded-md py-2"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name..."
        />
        <input
          className="w-full outline-none  border px-2 rounded-md py-2"
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Enter your email..."
        />

        <input
          className="w-full outline-none  border px-2 rounded-md py-2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password to secure your account..."
        />
        <Button
          // variant="contained"
          className="justify-center focus:ring-4 focus:outline-none focus:ring-purple-300 outline-none gap-2 w-[fit-content] flex items-center bg-purple-900 text-white px-3 py-1 hover:bg-purple-950 rounded-sm"
          type="submit"
        >
          {isSigningUp && <SimpleLoader size={15} clr={"white"} />}
          {isSigningUp ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
      {isRequestingFromModel && (
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center items-center w-[fit-content]">
            Already Joined ?{" "}
            <div
              className="text-purple-800 bg-purple-200 rounded-full px-2 py-1 text-sm hover:bg-purple-300  focus:ring-3 focus:ring-purple-300 ml-2 cursor-pointer"
              onClick={() => setProperty("login")}
            >
              Login now
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpComponent;
