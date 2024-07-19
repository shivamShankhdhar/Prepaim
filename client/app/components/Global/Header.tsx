"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logout from "../AdminActionsOnHeader/Logout";
import Link from "next/link";
import LoginFormComponent from "@/app/user/components/LoginForm";
import { CgLogIn } from "react-icons/cg";
import { useCookies } from "next-client-cookies";
import { Button, Menu } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const cookies = useCookies();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const usernameFromCookies = cookies.get("username");

  return (
    <div className="flex sticky top-0 justify-between border-purple-300 border-[2px] border-l-0 border-t-0 border-r-0 bg-white h-[50px] items-center px-5 py-3 border-b z-50">
      {/* login modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* container for 100% height and width */}
        <div className="w-full flex h-[100vh] px-5 justify-center items-center">
          {/* container that contains the login form  */}
          <div className="flex flex-col sm:w-[90%] max-sm:w-[90%] md:w-[40%] max-md:w-[40%] lg:w-[500px] xl:w-[500px] 2xl:w-[500px] px-2 py-1 bg-white rounded-md">
            <div className="w-full flex justify-end items-end">
              <Button
                sx={{ border: 1 }}
                onClick={handleClose}
                className="flex focus:ring-4 focus:outline-none focus:ring-purple-300 cursor-pointer bg-purple-100 py-1 px-1 text-purple-900 rounded-sm  border border-purple-300"
              >
                <IoCloseOutline size={15} className="p-0 m-0" />
              </Button>
            </div>
            <LoginFormComponent setCloseMenuAfterLogin={setOpen} />
          </div>
        </div>
      </Modal>

      <div className="flex-1">
        <Link href={"/"}>
          <Image
            priority={true}
            src={"/assets/Brandlogo/logo.png"}
            height={10}
            width={150}
            alt="www.prepaim.com"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "120px",
              height: "40px",
            }}
          />
        </Link>
      </div>

      <div className="flex gap-1 justify-end items-center">
        {usernameFromCookies !== undefined ? (
          <Logout />
        ) : (
          <Button
            sx={{ border: 1, textTransform: "none" }}
            onClick={handleOpen}
            className="flex justify-center items-center gap-1 bg-purple-200 border border-purple-300 text-purple-800 hover:bg-purple-300 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm px-2 py-1 text-center"
          >
            <CgLogIn /> Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
