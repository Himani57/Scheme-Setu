"use client";

import React from "react";
import {
  User,
  Calendar,
  Users as GenderIcon,
  Briefcase,
  IndianRupee,
  MapPin,
  GraduationCap,
  UserCheck,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const Form = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-2 shadow-sm border border-black/5 w-full">
      <div className="flex items-center gap-2 mb-1">
        <User size={18} className="text-[#0F3D2E]" />
        <h1 className="font-semibold text-[#0F3D2E] text-base">
          Personal Information
        </h1>
      </div>

      <form className="space-y-2 sm:space-y-2.5 xl:space-y-3 lg:space-y-3">
        <div>
          <label className="text-[13px] font-medium text-[#22362B] mb-1 block">
            Full Name<span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white">
            <User size={16} className="text-[#0F3D2E]/60 shrink-0" />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
              Age<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white">
              <Calendar size={16} className="text-[#0F3D2E]/60 shrink-0" />
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
              Gender<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white">
              <GenderIcon size={16} className="text-[#0F3D2E]/60 shrink-0" />
              <select
                defaultValue=""
                className="w-full text-sm text-[#22362B] outline-none bg-transparent appearance-none"
              >
                <option value="" disabled className="text-gray-400">
                  Select gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
            Occupation<span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-emerald-500/30 focus-within:border-emerald-500">
            <Briefcase size={16} className="text-[#0F3D2E]/60 shrink-0" />
            <input
              type="text"
              placeholder="Write occupation"
              className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
            Annual Income<span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-emerald-500/30 focus-within:border-emerald-500">
            <IndianRupee size={16} className="text-[#0F3D2E]/60 shrink-0" />
            <input
              type="text"
              placeholder="Write your income"
              className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
              State<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-emerald-500/30 focus-within:border-emerald-500">
              <MapPin size={16} className="text-[#0F3D2E]/60 shrink-0" />
              <input
                type="text"
                placeholder="Write state"
                className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
              District<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-emerald-500/30 focus-within:border-emerald-500">
              <MapPin size={16} className="text-[#0F3D2E]/60 shrink-0" />
              <input
                type="text"
                placeholder="Write district"
                className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
              Education<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-emerald-500/30 focus-within:border-emerald-500">
              <GraduationCap size={16} className="text-[#0F3D2E]/60 shrink-0" />
              <input
                type="text"
                placeholder="Write education level"
                className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="text-[13px] font-medium text-[#22362B] mb-1.5 block">
              Category
              <span className="text-[11px] text-gray-400 font-normal ml-1">
                (if applicable)
              </span>
            </label>
            <div className="flex items-center gap-2 border border-[#DCE5DF] rounded-xl px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-emerald-500/30 focus-within:border-emerald-500">
              <UserCheck size={16} className="text-[#0F3D2E]/60 shrink-0" />
              <input
                type="text"
                placeholder="Write category"
                className="w-full text-sm text-[#22362B] placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 bg-[#EAF6EE] rounded-xl p-1">
          <Lightbulb size={16} className="text-emerald-600 mt-0.5 shrink-0" />
          <p className="text-[10px] text-[#2F4A3B] leading-relaxed">
            The information will be used only to recommend relevant schemes
            and will be kept secure and private.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0F3D2E] hover:bg-[#0C3125] text-white font-semibold rounded-xl py-2 flex items-center justify-center gap-2 transition-colors"
        >
          Save & Continue
          <ArrowRight size={17} />
        </button>
      </form>
    </div>
  );
};

export default Form;
