"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Zap, Sparkles, Infinity } from "lucide-react";

export default function Pulse() {
  const phrases = [
    "Code is our canvas.",
    "Curiosity is our heartbeat.",
    "We breathe in ideas — and exhale creation.",
    "Every keystroke, a brushstroke in motion.",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0a0118] text-white py-40">
      {/* Glowing gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[15%] left-[20%] w-32 h-32 bg-gradient-to-br from-purple-500/40 to-pink-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[15%] w-40 h-40 bg-gradient-to-br from-pink-400/30 to-violet-600/20 rounded-full blur-3xl"
      />

      {/* Core Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Icon Animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="p-6 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-lg mb-8"
        >
          <HeartPulse className="w-12 h-12 text-purple-400" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-10 leading-tight"
        >
          The Pulse of SFC
        </motion.h2>

        {/* Animated Poetry */}
        <div className="flex flex-col gap-5 mb-16">
          {phrases.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light text-gray-200"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Animated Energy Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[3px] w-64 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mb-20 origin-left"
        />

        {/* Dynamic Wave Pattern */}
        <div className="relative w-full max-w-4xl mx-auto h-32 overflow-hidden">
          <motion.svg
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-full"
          >
            <motion.path
              d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="transparent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a855f7" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Closing Icon Row */}
        <div className="flex gap-8 mt-16 opacity-80">
          <Zap className="w-6 h-6 text-purple-400 animate-pulse" />
          <Sparkles className="w-6 h-6 text-pink-400 animate-pulse delay-150" />
          <Infinity className="w-6 h-6 text-purple-400 animate-pulse delay-300" />
        </div>
      </div>
    </section>
  );
}
