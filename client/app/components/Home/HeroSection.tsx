import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r  text-wrap from-purple-800 via-purple-600 to-purple-800 px-11 text-white flex justify-center items-center text-center flex-col py-10">
        <div className="sm:w-full max-sm:w-full  md:w-[90%] max-md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex flex-wrap justify-center items-center flex-col text-wrap  sm:px-1 max-sm:px-1 md:px-2 max-md:px-2 lg:px-3 xl:px-3 2xl:px-3 text-center">
          <div className="sm:text-[2rem] max-sm:text-[2rem] md:text-[3rem] max-md:text-[3rem] lg:text-[3rem] xl:text-[3rem] 2xl:text-[3rem] font-extrabold">
            Prepare for Examination, Without Hassle and free. It&apos;s a
            different way to prepare for your next Examination.
          </div>
          <div className="w-full flex justify-center items-center py-3 gap-2">
            Practice MCQ Questions, And Coding Questions Solutions for different
            languages for same question in a click.
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center pb-11 gap-2 py-5">
          <Button
            sx={{ border: 1 }}
            href="/mcq/v1/subjects"
            className="flex justify-center border border-white items-center bg-white text-purple-700 px-5 text-sm cursor-pointer rounded-sm py-2 hover:bg-purple-700 hover:text-white"
          >
            Try MCQ Questions
          </Button>

          <Button
            href="#trycoding"
            sx={{ border: 1 }}
            className="flex justify-center items-center border hover:bg-white hover:text-purple-900 border-white text-white px-5 text-sm cursor-pointer rounded-sm py-2"
          >
            Try Coding Questions
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
