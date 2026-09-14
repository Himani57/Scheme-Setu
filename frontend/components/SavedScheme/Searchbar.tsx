"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

const Searchbar = () => {
  const [input, setInput] = useState("");
  return (
    <div className="mt-3 py-1.5 px-2 md:py-2.5 rounded-3xl border flex items-center gap-2">
      <Search size={18} />
      <input
        className="w-full outline-none text-sm text-gray-600"
        value={input}
        type="text"
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Search your saved schemes.."
      ></input>
    </div>
  );
};

export default Searchbar;
