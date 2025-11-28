'use client';
import React, { useState, useRef, useEffect } from "react";
import ResultCard from "@/app/components/ui/ResultCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ResultsSection() {
  const results = [
    {
      quote: "SYSUSA's IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA's solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA's IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA's solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA's IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA's solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA's IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA's solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate card width and visible count dynamically
  useEffect(() => {
    const updateCarousel = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        
        // Determine visible count based on screen width
        if (window.innerWidth < 640) {
          setVisibleCount(1); // Mobile: 1 card
        } else if (window.innerWidth < 1024) {
          setVisibleCount(1); // Tablet: 1 card
        } else {
          setVisibleCount(2); // Desktop: 2 cards
        }

        const card = carouselRef.current.querySelector('.carousel-card');
        if (card) {
          const gap = window.innerWidth < 640 ? 16 : 32; // sm:gap-4 lg:gap-8
          setCardWidth(card.offsetWidth + gap);
        }
      }
    };
    
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, []);

  // Reset index when visible count changes
  useEffect(() => {
    setIndex(prev => Math.min(prev, Math.max(0, results.length - visibleCount)));
  }, [visibleCount, results.length]);

  const handlePrev = () => setIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setIndex(prev => Math.min(prev + 1, results.length - visibleCount));

  return (
    <section className="relative text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgbanner.png"
          alt="Hero background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* overlay */}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-10 md:mb-14 gap-4 md:gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Delivering results that matter
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-md">
            See how we've helped clients achieve operational excellence, security, and growth.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 lg:gap-8"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {results.map((item, i) => (
              <div 
                key={i} 
                className="carousel-card flex-shrink-0 w-full sm:w-full lg:w-1/2"
              >
                <ResultCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Bottom-Right) */}
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-8 gap-3 sm:gap-4">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition ${
              index === 0 ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={index + visibleCount >= results.length}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition ${
              index + visibleCount >= results.length ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}