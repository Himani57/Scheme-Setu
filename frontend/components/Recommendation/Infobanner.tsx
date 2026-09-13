"use client";

import React from "react";
import { Sparkles, ChevronRight } from "lucide-react";

const InfoBanner = () => (
  <div className="mt-3 h-12 bg-emerald-50 rounded-2xl p-4 flex items-center gap-3">
    <div className="w-9 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
      <Sparkles size={16} className="text-emerald-600" />
    </div>
    <p className="text-sm text-gray-700 flex-1 leading-snug">
      These recommendations are based on your profile and eligibility
      criteria.
    </p>
    <ChevronRight size={18} className="text-gray-500 shrink-0" />
  </div>
);

export default InfoBanner;