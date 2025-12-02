"use client";

import { motion } from "framer-motion";

export default function SacredGeometryBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {/* Mandala SVG */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="#2E5EAA" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#2E5EAA" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#2E5EAA" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#2E5EAA" strokeWidth="0.5" />
          
          {/* Flower of Life pattern */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const x = 100 + 40 * Math.cos((angle * Math.PI) / 180);
            const y = 100 + 40 * Math.sin((angle * Math.PI) / 180);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="20"
                fill="none"
                stroke="#2E5EAA"
                strokeWidth="0.5"
              />
            );
          })}
        </motion.g>
      </svg>

      {/* Additional geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border border-[#2E5EAA]/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 border border-[#6C4AA1]/20"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

