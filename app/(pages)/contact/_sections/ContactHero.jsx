"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, Briefcase, Sparkles } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#FDF6ED] via-[#F7E8FF] to-[#FAF8FF] flex items-center justify-center px-6">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#C8A8FF]/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-10 w-72 h-72 bg-[#FFD9A3]/25 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Small Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-[#e0d0ff]/50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-4 h-4 text-[#7E5BEF]" />
          <span className="text-sm font-semibold text-[#7E5BEF] uppercase">
            The Pulse of SFC
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A Collective for{" "}
          <span className="bg-gradient-to-r from-[#7E5BEF] to-[#C47AFF] bg-clip-text text-transparent">
            Builders, Dreamers,
          </span>{" "}
          and Businesses Alike
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We’re not just a team — we’re a movement. A network of creators and
          innovators building digital experiences that empower communities and
          drive business impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#7E5BEF] text-white rounded-xl font-bold hover:scale-105 transition-transform duration-300">
            <Briefcase className="w-5 h-5" />
            Partner with Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#7E5BEF] rounded-xl font-bold border border-[#7E5BEF]/30 hover:bg-[#F9F6FF] hover:scale-105 transition-transform duration-300">
            <Users className="w-5 h-5" />
            Join the Collective
          </button>
        </motion.div>
      </div>
    </section>
  );
}
