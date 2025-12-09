"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);


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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f4f6f957] shadow-md transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Ici le lien vers l'accueil */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-800">
          <motion.img
            src="/moi2.png"
            alt="Logo"
            className="w-7 h-7 rounded-2xl"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          Mathieu Pernot
        </Link>

        <div className="flex gap-6 text-gray-800 items-center">
          {/* PROJETS */}
          <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projets"
              className="hover:text-blue-500 transition flash-hover px-2 py-1 rounded"
            >
              Projets
            </Link>
          </motion.div>

          {/* STAGE */}
          <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/erasmus"
              className="hover:text-blue-500 transition flash-hover px-2 py-1 rounded"
            >
              erasmus
            </Link>
          </motion.div>

          {/* CONTACT */}
          <div className="relative">
            <motion.button
              ref={btnRef}
              onClick={() => setOpen(!open)}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-500 transition flash-hover px-2 py-1 rounded"
            >
              Contact
            </motion.button>

            <AnimatePresence>
              {open && (
                <motion.div
                  ref={popupRef}
                  key="contact-popup"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setOpen(false)}
                  className="
            absolute 
            top-full 
            mt-2 
            bg-white 
            shadow-lg 
            rounded-xl 
            p-4 
            flex 
            flex-col 
            gap-3 
            min-w-[160px] 
            max-w-[calc(100vw-20px)] 
            left-1/2 
            -translate-x-1/2
            sm:left-0 
            sm:translate-x-0 
            sm:w-48
          "
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://github.com/Mth3430"
                    className="inline-flex items-center justify-center gap-2 border px-4 py-2 rounded-xl"
                  >
                    GitHub
                    <img src="/icons/github.svg" className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://www.linkedin.com/in/mathieu-pernot"
                    className="inline-flex items-center justify-center gap-2 border px-4 py-2 rounded-xl"
                  >
                    LinkedIn
                    <img src="/icons/linkedin.svg" className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:math.pernot30@gmail.com"
                    className="inline-flex items-center justify-center gap-2 border px-4 py-2 rounded-xl"
                  >
                    Me contacter
                    <img src="/icons/email.svg" className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </nav>
    </header>
  );
}
