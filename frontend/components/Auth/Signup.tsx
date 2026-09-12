"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaRegEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
  FaUser,
  FaPhone,
  FaArrowRight,
  FaApple,
  FaShieldAlt,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState(""); 
   const [phone, setPhone] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirm, setShowConfirm] = useState(false); 
    
  return (
     <div className="h-screen w-full  flex items-center justify-center px-4 py-5 sm:px-6 sm:py-8">

      <div className="w-full max-w-md rounded-2xl border border-[#EDE8DC] shadow-xl px-5 py-6 sm:px-8 sm:py-8">

        <div className="text-center mb-6 sm:mb-7">
          <h1 className="text-[#0F2A43] text-3xl sm:text-4xl font-serif font-medium">
            Scheme<span className="text-[#E8873A]">Setu</span>
          </h1>

          <p className="text-[11px] sm:text-xs text-[#6B7280] mt-1">
            Connecting citizens to the benefits they deserve
          </p>
        </div>

        <div className="mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-2xl text-[#0F2A43] font-serif">
            Create your account
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed text-[#6B7280]">
            Join SchemeSetu and unlock government benefits that are right for you.
          </p>
        </div>

        <form className="flex flex-col gap-3.5 sm:gap-3">

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#D8D2C4] focus-within:border-[#0F2A43] focus-within:ring-2 focus-within:ring-[#0F2A43]/5 transition-all">
            <FaUser className="text-[#A8A296] text-sm shrink-0" />

            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
              className="w-full text-sm sm:text-base outline-none bg-transparent placeholder:text-[#A8A296]"
            />
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#D8D2C4] focus-within:border-[#0F2A43] focus-within:ring-2 focus-within:ring-[#0F2A43]/5 transition-all">
            <FaRegEnvelope className="text-[#A8A296] text-sm shrink-0" />

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full text-sm sm:text-base outline-none bg-transparent placeholder:text-[#A8A296]"
            />
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#D8D2C4] focus-within:border-[#0F2A43] focus-within:ring-2 focus-within:ring-[#0F2A43]/5 transition-all">
            <FaPhone className="text-[#A8A296] text-sm shrink-0" />

            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="w-full text-sm sm:text-base outline-none bg-transparent placeholder:text-[#A8A296]"
            />
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#D8D2C4] focus-within:border-[#0F2A43] focus-within:ring-2 focus-within:ring-[#0F2A43]/5 transition-all">
            <FaLock className="text-[#A8A296] text-sm shrink-0" />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full text-sm sm:text-base outline-none bg-transparent placeholder:text-[#A8A296]"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-[#A8A296] hover:text-[#0F2A43] transition-colors"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#D8D2C4] focus-within:border-[#0F2A43] focus-within:ring-2 focus-within:ring-[#0F2A43]/5 transition-all">
            <FaLock className="text-[#A8A296] text-sm shrink-0" />

            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full text-sm sm:text-base outline-none bg-transparent placeholder:text-[#A8A296]"
            />

            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="text-[#A8A296] hover:text-[#0F2A43] transition-colors"
            >
              {showConfirm ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0F2A43] text-[#FBF6ED] font-medium py-3 sm:py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#16385A] active:scale-[0.98] transition-all text-sm sm:text-base mt-1"
          >
            Create account
            <FaArrowRight className="text-sm" />
          </button>
        </form>

        <div className="flex items-center gap-3 my-5 sm:my-3">
          <hr className="flex-1 border-[#D8D2C4]" />

          <span className="text-[11px] sm:text-xs text-[#A8A296] whitespace-nowrap">
            or continue with
          </span>

          <hr className="flex-1 border-[#D8D2C4]" />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#D8D2C4] rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-[#F3EEE3] transition-colors">
            <FcGoogle className="text-base sm:text-lg" />
            Google
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 border border-[#D8D2C4] rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-[#F3EEE3] transition-colors">
            <FaApple className="text-base sm:text-lg" />
            Apple
          </button>
        </div>

        <p className="text-center text-xs sm:text-sm text-[#6B7280] mt-5 sm:mt-3">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#0F2A43] font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>

        <div className="flex items-start gap-3 mt-5 sm:mt-3 pt-4 border-t border-[#EDE8DC]">
          <FaShieldAlt className="text-[#E8873A] text-sm mt-0.5 shrink-0" />

          <p className="text-[10px] sm:text-xs text-[#6B7280] leading-relaxed">
            Your data is encrypted and never shared without consent. We follow
            government-grade security standards.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Signup