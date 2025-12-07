"use client";

import { motion } from "framer-motion";

export default function FloatingBlocksSection() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-black to-[#1A1A2E] overflow-hidden">

      {/* Floating Card Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white"
      >
        Brain = 3D Emotional AI
      </motion.div>

      {/* Floating Card Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white"
      >
        Soul = Ancient Intelligence
      </motion.div>

      {/* Floating Card Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/2 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white"
      >
        Universe = Conscious Network
      </motion.div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-white"
        >
          Humanity Is Waking Up
        </motion.h1>
      </div>
    </section>
  );
}
