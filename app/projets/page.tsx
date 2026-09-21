"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 👉 Pour ajouter un projet, ajoute juste une entrée ici.
const projects = [
  {
    name: "Portfolio personnel",
    description:
      "Mon site portfolio, développé avec Next.js, TypeScript, Tailwind CSS et Framer Motion pour présenter mes projets, mon parcours et mes compétences.",
    features: [
      "Navigation en pages plein écran avec scroll-snap (accueil, compétences, langues)",
      "Compétences regroupées par catégorie (Code, Jeu vidéo, Base de données, Outils)",
      "Page Projets avec fiches détaillées et projet mis en avant",
      "Design entièrement responsive avec animations fluides",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://mathieu-pernot.vercel.app/",
    github: "https://github.com/Mth3430/mathieu-pernot",
  },
  {
    name: "Kinoument",
    description:
      "Comparateur de programmes politiques français : Kinoument scrape automatiquement les propositions de programme des partis depuis tous-les-programmes.fr et les confronte à plus de 6 000 votes parlementaires réels, via un système de matching par thèmes et d'heuristiques strictes. Objectif : donner aux citoyens une vision objective, basée sur les données, des écarts entre promesses électorales et actions réelles au Parlement.",
    features: [
      "Classification automatique : Respecté / Mitigé / Non respecté par proposition",
      "Filtres avancés par statut et par thème (Éducation, Santé, Économie, ...)",
      "Sondages présidentiels avec graphiques (moyennes multi-instituts)",
      "9 partis suivis, mode sombre/clair, interface FR/EN",
    ],
    tech: ["Next.js", "Node.js", "Scraping", "Ollama / Mistral", "Recharts"],
    demo: "https://kinoument.fr",
    github: null,
  },
];

// 👉 Projet mis en avant, affiché seul en dessous de la grille.
// "images" : ajoute des chemins ("/pinnacle1.jpg", ...) une fois tes
// captures d'écran placées dans public/, elles s'afficheront automatiquement.
const featuredProject = {
  name: "Project Pinnacle",
  status: "En développement",
  tagline: "Jeu multijoueur FPS/RTS sur S&box",
  description:
    "Project Pinnacle est un jeu multijoueur en cours de développement sur S&box (le moteur de Facepunch, successeur de Garry's Mod), codé en C#. C'est un hybride FPS/RTS : les joueurs combattent en vue à la première personne tout en gérant une base en temps réel. Deux équipes s'affrontent avec pour objectif de détruire le réacteur nucléaire adverse.",
  mechanics: [
    "Système d'inventaire d'armes (blaster, SMG, railgun, grenade, medikit, building tool)",
    "Achat d'armes et équipements via une armurerie en jeu (crédits gagnés en jouant)",
    "Construction de structures (tourelles, spawn points, armurerie, station médicale, répéteur) avec un système de Build Points par équipe",
    "Zone d'alimentation électrique autour du réacteur — les structures hors zone sont désactivées (répéteurs pour étendre la zone)",
    "Système de spawn avec file d'attente et points de spawn constructibles",
    "HUD custom dessiné entièrement en code (arc de vie/stamina/armure, inventaire, munitions, BP)",
    "Système de cooldown sur la construction/destruction avec visuel circulaire",
    "Multijoueur complet avec synchronisation réseau (Rpc.Broadcast, Rpc.Owner, [Sync])",
    "Vote de map en fin de partie",
  ],
  tech: ["S&box", "C#", "Architecture composant", "Réseau peer-to-peer (Network API)"],
  images: [
    { src: "/image2.png", width: 673, height: 622 },
    { src: "/image3.png", width: 2460, height: 836 },
  ],
};

export default function ProjetsPage() {
  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-center text-gray-800 mb-12"
      >
        Mes projets
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {project.name}
            </h2>
            <p className="text-sm text-gray-600">{project.description}</p>

            <ul className="mt-4 space-y-1.5 flex-1">
              {project.features.map((feature) => (
                <li key={feature} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-gray-700 bg-gray-100 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              {project.demo && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium shadow"
                >
                  Voir le site
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-xl border border-gray-900 text-gray-900 text-sm font-medium"
                >
                  Code source
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== PROJET EN AVANT : PROJECT PINNACLE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {featuredProject.name}
          </h2>
          <span className="text-xs font-medium text-orange-700 bg-orange-100 rounded-full px-3 py-1 animate-pulse">
            {featuredProject.status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">{featuredProject.tagline}</p>
        <p className="text-gray-600 mb-6">{featuredProject.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Mécaniques principales
            </h3>
            <ul className="space-y-2">
              {featuredProject.mechanics.map((mechanic) => (
                <li key={mechanic} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>{mechanic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Stack technique
            </h3>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-gray-700 bg-gray-100 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {featuredProject.images.length > 0 && (
              <div className="mt-6 flex flex-col gap-3">
                {featuredProject.images.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={featuredProject.name}
                    width={img.width}
                    height={img.height}
                    className="rounded-lg w-full max-w-[317px] h-auto"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
