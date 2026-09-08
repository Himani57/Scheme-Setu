import React from 'react'
import { FaRegFileAlt, FaLink, FaMagic,FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: FaMagic, label: "Personalized picks" },
  { icon: FaShieldAlt, label: "Eligibility check" },
  { icon: FaRegFileAlt, label: "Plain-language info" },
  { icon: FaLink, label: "Official links only" },
];


const Login = () => {
  return (
     <div className="relative hidden md:flex md:w-1/2 xl:w-2/3 h-full bg-[#0F2A43] flex-col justify-between overflow-hidden px-8 py-8 lg:px-16 lg:py-12">

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 text-white rounded-full border border-[#E8873A]/40 flex items-center justify-center">
            SS
            </div>
            <h1 className="text-[#FBF6ED] xl:text-3xl text-xl lg:text-2xl font-serif tracking-tight">
              Scheme<span className="text-[#E8873A]">Setu</span>
            </h1>
          </div>

          <div className="mt-10 lg:mt-20 max-w-md">
            <h2 className="text-[#FBF6ED] text-3xl xl:text-6xl lg:text-[2.75rem] font-serif leading-[1.15]">
              The bridge between you and the schemes you are owed.
            </h2>
            <p className="text-[#C7D0DA] mt-5 text-sm lg:text-base leading-relaxed max-w-md">
              Answer a few questions and see which government benefits you actually qualify for — no jargon, no runaround.
            </p>
          </div>

          <div className="mt-10 lg:mt-14 xl:gap-6 flex flex-col gap-4">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center xl:gap-5 gap-3">
                <Icon className="text-[#E8873A] text-md shrink-0" />
                <p className="text-md xl:text-lg text-[#C7D0DA]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Login