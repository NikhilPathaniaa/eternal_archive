"use client";

import { motion } from "framer-motion";

export default function SplitScreenSection() {
  return (
    <section className="relative h-screen flex bg-black overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="w-1/2 flex flex-col justify-center px-16 text-white">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold leading-tight"
        >
          Reconnecting Science & Spiritual Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-gray-300 text-lg"
        >
          A global movement to restore human awareness, purpose,
          and emotional alignment.
        </motion.p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
            Learn More
          </button>

          <button className="px-6 py-3 border border-gray-300 text-gray-200 rounded-lg font-semibold">
            Support
          </button>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="w-1/2 relative flex items-center justify-center">
        <motion.img
          src="/placeholder-hero.png"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-[450px]"
        />
      </div>
    </section>
  );
}
