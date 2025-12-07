"use client";

import { motion } from "framer-motion";

export default function SacredLotusPattern({ color = "#FF6F61" }) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-35">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border"
          style={{
            borderColor: color,
            transform: `rotate(${i * 45}deg)`,
            clipPath: "ellipse(50% 30% at 50% 50%)",
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
