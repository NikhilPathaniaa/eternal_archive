"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import FloatingSymbols from "@/components/FloatingSymbols";
import SacredGeometryBackground from "@/components/SacredGeometryBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-white">
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SacredGeometryBackground />
        <FloatingSymbols />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl font-bold text-[#4A3F35] mb-5 leading-tight tracking-tight"
            >
              Eternal Archive
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#4A3F35]/85 mb-6 max-w-3xl md:mx-auto leading-relaxed"
            >
              To learn our historic truth and bring back peace, love, and preservation in our Universe.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-[#4A3F35]/70 mb-10 max-w-2xl md:mx-auto"
            >
              To prevent unnecessary suffering accumulated due to lack of spiritual guidance to our ancestors.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-start md:justify-center"
            >
              <Link href="/learn">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2E5EAA] text-white px-7 py-3.5 rounded-xl font-semibold text-base md:text-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Begin Journey
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/support">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FDF5D8] text-[#4A3F35] px-7 py-3.5 rounded-xl font-semibold text-base md:text-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all border border-[#C7A945]/40"
                >
                  Support Us
                  <Heart size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>
  );
}
