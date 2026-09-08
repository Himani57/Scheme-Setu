"use client";
import { useState } from "react";
import { FaRegEnvelope, FaLock, FaRegEyeSlash, FaRegEye, FaShieldAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import Login from "@/components/Login"

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="h-screen w-full md:flex bg-[#FBF6ED]">
      <Login />

      <div className="h-full w-full md:w-1/2 overflow-y-auto flex items-center justify-center p-4">
        <div className="w-full max-w-md sm:h-[93vh] border border-white shadow-2xl md:h-auto lg:h-[93vh] sm:w-[68vw] md:w-full p-6 sm:p-8 my-auto flex flex-col">

          {/* Mobile-only brand mark */}
          <div className="md:hidden text-center mb-8">
            <h1 className="text-[#0F2A43] text-2xl font-serif">
              Scheme<span className="text-[#E8873A]">Setu</span>
            </h1>
            <p className="text-xs text-[#6B7280] mt-1">
              Connecting citizens to the benefits they deserve
            </p>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl text-[#0F2A43] font-serif">Welcome back</h1>
            <p className="text-sm mt-2 max-w-xs sm:max-w-sm text-[#6B7280]">
              Log in to pick up where you left off with your saved schemes.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-10">
            <div className="flex items-center gap-3 border-b border-[#D8D2C4] pb-2 focus-within:border-[#0F2A43] transition-colors">
              <FaRegEnvelope className="text-[#A8A296] text-sm" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full text-base outline-none bg-transparent placeholder:text-[#A8A296]"
              />
            </div>

            <div className="flex items-center gap-3 border-b border-[#D8D2C4] pb-2 focus-within:border-[#0F2A43] transition-colors">
              <FaLock className="text-[#A8A296] text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full text-base outline-none bg-transparent placeholder:text-[#A8A296]"
              />
              <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-[#A8A296]">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="flex items-center justify-between -mt-1">
              <label className="flex items-center gap-2 text-sm text-[#0F2A43]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe((prev) => !prev)}
                  className="h-4 w-4 accent-[#E8873A] rounded"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-[#E8873A] font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              onClick={handleLogin}
              className="bg-[#0F2A43] text-[#FBF6ED] font-medium py-3 rounded-full mt-2 flex items-center justify-center gap-2 hover:bg-[#16385A] transition-colors"
            >
              Log in <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Social + signup */}
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex items-center gap-3">
              <hr className="flex-1 border-[#D8D2C4]" />
              <span className="text-xs text-[#A8A296]">or continue with</span>
              <hr className="flex-1 border-[#D8D2C4]" />
            </div>

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 border border-[#D8D2C4] rounded-full py-2.5 text-sm font-medium hover:bg-[#F3EEE3] transition-colors">
                <FcGoogle className="text-lg" />
                Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-[#D8D2C4] rounded-full py-2.5 text-sm font-medium hover:bg-[#F3EEE3] transition-colors">
                <FaApple className="text-lg" />
                Apple
              </button>
            </div>

            <p className="text-center text-sm text-[#6B7280]">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-[#0F2A43] font-semibold hover:underline">Sign up</a>
            </p>

            <div className="flex items-start gap-3 pt-4 border-t border-[#EDE8DC]">
              <FaShieldAlt className="text-[#E8873A] text-sm mt-0.5 shrink-0" />
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Your data is encrypted and never shared without consent. We follow government-grade security standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;




