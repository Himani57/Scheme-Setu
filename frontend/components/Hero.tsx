import React from "react";
import { FaMagnifyingGlass, FaArrowRightLong } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Detail from "@/components/Detail";

const Hero = () => {
  return (
    <div className="p-3 xl:px-40  sm:px-10 min-[922px]:px-20 flex flex-col min-[922px]:flex-row min-[922px]:items-center min-[922px]:justify-between gap-3.5 pt-12 bg-white">
      <div className="flex flex-col gap-3.5 min-[922px]:max-w-xl">
        <p className="text-sm border w-fit text-green-600 px-3 py-0.5 rounded-xl">
          Finding Scheme easily
        </p>
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-6xl font-bold">Find Government Schemes</h1>
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-green-800">Made For You.</h1>
        </div>
        <p className="text-sm font-light">
          Discover government schemes you're eligible for with personalized
          recommendation powered by Ai.
        </p>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <div className="flex gap-1.5 bg-green-200 w-fit sm:py-2.5 sm:px-2.5 border px-2 py-1.5 rounded-2xl items-center">
            <FaMagnifyingGlass />
            <span className="text-sm">Explore Schemes</span>
            <FaArrowRightLong />
          </div>
          <div className="flex gap-1.5 bg-green-200 w-fit sm:py-2.5 sm:px-2.5 border px-2 py-1.5 rounded-2xl items-center">
            <FaRegStar />
            <span className="text-sm">Check Eligibility</span>
          </div>
        </div>
      </div>
      <div className="">
        <Detail />
      </div>
    </div>
  );
};

export default Hero;
