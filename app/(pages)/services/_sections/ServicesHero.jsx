"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesHero() {
  const words = ["Create", "Engineer", "Design", "Empower", "Launch"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white text-gray-900 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Decorative sparkles */}
      <motion.div
        className="absolute top-1/3 left-[12%] text-purple-400 opacity-30"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Sparkles size={20} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-[12%] text-pink-400 opacity-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Sparkles size={18} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-8 border border-purple-200"
        >
          Professional Services • Creative Community
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-center"
        >
          We{" "}
          <span className="relative inline-flex justify-center items-center w-[6ch] h-[1.2em] align-middle text-purple-600 font-mono">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 font-regular font-[700] flex justify-center items-center text-purple-600"
              >
                {"{"}
                {words[index]}
                {"}"}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          Ideas into Impact
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SfC delivers professional-grade digital solutions for businesses —
          powered by a thriving community of creators, engineers, and innovators.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
          <Link
            href="/join"
            className="px-6 py-3 border border-purple-300 text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition-all"
          >
            Join Our Community
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
