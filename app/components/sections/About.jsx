"use client";
import React, { useState, useEffect } from "react";
import { Code2, Rocket, Users, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState("who");
  const [sparkles, setSparkles] = useState([]);
  const [counts, setCounts] = useState({
    members: 0,
    projects: 0,
    technologies: 0,
    satisfaction: 0,
  });

  // Sparkle click effect
  const createSparkle = (e, tabId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setSparkles((prev) => [...prev, { id, x, y, tabId }]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 1000);
  };

  // Count animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const targets = {
      members: 200,
      projects: 50,
      technologies: 15,
      satisfaction: 98,
    };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        members: Math.floor(targets.members * progress),
        projects: Math.floor(targets.projects * progress),
        technologies: Math.floor(targets.technologies * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: "who", label: "WHO WE ARE?", icon: Users },
    { id: "what", label: "WHAT WE DO?", icon: Code2 },
    { id: "mission", label: "OUR MISSION", icon: Rocket },
  ];

  const content = {
    who: {
      title: "A community bridging innovation and opportunity",
      text: (
        <div className="space-y-4">
          <p>
            <span className="font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Society For Code (SFC)
            </span>{" "}
            is more than a student society—we're a thriving ecosystem where{" "}
            <span className="font-semibold text-gray-900">
              aspiring engineers transform into industry-ready developers
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-900">
              businesses unlock their digital potential.
            </span>
          </p>
          <p className="text-gray-600">
            Founded on collaboration, innovation, and excellence, we create
            meaningful connections between talented CSE students and businesses
            seeking cutting-edge digital solutions.
          </p>
        </div>
      ),
    },
    what: {
      title: "Empowering engineers, transforming businesses",
      text: (
        <div className="space-y-4">
          <p>
            We operate at the intersection of{" "}
            <span className="font-semibold text-gray-900">
              education and innovation
            </span>
            , providing students with real-world project experience while
            delivering{" "}
            <span className="font-semibold text-gray-900">
              premium software development, AI-powered solutions, and stunning
              design services
            </span>{" "}
            to businesses.
          </p>
          <p className="text-gray-600">
            From web applications to AI integrations, mobile apps to brand
            identities— we craft digital experiences that drive growth and leave
            lasting impressions.
          </p>
        </div>
      ),
    },
    mission: {
      title: "Building tomorrow’s tech leaders, today",
      text: (
        <div className="space-y-4">
          <p>
            Our mission is to{" "}
            <span className="font-semibold text-gray-900">
              bridge the gap between academic learning and industry demands
            </span>
            , while helping businesses embrace digital transformation with
            confidence.
          </p>
          <p className="text-gray-600">
            We believe in learning by doing—every project is an opportunity for
            our members to grow, innovate, and deliver exceptional value.
            Together, we’re shaping the future of technology, one line of code
            at a time.
          </p>
        </div>
      ),
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-300/20 rounded-full blur-3xl animate-pulse-slower" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-7xl mx-auto bg-white/70 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-purple-100"
      >
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-6 sm:gap-8 mb-10 border-b-2 border-purple-200"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <div key={tab.id} className="flex flex-col items-start relative">
                <button
                  onClick={(e) => {
                    setActiveTab(tab.id);
                    createSparkle(e, tab.id);
                  }}
                  className={`relative flex items-center gap-2 font-bold text-sm sm:text-base mb-3 transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-purple-600 scale-105"
                      : "text-gray-600 hover:text-purple-500"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  {sparkles
                    .filter((s) => s.tabId === tab.id)
                    .map((sparkle) => (
                      <Sparkles
                        key={sparkle.id}
                        className="absolute w-6 h-6 text-purple-500 animate-ping"
                        style={{
                          left: sparkle.x,
                          top: sparkle.y,
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    ))}
                </button>
                <motion.div
                  layoutId="underline"
                  className={`h-1 w-full rounded-full ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-purple-700"
                      : "bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </motion.div>

        {/* Content + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side (Animated Tab Content) */}
          <div className="relative overflow-hidden min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 space-y-8 text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                  {content[activeTab].title}
                </h2>
                <div className="text-base sm:text-lg leading-relaxed">
                  {content[activeTab].text}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button className="group px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-purple-400/40 transition-all duration-300 hover:scale-105">
                    Join Our Community
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-3.5 bg-white text-purple-700 rounded-xl font-bold border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 shadow-sm">
                    View Our Work
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side (Stats) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-2xl border border-purple-200 hover:shadow-purple-200/70 transition-shadow duration-500">
              <div className="text-center pb-6 border-b-2 border-purple-200">
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-3 animate-pulse" />
                <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Our Impact
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { label: "Active Members", value: `${counts.members}+` },
                  { label: "Projects Done", value: `${counts.projects}+` },
                  { label: "Technologies", value: `${counts.technologies}+` },
                  { label: "Satisfaction", value: `${counts.satisfaction}%` },
                ].map((stat) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={stat.label}
                    className="text-center p-4 bg-white/80 rounded-2xl shadow-md"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm font-bold shadow-lg">
                  <Code2 className="w-4 h-4" />
                  <span>Where Engineers Meet Opportunity</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
