"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

const XlNavabr = () => {
  const [word, setWord] = useState("");
  return (
    <div className="border border-gray-400 h-10 flex items-center gap-3 p-3 rounded-3xl">
      <Search className="text-gray-600 shrink-0" size={20} />
      <input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        type="text"
        placeholder="Search schemes,categories or keywords..."
        className="outline-none border-none w-full text-sm bg-transparent"
      ></input>
    </div>
  );
};

export default XlNavabr;
