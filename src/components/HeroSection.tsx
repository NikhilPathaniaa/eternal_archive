"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Your geometry components
import SacredGeometryBackground from "./SacredGeometryBackground";
import SacredGeometryRays from "./SacredGeometryRays";
import SacredLotusPattern from "./SacredLotusPattern";

const slides = [
  {
    id: 1,
    title: "The Good Karma Project",
    subtitle: "Vedic Wisdom Meets Modern Science",
    description:
      "Explore how ancient sacred sciences influence creativity, human energy, and the modern world. A movement to uplift collective consciousness.",
  },
  {
    id: 2,
    title: "Timeless Symbols, Modern Purpose",
    subtitle: "Sacred Geometry For Creative Minds",
    description:
      "We use ancient geometric structures, yantras, and vibrational patterns to enhance clarity, focus, and energetic alignment.",
  },
  {
    id: 3,
    title: "The Future of Spiritual Design",
    subtitle: "Combining Art, Energy & Intention",
    description:
      "A new approach to creativity—balanced between tradition and innovation—designed to elevate your inner potential.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // 🍃 slow & calm reading experience (10 seconds per slide)
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-[#FAF7F2]">

      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 bg-red-400 flex items-center px-10 py-20">
        <div className="max-w-xl space-y-6">

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-[7rem] font-bold text-gray-800 leading-tight">
                {slide.title}
              </h1>

              <h2 className="text-2xl font-semibold text-gray-600">
                {slide.subtitle}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* RIGHT GEOMETRY VISUAL SECTION */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden">

        {/* STACK ALL GEOMETRY LAYERS */}
        <div className="absolute inset-0">
          <SacredGeometryBackground color="#2E5EAA" />
          <SacredGeometryRays color="#8E44AD" />
          <SacredLotusPattern color="#E67E22" />
        </div>

        {/* Small center glow */}
        <div className="absolute w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>

        {/* SLIDE TITLE ON RIGHT SIDE (Optional visual feedback) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            className="relative z-20 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 opacity-70">
              {slide.title}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* NAV BUTTONS */}
        <button
          onClick={prevSlide}
          className="group flex items-center gap-2 absolute left-5 top-1/2 -translate-y-1/2
          text-gray-700 font-medium bg-white/60 backdrop-blur-xl px-5 py-3 rounded-full shadow-md
          hover:bg-white hover:shadow-xl hover:-translate-x-1 transition-all duration-300 z-30"
        >
          <ArrowLeft size={22} className="transition-transform group-hover:-translate-x-1" />
        </button>

        <button
          onClick={nextSlide}
          className="group flex items-center gap-2 absolute right-5 top-1/2 -translate-y-1/2
          text-gray-700 font-medium bg-white/60 backdrop-blur-xl px-5 py-3 rounded-full shadow-md
          hover:bg-white hover:shadow-xl hover:translate-x-1 transition-all duration-300 z-30"
        >
          <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
