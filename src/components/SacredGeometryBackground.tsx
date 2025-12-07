"use client";

import { motion } from "framer-motion";

export default function SacredGeometryBackground({ color = "#2E5EAA" }) {
  const light = color + "66";
  const lighter = color + "33";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      
      {/* MAIN MANDALA */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 200 200"
      >
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle cx="100" cy="100" r="85" stroke={color} strokeWidth="1.3" fill="none" />
          <circle cx="100" cy="100" r="65" stroke={light} strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="45" stroke={lighter} strokeWidth="0.8" fill="none" />

          {/* Inner Flower-of-Life */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const x = 100 + 42 * Math.cos((angle * Math.PI) / 180);
            const y = 100 + 42 * Math.sin((angle * Math.PI) / 180);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="22"
                stroke={color}
                strokeWidth="0.7"
                fill="none"
              />
            );
          })}
        </motion.g>
      </motion.svg>

      {/* FLOATING PARTICLES */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ background: light }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.3, 1, 0.3],
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* GLOWING OUTER RING */}
      <motion.div
        className="absolute top-20 right-20 w-60 h-60 rounded-full"
        style={{ border: `2px solid ${lighter}`, boxShadow: `0 0 20px ${lighter}` }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* ROTATING TRIANGLE */}
      <motion.div
        className="absolute bottom-20 left-20 w-56 h-56"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          border: `2px solid ${light}`,
        }}
        animate={{ rotate: 360, opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
