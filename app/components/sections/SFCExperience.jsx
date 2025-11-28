"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function CommunityDrivenShowcase() {
  const slides = [
    {
      title: "The Spark",
      subtitle: "Where ideas ignite.",
      text: "SFC began as a small circle of developers and designers who believed technology should serve people first. Every project we take on starts with curiosity — to create, to improve, to impact.",
      gradient: "from-white via-purple-50 to-white",
      orbColor: "bg-purple-300/20",
    },
    {
      title: "The Collective",
      subtitle: "Built by the community.",
      text: "We’re not just a company — we’re a collective of makers. Each product we craft carries the fingerprints of collaboration, late-night brainstorming, and shared passion for the craft.",
      gradient: "from-purple-50 via-white to-purple-50",
      orbColor: "bg-purple-400/20",
    },
    {
      title: "The Craft",
      subtitle: "Where code meets art.",
      text: "From handcrafted websites to AI-driven systems, we fuse design and engineering into digital experiences that feel alive. Beauty, performance, and intent — all balanced in harmony.",
      gradient: "from-white via-purple-50 to-white",
      orbColor: "bg-purple-300/30",
    },
    {
      title: "The Purpose",
      subtitle: "Beyond business.",
      text: "For us, building isn’t just about profit — it’s about progress. We empower small creators, open-source communities, and growing businesses alike to build futures that matter.",
      gradient: "from-purple-50 via-white to-purple-50",
      orbColor: "bg-purple-400/15",
    },
    {
      title: "The Evolution",
      subtitle: "Always in motion.",
      text: "As technology evolves, so do we. Our collective thrives on experimentation — constantly learning, adapting, and pushing what’s possible in the world of design and development.",
      gradient: "from-white via-purple-50 to-white",
      orbColor: "bg-purple-500/20",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-cycle every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSelectSlide = (i) => {
    if (i !== index) {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-8 sm:px-16 md:px-28 bg-gradient-to-b ${slides[index].gradient}`}
          initial={{ opacity: 0, y: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction > 0 ? -100 : 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Artistic Orbs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className={`absolute top-1/3 left-20 w-72 h-72 ${slides[index].orbColor} rounded-full blur-3xl`} />
            <div className={`absolute bottom-1/3 right-20 w-96 h-96 ${slides[index].orbColor} rounded-full blur-3xl`} />
          </div>

          {/* Title & Subtitle */}
          <motion.h2
            key={`title-${index}`}
            className="text-[9vw] sm:text-[5vw] font-extrabold bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 bg-clip-text text-transparent mb-4"
          >
            {slides[index].title}
          </motion.h2>

          <motion.h3
            key={`subtitle-${index}`}
            className="text-lg sm:text-2xl font-medium text-purple-700/80 mb-8"
          >
            {slides[index].subtitle}
          </motion.h3>

          {/* Main Text */}
          <motion.p
            key={`text-${index}`}
            className="max-w-3xl text-gray-600 text-lg sm:text-xl leading-relaxed font-light mb-12"
          >
            {slides[index].text}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-purple-600 text-white font-medium shadow-md hover:shadow-lg transition-all"
          >
            Learn More →
          </motion.button>

          {/* Progress Indicators (Clickable) */}
          <div className="absolute bottom-10 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelectSlide(i)}
                className={`h-[5px] rounded-full transition-all duration-500 ${
                  i === index
                    ? "bg-purple-600 w-12"
                    : "bg-gray-300/70 hover:bg-purple-300 w-8"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
