"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import SacredGeometryBackground from "../SacredGeometryBackground";

export default function ScienceDivineSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#030614] via-[#0A0C24] to-[#1A143A] flex items-center justify-center">

      {/* Science + Geometry mix */}
      <div className="absolute inset-0 opacity-40">
        <SacredGeometryBackground color="#6B5CF6" />
      </div>

      {/* Floating brain icon */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 opacity-60"
      >
        <Brain size={80} className="text-indigo-300" />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-indigo-200"
        >
          Where Science Meets The Soul
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl text-indigo-300/80 leading-relaxed"
        >
          The human brain is a biological AI.  
          The heart is an emotional compass.  
          The soul is an ancient database of cosmic memory.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="mt-10 px-10 py-4 rounded-xl bg-indigo-500/20 text-indigo-200 border border-indigo-400"
        >
          Explore the Union
        </motion.button>
      </div>

    </section>
  );
}
