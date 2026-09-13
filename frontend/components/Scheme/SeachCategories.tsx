"use client";
import React, { useState } from "react";
import {
  FiSearch,
  FiGrid,
  FiBookOpen,
  FiHeart,
  FiBriefcase,
  FiHome,
  FiUser,
} from "react-icons/fi";

const categories = [
  {
    name: "All",
    icon: <FiGrid />,
  },
  {
    name: "Education",
    icon: <FiBookOpen />,
  },
  {
    name: "Health",
    icon: <FiHeart />,
  },
  {
    name: "Employment",
    icon: <FiBriefcase />,
  },
  {
    name: "Housing",
    icon: <FiHome />,
  },
  {
    name: "Women & Child",
    icon: <FiUser />,
  },
];

const SeachCategories = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <section className="w-full mt-4">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-1 py-2 shadow-sm">
        <FiSearch className="text-2xl text-slate-500" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search schemes, categories..."
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="mt-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#0B3445]">Categories</h2>

          <button className="text-sm font-medium text-[#079669]">
            View All →
          </button>
        </div>

        <div className="flex md:gap-10 gap-2 flex-wrap pb-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex min-w-[80px] flex-col items-center justify-center rounded-2xl px-3 py-1 transition-all
                ${
                  activeCategory === category.name
                    ? "border-2 border-[#079669] bg-[#E8F8F2]"
                    : "border border-slate-100 bg-white shadow-sm"
                }
              `}
            >
              <div
                className={`mb-2 flex h-11 w-11 items-center justify-center rounded-xl text-xl
                  ${
                    activeCategory === category.name
                      ? "bg-[#CFF3E5] text-[#079669]"
                      : "bg-slate-100 text-slate-600"
                  }
                `}
              >
                {category.icon}
              </div>

              <span
                className={`whitespace-nowrap text-xs font-medium
                  ${
                    activeCategory === category.name
                      ? "text-[#079669]"
                      : "text-slate-700"
                  }
                `}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeachCategories;
