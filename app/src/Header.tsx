"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-stone-300 shadow-md transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Ici le lien vers l'accueil */}
        <Link href="/" className="font-bold text-xl text-gray-800">
          Mon Portfolio
        </Link>

        <div className="flex gap-6 text-gray-800">
          <Link href="#projets" className="hover:text-blue-500">Projets</Link>
          <Link href="#contact" className="hover:text-blue-500">Contact</Link>
          <Link href="/erasmus" className="hover:text-blue-500">Erasmus</Link>
          <Link href="/stage" className="hover:text-blue-500">Stage</Link>
        </div>
      </nav>
    </header>
  );
}
