"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Qui suis-je",
    content: [
      "Je m'appelle Mathieu Pernot, je viens de terminer mes études en cinquième année à Epitech. J'ai développé une expérience variée dans plusieurs domaines : développement de jeux vidéo, programmation algorithmique et développement front-end.",
      "Je suis actuellement à la recherche de nouvelles opportunités professionnelles pour continuer à évoluer et mettre mes compétences en pratique.",
    ],
  },
  {
    title: "Le site",
    content: [
      "Ce portfolio a été conçu pour présenter mon parcours, mes compétences et mes projets. Il est développé avec Next.js, TypeScript, Tailwind CSS et Framer Motion pour les animations.",
      "Le code source est disponible publiquement sur GitHub.",
    ],
  },
  {
    title: "Confidentialité",
    content: [
      "Ce site ne collecte aucune donnée personnelle et n'utilise ni cookie de suivi ni outil d'analyse. Aucune information sur votre navigation n'est enregistrée.",
    ],
  },
];

export default function AProposPage() {
  return (
    <div className="min-h-screen w-full max-w-3xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-center text-gray-800 mb-12"
      >
        À propos
      </motion.h1>

      <div className="flex flex-col gap-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.content.map((paragraph) => (
                <p key={paragraph} className="text-sm text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
