"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Problem {
  text: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
}

const problems = [
  "Religious Violence", "AI Dominance", "Ecology Destruction", "Religious Discrimination",
  "Depression", "Anxiety", "Terrorism", "Mental Abuse", "Gender Discrimination", "Trauma",
  "Casteism", "Animal Abuse", "Illness", "War", "Environment Damage", "Racism",
  "Emotion Dysregulation", "Climate Change"
];

const colors = [
  "#2E5EAA", "#6C4AA1", "#C7A945", "#4A3F35", "#8B4513", "#556B2F", "#8B0000", "#2F4F4F"
];

export default function FloatingProblems() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random positions and properties for each problem
  const generateProblems = (): Problem[] => {
    return problems.map((text, index) => {
      const angle = (index / problems.length) * Math.PI * 2;
      const radius = 200 + Math.random() * 150;
      const centerX = 50;
      const centerY = 50;
      
      return {
        text,
        x: centerX + (radius * Math.cos(angle)) / 10,
        y: centerY + (radius * Math.sin(angle)) / 10,
        size: 0.8 + Math.random() * 0.4,
        delay: index * 0.1,
        color: colors[index % colors.length]
      };
    });
  };

  const [problemData] = useState<Problem[]>(generateProblems());

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
      {/* Animated background SVG patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#2E5EAA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2E5EAA" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Floating circles */}
        {[...Array(15)].map((_, i) => {
          const cx = 200 + ((i * 7) % 80) * 10;
          const cy = 150 + ((i * 11) % 70) * 10;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
                x: [0, Math.sin(i) * 50, 0],
                y: [0, Math.cos(i) * 50, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              <circle
                cx={cx}
                cy={cy}
                r={30 + i * 5}
                fill="url(#glow)"
              />
            </motion.g>
          );
        })}

        {/* Connecting lines */}
        {[...Array(8)].map((_, i) => {
          const angle1 = (i / 8) * Math.PI * 2;
          const angle2 = ((i + 1) / 8) * Math.PI * 2;
          const x1 = 500 + 300 * Math.cos(angle1);
          const y1 = 500 + 300 * Math.sin(angle1);
          const x2 = 500 + 300 * Math.cos(angle2);
          const y2 = 500 + 300 * Math.sin(angle2);
          
          return (
            <motion.g key={i}>
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#2E5EAA"
                strokeWidth="1"
                strokeOpacity="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* Floating problem tags */}
      {problemData.map((problem, index) => (
        <motion.div
          key={problem.text}
          className="absolute cursor-pointer group"
          style={{
            left: `${problem.x}%`,
            top: `${problem.y}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [problem.size, problem.size * 1.1, problem.size],
            rotate: [0, 5, -5, 0],
            y: [0, -20, 0],
            x: [0, Math.sin(index) * 15, 0],
          }}
          transition={{
            duration: 4 + index * 0.2,
            delay: problem.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: problem.size * 1.3,
            zIndex: 50,
            transition: { duration: 0.3 },
          }}
        >
          <div
            className="relative px-4 py-2 rounded-full backdrop-blur-md border-2 shadow-lg"
            style={{
              backgroundColor: `${problem.color}15`,
              borderColor: problem.color,
              color: problem.color,
            }}
          >
            <span className="text-sm md:text-base font-semibold whitespace-nowrap">
              {problem.text}
            </span>
            
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50"
              style={{ backgroundColor: problem.color }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }}
            />
          </div>

          {/* Connecting line to center */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20"
            style={{
              width: "200%",
              height: "200%",
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="50"
              y1="50"
              x2={50 - (problem.x - 50)}
              y2={50 - (problem.y - 50)}
              stroke={problem.color}
              strokeWidth="0.5"
              strokeDasharray="2,2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                delay: problem.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Central focal point */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-[#2E5EAA]/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#2E5EAA]/50 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#2E5EAA] to-[#6C4AA1]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

