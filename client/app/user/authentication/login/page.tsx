"use client";

import { useEffect, useState } from "react";
import LoginFormComponent from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[500px] flex bg-white border rounded-md">
        <LoginFormComponent />
      </div>
    </div>
  );
};

export default LoginPage;
