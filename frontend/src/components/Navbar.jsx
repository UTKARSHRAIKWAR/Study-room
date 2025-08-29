import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#101323] border-b border-[#21284a]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <svg
            viewBox="0 0 48 48"
            fill="currentColor"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.58 8.58C5.53 11.63 3.45 15.51 2.61 19.75c-.84 4.23-.41 8.61 1.24 12.6 1.65 3.99 4.45 7.39 8.04 9.79 3.59 2.39 7.8 3.67 12.11 3.67s8.52-1.28 12.11-3.67c3.59-2.4 6.39-5.8 8.04-9.79 1.65-3.99 2.08-8.37 1.24-12.6-.84-4.24-2.92-8.12-5.94-11.17L24 24 8.58 8.58Z" />
          </svg>
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
