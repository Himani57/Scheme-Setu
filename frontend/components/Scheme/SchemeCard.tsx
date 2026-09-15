"use client";

import React from "react";
import {
  Sprout,
  GraduationCap,
  HeartPulse,
  Home,
  ChevronRight,
  ArrowRight,
  Landmark,
  ShieldCheck,
  Users,
  Wallet,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

// Color theme config per category
const categoryStyles = {
  Agriculture: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    iconColor: "text-emerald-600",
    btnBg: "bg-emerald-100",
    btnText: "text-emerald-700",
  },
  Education: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    iconColor: "text-purple-600",
    btnBg: "bg-emerald-100",
    btnText: "text-emerald-700",
  },
  Health: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    iconColor: "text-blue-600",
    btnBg: "bg-emerald-100",
    btnText: "text-emerald-700",
  },
  Housing: {
    bg: "bg-rose-100",
    text: "text-rose-700",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    iconColor: "text-rose-600",
    btnBg: "bg-emerald-100",
    btnText: "text-emerald-700",
  },
};

const schemes = [
  {
    id: 1,
    title: "PM Kisan Samman Nidhi",
    category: "Agriculture",
    icon: Sprout,
    description:
      "Financial support to farmers across India for their agricultural needs.",
    meta: [
      { icon: Wallet, text: "₹6,000 per year" },
      { icon: Landmark, text: "Direct bank transfer" },
    ],
  },
  {
    id: 2,
    title: "Post Matric Scholarship",
    category: "Education",
    icon: GraduationCap,
    description:
      "Financial assistance for SC/ST/OBC students pursuing higher education.",
    meta: [
      { icon: BadgeCheck, text: "Tuition fee support" },
      { icon: Users, text: "For eligible students" },
    ],
  },
  {
    id: 3,
    title: "Ayushman Bharat",
    category: "Health",
    icon: HeartPulse,
    description:
      "Health insurance coverage for eligible families under PM-JAY.",
    meta: [
      { icon: ShieldCheck, text: "Up to ₹5 lakh coverage" },
      { icon: Users, text: "For eligible families" },
    ],
  },
  {
    id: 4,
    title: "Pradhan Mantri Awas Yojana",
    category: "Housing",
    icon: Home,
    description: "Financial assistance for affordable housing for eligible families.",
    meta: [
      { icon: Wallet, text: "Subsidized home loans" },
      { icon: Users, text: "For eligible families" },
    ],
  },
];

const SchemeCard = ({ scheme }) => {
  const Icon = scheme.icon;
  const style = categoryStyles[scheme.category];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-3">
          <div className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center ${style.bg}`}>
            <Icon size={20} className={style.iconColor} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[15px] font-bold text-gray-900 leading-snug">
              {scheme.title}
            </h3>
            <span
              className={`inline-block w-fit text-xs font-medium px-2 py-0.5 rounded-full ${style.badgeBg} ${style.badgeText}`}
            >
              {scheme.category}
            </span>
          </div>
        </div>
        <ChevronRight size={18} className="text-gray-400 shrink-0 mt-1" />
      </div>
      <p className="text-sm text-gray-500 leading-snug">{scheme.description}</p>

      <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
        <div className="flex items-center gap-4 flex-wrap">
          {scheme.meta.map(({ icon: MetaIcon, text }, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
              <MetaIcon size={14} className="text-gray-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-between ">
          <button
          type="button"
          className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 ${style.btnBg} ${style.btnText}`}
        >
          View Details
          <ArrowRight size={14} />
        </button>
        <Link href="/check-eligibility" className="text-sm bg-emerald-100 rounded-3xl py-1 px-2">
          Check-Eligibility -
        </Link>
        </div>
       
      </div>
    </div>
  );
};

const AllSchemesList = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">All Schemes</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1">
          Sort by: Newest
        </button>
      </div>

      {schemes.map((scheme) => (
        <SchemeCard key={scheme.id} scheme={scheme} />
      ))}
    </div>
  );
};

export default AllSchemesList;