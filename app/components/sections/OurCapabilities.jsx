"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Brain,
  Layout,
  Pen,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      id: "web",
      icon: Code2,
      title: "Web Experiences",
      desc: "Beautifully crafted digital experiences built for performance and impact.",
      color: "from-[#5E3FCB] to-[#7E65D6]",
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile Interfaces",
      desc: "Native and cross-platform mobile apps designed to feel effortless.",
      color: "from-[#7E65D6] to-[#A393F5]",
    },
    {
      id: "uiux",
      icon: Layout,
      title: "Design Systems",
      desc: "Cohesive design languages that blend art and usability seamlessly.",
      color: "from-[#5E3FCB] to-[#A393F5]",
    },
  ];

  return (
    <section className="relative w-full bg-white py-28 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-100/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left side — intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-[#5E3FCB] to-[#7E65D6] bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
            From pixels to production, we transform ideas into living,
            interactive experiences — designed with precision and emotion.
          </p>

          <button className="flex items-center gap-3 text-[#5E3FCB] font-semibold border-b-2 border-[#5E3FCB] pb-1 hover:gap-4 transition-all duration-300">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Right side — creative cards */}
        <div className="relative flex flex-col gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hovered === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-3xl overflow-hidden group transition-all duration-500 p-[2px] ${
                  isHovered ? "scale-[1.02]" : "scale-100"
                }`}
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-70 blur-md transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-50"
                  }`}
                ></div>

                {/* Inner content */}
                <div className="relative bg-white rounded-3xl p-10 z-10 shadow-[0_0_40px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="text-[#5E3FCB] font-medium flex items-center gap-2">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
