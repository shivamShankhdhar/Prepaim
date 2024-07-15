import React from "react";
import FooterLinks from "./FooterItems/FooterLinks";
import FooterSocialMedia from "./FooterItems/FooterSocialMedia";
import CopyrightInfo from "./FooterItems/CopyrightInfo";
import ShortCutLinks from "./ShortCutLinks/ShortCutLinks";

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-3 px-3 flex flex-col gap-1 justify-center items-center">
      <div className="w-full flex flex-wrap flex-col p-5 border border-purple-600 bg-purple-200 justify-center rounded">
        <div className="w-full flex gap-5 justify-center ">
          <ShortCutLinks />
          <FooterSocialMedia />
        </div>
        <FooterLinks />
        <CopyrightInfo />
      </div>
    </footer>
  );
};

export default Footer;
