"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Layout, Video, Monitor, Cpu, Globe } from "lucide-react";

const services = [
  { icon: <Code2 className="w-8 h-8" />, title: "Custom Development", desc: "Tailored software for business growth." },
  { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Apps", desc: "Cross-platform apps that scale seamlessly." },
  { icon: <Cpu className="w-8 h-8" />, title: "AI & ML Products", desc: "Smart solutions using AI & ML tech." },
  { icon: <Palette className="w-8 h-8" />, title: "UI/UX Design", desc: "User interfaces that delight." },
  { icon: <Video className="w-8 h-8" />, title: "Video & Motion Design", desc: "Engaging media for brand storytelling." },
  { icon: <Monitor className="w-8 h-8" />, title: "No-Code Solutions", desc: "Rapid prototyping and business apps." },
  { icon: <Globe className="w-8 h-8" />, title: "Compliance & SEO", desc: "Websites optimized and compliant." },
  { icon: <Layout className="w-8 h-8" />, title: "System Architecture", desc: "Robust enterprise-grade architectures." },
];

export default function MosaicServices() {
  return (
    <section className="relative bg-[#FAFAFA] py-28 px-6 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Professional solutions for businesses, innovators, and creators—where expertise meets creativity.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, rotate: (Math.random() - 0.5) * 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all cursor-pointer"
          >
            <div className="text-purple-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional: floating shapes for artistic effect */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
    </section>
  );
}
