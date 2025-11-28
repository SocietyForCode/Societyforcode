"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Brain,
  Palette,
  Video,
  Zap,
  Shield,
  Layers,
  Beaker,
} from "lucide-react";

export default function ServiceSpectrum() {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      desc: "Scalable, performant websites crafted with precision and purpose.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile Development",
      desc: "Native and cross-platform apps designed for seamless experiences.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI & Automation",
      desc: "Transforming workflows with intelligent, data-driven solutions.",
    },
    {
      icon: <Palette size={28} />,
      title: "UI/UX & Brand Design",
      desc: "Designing interfaces that connect emotion and usability effortlessly.",
    },
    {
      icon: <Video size={28} />,
      title: "Video & Motion",
      desc: "Bringing stories to life through elegant animation and visual craft.",
    },
    {
      icon: <Zap size={28} />,
      title: "No-Code & Rapid Builds",
      desc: "Accelerating delivery without compromising functionality or aesthetics.",
    },
    {
      icon: <Shield size={28} />,
      title: "Cybersecurity & Compliance",
      desc: "Building digital confidence through protection and best practices.",
    },
    {
      icon: <Beaker size={28} />,
      title: "Innovation & R&D",
      desc: "Exploring emerging technologies and building the future together.",
    },
  ];

  return (
    <section className="relative w-full bg-[#fafafa] py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Spectrum of <span className="text-purple-600">Services</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From code to creativity — we deliver professional digital solutions
          that empower growth, performance, and design harmony.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group border border-gray-200 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-purple-600 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
              {service.desc}
            </p>
            <motion.div
              className="h-[2px] w-0 bg-purple-600 mt-4 rounded-full"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
