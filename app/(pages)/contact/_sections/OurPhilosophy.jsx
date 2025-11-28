"use client";
import { motion } from "framer-motion";

export default function OurPhilosophy() {
  const points = [
    {
      title: "Community-Powered Innovation",
      desc: "Every idea we build starts as a spark within our network — refined, designed, and developed by people who live and breathe creation.",
    },
    {
      title: "Human-First Technology",
      desc: "We design with empathy and purpose — creating digital experiences that connect with people, not just systems.",
    },
    {
      title: "Growth for Both Sides",
      desc: "We empower businesses to grow with tech — and creators to grow with opportunity. Every project strengthens the ecosystem.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#F9F8FF] to-[#FFFDFB] py-24 px-6 flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FFD8A8]/30 to-[#FFBDAA]/30 rounded-full blur-3xl -translate-x-1/2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-5xl sm:text-6xl font-bold text-gray-900 text-center mb-12 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Built by Creators. <br />
        <span className="bg-gradient-to-r from-[#7E5BEF] to-[#C47AFF] bg-clip-text text-transparent">
          Driven by Purpose.
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-600 max-w-3xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        At SFC, we believe technology should do more than perform — it should
        inspire, empower, and create value. That’s why we merge artistry with
        engineering, and imagination with implementation.
      </motion.p>

      {/* 3 Highlighted Points */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#7E5BEF]/10 p-8 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {p.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        className="mt-20 text-base sm:text-lg text-gray-500 text-center italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        — A movement where technology meets purpose, and purpose meets people.
      </motion.p>
    </section>
  );
}
