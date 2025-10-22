"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, '');
    setActive(normalizedPath);
  }, [pathname]);

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
          py-2 px-6 backdrop-blur-sm relative
        "
      >
        <div className="w-4/5 max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="sheet metal logo" className="h-15 w-auto" />
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
            <a href="/" className="relative pb-1">
              Home
              {active === "/" && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full"></span>
              )}
            </a>
            <a href="/privacy" className="relative pb-1">
             Privacy
              {active === "/privacy" && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full"></span>
              )}
            </a>
            <a href="/terms" className="relative pb-1">
             Terms
              {active === "/terms" && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full"></span>
              )}
            </a>
            <a href="/contact" className="relative pb-1">
              Contact
              {active === "/contact" && (
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
              <a href="/privacy" className="text-lg hover:text-orange-500" onClick={() => handleLinkClick("/privacy")}>
               Privacy
              </a>
              <a href="/terms" className="text-lg hover:text-orange-500" onClick={() => handleLinkClick("/terms")}>
               Terms
              </a>
              <a href="/contact" className="text-lg hover:text-orange-500" onClick={() => handleLinkClick("/contact")}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
