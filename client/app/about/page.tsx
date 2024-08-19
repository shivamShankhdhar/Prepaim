"use client";
import React from "react";
import Link from "next/link";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[4],
    fontSize: 13,
  },
}));

const AboutUs = () => {
  return (
    <div className="w-full px-3 py-3">
      <div className="flex flex-col text-lg gap-2 text-purple-800 min-h-[90vh] max-h-[fit-content] px-10 py-5 bg-white rounded-md">
        <div className="w-full text-3xl font-semibold">About Us</div>
        <h1 className="text-2xl font-semibold">
          Discover PrepAim: Your Ultimate Destination for Preparation Excellence
        </h1>
        {/* <br /> */}
        <p>
          Welcome to PrepAim, where we are dedicated to helping you excel in
          your preparations.
        </p>
        {/* <br /> */}
        <p>
          Whether you&apos;re here for test prep resources, exam strategies, or
          educational insights, we are here to support you. At PrepAim, we pride
          ourselves on our commitment to providing high-quality study materials
          and expert guidance. Our team of educators and professionals brings
          years of experience in education and technology, ensuring you receive
          the best preparation possible.We believe in fostering a supportive
          learning environment, ensuring every interaction with us contributes
          to your success.
        </p>
        {/* <br /> */}
        <p>
          For inquiries, collaborations, or simply to say hello, feel free to
          contact us at contact.prepaim@gmail.com. updates and study tips. Thank
          you for choosing PrepAim. Join us on this journey to achieve your
          academic goals.
        </p>
        {/* <br /> */}
        <p>
          Founded in 2024 by{" "}
          <LightTooltip title="Click to see my LinkedIn">
            <Link
              className="underline"
              target="_blank"
              href="https://in.linkedin.com/in/shivam-shankhdhar-930799141"
            >
              Er. Shivam Shankhdhar
            </Link>
          </LightTooltip>{" "}
          and{" "}
          <LightTooltip title="Click to see my LinkedIn">
            <Link
              className="underline"
              target="_blank"
              href="https://in.linkedin.com/in/shraddha-varshney-5342b6233"
            >
              Shraddha Varshney
            </Link>
          </LightTooltip>
          , our passion for educational success drives everything we do.
        </p>
        {/* <br /> */}
        <p>
          Er. Shivam Shankhdhar holds a B.Tech degree in Computer Science and
          Engineering and a Post Graduation Diploma in Advanced Computing from
          CDAC, Noida. Shraddha Varshney is currently pursuing MCA degree from
          AKTU after completing her B.Sc. in Mathematics.
        </p>
        <h1 className="text-xl font-semibold">
          PrepAim - Your trusted partner in preparation excellence.
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
