"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Lightbulb, Users, Heart, Rocket } from "lucide-react";

export default function MissionVisionCreative() {
  const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation" },
    { icon: <Users className="w-6 h-6" />, title: "Collaboration" },
    { icon: <Heart className="w-6 h-6" />, title: "Passion" },
    { icon: <Rocket className="w-6 h-6" />, title: "Growth" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-purple-50 to-purple-100 py-28 overflow-hidden">
      {/* Animated Gradient Blur Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-pink-300/20 blur-[120px] rounded-full animate-pulse-slow" />

      {/* Faint Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(168,85,247,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-purple-200 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-gray-700">Our Drive</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-10 text-gray-900"
        >
          The <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pulse</span>{" "}
          Behind SFC
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-20 leading-relaxed"
        >
          Every project, every event, and every sleepless build night at SFC beats with one rhythm — the drive to
          <span className="font-semibold text-purple-700"> create, connect, and change</span> through technology.
        </motion.p>

        {/* Mission & Vision Cards with Flow Connection */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-16 mb-32">
          {/* Animated Flow Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 0.4, scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute md:w-[400px] w-[2px] md:h-[2px] h-[200px] bg-gradient-to-r md:from-purple-500 md:to-pink-500 from-purple-400 to-pink-400 rounded-full"
          ></motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-10 shadow-xl w-full md:w-[400px] hover:scale-105 hover:shadow-purple-200/60 transition-all"
          >
            <Eye className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where students become creators — crafting ideas that inspire, innovate, and impact communities through technology.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-10 shadow-xl w-full md:w-[400px] hover:scale-105 hover:shadow-purple-200/60 transition-all"
          >
            <Target className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students with hands-on learning, peer collaboration, and opportunities to turn curiosity into real-world innovation.
            </p>
          </motion.div>
        </div>

        {/* Floating Core Values Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-wrap justify-center gap-12"
        >
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/90 to-pink-400/90 text-white shadow-lg shadow-purple-200/60 flex flex-col items-center justify-center hover:shadow-xl hover:shadow-purple-300/70 hover:scale-105 transition-all"
            >
              {val.icon}
              <h4 className="mt-3 text-lg font-semibold">{val.title}</h4>

              {/* Orb Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-300/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
