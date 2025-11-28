"use client";
import { motion } from "framer-motion";
import { Users, Lightbulb, Zap } from "lucide-react";

export default function WhyChooseSFC() {
  const features = [
    {
      icon: Lightbulb,
      title: "Community-driven Innovation",
      description:
        "Unlike traditional agencies, our 200+ members collaborate to bring fresh perspectives and cutting-edge solutions to every project.",
      offset: "translate-y-0",
    },
    {
      icon: Users,
      title: "Diverse Skill Sets",
      description:
        "Our community spans designers, developers, strategists, and more — ensuring your project benefits from a wide range of expertise.",
      offset: "-translate-y-8 md:-translate-y-16",
    },
    {
      icon: Zap,
      title: "Competitive Advantage",
      description:
        "Through collaborative problem-solving and creative brainstorming, we deliver solutions that are faster, smarter, and more impactful than conventional approaches.",
      offset: "translate-y-4 md:translate-y-8",
    },
  ];

  return (
    <section className="relative w-full bg-[#f9f9fb] py-28 px-6 md:px-20 overflow-hidden">
      {/* Background sketch shapes */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-5">
          <circle cx="20%" cy="30%" r="100" stroke="#9333ea" strokeWidth="2" fill="none" />
          <circle cx="80%" cy="70%" r="120" stroke="#9333ea" strokeWidth="2" fill="none" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#9333ea" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-6 border border-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose SFC?
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            The SFC <span className="text-purple-600">Difference</span>
          </h2>
        </motion.div>

        {/* Artistic Cards */}
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-12 z-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl border-2 border-gray-200 shadow-lg p-8 md:w-1/3 cursor-pointer transform ${feature.offset} hover:-translate-y-2 hover:scale-105 transition-all`}
              >
                {/* Icon with floating circle */}
                <div className="relative w-16 h-16 flex items-center justify-center rounded-xl mb-6">
                  <div className="absolute w-20 h-20 rounded-full bg-purple-50 -z-10 animate-pulse"></div>
                  <Icon size={28} className="text-purple-600" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Sketch-style decoration */}
                <div className="absolute -top-6 -right-6 w-10 h-10 border-t-2 border-r-2 border-purple-400 rotate-12"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-purple-400 rotate-45"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
