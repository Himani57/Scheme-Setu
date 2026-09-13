"use client";

import React from "react";

const HeroBanner = ({ name = "Himani" }) => (
  <div className="border mt-3 h-35 bg-green-200 rounded-2xl from-emerald-50 to-teal-50 p-3 relative overflow-hidden">
    <div className="max-w-[65%] flex flex-col gap-1 relative z-10">
      <p className="text-sm text-gray-700 flex items-center gap-1">
        Hi {name} <span>👋</span>
      </p>
      <h2 className="text-2xl font-bold text-gray-900 leading-tight">
        My Recommendations
      </h2>
      <p className="text-sm text-gray-600 leading-snug mt-1">
        Personalized schemes based on your profile and eligibility.
      </p>
    </div>
    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-5xl">
      🌱
    </div>
  </div>
);

export default HeroBanner;


