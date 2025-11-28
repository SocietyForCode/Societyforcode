"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatWeBuild() {
  const services = [
    {
      key: "web",
      title: "Web Experiences",
      text: "Beautifully engineered web experiences that fuse design with performance.",
      longDesc:
        "We craft modern, responsive web experiences that not only look stunning but perform seamlessly. Every interaction is tuned for clarity, speed, and emotion—merging art with technology. From sleek portfolios to robust enterprise dashboards, our web builds redefine how digital feels.",
    },
    {
      key: "ai",
      title: "Artificial Intelligence",
      text: "Building smart, adaptive systems powered by data and human intuition.",
      longDesc:
        "We engineer AI-driven systems that amplify human potential. From predictive models and NLP solutions to intelligent automation, our AI builds learn, adapt, and evolve. It’s not about replacing people—it’s about augmenting intelligence and unlocking creative insight.",
    },
    {
      key: "brand",
      title: "Brand Identity",
      text: "Crafting visual languages that connect emotionally and endure timelessly.",
      longDesc:
        "Your brand is your story’s heartbeat. We design identities that live beyond trends—visual systems that build trust and recognition. From logo design to motion identity, we shape brands that people feel before they read.",
    },
    {
      key: "motion",
      title: "Motion Design",
      text: "Transforming still ideas into living, breathing stories through animation.",
      longDesc:
        "Motion brings emotion to the forefront. We use movement as a storytelling language—guiding the viewer’s eye, expressing energy, and amplifying meaning. Every frame is designed to move hearts as much as pixels.",
    },
    {
      key: "nocode",
      title: "No-Code Solutions",
      text: "Accelerating innovation with efficient, scalable no-code solutions.",
      longDesc:
        "Speed meets precision with our no-code workflows. We build powerful, maintainable systems using cutting-edge platforms—helping startups and enterprises alike to launch, iterate, and scale faster without sacrificing quality.",
    },
    {
      key: "ux",
      title: "User Experience",
      text: "Designing intuitive, user-friendly interfaces that captivate and inspire.",
      longDesc:
        "We design experiences that feel effortless and natural. Through empathy-driven research and iterative prototyping, we turn complexity into simplicity—where every click feels like intuition.",
    },
    {
      key: "mobile",
      title: "Mobile Applications",
      text: "Creating seamless mobile experiences that engage users on the go.",
      longDesc:
        "From native apps to cross-platform builds, we craft mobile experiences that users carry with them. Lightweight, performant, and purposeful—our apps live at the intersection of design and mobility.",
    },
    {
      key: "video",
      title: "Video Storytelling",
      text: "Producing compelling video content that tells your brand's story.",
      longDesc:
        "We bring stories to life through motion and sound. Whether cinematic ads or product explainers, we design every frame to capture emotion, deliver clarity, and leave an impression that lasts.",
    },
  ];

  const [active, setActive] = useState(0);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden px-6 md:px-24 py-20 md:py-28">
      {/* Section Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-gray-900 mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What <span className="text-purple-600">We Build</span>
      </motion.h1>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Floating Keywords */}
        <div className="relative flex-1 w-full h-[550px] flex items-center justify-center">
          {services.map((item, i) => (
            <motion.div
              key={item.key}
              className={`absolute text-3xl md:text-5xl font-mono cursor-pointer transition-all duration-500 ${
                active === i ? "text-purple-600 scale-110" : "text-gray-400/70"
              }`}
              style={{
                top: `${10 + (i * 10) % 80}%`,
                left: i % 2 === 0 ? "10%" : "55%",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              onMouseEnter={() => setActive(i)}
            >
              {`{${item.key}}`}
            </motion.div>
          ))}
        </div>

        {/* Right Side Content with smooth hover transitions */}
        <div className="flex-1 flex flex-col items-start text-left md:pl-12 border-l border-gray-200/70 relative overflow-hidden min-h-[340px]">
          <div className="pl-6 md:pl-10"> {/* inner padding added here */}
            <AnimatePresence mode="wait">
              <motion.div
                key={services[active].key}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                  {services[active].title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                  {services[active].text}
                </p>
                <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
                  {services[active].longDesc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 px-8 py-3 rounded-full bg-purple-600 text-white font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Explore More →
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
