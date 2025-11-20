"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent p-10 text-gray-800">
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Mathieu Pernot
        </motion.h1>
        <p className="text-xl text-gray-600">Développeur Web & Mobile</p>

        <div className="flex justify-center gap-4 mt-5">
          <a
            href="mailto:math.pernot30@gmail.com"
            className="inline-flex items-center justify-center gap-2 border px-4 py-2 rounded-xl whitespace-nowrap"
          >
            Me contacter
            <img src="/email.svg" alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Mth3430"
            className="inline-flex items-center justify-center gap-2 border px-4 py-2 rounded-xl whitespace-nowrap"
          >
            GitHub
            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mathieu-pernot"
            className="inline-flex items-center justify-center gap-2 border px-4 py-2 rounded-xl whitespace-nowrap"
          >
            LinkedIn
            <img src="/linkedin.svg" alt="GitHub" className="w-5 h-5" />

          </a>
        </div>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="rounded-2xl shadow-lg bg-white p-6">
                <h3 className="text-xl font-semibold mb-2">Projet {i}</h3>
                <p className="text-gray-600 mb-4">
                  Une courte description du projet réalisé.
                </p>
                <button className="border px-4 py-2 rounded-xl">Voir plus</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center mt-20 text-gray-500">
        © 2025 Pernot Mathieu
      </footer>
    </div>
  );
}
