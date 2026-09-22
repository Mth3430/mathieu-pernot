"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export default function Portfolio() {
  const floatingImages = [
    { src: "/autre.png", top: "25%", left: "5%" },
    { src: "/autresnd.png", top: "50%", left: "14%" },
    { src: "/croixfrst.png", top: "80%", left: "5%" },
    { src: "/croixsnd.png", top: "85%", left: "17%" },
    { src: "/croixsnd.png", top: "8%", left: "20%" },
    { src: "/croixsnd.png", top: "50%", right: "4%" },
    { src: "/autre.png", top: "90%", right: "5%" },
    { src: "/croixfrst.png", top: "70%", right: "12%" },
    { src: "/autresnd.png", top: "5%", right: "5%" },
    { src: "/croixfrst.png", top: "25%", right: "8%" },

  ];

  return (
    <main className="relative">
      {/* ===== IMAGES FLOTTANTES DÉCORATIVES ===== */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none hidden md:block">
        {floatingImages.map((img, i) => {
          const direction = i % 2 === 0 ? 360 : -360; // 👈 sens aléatoire gauche / droite

          return (
            <motion.img
              key={i}
              src={img.src}
              className="w-24 absolute"
              style={{
                top: img.top,
                left: img.left,
                right: img.right,
              }}
              animate={{ rotate: direction }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>
      {/* ===== PAGE 1 : HERO + CONTACT ===== */}
      <div className="min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center px-6">
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl w-full mx-auto text-center md:text-left">

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="self-center"
        >
          <Image
            src="/moi.jpg"
            alt="Photo de moi"
            width={224}
            height={224}
            className="object-cover rounded-full shadow-lg"
          />
        </motion.div>

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Mathieu Pernot
          </h1>
          <p className="text-gray-700 max-w-md">
            Bonjour ! 
            J’ai terminé mes études en cinquième année à Epitech, où j’ai développé de solides compétences en travail d’équipe et un haut niveau de motivation. Mon parcours m’a permis d’acquérir une expérience variée dans plusieurs domaines, notamment les projets graphiques tels que le développement de jeux vidéo, la programmation algorithmique et le développement front-end. Je suis actuellement à la recherche de nouvelles opportunités professionnelles pour continuer à évoluer et mettre mes compétences en pratique.
          </p>
        </motion.div>
      </section>

      {/* ===== DISPONIBILITÉ + CONTACT ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 flex flex-col items-center gap-6"
      >
        {/* BULLE VERTE DISPONIBLE */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-5 py-2 rounded-full bg-green-500 text-white text-sm font-semibold shadow-lg"
        >
          ✅ Disponible pour toute opportunité
        </motion.div>

        {/* BOUTONS CONTACT */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/mathieu-pernot"
            target="_blank"
            className="px-6 py-2 rounded-xl bg-gray-900 text-white font-medium shadow flex items-center gap-2"
          >
            <img
              src="/icons/linkedin-white.png"
              alt="LinkedIn"
              className="w-5 h-5 object-contain"
            />
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(100,100,100,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Mth3430"
            target="_blank"
            className="px-6 py-2 rounded-xl bg-gray-900 text-white font-medium shadow flex items-center gap-2"
          >
            <img
              src="/icons/github-white.png"
              alt="github"
              className="w-5 h-5 object-contain"
            />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(0,100,0,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:math.pernot30@gmail.com"
            target="_blank"
            className="px-6 py-2 rounded-xl bg-gray-900 text-white font-medium shadow flex items-center gap-2"
          >
            <img
              src="/icons/mail.png"
              alt="Mail"
              className="w-5 h-5 object-contain"
            />
            Contact
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(100,0,0,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            href="/CV_mathieu_pernot.pdf"
            target="_blank"
            className="px-6 py-2 rounded-xl bg-gray-900 text-white font-medium shadow flex items-center gap-2"
          >
            <img
              src="/icons/document.png"
              alt="CV"
              className="w-5 h-5 object-contain"
            />
            Télécharger le CV
          </motion.a>
        </div>
      </motion.section>
      </div>
      {/* SKILLS */}
      <SkillsSection />
      {/* LANGUES */}
      <LanguagesSection />
    </main>
  );
}


export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const isMobile = useIsMobile();

  // valeur de "category" crée automatiquement une nouvelle grille.
  const skills = [
    // Front-End
    { name: "React", image: "/icons/React-icon.png", category: "Front-End" },
    { name: "Vue.js", image: "/icons/vue.png", category: "Front-End" },
    { name: "Flutter", image: "/icons/Flutter_logo.png", category: "Front-End" },
    { name: "HTML, CSS", image: "/icons/html-css.png", category: "Front-End" },
    { name: "JavaScript", image: "/icons/JavaScript_logo.png", category: "Front-End" },

    // Back-End
    { name: "PHP", image: "/icons/PHP_logo.png", category: "Back-End" },
    { name: "Java, Spring Boot", image: "/icons/java.png", category: "Back-End" },
    { name: "Python 3", image: "/icons/Python-logo.png", category: "Back-End" },
    { name: "C / C++ / C#", image: "/icons/c_Logo.png", category: "Back-End" },
    { name: "SQL", image: "/icons/Sql.png", category: "Back-End" },

    // Outils & méthodes
    { name: "Git, GitHub", image: "/icons/git_Logo.png", category: "Outils & méthodes" },
    { name: "Linux", image: "/icons/tux.png", category: "Outils & méthodes" },
    { name: "Docker", image: "/icons/docker_logo.png", category: "Outils & méthodes" },
    { name: "CI/CD", image: "/icons/ci-cd.png", category: "Outils & méthodes" },
    { name: "API REST", image: "/icons/rest.png", category: "Outils & méthodes" },
    { name: "Tests unitaires", image: "/icons/unitaire.png", category: "Outils & méthodes" },
    { name: "Agile / Scrum", image: "/icons/agile.png", category: "Outils & méthodes" },
    { name: "DevOps", image: "/icons/DevOps.png", category: "Outils & méthodes" },

    // Game dev
    { name: "Unity", image: "/icons/unity_logo.png", category: "Game dev" },
    { name: "Unreal Engine", image: "/icons/unreal.png", category: "Game dev" },
    { name: "Source 2 (S&box)", image: "/icons/s2.png", category: "Game dev" },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section ref={ref} className="min-h-screen w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-6">
      <motion.div
        initial={isMobile ? false : { opacity: 0 }}
        animate={isMobile || inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">
          Mes compétences
        </h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={isMobile ? false : { opacity: 0, y: 30 }}
                      animate={isMobile || inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="flex flex-col items-center justify-center gap-2 w-32 px-2 py-4 rounded-xl border border-gray-200 bg-white/10 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Image src={skill.image} alt={skill.name} width={48} height={48} className="w-12 h-12 object-contain" />
                      <span className="text-base font-medium text-gray-800 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const languages = [
  {
    name: "Français",
    flag: "/Flags/france.png",
    level: "Natif",
    context: "Langue maternelle",
  },
  {
    name: "Anglais",
    flag: "/Flags/uk.png",
    level: "C1",
    context: "Appris à l’école et utilisé dans les projets internationaux",
  },
  {
    name: "Espagnol",
    flag: "/Flags/spain.png",
    level: "B1",
    context: "Cours universitaires et voyages en Espagne",
  },
  {
    name: "Polonais",
    flag: "/Flags/poland.png",
    level: "A1",
    context: "Erasmus en Pologne",
  },
];

export function LanguagesSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const isMobile = useIsMobile();
  return (

    <section ref={ref} className="min-h-screen w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={isMobile ? false : { opacity: 0 }}
        animate={isMobile || inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-10 text-gray-800">Langues</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              animate={isMobile ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center justify-start rounded-xl  p-4 w-52 h-64"
            >
              <Image
                src={lang.flag}
                alt={`${lang.name} flag`}
                width={80}
                height={50}
                className="rounded shadow"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-800">{lang.name}</h3>
              <span className="text-sm font-semibold text-gray-600">{lang.level}</span>
              <p className="mt-2 text-sm text-gray-500">{lang.context}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
