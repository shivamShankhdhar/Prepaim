"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logout from "../AdminActionsOnHeader/Logout";
import Link from "next/link";
import McqDashboardBtn from "../AdminActionsOnHeader/McqDashboardBtn";
import CodingDashboardBtn from "../AdminActionsOnHeader/CodingDashboardBtn copy";
import { Menu, MenuItem } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { useCookies } from "next-client-cookies";

const Header = () => {
  const cookies = useCookies();
  console.log(cookies);
  const usernameFromCookies = cookies.get("username");

  // const isAdminFromCookie = document.cookie;
  const isAdminFromCookie = cookies.get("isAdmin");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // open modal
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex  sticky top-0 justify-between border-indigo-300 border-[2px] border-l-0 border-t-0 border-r-0 bg-white  h-[50px] items-center px-10 py-3 border-b z-50">
      <div className="flex-1">
        <Link href={"/"}>
          <Image
            src={"/assets/Brandlogo/logo.png"}
            height={10}
            width={150}
            alt="www.prepAim.com"
            style={{ objectFit: "contain", height: "30px" }}
          />
        </Link>
      </div>
      {cookies !== null && usernameFromCookies !== undefined && (
        <div className="flex justify-between gap-1 items-center">
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="p-2 cursor-pointer "
          >
            <RxHamburgerMenu size={20} />
          </button>
          {/* {isMenuOpen && ( */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} className="flex gap-1">
              <FaRegUserCircle />
              {usernameFromCookies}
            </MenuItem>
            {isAdminFromCookie !== undefined && (
              <MenuItem onClick={handleClose}>
                <McqDashboardBtn />
              </MenuItem>
            )}
            {isAdminFromCookie !== undefined && (
              <MenuItem onClick={handleClose}>
                <CodingDashboardBtn />
              </MenuItem>
            )}

            <MenuItem onClick={handleClose}>
              <Logout />
            </MenuItem>
          </Menu>
          {/* )} */}
        </div>
      )}
    </div>
  );
};

export default Header;
