"use client";

import { motion } from "framer-motion";
import { Sunrise } from "lucide-react";
import SacredGeometryBackground from "../SacredGeometryBackground";
import SacredLotusPattern from "../SacredLotusPattern";

export default function GoldenVedicSection() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#1A1200] to-[#4A3800] overflow-hidden flex items-center justify-center">

      {/* GOLDEN GEOMETRY */}
      <div className="absolute inset-0 opacity-[0.28]">
        <SacredGeometryBackground color="#E2B714" />
        <SacredLotusPattern color="#FFCF67" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center mb-6"
        >
          <Sunrise size={60} className="text-amber-300" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-amber-300 to-yellow-500 tracking-wide"
        >
          Ancient Wisdom for a New Earth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="mt-6 text-amber-200/80 text-xl leading-relaxed"
        >
          Vedic truth, sacred symbols, and the eternal science of consciousness
          reimagined for modern humanity.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="mt-10 px-10 py-4 rounded-xl border border-amber-300 text-amber-200 
          hover:bg-amber-300/10 font-semibold"
        >
          Enter the Vedic Realm
        </motion.button>
      </div>

    </section>
  );
}
