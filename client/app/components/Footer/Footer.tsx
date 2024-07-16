import React from "react";
import FooterLinks from "./FooterItems/FooterLinks";
import FooterSocialMedia from "./FooterItems/FooterSocialMedia";
import CopyrightInfo from "./FooterItems/CopyrightInfo";
import ShortCutLinks from "./ShortCutLinks/ShortCutLinks";

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-3 px-3 flex gap-1 justify-center items-center">
      <div className="w-full flex flex-wrap flex-col p-5 border border-purple-300 bg-white rounded">
        <div className="w-full">
          <ShortCutLinks />
        </div>
        <div className="w-full flex flex-row justify-between  border border-dashed border-t-1 py-3 border-r-0 border-l-0 border-b-0 border-purple-900">
          <FooterSocialMedia />
          <FooterLinks />
          <CopyrightInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
