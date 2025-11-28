"use client";
import { motion } from "framer-motion";
import { Briefcase, Rocket, Users2, Sparkles } from "lucide-react";

export default function ForBusinesses() {
  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#6C4FE0]" />,
      title: "Strategy Meets Craft",
      desc: "We merge business insight with creative precision — ensuring every project aligns with your goals while standing out visually.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#6C4FE0]" />,
      title: "Built for Growth",
      desc: "Scalable digital experiences that evolve with your brand, designed to drive engagement, not just impressions.",
    },
    {
      icon: <Users2 className="w-8 h-8 text-[#6C4FE0]" />,
      title: "A Dedicated Collective",
      desc: "Your project is powered by specialists — designers, developers, and strategists who collaborate like an in-house team.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FAFAFF] py-28 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-gradient-to-r from-[#DAD3FF]/40 to-[#F3E8FF]/60 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-5xl sm:text-6xl font-bold text-gray-900 text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        For Businesses That{" "}
        <span className="bg-gradient-to-r from-[#6C4FE0] to-[#9A7FFB] bg-clip-text text-transparent">
          Think Beyond Ordinary
        </span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-lg text-gray-600 max-w-3xl text-center mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Partnering with SFC means collaborating with a collective that blends
        technology, design, and community energy — crafting solutions that
        don’t just work, they *resonate.*
      </motion.p>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="p-8 bg-white rounded-2xl border border-[#E7E3FF] shadow-sm hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">{b.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {b.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-[#6C4FE0] text-white font-medium shadow-md hover:shadow-lg transition-all"
        >
          Start Your Project →
        </motion.button>
        <button className="text-gray-700 hover:text-[#6C4FE0] transition-colors font-medium">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
