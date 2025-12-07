"use client";

import { motion } from "framer-motion";

export default function SacredGeometryRays({ color = "#9A6AFF" }) {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 origin-left w-[300px] h-px"
          style={{ background: color }}
          initial={{ rotate: i * 15, scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 5,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
