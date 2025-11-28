"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discovery",
      subtitle: "Understanding Your Vision",
      description:
        "We begin by deeply understanding your goals, challenges, and aspirations. Through collaborative conversations, we map out your project's foundation—defining scope, success metrics, and the impact you want to create.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy",
      subtitle: "Crafting the Blueprint",
      description:
        "Our community collaborates to design a strategic roadmap tailored to your needs. We outline architecture, workflows, and design systems—ensuring every decision aligns with your vision and scales with your growth.",
    },
    {
      number: "03",
      icon: Code,
      title: "Creation",
      subtitle: "Building with Precision",
      description:
        "This is where ideas transform into reality. Our engineers and designers work in sync—writing clean code, crafting intuitive interfaces, and iterating rapidly. Every line, every pixel is intentional and purposeful.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      subtitle: "Delivering Impact",
      description:
        "We don't just ship—we ensure seamless deployment, performance optimization, and post-launch support. Your success is our success, and we're with you every step beyond the finish line.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-28 px-6 md:px-20 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="sketch" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 L90 90 M90 10 L10 90" stroke="#000" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sketch)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-6 border border-gray-300"
          >
            Our Methodology
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How We <span className="text-purple-600">Build</span> Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent, collaborative process designed to turn your vision
            into exceptional digital experiences.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Step Cards */}
          <div className="space-y-4 flex flex-col">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`relative group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                    activeStep === index
                      ? "border-purple-600 bg-white shadow-lg scale-[1.02]"
                      : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                  }`}
                  style={{
                    boxShadow: activeStep === index 
                      ? "4px 4px 0px rgba(147, 51, 234, 0.2)" 
                      : "2px 2px 0px rgba(0,0,0,0.05)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number - Sketch style */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl border-2 border-purple-600 flex items-center justify-center font-mono font-bold text-xl transition-all ${
                        activeStep === index ? "bg-purple-600 text-white" : "bg-white text-purple-600"
                      }`}
                      style={{
                        boxShadow: "3px 3px 0px rgba(147, 51, 234, 0.2)"
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium mb-3">
                        {step.subtitle}
                      </p>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeStep === index ? "auto" : 0,
                          opacity: activeStep === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      animate={{
                        opacity: activeStep === index ? 1 : 0,
                        x: activeStep === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="text-purple-600" size={24} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Active Step Visual - Sketch illustration style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:block hidden"
          >
            <div 
              className="relative bg-white rounded-2xl p-12 border-2 border-purple-600 h-full flex flex-col justify-center"
              style={{
                boxShadow: "6px 6px 0px rgba(147, 51, 234, 0.15)"
              }}
            >
              {/* Sketch-style corner marks */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-400"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400"></div>

              {/* Animated Icon - pencil sketch style */}
              <motion.div
                key={activeStep}
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-purple-600 flex items-center justify-center bg-white relative"
                style={{
                  boxShadow: "4px 4px 0px rgba(147, 51, 234, 0.15)"
                }}
              >
                {/* Pencil texture lines */}
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-10">
                  <svg width="100%" height="100%">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="#9333ea" strokeWidth="1"/>
                    <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#9333ea" strokeWidth="1"/>
                    <line x1="0" y1="40%" x2="100%" y2="60%" stroke="#9333ea" strokeWidth="1"/>
                  </svg>
                </div>
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon size={48} className="text-purple-600 relative z-10" strokeWidth={2.5} />;
                })()}
              </motion.div>

              {/* Title */}
              <motion.h3
                key={`title-${activeStep}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold text-center text-gray-900 mb-4"
              >
                {steps[activeStep].title}
              </motion.h3>

              {/* Description */}
              <motion.p
                key={`desc-${activeStep}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center text-gray-600 leading-relaxed mb-8"
              >
                {steps[activeStep].description}
              </motion.p>

              {/* Progress dots - sketch style */}
              <div className="flex justify-center gap-3 mt-auto">
                {steps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-3 rounded-full border-2 transition-all duration-300 ${
                      index === activeStep
                        ? "bg-purple-600 border-purple-600 w-12"
                        : "bg-white border-purple-400 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to bring your vision to life?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold border-2 border-purple-600 transition-all"
            style={{
              boxShadow: "4px 4px 0px rgba(147, 51, 234, 0.3)"
            }}
          >
            Start Your Project <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}