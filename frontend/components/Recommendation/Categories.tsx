"use client";

import React, { useState } from "react";

const categories = [
  { id: 1, label: "All" },
  { id: 2, label: "Education" },
  { id: 3, label: "Agriculture" },
  { id: 4, label: "Health" },
  { id: 5, label: "Employment" },
];

const Categories = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="flex items-center justify-between mt-5">
      {categories.map((item) => (
        <h4
          key={item.id}
          onClick={() => setCategory(item.label)}
          className={`text-sm border px-3 xl:px-4 xl:py-2 py-0.5 rounded-3xl cursor-pointer ${
            category === item.label
              ? "bg-green-600 text-black"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {item.label}
        </h4>
      ))}
    </div>
  );
};

export default Categories;
