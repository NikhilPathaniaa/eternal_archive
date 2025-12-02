"use client";

import { motion } from "framer-motion";

export default function CreativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated wave patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E5EAA" />
            <stop offset="50%" stopColor="#6C4AA1" />
            <stop offset="100%" stopColor="#C7A945" />
          </linearGradient>
        </defs>
        
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M 0 ${200 + i * 200} Q 300 ${150 + i * 200} 600 ${200 + i * 200} T 1200 ${200 + i * 200}`}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.1, 0.3, 0.1],
              d: [
                `M 0 ${200 + i * 200} Q 300 ${150 + i * 200} 600 ${200 + i * 200} T 1200 ${200 + i * 200}`,
                `M 0 ${200 + i * 200} Q 300 ${180 + i * 200} 600 ${200 + i * 200} T 1200 ${200 + i * 200}`,
                `M 0 ${200 + i * 200} Q 300 ${150 + i * 200} 600 ${200 + i * 200} T 1200 ${200 + i * 200}`,
              ],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Floating geometric shapes */}
      {[...Array(12)].map((_, i) => {
        const shapes = ["circle", "triangle", "square"];
        const shape = shapes[i % 3];
        const size = 40 + (i % 4) * 20;
        const left = (i * 8) % 100;
        const top = (i * 12) % 100;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {shape === "circle" && (
              <div className="w-full h-full rounded-full border border-[#2E5EAA]/20" />
            )}
            {shape === "triangle" && (
              <div
                className="w-full h-full border border-[#6C4AA1]/20"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />
            )}
            {shape === "square" && (
              <div className="w-full h-full border border-[#C7A945]/20 rotate-45" />
            )}
          </motion.div>
        );
      })}

      {/* Particle system */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#2E5EAA]"
          style={{
            left: `${(i * 3.7) % 100}%`,
            top: `${(i * 5.3) % 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

