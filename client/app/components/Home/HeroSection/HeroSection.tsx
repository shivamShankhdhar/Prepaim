import { Button } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r  text-wrap from-purple-900  to-purple-900 text-white flex justify-center items-center text-center flex-col py-10">
        <div className="sm:w-full max-sm:w-full md:w-[90%] px-3 max-md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex flex-wrap justify-center items-center flex-col text-wrap  sm:px-5 max-sm:px-5 md:px-10 max-md:px-10 lg:px-30 xl:px-30 2xl:px-30 text-center">
          <div className="sm:text-[2rem] max-sm:text-[2rem] md:text-[3rem] max-md:text-[3rem] lg:text-[3rem] xl:text-[3rem] 2xl:text-[3rem] font-extrabold">
            Prepare for Examination, Without Hassle. <br /> It&apos;s a
            different way to prepare for your next Examination.
          </div>
          <div className="w-full flex justify-center items-center py-3 gap-2">
            Practice MCQ Questions, to test your knowledge.And sharpen your
            subject,topic knowledge.
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center pb-11 gap-2 py-5">
          <Button
            sx={{ border: 1 }}
            href="/mcq/v1/subjects"
            className="flex justify-center focus:ring-3 focus:outline-none focus:ring-white border border-white items-center bg-white text-purple-900 px-5 text-sm cursor-pointer rounded-sm py-2 hover:bg-purple-900 hover:text-white"
          >
            Try MCQ Questions
          </Button>

          {/* <Button
            href="#trycoding"
            sx={{ border: 1 }}
            className="flex justify-center items-center border hover:bg-white hover:text-purple-900 border-white text-white px-5 text-sm cursor-pointer rounded-sm py-2"
          >
            Try Coding Questions
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
