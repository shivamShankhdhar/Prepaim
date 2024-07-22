"use client";

import { useEffect, useState } from "react";
import LoginFormComponent from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full h-[92vh] flex justify-center items-center px-2">
      <div className="justify-center items-center sm:w-[100%] max-sm:w-[100%] md:w-[80%] max-md:w-[80%] lg:w-[500px] xl:w-[500px] 2xl:w-[500px] flex bg-white border rounded-md">
        <LoginFormComponent />
      </div>
    </div>
  );
};

export default LoginPage;
