"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logout from "../AdminActionsOnHeader/Logout";
import Link from "next/link";
import LoginFormComponent from "@/app/user/components/LoginForm";
import { CgLogIn } from "react-icons/cg";
import { useCookies } from "next-client-cookies";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "@mui/material/Modal";
import { CgProfile } from "react-icons/cg";
import SignUpComponent from "@/app/user/components/SignUpComponent";

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

  const loged_in_user_id = cookies.get("loged_in_user_id");
  // const logged_in_user_full_name = cookies.get("logged_in_user_full_name");
  const user_profile_image = cookies.get("user_profile_image");

  const loged_in_user_first_name = cookies.get("logged_in_user_first_name");

  const loged_in_user_last_name = cookies.get("logged_in_user_last_name");

  const token = cookies.get("token");

  // menu items for after login actions

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenuForUser = Boolean(anchorEl);

  const handleClickForOpenUserMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenuForUser = () => {
    setAnchorEl(null);
  };

  const [loginModelCurrentOpenComponent, setLoginModelCurrentOpenComponent] =
    useState("");

  return (
    <div className="flex sticky top-0 justify-between bg-white h-[50px] items-center px-2 py-3 border-b z-50">
      {/* login modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* container for 100% height and width */}
        <div className="w-full flex h-[100vh] px-2 justify-center items-center overflow-y-auto">
          {/* container that contains the login form  */}
          <div className="flex flex-col sm:w-full max-sm:w-full md:w-[40%] max-md:w-[40%] lg:w-[500px] xl:w-[500px] 2xl:w-[500px] px-2 py-1 bg-white rounded-md">
            <div className="w-full flex justify-end items-end">
              <div
                // sx={{ border: 1 }}
                onClick={handleClose}
                className="flex focus:ring-4 focus:outline-none focus:ring-purple-300 cursor-pointer bg-purple-100 py-1 px-1 text-purple-800 rounded-sm  border border-purple-300"
              >
                <IoCloseOutline size={15} />
              </div>
            </div>

            {loginModelCurrentOpenComponent === "login" ? (
              <LoginFormComponent
                isRequestingFromModel={true}
                setProperty={setLoginModelCurrentOpenComponent}
                setCloseMenuAfterLogin={setOpen}
              />
            ) : (
              <SignUpComponent
                isRequestingFromModel={true}
                setProperty={setLoginModelCurrentOpenComponent}
              />
            )}
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
        {token !== undefined &&
        token !== "" &&
        loged_in_user_id !== undefined &&
        loged_in_user_id !== "" &&
        loged_in_user_first_name !== undefined &&
        loged_in_user_first_name !== "" ? (
          <div className="flex justify-center items-center w-[fit-content]">
            <div
              onClick={(e: any) => handleClickForOpenUserMenu(e)}
              className="w-full flex justify-center items-center"
            >
              <Avatar
                alt={loged_in_user_first_name}
                src={user_profile_image || "/assets/user_profile_fake.png"}
                sx={{ width: 30, height: 30 }}
                className="cursor-pointer ring-3 ring-purple-300"
              />
            </div>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenuForUser}
              onClose={handleCloseMenuForUser}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="text-gray-700"
            >
              <div className="w-full px-3">
                <MenuItem onClick={handleCloseMenuForUser}>
                  <Link href={`/user/profile/${loged_in_user_id}`}>
                    <div className="flex justify-center items-center gap-1">
                      <CgProfile />{" "}
                      {`${loged_in_user_first_name} ${loged_in_user_last_name}`}
                    </div>
                  </Link>
                </MenuItem>
                {/* <MenuItem onClick={handleCloseMenuForUser}>My account</MenuItem> */}
                <MenuItem onClick={handleCloseMenuForUser}>
                  <Logout />
                </MenuItem>
              </div>
            </Menu>
          </div>
        ) : (
          <></>
          // <Logout />

          // login and logout buttons for non logged in users
          // <>
          //   <Button
          //     // sx={{ border: 1 }}
          //     sx={{ border: 1, textTransform: "none" }}
          //     onClick={() => {
          //       setLoginModelCurrentOpenComponent("login");
          //       handleOpen();
          //     }}
          //     className="flex gap-1  border border-purple-300 text-purple-800 hover:bg-purple-900 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm px-2 py-1 text-center"
          //   >
          //     Login
          //   </Button>
          //   <Button
          //     // sx={{ border: 1 }}
          //     sx={{ border: 1, textTransform: "none" }}
          //     onClick={() => {
          //       setLoginModelCurrentOpenComponent("register");
          //       handleOpen();
          //     }}
          //     className="flex gap-1 bg-purple-800 border border-purple-300 text-white hover:bg-purple-900 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm px-2 py-1 text-center"
          //   >
          //     Sign Up
          //   </Button>
          // </>
        )}
      </div>
    </div>
  );
};

export default Header;
