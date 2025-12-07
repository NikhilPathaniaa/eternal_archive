"use client";

import { motion } from "framer-motion";

export default function CornerUniverseSection() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* TOP LEFT */}
      <motion.div
        className="absolute top-10 left-10 text-gray-300"
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
      >
        Mind = Algorithm
      </motion.div>

      {/* TOP RIGHT */}
      <motion.div
        className="absolute top-10 right-10 text-gray-300"
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
      >
        Heart = Compass
      </motion.div>

      {/* BOTTOM LEFT */}
      <motion.div
        className="absolute bottom-10 left-10 text-gray-300"
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
      >
        Soul = Code
      </motion.div>

      {/* BOTTOM RIGHT */}
      <motion.div
        className="absolute bottom-10 right-10 text-gray-300"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
      >
        Universe = Network
      </motion.div>

      {/* CENTER TEXT */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="text-6xl font-bold text-white"
        >
          The Human Blueprint
        </motion.h1>
      </div>
    </section>
  );
}
