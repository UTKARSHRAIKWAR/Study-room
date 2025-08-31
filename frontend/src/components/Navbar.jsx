import React, { useState } from "react";
import { Menu, Timer, X } from "lucide-react";
import TimerComp from "./Timer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#101323] border-b border-[#21284a]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <a href="/home">Study Room</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white font-medium">
          <a href="/notes" className="hover:text-[#607afb] transition">
            Notes
          </a>
          <a href="/flashcards" className="hover:text-[#607afb] transition">
            Flashcards
          </a>

          {/* timer */}
          <TimerComp />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4 text-white font-medium">
          <a
            href="/notes"
            className="hover:text-[#607afb] transition"
            onClick={() => setIsOpen(false)}
          >
            Notes
          </a>
          <a
            href="/flashcard"
            className="hover:text-[#607afb] transition"
            onClick={() => setIsOpen(false)}
          >
            Flashcards
          </a>
        </div>
      )}
    </nav>
  );
}
