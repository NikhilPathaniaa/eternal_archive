"use client";

import CreativeBackground from "@/components/CreativeBackground";
import Hero1 from "@/components/Hero1";
import HeroSection from "@/components/HeroSection";
import KnowledgeCircle from "@/components/KnowledgeCircle";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import CinematicStorySection from "@/components/sections/CinematicStorySection";
import CornerUniverseSection from "@/components/sections/CornerUniverseSection";
import CosmicSection from "@/components/sections/CosmicSection";
import DiagonalSection from "@/components/sections/DiagonalSection";
import FloatingBlocksSection from "@/components/sections/FloatingBlocksSection";
import GoldenVedicSection from "@/components/sections/GoldenVedicSection";
import ScienceDivineSection from "@/components/sections/ScienceDivineSection";
import SplitScreenSection from "@/components/sections/SplitScreenSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import { motion } from "framer-motion";
import { AlertTriangle, Heart, Instagram, Mail, Phone, Sparkles, Target, Video } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection />
      {/* <Hero1 /> */}
      <section>
        <ValuePropositionSection/>
      </section>
      <section>
        <CinematicStorySection />
        <CosmicSection />
        <ScienceDivineSection />
        <GoldenVedicSection />
        <SplitScreenSection />
        <FloatingBlocksSection />
        <DiagonalSection />
        <CornerUniverseSection />
      </section>
      {/* Problems We Solve Section */}
      <section>
        {/* <ProblemsWeSolve /> */}
      </section>
      
      {/* Knowledge Circle Section */}
      <section>
        {/* <KnowledgeCircle /> */}
      </section>

      {/* Urgency Section */}
      {/* <section className="relative py-20 px-6 bg-gradient-to-b from-[#FDF5D8]/40 to-red-50 overflow-hidden">
        <CreativeBackground />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <AlertTriangle className="text-red-600 w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-red-700 mb-6">
              THE WORLD IS HEADED TO DOOM
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 p-6 rounded-xl shadow-lg"
            >
              <p className="text-lg text-[#4A3F35] mb-4">
                <strong>98%</strong> of people have no idea about the consequence of their nature and unconsciously continue to exploit life and others.
              </p>
              <p className="text-lg text-[#4A3F35] mb-4">
                All Minorities including women have faced some kind of discrimination.
              </p>
              <p className="text-lg text-[#4A3F35]">
                Humans have <strong>100%</strong> forgotten about their true nature.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 p-6 rounded-xl shadow-lg"
            >
              <p className="text-lg text-[#4A3F35] mb-4">
                <strong>1.8 in 2 people</strong> have undiagnosed depression, Poor emotion regulation and emotion suppression tendencies leading to Illness, loop living and disconnection.
              </p>
              <p className="text-lg text-[#4A3F35] mb-4">
                We are at a time in history where humans and animals are at their most Vulnerable enduring all kinds of exploitation, most even without realising.
              </p>
              <p className="text-lg text-[#4A3F35]">
                <strong>99 percent</strong> of our Bodies, minds and our natural resources and life inside it has been altered.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-red-100 p-8 rounded-2xl border-4 border-red-500"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">
              IMMEDIATE ACTION IS NEEDED NOW
            </h3>
          </motion.div>
        </div>
      </section> */}

      {/* Plan of Action Section */}
      {/* <section className="relative py-20 px-6 bg-white overflow-hidden">
        <CreativeBackground />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-4">
              Plan of Action
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#FDF5D8]/50 p-6 rounded-xl border border-[#C7A945]/30"
            >
              <Video className="text-[#2E5EAA] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-[#4A3F35] mb-3">
                High-Tech Animation Videos
              </h3>
              <p className="text-[#4A3F35]/80">
                To deliver knowledge using high tech animation videos comprehensive to all age groups irrespective of boundaries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#FDF5D8]/50 p-6 rounded-xl border border-[#C7A945]/30"
            >
              <Sparkles className="text-[#2E5EAA] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-[#4A3F35] mb-3">
                Fuel Inner Wisdom
              </h3>
              <p className="text-[#4A3F35]/80">
                To fuel inner wisdom and change our current course of thinking subjugating damage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#FDF5D8]/50 p-6 rounded-xl border border-[#C7A945]/30"
            >
              <Target className="text-[#2E5EAA] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-[#4A3F35] mb-3">
                World Realised of Truth
              </h3>
              <p className="text-[#4A3F35]/80">
                See a world realised of the truth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#FDF5D8]/50 p-6 rounded-xl border border-[#C7A945]/30"
            >
              <Heart className="text-[#2E5EAA] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-[#4A3F35] mb-3">
                Only Smiles and Support
              </h3>
              <p className="text-[#4A3F35]/80">
                Only smiles and support on Planet Earth :)
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Project Good Karma Section */}
      {/* <section className="relative py-20 px-6 bg-linear-to-b from-white to-[#FDF5D8]/30 overflow-hidden">
        <CreativeBackground />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-6">
              PROJECT GOOD KARMA
            </h2>
            <p className="text-xl md:text-2xl text-[#2E5EAA] font-semibold mb-8">
              A commitment to create a new tomorrow by bridging the gap between spirit and mind.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#4A3F35] mb-12">
              An investment of the Future.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="relative py-20 px-6 bg-[#4A3F35] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-8 text-white/90">
              Get in touch with Swekrathi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="https://wa.me/6366600705"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all border border-white/20"
            >
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <p className="font-semibold mb-2">WhatsApp</p>
              <p className="text-sm text-white/80">6366600705</p>
            </motion.a>

            <motion.a
              href="mailto:Goodkarmaatwork@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all border border-white/20"
            >
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <p className="font-semibold mb-2">Email</p>
              <p className="text-sm text-white/80">Goodkarmaatwork@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://instagram.com/Thegoodkarmaproject"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all border border-white/20"
            >
              <Instagram className="w-8 h-8 mx-auto mb-4" />
              <p className="font-semibold mb-2">Instagram</p>
              <p className="text-sm text-white/80">@Thegoodkarmaproject</p>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}
