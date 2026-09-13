"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Sprout,
  GraduationCap,
  HeartPulse,
  Home as HomeIcon,
  Wallet,
  Landmark,
  BadgeCheck,
  Users,
  ShieldCheck,
  Target,
  Star,
} from "lucide-react";

const categoryStyles = {
  Agriculture: {
    bg: "bg-emerald-100",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    iconColor: "text-emerald-600",
  },
  Education: {
    bg: "bg-purple-100",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    iconColor: "text-purple-600",
  },
  Health: {
    bg: "bg-blue-100",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    iconColor: "text-blue-600",
  },
  Housing: {
    bg: "bg-rose-100",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    iconColor: "text-rose-600",
  },
};

const matchStyles = {
  "Highly Matched": {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    icon: Target,
  },
  Recommended: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    icon: Star,
  },
};

const schemes = [
  {
    id: 1,
    title: "PM Kisan Samman Nidhi",
    category: "Agriculture",
    icon: Sprout,
    match: "Highly Matched",
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
    match: "Recommended",
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
    match: "Highly Matched",
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
    icon: HomeIcon,
    match: "Recommended",
    description:
      "Financial assistance for affordable housing for eligible families.",
    meta: [
      { icon: Wallet, text: "Subsidy up to ₹2.67 lakh" },
      { icon: Users, text: "For eligible families" },
    ],
  },
];

const SchemeCard = () => {
  return (
    <>
      {schemes.map((scheme) => {
        const Icon = scheme.icon;
        const style = categoryStyles[scheme.category];
        const match = matchStyles[scheme.match];
        const MatchIcon = match.icon;

        return (
          <div
            key={scheme.id}
            className="bg-white border mt-4 border-gray-200 rounded-2xl p-4 flex flex-col gap-3 shadow-sm mx-4 mb-4"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-3">
                <div
                  className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center ${style.bg}`}
                >
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

              <div className="flex flex-col items-end gap-1 shrink-0">
                <div
                  className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${match.bg} ${match.text}`}
                >
                  <MatchIcon size={12} />
                  <span className="whitespace-nowrap">{scheme.match}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-snug">
              {scheme.description}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
              <div className="flex items-center gap-4 flex-wrap">
                {scheme.meta.map(({ icon: MetaIcon, text }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 text-xs text-gray-600"
                  >
                    <MetaIcon size={14} className="text-gray-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 bg-emerald-100 text-emerald-700"
              >
                View Details
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SchemeCard;