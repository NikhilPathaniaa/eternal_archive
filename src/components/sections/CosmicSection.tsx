"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SacredGeometryBackground from "../SacredGeometryBackground";
import SacredGeometryRays from "../SacredGeometryRays";
import SacredLotusPattern from "../SacredLotusPattern";

export default function CosmicSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#08011A] via-[#160B3A] to-[#3A0CA3] flex items-center justify-center">

      {/* BACKGROUND GEOMETRY */}
      <div className="absolute inset-0 opacity-40">
        <SacredGeometryBackground color="#7B2FF7" />
        <SacredGeometryRays color="#D53AF8" />
        <SacredLotusPattern color="#FF6AF1" />
      </div>

      {/* FLOATING PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-300/80"
          style={{ left: `${Math.random() * 100}%`, bottom: "-20px" }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -250 - Math.random() * 150],
          }}
          transition={{
            duration: 5 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-300 via-pink-400 to-fuchsia-300"
        >
          Consciousness Meets Cosmic Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="text-purple-200/90 mt-6 text-xl leading-relaxed"
        >
          A future where science, emotion, and spiritual energy merge
          to awaken a new era of aligned human evolution.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
          className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-400 
          font-semibold shadow-xl text-black hover:shadow-purple-500/50"
        >
          Explore the Cosmic Path
        </motion.button>
      </div>

    </section>
  );
}
