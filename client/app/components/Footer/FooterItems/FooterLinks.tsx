import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <ul className="flex flex-wrap gap-1 text-sm">
        <li className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100">
          <Link target="_blank" href="/about">
            About us
          </Link>
        </li>
        <li className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100">
          <Link target="_blank" href="/privacy">
            Privacy Policy
          </Link>
        </li>
        <li className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100">
          <Link target="_blank" href="/terms-of-services">
            Terms of Services
          </Link>
        </li>
        <li className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100">
          <Link target="_blank" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
