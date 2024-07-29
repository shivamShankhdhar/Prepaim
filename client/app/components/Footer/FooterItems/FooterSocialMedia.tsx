import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import Link from "next/link";

const FooterSocialMedia = () => {
  return (
    <div className="flex  justify-center items-center text-purple-900">
      {/* <div className="flex w-[fit-content] items-center text-xl font-semibold">
        Follow Us on Social Media
      </div> */}
      <ul className="flex gap-2">
        {/* <li className="flex justify-center hover:text-purple-950 items-center cursor-pointer">
          <FaFacebookSquare size={30} />
        </li> */}
        <li className="flex justify-center hover:text-purple-950 items-center cursor-pointer">
          <Link href="https://www.instagram.com/prepaim" target="_blank">
            <FaInstagramSquare size={30} />
          </Link>
        </li>
        <li className="flex justify-center hover:text-purple-950 items-center cursor-pointer">
          <Link
            href="https://www.linkedin.com/company/prepaim/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocialMedia;
