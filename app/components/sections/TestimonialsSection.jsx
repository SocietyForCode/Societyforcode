'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Working with EnableNow was an absolute pleasure — their attention to detail and creativity elevated our brand identity beyond expectations.",
      author: "Sarah Mitchell",
      title: "Creative Director, Nova Agency",
      image: "/profile1.jpg",
    },
    {
      quote: "They didn’t just deliver a website, they crafted a digital experience. The UI and animations reflect our brand perfectly.",
      author: "David Chen",
      title: "Founder, Aural Studio",
      image: "/profile2.jpg",
    },
    {
      quote: "EnableNow understood our vision instantly and turned it into something tangible, elegant, and strategically powerful.",
      author: "Priya Nair",
      title: "Marketing Head, Lumos Design Co.",
      image: "/profile3.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  const xRange = useTransform(dragX, [-300, 300], [-1, 1]);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Manual navigation
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-white" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real feedback from brands who’ve trusted us to transform their digital presence.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Cards container */}
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x: dragX }}
                dragElastic={0.6}
                onDragEnd={(e, { offset }) => {
                  if (offset.x > 100) handlePrev();
                  else if (offset.x < -100) handleNext();
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 md:p-10 border border-purple-100"
              >
                <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed mb-6">
                  “{testimonials[index].quote}”
                </p>
                <div className="flex items-center justify-center gap-4">
                 
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{testimonials[index].author}</p>
                    <p className="text-sm text-purple-600">{testimonials[index].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-10 gap-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center hover:bg-purple-100 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="text-purple-600 w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center hover:bg-purple-100 transition"
            aria-label="Next"
          >
            <ChevronRight className="text-purple-600 w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-purple-600 w-4" : "bg-purple-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
