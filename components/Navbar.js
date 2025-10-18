"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

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

  const handleLinkClick = (href) => {
    setActive(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="
          fixed top-0 left-0 w-full
          bg-slate-900/90 border-b border-slate-800
          text-white shadow-lg z-50
          py-5 px-6 backdrop-blur-sm relative
        "
      >
        <div className="w-4/5 max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-extrabold tracking-wide select-none">
            Flat Pattern
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
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
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 text-white shadow-lg border-t border-slate-800 md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <a href="/" className="text-lg hover:text-orange-500" onClick={() => handleLinkClick("/")}>
                Home
              </a>
              <a href="#top" className="text-lg hover:text-orange-500" onClick={() => handleLinkClick("#top")}>
               Privacy
              </a>
              <a href="#pricing" className="text-lg hover:text-orange-500" onClick={() => handleLinkClick("#pricing")}>
               Terms
              </a>
              <a href="#footer" className="text-lg hover:text-orange-500" onClick={() => handleLinkClick("#footer")}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
