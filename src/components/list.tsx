// export default function List() {
// return (
//           {/* Key Concepts Section */}
//       <section className="relative py-20 px-6 bg-white overflow-hidden">
//         <CreativeBackground />
//         <div className="relative z-10 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-4">
//               Presenting the Truth...
//             </h2>
//           </motion.div>

//           <div className="space-y-16">
//             {/* Light - Quantum Physics */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-gradient-to-r from-[#FDF5D8]/50 to-white p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <Lightbulb className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
//                     Light - Our True Source with Quantum Physics and Einstein's Relativity
//                   </h3>
//                   <p className="text-[#4A3F35]/80 leading-relaxed">
//                     Understanding ourselves as beings of light and soul goes beyond cultural and religious divides, fostering unity and empathy essential for societal harmony. This awareness enhances personal resilience and well-being and promotes sustainable living practices and environmental stewardship.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Human Brain */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-gradient-to-r from-white to-[#FDF5D8]/50 p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <Brain className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
//                     The Human Facade/Brain with Neuroanatomy and Vedic Science
//                   </h3>
//                   <p className="text-[#4A3F35]/80 leading-relaxed">
//                     The human brain functions as a default program and a programmable entity, capable of both constructive and destructive tendencies. Vedic Science simplifies the separation of bits of intelligence within. This knowledge empowers individuals to make informed decisions, navigate life's complexities clearly, and align their actions with their inherent potential.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Suffering and Pleasure */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-gradient-to-r from-[#FDF5D8]/50 to-white p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <Scale className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
//                     Suffering and Pleasure, An Inheritance of Space-time
//                   </h3>
//                   <p className="text-[#4A3F35]/80 leading-relaxed">
//                     Newton's law of Motion and a LIVE Astral Walk into the unconscious mind prove that Energy and Karmic situations travel through time teaching us that we reap what we sow. This knowledge counters mindsets of discrimination based on gender bias, religion, race, Caste, Creed, Color, and Status.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Animals */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-gradient-to-r from-white to-[#FDF5D8]/50 p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <PawPrint className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
//                     Animals - Beings of Purpose
//                   </h3>
//                   <p className="text-[#4A3F35]/80 leading-relaxed">
//                     The effect of Eating meat and its affinity to predatory energy, and its ill effects on health, Body, Mind, and Well-being.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Predatory Energy */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-gradient-to-r from-[#FDF5D8]/50 to-white p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <Zap className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
//                     Predatory Energy
//                   </h3>
//                   <p className="text-[#4A3F35]/80 leading-relaxed">
//                     The souls that didn't make it and how they control us.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Life with Source Energy */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-gradient-to-r from-white to-[#FDF5D8]/50 p-8 rounded-2xl shadow-lg border border-[#C7A945]/30"
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <Target className="text-[#2E5EAA] w-8 h-8 shrink-0 mt-1" />
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
//                     Life with/as Source Energy and Destiny
//                   </h3>
//                   <p className="text-[#4A3F35]/80 leading-relaxed">
//                     Navigating the landscape of Intelligence within us can be challenging. Neural networks are gateways to different possibilities and outcomes of life. To choose life and intelligence sided with spirit demands change within. Change happens with guidance, inspiration, and willpower. Reaching a human's highest potential with fulfillment in their hearts and positive growth in the world is the goal.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
// );
// }