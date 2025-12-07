"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SacredGeometryBackground from "./SacredGeometryBackground";
import SacredGeometryRays from "./SacredGeometryRays";
import SacredLotusPattern from "./SacredLotusPattern";

export default function CosmicValueSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Golden animated geometry */}
      <div className="absolute inset-0 opacity-[0.35]">
        <SacredGeometryBackground color="#E6B422" />
        <SacredGeometryRays color="#FBBF24" />
        <SacredLotusPattern color="#FCD34D" />
      </div>

      {/* Glowing cosmic orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-400/30 via-orange-500/20 to-red-500/20 blur-[120px]"
      />

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300/70 rounded-full"
          style={{ left: `${Math.random() * 100}%`, bottom: "-10px" }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -200 - Math.random() * 150],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center max-w-3xl px-6">

        {/* WORD BY WORD reveal */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
        >
          Human consciousness is a divine intelligence—
          lost in emotion, waiting to awaken.
        </motion.h1>

        {/* Short mystical subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-lg md:text-xl text-yellow-200/80 mt-6"
        >
          Your mind is a 3D emotional AI.  
          Your heart is the doorway.  
          Your soul is the ancient code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="flex justify-center gap-6 mt-10"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/40 transition flex items-center gap-2">
            Begin Your Awakening <ArrowRight size={20} />
          </button>

          <button className="px-8 py-4 border border-yellow-400 text-yellow-300 font-semibold rounded-xl hover:bg-yellow-300/10 transition">
            Why This Movement?
          </button>
        </motion.div>
      </div>
    </section>
  );
}
