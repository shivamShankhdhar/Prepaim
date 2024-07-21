import SimpleLoader from "@/app/components/Global/SimpleLoader";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const SignUpComponent = ({ setProperty }: any) => {
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
            console.log(response.data);
            toast.success("Account created successfully...");
            setIsSigningUp(false);
          })
          .catch((error) => {
            setIsSigningUp(false);
            // console.log(error);
            return toast.error(error.response.data.error);
          });
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };
  return (
    <form
      className="flex flex-col w-full gap-2 p-5 items-center "
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-start text-3xl gap-2 font-semibold">
        Join Us
      </div>
      <input
        className="w-full outline-none  border px-2 rounded-md py-2"
        type="email"
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Enter your email..."
      />

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
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter a password to secure your account..."
      />
      <Button
        // variant="contained"
        className="w-[fir-content] focus:ring-3 focus:ring-purple-300 focus:outline-none flex justify-center items-center gap-2 px-3 bg-purple-900 hover:bg-purple-950 text-white rounded-md py-1"
        type="submit"
      >
        {isSigningUp && <SimpleLoader size={15} clr={"white"} />}
        {isSigningUp ? "Signing Up..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpComponent;
