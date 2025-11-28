"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Users, BookOpen, Rocket } from "lucide-react";
import Link from "next/link";

export default function RealisticGrowthTree() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Tree drawing progress
  const trunkProgress = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const branch1Progress = useTransform(scrollYProgress, [0.12, 0.35], [0, 1]);
  const branch2Progress = useTransform(scrollYProgress, [0.22, 0.48], [0, 1]);
  const branch3Progress = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const branch4Progress = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);

  // Button fade-in (earlier and smoother)
  const buttonOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.6, 0.9], [20, 0]);

  const leafSway = { animation: "leafSway 4s ease-in-out infinite" };

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#FAFAFA] py-28 px-6 flex flex-col items-center"
      aria-labelledby="growth-tree-heading"
    >
      {/* Heading */}
      <div className="max-w-4xl w-full text-center mb-8">
        <h2 id="growth-tree-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
          Growth Through Collaboration
        </h2>
        <p className="mt-3 text-gray-600">
          Ideas take root, branches reach outward, and together we grow — as creators, partners, and builders.
        </p>
      </div>

      {/* Tree Illustration */}
      <div className="relative w-full max-w-3xl h-[720px]">
        {/* Ground */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-56 h-6 bg-gradient-to-t from-gray-200 to-transparent rounded-full" />

        <svg viewBox="0 0 360 720" className="w-full h-full">
          <defs>
            <linearGradient id="trunkGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#7B5AD8" />
              <stop offset="100%" stopColor="#4C2CA1" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Trunk */}
          <motion.path
            d="M180 700 C178 560 178 420 180 300"
            stroke="url(#trunkGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: trunkProgress }}
          />

          {/* Branches */}
          <motion.path
            d="M180 520 C140 500 100 460 90 420"
            stroke="#4C2CA1"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: branch1Progress }}
          />
          <motion.path
            d="M180 480 C220 460 260 420 270 380"
            stroke="#4C2CA1"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: branch2Progress }}
          />
          <motion.path
            d="M180 360 C140 340 110 280 120 230"
            stroke="#4C2CA1"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: branch3Progress }}
          />
          <motion.path
            d="M180 300 C220 280 260 220 240 170"
            stroke="#4C2CA1"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: branch4Progress }}
          />

          {/* Leaves */}
          <motion.path
            d="M82 414 C76 404 86 392 96 396 C106 400 100 416 82 414 Z"
            fill="url(#leafGrad)"
            style={leafSway}
          />
          <motion.path
            d="M274 372 C280 362 290 354 300 360 C310 366 304 382 286 378 Z"
            fill="url(#leafGrad)"
            style={leafSway}
          />
          <motion.path
            d="M118 224 C110 214 120 200 134 206 C148 212 140 230 118 224 Z"
            fill="url(#leafGrad)"
            style={leafSway}
          />
          <motion.path
            d="M236 158 C244 148 254 136 266 142 C278 148 272 164 254 160 Z"
            fill="url(#leafGrad)"
            style={leafSway}
          />
        </svg>

        {/* Icons */}
        <motion.div
          style={{ opacity: branch1Progress }}
          className="absolute left-[12%] top-[53%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-purple-200 shadow">
            <Lightbulb className="w-5 h-5 text-purple-600" />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: branch2Progress }}
          className="absolute left-[76%] top-[46%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-purple-200 shadow">
            <Users className="w-5 h-5 text-purple-600" />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: branch3Progress }}
          className="absolute left-[28%] top-[33%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-purple-200 shadow">
            <BookOpen className="w-5 h-5 text-purple-600" />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: branch4Progress }}
          className="absolute left-[67%] top-[23%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-purple-200 shadow">
            <Rocket className="w-5 h-5 text-purple-600" />
          </div>
        </motion.div>
      </div>

      {/* Description */}
      <div className="mt-10 max-w-2xl text-center">
        <p className="text-gray-700 mb-4">
          At SFC, ideas are nurtured — roots anchor, branches reach, and together we bring concepts to life.
        </p>
      </div>

      {/* Join Us Button */}
      <motion.div
        style={{ opacity: buttonOpacity, y: buttonY }}
        className="mt-10"
      >
        <Link href="/join">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Join Us Today
          </motion.button>
        </Link>
      </motion.div>

      <style jsx>{`
        @keyframes leafSway {
          0% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-4px) rotate(2deg); }
          100% { transform: translateY(0) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}
