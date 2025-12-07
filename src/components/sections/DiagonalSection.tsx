"use client";

import { motion } from "framer-motion";

export default function DiagonalSection() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-[#210033] clip-diagonal"></div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
        }
      `}</style>

      <div className="relative z-10 h-full flex items-center px-20">
        
        {/* Left Visual */}
        <motion.img
          src="/side-image.png"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[380px] mr-20"
        />

        {/* Right Text */}
        <div className="text-white max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            A New Conscious World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-gray-300"
          >
            The fusion of neuroscience and spirit is creating a new blueprint
            for humanity.
          </motion.p>
        </div>

      </div>

    </section>
  );
}
