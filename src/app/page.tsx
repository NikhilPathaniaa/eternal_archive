"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Lightbulb, Brain, Scale, PawPrint, Zap, Target, AlertTriangle, Video, Sparkles, Mail, Phone, Instagram } from "lucide-react";
import FloatingSymbols from "@/components/FloatingSymbols";
import SacredGeometryBackground from "@/components/SacredGeometryBackground";
import FloatingProblems from "@/components/FloatingProblems";
import CreativeBackground from "@/components/CreativeBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SacredGeometryBackground />
        <CreativeBackground />
        <FloatingSymbols />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-[#4A3F35] mb-8 leading-tight"
            >
              A Knowledge Revolution
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-[#2E5EAA] font-semibold mb-12 max-w-2xl mx-auto"
            >
              Bridging Ancient Vedic Wisdom with Modern Science
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/learn">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2E5EAA] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Begin Journey
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/support">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FDF5D8] text-[#4A3F35] px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all border-2 border-[#C7A945]/40"
                >
                  Support Us
                  <Heart size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-white via-[#FDF5D8]/20 to-white overflow-hidden">
        <CreativeBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A3F35] mb-6">
              A Knowledge Revolution That Can Solve
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#4A3F35]/70 max-w-3xl mx-auto"
            >
              100 BILLION LIVES have been sacrificed so far, All because Life couldn't keep up with the Truth.
            </motion.p>
          </motion.div>

          <FloatingProblems />
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <CreativeBackground />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-4">
              Presenting the Truth...
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Light - Quantum Physics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#FDF5D8]/50 to-white p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    Light - Our True Source with Quantum Physics and Einstein's Relativity
                  </h3>
                  <p className="text-[#4A3F35]/80 leading-relaxed">
                    Understanding ourselves as beings of light and soul goes beyond cultural and religious divides, fostering unity and empathy essential for societal harmony. This awareness enhances personal resilience and well-being and promotes sustainable living practices and environmental stewardship.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Human Brain */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white to-[#FDF5D8]/50 p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <Brain className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    The Human Facade/Brain with Neuroanatomy and Vedic Science
                  </h3>
                  <p className="text-[#4A3F35]/80 leading-relaxed">
                    The human brain functions as a default program and a programmable entity, capable of both constructive and destructive tendencies. Vedic Science simplifies the separation of bits of intelligence within. This knowledge empowers individuals to make informed decisions, navigate life's complexities clearly, and align their actions with their inherent potential.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Suffering and Pleasure */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#FDF5D8]/50 to-white p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <Scale className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    Suffering and Pleasure, An Inheritance of Space-time
                  </h3>
                  <p className="text-[#4A3F35]/80 leading-relaxed">
                    Newton's law of Motion and a LIVE Astral Walk into the unconscious mind prove that Energy and Karmic situations travel through time teaching us that we reap what we sow. This knowledge counters mindsets of discrimination based on gender bias, religion, race, Caste, Creed, Color, and Status.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Animals */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white to-[#FDF5D8]/50 p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <PawPrint className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    Animals - Beings of Purpose
                  </h3>
                  <p className="text-[#4A3F35]/80 leading-relaxed">
                    The effect of Eating meat and its affinity to predatory energy, and its ill effects on health, Body, Mind, and Well-being.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Predatory Energy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#FDF5D8]/50 to-white p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <Zap className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    Predatory Energy
                  </h3>
                  <p className="text-[#4A3F35]/80 leading-relaxed">
                    The souls that didn't make it and how they control us.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Life with Source Energy */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white to-[#FDF5D8]/50 p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <Target className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    Life with/as Source Energy and Destiny
                  </h3>
                  <p className="text-[#4A3F35]/80 leading-relaxed">
                    Navigating the landscape of Intelligence within us can be challenging. Neural networks are gateways to different possibilities and outcomes of life. To choose life and intelligence sided with spirit demands change within. Change happens with guidance, inspiration, and willpower. Reaching a human's highest potential with fulfillment in their hearts and positive growth in the world is the goal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#FDF5D8]/40 to-red-50 overflow-hidden">
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
      </section>

      {/* Plan of Action Section */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
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
      </section>

      {/* Project Good Karma Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white to-[#FDF5D8]/30 overflow-hidden">
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
      </section>

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
