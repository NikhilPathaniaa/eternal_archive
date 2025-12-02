"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Church,
  Users,
  GaugeCircle,
  PawPrint,
  Globe,
  Factory,
  CloudLightning,
  Brain,
  Bot,
  Bomb,
  HeartCrack,
  ShieldAlert,
} from "lucide-react";
import { useRef } from "react";

const problems = [
  { title: "Religious Discrimination", icon: Church },
  { title: "Casteism", icon: Users },
  { title: "Gender Discrimination", icon: GaugeCircle },
  { title: "Animal Abuse", icon: PawPrint },
  { title: "Racism", icon: Globe },
  { title: "Environment Damage", icon: Factory },
  { title: "Climate Change", icon: CloudLightning },
  { title: "Mental Abuse, Anxiety, Depression", icon: Brain },
  { title: "AI Dominance", icon: Bot },
  { title: "War & Terrorism", icon: Bomb },
  { title: "Trauma", icon: HeartCrack },
  { title: "Global Suffering", icon: ShieldAlert },
];

export default function ProblemsWeSolve() {
  const ref = useRef(null);

  // Track scroll inside section for parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax speeds
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const particlesY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Generate star positions
  const generateStars = (count: number, size: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * size + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
  };

  const smallStars = generateStars(200, 1);
  const mediumStars = generateStars(80, 2);
  const largeStars = generateStars(30, 3);

  return (
    <section
      ref={ref}
      className="relative w-full py-28 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
      }}
    >
      {/* ---------- GALAXY/UNIVERSE BACKGROUND ---------- */}
      
      {/* Deep space base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a1a2e] to-[#0f0c29]" />

      {/* Nebula clouds */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500/15 rounded-full blur-[90px]" />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-[80px]" />
      </motion.div>

      {/* Large twinkling stars */}
      <motion.div
        style={{ y: particlesY }}
        className="absolute inset-0 pointer-events-none"
      >
        {largeStars.map((star) => (
          <motion.div
            key={`large-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
            }}
            animate={{
              opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Medium stars */}
      <motion.div
        style={{ y: particlesY }}
        className="absolute inset-0 pointer-events-none"
      >
        {mediumStars.map((star) => (
          <motion.div
            key={`medium-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size}px rgba(255, 255, 255, ${star.opacity})`,
            }}
            animate={{
              opacity: [star.opacity * 0.6, star.opacity, star.opacity * 0.6],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Small stars layer (most numerous) */}
      <motion.div
        style={{ y: particlesY }}
        className="absolute inset-0 pointer-events-none"
      >
        {smallStars.map((star) => (
          <motion.div
            key={`small-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity * 0.7, star.opacity, star.opacity * 0.7],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute pointer-events-none"
          initial={{
            x: `${20 + i * 30}%`,
            y: `${10 + i * 20}%`,
            opacity: 0,
          }}
          animate={{
            x: [`${20 + i * 30}%`, `${80 + i * 10}%`],
            y: [`${10 + i * 20}%`, `${70 + i * 10}%`],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 2,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        >
          <div
            className="w-1 h-20 bg-white"
            style={{
              transform: "rotate(-45deg)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
          />
        </motion.div>
      ))}

      {/* Galaxy spiral effect (subtle) */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-10"
      >
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="spiralGradient">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <motion.path
            d="M 500,500 Q 600,400 700,500 T 900,500"
            fill="none"
            stroke="url(#spiralGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      {/* ---------- CONTENT ---------- */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold text-white"
        >
          What Problems We Can Solve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-300 max-w-2xl mx-auto mt-4"
        >
          We address the deepest wounds of humanity—suffering that spans
          generations, society, and our collective consciousness.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="relative p-7 rounded-2xl bg-white/5 border border-white/10 shadow-xl hover:bg-white/10 backdrop-blur-lg transition group"
              >
                {/* Icon wrapper */}
                <div className="p-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition w-fit mx-auto">
                  <Icon className="w-10 h-10 text-yellow-400" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-white text-lg font-medium">
                  {item.title}
                </h3>

                {/* Glow hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-yellow-400 blur-xl transition"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
