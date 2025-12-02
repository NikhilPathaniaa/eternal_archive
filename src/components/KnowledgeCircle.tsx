"use client";

import { motion } from "framer-motion";
import { Sun, Brain, Hourglass, PawPrint } from "lucide-react";

export default function KnowledgeCircle() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-100 flex items-center justify-center px-6">
      {/* ---- Golden Meditation Background ---- */}
      <motion.img
        src="/meditation-gold.png"
        alt="Golden Meditation Outline"
        className="absolute inset-0 m-auto w-[750px] opacity-[0.08] pointer-events-none"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Subtle radial light behind everything */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,223,128,0.28),transparent_60%)] pointer-events-none"></div>

      {/* Soft floating dust particles */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 text-center"
        >
          Bridging Science & Vedic Wisdom
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mt-4"
        >
          Four foundational truths that shape the human experience — scientifically and spiritually.
        </motion.p>

        {/* FOUR PILLARS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">

          {/* ---- LIGHT ---- */}
          <Item
            icon={<Sun className="w-10 h-10 text-yellow-600" />}
            title="Light — Our True Source"
            desc="Quantum physics and Vedic wisdom unite: life originates from consciousness, light, and subtle energy."
          />

          {/* ---- BRAIN ---- */}
          <Item
            icon={<Brain className="w-10 h-10 text-blue-600" />}
            title="The Human Brain as a Program"
            desc="The mind is a programmable interface of tendencies, emotions, and patterns defined by Vedic intelligence."
          />

          {/* ---- KARMA ---- */}
          <Item
            icon={<Hourglass className="w-10 h-10 text-purple-600" />}
            title="Suffering & Pleasure Through Space-Time"
            desc="Karmic outcomes travel through motion and time, shaping experiences across life patterns."
          />

          {/* ---- ANIMALS ---- */}
          <Item
            icon={<PawPrint className="w-10 h-10 text-green-700" />}
            title="Animals — Beings of Purpose"
            desc="All beings play essential roles in energy ecosystems; predatory energy impacts human state and behavior."
          />

        </div>
      </div>
    </section>
  );
}

function Item({ icon, title, desc }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start md:items-center text-left md:text-center px-4"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
