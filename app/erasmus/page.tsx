"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 👉 Places tes photos dans public/ avec ces noms (ou change les chemins ci-dessous).
const introImage = "/IMG5.jpg"; // vue de Cracovie ou photo d'arrivée
const logementImage = "/shed.jpg"; // résidence étudiante, à côté du stade du Wisła Kraków
const ogrodzieniecImage = "/widok.jpg";

const galleryImages = [
  "/IMG1.jpg",
  "/IMG2.jpg",
  "/IMG3.jpg",
  "/IMG4.jpg",
  "/IMG6.jpg",
  "/IMG7.jpg",
  "/IMG8.jpg",
  "/IMG9.jpg",
]; // le reste de tes photos de l'année (château, parc d'attractions, ville, amis...)

const skills = [
  { name: "C", icon: "/icons/c_Logo.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "JavaScript", icon: "/icons/JavaScript_logo.png" },
  { name: "React", icon: "/icons/React-icon.png" },
  { name: "Python (mathématiques)", icon: "/icons/Python-logo.png" },
  { name: "Agile", icon: "/icons/agile.png" },
  { name: "Gestion de projet", icon: null },
  { name: "Polonais (bases)", icon: null },
];

const discoveries = [
  "Exploration des environs de Cracovie, dont le château d'Ogrodzieniec, ayant servi de décor à la série The Witcher",
  "Visite du camp d'Auschwitz-Birkenau, une expérience marquante et nécessaire",
  "Journée dans un parc d'attractions",
  "Découverte de la ville de Cracovie, de son architecture et de son histoire",
  "Découverte de la gastronomie polonaise",
  "Rencontres et amitiés avec des étudiants du monde entier",
  "Immersion dans les coutumes et la vie étudiante polonaise",
];

export default function ErasmusPage() {
  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src="/Flags/poland.png" alt="Pologne" className="w-8 h-6 rounded shadow" />
          <h1 className="text-4xl font-semibold text-gray-800">Erasmus à Cracovie</h1>
        </div>
        <p className="text-gray-500">Une année universitaire en Pologne, en 2024</p>
      </motion.div>

      {/* Présentation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <p className="text-sm text-gray-600 mb-4">
          En 2024, je suis parti à Cracovie, en Pologne, pour une année universitaire
          complète en échange Erasmus. J&apos;y ai vécu dans une résidence étudiante,
          suivi des cours de développement et de gestion de projet, appris les bases du
          polonais, et découvert la ville, sa culture et ses environs.
        </p>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={introImage}
            alt="Cracovie, Pologne"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Logement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Le logement</h2>
        <p className="text-sm text-gray-600 mb-4">
          J&apos;ai vécu toute l&apos;année dans une résidence étudiante (Shed),
          juste à côté du stade du Wisła Kraków, l&apos;un des clubs de football historiques
          de la ville.
        </p>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={logementImage}
            alt="Résidence étudiante à côté du stade du Wisła Kraków"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Etudes / compétences */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Les études</h2>
        <p className="text-sm text-gray-600 mb-4">
          Durant cette année, j&apos;ai suivi des cours de développement et de gestion de
          projet, tout en apprenant les bases du polonais.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full px-3 py-1.5"
            >
              {skill.icon && (
                <img src={skill.icon} alt="" className="w-4 h-4 object-contain" />
              )}
              {skill.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Découvertes / visites */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Découvertes et visites
        </h2>
        <ul className="space-y-2 mb-6">
          {discoveries.map((item) => (
            <li key={item} className="text-sm text-gray-600 flex gap-2">
              <span className="text-gray-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
          château d&apos;Ogrodzieniec
        </p>
        <div className="rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={ogrodzieniecImage}
            alt="Visite de château d'Ogrodzieniec"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Galerie */}
      {galleryImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Galerie photo</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
              >
                <Image src={src} alt="Photo Erasmus" fill className="object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
