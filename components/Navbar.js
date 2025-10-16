"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("/");

  useEffect(() => {
    const updateActive = () => {
      const { pathname, hash } = window.location;
      if (hash) {
        setActive(hash);
      } else {
        setActive(pathname || "/");
      }
    };
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);
  return (
<nav
  className="
    fixed top-0 left-0 w-full
    bg-slate-900/90 border-b border-slate-800
    text-white shadow-lg z-50
    py-5 px-6 backdrop-blur-sm
  "
>
      <div className="w-4/5 max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold tracking-wide select-none">
          Flat Pattern
        </a>
        <div className="flex items-center gap-8 text-sm md:text-base">
          <a href="/" className="relative pb-1" onClick={() => setActive("/")}> 
            Home
            {active === "/" && (
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full"></span>
            )}
          </a>
          <a href="#top" className="relative pb-1" onClick={() => setActive("#top")}> 
           Privacy
            {active === "#top" && (
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full"></span>
            )}
          </a>
          <a href="#pricing" className="relative pb-1" onClick={() => setActive("#pricing")}>
           Terms 
            {active === "#pricing" && (
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full"></span>
            )}
          </a>
          <a href="#footer" className="relative pb-1" onClick={() => setActive("#footer")}>
            Contact
            {active === "#footer" && (
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full"></span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}
