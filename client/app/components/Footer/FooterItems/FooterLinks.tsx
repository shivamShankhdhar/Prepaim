import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="w-full flex justify-center min-w-[fit-content] items-center">
      <ul className="flex flex-wrap gap-1 justify-center items-center text-sm">
        <li className="flex cursor-pointer  justify-center items-center px-2 py-1 rounded-md hover:bg-indigo-100">
          <Link target="_blank" href="/about">
            About us
          </Link>
        </li>
        <li className="flex cursor-pointer  justify-center items-center px-2 py-1 rounded-md hover:bg-indigo-100">
          <Link target="_blank" href="/privacy">
            Privacy Policy
          </Link>
        </li>
        <li className="flex cursor-pointer justify-center items-center px-2 py-1 rounded-md hover:bg-indigo-100">
          <Link target="_blank" href="/terms-of-services">
            Terms of Services
          </Link>
        </li>
        <li className="flex cursor-pointer justify-center items-center px-2 py-1 rounded-md hover:bg-indigo-100">
          <Link target="_blank" href="/contact">
            Contact
          </Link>
        </li>

        <li className="flex cursor-pointer justify-center items-center px-2 py-1 rounded-md hover:bg-indigo-100">
          <Link target="_blank" href="/sitemap.xml">
            SiteMap
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
