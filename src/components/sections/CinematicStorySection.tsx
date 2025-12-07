"use client";

import { motion } from "framer-motion";

export default function CinematicStorySection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Background video / image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/story-bg.jpg')" }}
      ></div>

      {/* TEXT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-10 text-center max-w-3xl mx-auto">
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          The World Is Changing.
          <br />
          A New Consciousness Is Rising.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="mt-6 text-xl text-gray-300"
        >
          This movement exists to rewrite the emotional, spiritual,
          and scientific understanding of what it means to be human.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-10 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white"
        >
          Begin the Journey
        </motion.button>
      </div>
    </section>
  );
}
