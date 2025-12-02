"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Moon } from "lucide-react";

const symbols = [
  { Icon: Sparkles, delay: 0, duration: 4, left: 18, top: 62, drift: 6 },
  { Icon: Star, delay: 1, duration: 5, left: 72, top: 24, drift: -8 },
  { Icon: Moon, delay: 2, duration: 6, left: 41, top: 12, drift: 10 },
  { Icon: Sparkles, delay: 3, duration: 4.5, left: 55, top: 78, drift: -5 },
  { Icon: Star, delay: 1.5, duration: 5.5, left: 30, top: 35, drift: 7 },
];

export default function FloatingSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map(({ Icon, delay, duration, left, top, drift }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${left}%`,
            top: `${top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, drift, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon
            size={20}
            className="text-[#2E5EAA]"
            style={{ opacity: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

