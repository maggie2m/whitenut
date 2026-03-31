"use client";

import { useState } from "react";

const navItems = [
  { label: "Services", id: "services" },
  { label: "AI Projects", id: "ai" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 md:px-[60px] py-4 md:py-[18px] bg-[#06080F]/70 backdrop-blur-xl border-b border-[#FF6B35]/15">
      {/* Logo */}
      <div
        className="font-bold text-2xl tracking-tight bg-gradient-to-r from-[#FF6B35] to-[#FFB830] bg-clip-text text-transparent"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        ⬡ Whitenut
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className="text-[#8A95B0] hover:text-[#F0F4FF] text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <button
        onClick={() => scrollTo("contact")}
        className="hidden md:block bg-gradient-to-br from-[#FF6B35] to-[#FFB830] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,107,53,0.5)] cursor-pointer border-none"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Start a Project
      </button>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#F0F4FF] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#F0F4FF] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#F0F4FF] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0D1117]/95 backdrop-blur-xl border-b border-[#FF6B35]/15 flex flex-col items-center gap-4 py-6 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#8A95B0] hover:text-[#F0F4FF] text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 bg-gradient-to-br from-[#FF6B35] to-[#FFB830] text-white font-semibold text-sm px-6 py-2.5 rounded-full border-none cursor-pointer"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
}
