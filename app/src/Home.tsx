"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 overflow-hidden">
      {/* ===== IMAGES FLOTTANTES DÉCORATIVES ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none hidden md:block">
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
            Je viens de terminer mes études en cinquième année à Epitech, où j’ai développé de solides compétences en travail d’équipe et un haut niveau de motivation. Mon parcours m’a permis d’acquérir une expérience variée dans plusieurs domaines, notamment les projets graphiques tels que le développement de jeux vidéo, la programmation algorithmique et le développement front-end. Je suis actuellement à la recherche de nouvelles opportunités professionnelles pour continuer à évoluer et mettre mes compétences en pratique.
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
        <div className="flex gap-10">
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            href="linkedin.com/in/mathieu-pernot"
            target="_blank"
            className="px-6 py-2 rounded-xl bg-gray-900 text-white font-medium shadow flex items-center gap-2"
          >
            <img
              src="icons/linkedin-white.png"
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
              src="icons/github-white.png"
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
              src="icons/mail.png"
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
              src="icons/document.png"
              alt="CV"
              className="w-5 h-5 object-contain"
            />
            Télécharger le CV
          </motion.a>
        </div>
      </motion.section>
      <div className="h-70">
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

  const skills = [
    { name: "React", level: 85, color: "bg-green-500", image: "icons/React-icon.png" },
    { name: "Javascript, Typescript", level: 80, color: "bg-green-500", image: "icons/JavaScript_logo.png" },
    { name: "C, C#, C++", level: 90, color: "bg-green-500", image: "icons/c_Logo.png"}, 
    { name: "PHP", level: 75, color: "bg-green-500", image: "icons/PHP_logo.png" },
    { name: "Flutter", level: 65, color: "bg-orange-500", image: "icons/Flutter_logo.png" },
    { name: "Unity, Unreal", level: 65, color: "bg-orange-500", image: "icons/unity_logo.png" },
    { name: "Git, GitHub", level: 90, color: "bg-green-500", image: "icons/git_Logo.png" },
    { name: "PostGreSQL", level: 50, color: "bg-red-500", image: "icons/Postgresql_logo.png" },
    { name: "Docker", level: 60, color: "bg-orange-500", image: "icons/docker_logo.png" },

  ];

  return (
    <section ref={ref} className="mt-24 w-full max-w-xl mx-auto min-h-[300px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Mes compétences
        </h2>

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="mb-5"
          >
            <div className="flex justify-between mb-1 text-sm font-medium text-gray-800">
              <div className="flex items-center gap-2">
                <Image src={skill.image} alt={skill.name} className="w-5 h-5" />
                <span>{skill.name}</span>
              </div>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`${skill.color} h-3 rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const languages = [
  {
    name: "Français",
    flag: "Flags/france.png",
    level: "Natif",
    context: "Langue maternelle",
  },
  {
    name: "Anglais",
    flag: "Flags/uk.png",
    level: "C1",
    context: "Appris à l’école et utilisé dans les projets internationaux",
  },
  {
    name: "Espagnol",
    flag: "Flags/spain.png",
    level: "B1",
    context: "Cours universitaires et voyages en Espagne",
  },
  {
    name: "Polonais",
    flag: "Flags/poland.png",
    level: "A1",
    context: "Erasmus en Pologne",
  },
];

export function LanguagesSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (

    <section ref={ref} className="mt-24 w-full max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-10 text-gray-800">Langues</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
