"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Éditeur du site",
    content: [
      "Ce site est édité à titre personnel par Mathieu Pernot.",
      "Contact : math.pernot30@gmail.com",
    ],
  },
  {
    title: "Hébergement",
    content: [
      "Ce site est hébergé par Vercel Inc.",
      "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble des contenus présents sur ce site (textes, images, code source, mise en page) est la propriété de Mathieu Pernot, sauf mention contraire.",
      "Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
    ],
  },
  {
    title: "Données personnelles et cookies",
    content: [
      "Ce site ne collecte aucune donnée personnelle et n'utilise aucun cookie de suivi, outil d'analyse ou service publicitaire.",
      "Les seules données transmises le sont volontairement par vous, par exemple si vous utilisez un formulaire de contact ou envoyez un e-mail.",
    ],
  },
  {
    title: "Liens externes",
    content: [
      "Ce site contient des liens vers des sites tiers (GitHub, LinkedIn, projets personnels, etc.) sur lesquels Mathieu Pernot n'exerce aucun contrôle et dont il ne saurait être tenu responsable du contenu.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "Les informations diffusées sur ce site le sont à titre informatif. Mathieu Pernot s'efforce d'en assurer l'exactitude mais ne peut garantir l'absence d'erreurs ou d'interruptions de service.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen w-full max-w-3xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-center text-gray-800 mb-12"
      >
        Mentions légales
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
