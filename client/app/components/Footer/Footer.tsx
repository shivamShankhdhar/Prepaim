"use client";
import React from "react";
import FooterLinks from "./FooterItems/FooterLinks";
import FooterSocialMedia from "./FooterItems/FooterSocialMedia";
import CopyrightInfo from "./FooterItems/CopyrightInfo";
import ShortCutLinks from "./ShortCutLinks/ShortCutLinks";

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-3 px-3 flex-wrap flex gap-1 justify-center items-center">
      <div className="w-full flex flex-wrap flex-col p-5 border border-purple-300 bg-white rounded">
        <div className="w-full">
          <ShortCutLinks />
        </div>
        <div className="w-full flex sm:flex-col max-sm:flex-col md:flex-col max-md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row justify-between  border border-dashed border-t-1 py-3 border-r-0 border-l-0 border-b-0 border-purple-900">
          <div className="">
            <FooterSocialMedia />
          </div>
          <div className="flex-1 sm:justify-center max-sm:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start">
            <FooterLinks />
          </div>
          <div className="flex-1 sm:justify-center max-sm:justify-center md:justify-center lg:justify-end xl:justify-end 2xl:justify-end">
            <CopyrightInfo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
