"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Search,
  Star,
  Bookmark,
  ShieldCheck,
  MessageCircle,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard" },
  { label: "Explore Schemes", icon: Search, path: "/schemes" },
  { label: "My Recommendations", icon: Star, path: "/recommendations" },
  { label: "Saved Schemes", icon: Bookmark, path: "/savedScheme" },
  { label: "Check Eligibility", icon: ShieldCheck, path: "/eligibility" },
  { label: "AI Assistant", icon: MessageCircle, path: "/assistant" },
  { label: "My Profile", icon: User, path: "/profile" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (item) => {
    router.push(item.path);
  };

  return (
    <aside className="hidden lg:flex lg:h-screen lg:w-full lg:flex-col lg:justify-between h-full bg-[#0d3b31] text-white px-5 py-6 relative overflow-hidden">
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-lg font-bold pl-2 leading-tight">
              Scheme<span className="text-emerald-400">Setu</span>
            </h1>
            <p className="text-[11px] pl-2 text-white/60 leading-tight">
              Government Schemes,
              <br />
              Made For You
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const { label, icon: Icon, path } = item;
            const isActive = pathname === path;
            return (
              <button
                key={label}
                type="button"
                onClick={() => handleClick(item)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  isActive
                    ? "border border-emerald-400 text-emerald-400"
                    : "border border-transparent text-white/80"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <p className="text-sm italic text-emerald-300/90 font-medium leading-snug">
          Better Schemes
          <br />
          Brighter Future
        </p>

        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-colors border-t border-white/10 pt-4"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;