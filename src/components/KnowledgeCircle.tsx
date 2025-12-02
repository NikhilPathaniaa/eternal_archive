"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Brain, Hourglass, PawPrint } from "lucide-react";
import { useRef } from "react";

export default function KnowledgeCircle() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "160deg"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen py-32 overflow-hidden flex items-center justify-center"
    >
      {/* ---------- SOFT HEALING BACKGROUND ---------- */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-white to-blue-200 opacity-80"
      />

      {/* Soft sun glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-yellow-200/40 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-300/30 blur-3xl opacity-50" />

      {/* Light particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.1, scale: 0.4 }}
            animate={{
              opacity: Math.random() * 0.8 + 0.2,
              scale: Math.random() + 0.7,
              x: Math.random() * 1400 - 700,
              y: Math.random() * 900 - 450,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute block w-3 h-3 rounded-full bg-white/70 blur-[3px]"
          />
        ))}
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-semibold text-gray-900 text-center mb-6"
        >
          Bridging Science & Vedic Wisdom
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 text-xl text-center max-w-3xl mx-auto"
        >
          Four fundamental truths that explain human existence through  
          <span className="font-semibold text-gray-900"> Light, Mind, Karma, and Life.</span>
        </motion.p>

        {/* ---------- HEALING KNOWLEDGE FIELD ---------- */}
        <div className="relative mt-28 w-full h-[650px] flex items-center justify-center">

          {/* Rotating soft ring */}
          <motion.div
            style={{ rotate: ringRotate }}
            className="absolute w-[520px] h-[520px] rounded-full border border-white/40 blur-[1px]"
          />

          {/* Center mandala */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-56 h-56 rounded-full bg-white/40 backdrop-blur-md border border-gray-300/50 flex items-center justify-center shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="text-gray-700 text-4xl"
            >
              ✦
            </motion.div>
          </motion.div>

          {/* ---- FOUR PILLARS FAR SPACED ---- */}

          {/* Light */}
          <div className="absolute top-0 flex flex-col items-center w-64">
            <Sun className="w-14 h-14 text-yellow-600" />
            <h3 className="text-gray-900 text-xl font-semibold mt-3">
              Light — Our True Source
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Quantum physics and Vedic truth reveal our energetic nature.
            </p>
          </div>

          {/* Brain */}
          <div className="absolute right-0 flex flex-col items-center w-64">
            <Brain className="w-14 h-14 text-blue-600" />
            <h3 className="text-gray-900 text-xl font-semibold mt-3">
              The Human Brain as a Program
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Mind as a programmable interface guided by Vedic intelligence.
            </p>
          </div>

          {/* Karma */}
          <div className="absolute bottom-0 flex flex-col items-center w-64">
            <Hourglass className="w-14 h-14 text-purple-600" />
            <h3 className="text-gray-900 text-xl font-semibold mt-3">
              Suffering & Pleasure — Space-Time
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Energy and karma flow across lifetimes shaping our experiences.
            </p>
          </div>

          {/* Animals */}
          <div className="absolute left-0 flex flex-col items-center w-64">
            <PawPrint className="w-14 h-14 text-green-700" />
            <h3 className="text-gray-900 text-xl font-semibold mt-3">
              Animals — Beings of Purpose
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Understanding predatory energy and its impact on human well-being.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
