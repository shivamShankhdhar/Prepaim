import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const FooterSocialMedia = () => {
  return (
    <div className="flex justify-center items-center flex-col  text-indigo-900">
      <div className="flex w-[fit-content] items-center text-2xl font-semibold">
        Follow Us on Social Media
      </div>
      <ul className="flex gap-2">
        <li className="flex justify-center hover:text-indigo-950 items-center cursor-pointer">
          <FaFacebookSquare size={30} />
        </li>
        <li className="flex justify-center hover:text-indigo-950 items-center cursor-pointer">
          <FaInstagramSquare size={30} />
        </li>
        <li className="flex justify-center hover:text-indigo-950 items-center cursor-pointer">
          <FaLinkedin size={30} />
        </li>
      </ul>
    </div>
  );
};

export default FooterSocialMedia;
