"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Sparkles
} from 'lucide-react';

function AboutHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      
      {/* Simple Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 pt-32 pb-20">
        
        {/* Breadcrumb */}
      

        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-lg shadow-purple-200/50 border border-purple-200 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-700 font-semibold">Who We Are</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Building the
              <span className="block relative mt-2">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 blur-2xl opacity-30 transform scale-110" />
                <span className="relative bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Future of Tech
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We're a community of passionate CSE students transforming ideas into reality through technology, creativity, and collaboration.
            </p>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Founded by students, for students, Society for Code (SFC) is more than just a tech society—it's a launchpad for innovation.
              </p>
              <p>
                We bridge the gap between academic learning and real-world application, cultivating an ecosystem where creativity meets code and bold ideas are nurtured into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105">
                Join Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 shadow-lg">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Illustration - Tree of Knowledge & Community */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-3xl" />
              
              {/* Main SVG Illustration */}
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                  </linearGradient>
                  <radialGradient id="glowGrad">
                    <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 0 }} />
                  </radialGradient>
                </defs>
                
                {/* Ground/Platform */}
                <ellipse cx="250" cy="420" rx="180" ry="20" fill="#9333ea" opacity="0.2" />
                
                {/* Tree Trunk */}
                <rect x="230" y="280" width="40" height="140" rx="20" fill="url(#trunkGrad)">
                  <animate attributeName="height" values="140;145;140" dur="3s" repeatCount="indefinite" />
                </rect>
                
                {/* Roots spreading out (community foundation) */}
                <path d="M250,420 Q200,430 180,420" stroke="#7c3aed" strokeWidth="4" fill="none" opacity="0.6" />
                <path d="M250,420 Q300,430 320,420" stroke="#7c3aed" strokeWidth="4" fill="none" opacity="0.6" />
                <path d="M250,420 Q230,440 220,450" stroke="#7c3aed" strokeWidth="3" fill="none" opacity="0.5" />
                <path d="M250,420 Q270,440 280,450" stroke="#7c3aed" strokeWidth="3" fill="none" opacity="0.5" />

                {/* Main Branches */}
                <path d="M250,300 Q200,250 180,220" stroke="url(#trunkGrad)" strokeWidth="12" fill="none" strokeLinecap="round" />
                <path d="M250,300 Q300,250 320,220" stroke="url(#trunkGrad)" strokeWidth="12" fill="none" strokeLinecap="round" />
                <path d="M250,300 Q230,200 220,160" stroke="url(#trunkGrad)" strokeWidth="10" fill="none" strokeLinecap="round" />
                <path d="M250,300 Q270,200 280,160" stroke="url(#trunkGrad)" strokeWidth="10" fill="none" strokeLinecap="round" />

                {/* Leaf Clusters with Icons */}
                {/* Code Leaf - Top Left */}
                <g transform="translate(180, 220)">
                  <ellipse cx="0" cy="0" rx="45" ry="35" fill="url(#leafGrad)" opacity="0.9">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 0 0;5 0 0;0 0 0;-5 0 0;0 0 0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                  <text x="-15" y="8" fontSize="24" fill="white" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
                </g>

                {/* Innovation Leaf - Top Right */}
                <g transform="translate(320, 220)">
                  <ellipse cx="0" cy="0" rx="45" ry="35" fill="url(#leafGrad)" opacity="0.9">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 0 0;-5 0 0;0 0 0;5 0 0;0 0 0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                  <circle cx="-8" cy="-5" r="3" fill="white" />
                  <circle cx="8" cy="-5" r="3" fill="white" />
                  <path d="M-10,5 L10,5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="0" cy="-8" r="8" fill="none" stroke="white" strokeWidth="2" />
                </g>

                {/* Learning Leaf - Middle Left */}
                <g transform="translate(220, 160)">
                  <ellipse cx="0" cy="0" rx="40" ry="32" fill="url(#leafGrad)" opacity="0.9">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 0 0;5 0 0;0 0 0;-5 0 0;0 0 0"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                  <rect x="-12" y="-8" width="24" height="16" rx="2" fill="white" />
                  <line x1="-8" y1="-4" x2="8" y2="-4" stroke="#9333ea" strokeWidth="2" />
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#9333ea" strokeWidth="2" />
                  <line x1="-8" y1="4" x2="8" y2="4" stroke="#9333ea" strokeWidth="2" />
                </g>

                {/* Collaboration Leaf - Middle Right */}
                <g transform="translate(280, 160)">
                  <ellipse cx="0" cy="0" rx="40" ry="32" fill="url(#leafGrad)" opacity="0.9">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 0 0;-5 0 0;0 0 0;5 0 0;0 0 0"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                  <circle cx="-8" cy="0" r="6" fill="white" />
                  <circle cx="8" cy="0" r="6" fill="white" />
                  <circle cx="0" cy="-8" r="6" fill="white" />
                </g>

                {/* Central Heart/Community Core */}
                <g transform="translate(250, 320)">
                  <circle cx="0" cy="0" r="35" fill="url(#glowGrad)" opacity="0.5">
                    <animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="25" fill="#7c3aed" opacity="0.9" />
                  <path 
                    d="M0,5 C-5,0 -10,-3 -10,-8 C-10,-13 -7,-16 -3,-16 C-1,-16 1,-15 0,-13 C-1,-15 1,-16 3,-16 C7,-16 10,-13 10,-8 C10,-3 5,0 0,5 Z" 
                    fill="white"
                    transform="scale(1.3)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      values="1.3;1.4;1.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                {/* Flying Code Particles */}
                {[
                  { x: 150, y: 180, char: '{', delay: '0s' },
                  { x: 350, y: 190, char: '}', delay: '0.5s' },
                  { x: 200, y: 120, char: '(', delay: '1s' },
                  { x: 300, y: 110, char: ')', delay: '1.5s' },
                  { x: 160, y: 280, char: ';', delay: '2s' },
                  { x: 340, y: 290, char: '=', delay: '2.5s' }
                ].map((particle, i) => (
                  <text 
                    key={i}
                    x={particle.x} 
                    y={particle.y} 
                    fontSize="16" 
                    fill="#9333ea" 
                    opacity="0.5"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {particle.char}
                    <animate 
                      attributeName="y" 
                      values={`${particle.y};${particle.y - 20};${particle.y}`} 
                      dur="3s" 
                      begin={particle.delay}
                      repeatCount="indefinite" 
                    />
                    <animate 
                      attributeName="opacity" 
                      values="0.5;0.8;0.5" 
                      dur="3s" 
                      begin={particle.delay}
                      repeatCount="indefinite" 
                    />
                  </text>
                ))}

                {/* Sparkles */}
                {[
                  { x: 170, y: 200, size: 12, delay: '0s' },
                  { x: 330, y: 200, size: 10, delay: '0.3s' },
                  { x: 210, y: 140, size: 14, delay: '0.6s' },
                  { x: 290, y: 140, size: 12, delay: '0.9s' }
                ].map((sparkle, i) => (
                  <g key={i} transform={`translate(${sparkle.x}, ${sparkle.y})`}>
                    <line x1={-sparkle.size/2} y1="0" x2={sparkle.size/2} y2="0" stroke="#fbbf24" strokeWidth="2">
                      <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={sparkle.delay} repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1={-sparkle.size/2} x2="0" y2={sparkle.size/2} stroke="#fbbf24" strokeWidth="2">
                      <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={sparkle.delay} repeatCount="indefinite" />
                    </line>
                  </g>
                ))}

                {/* "SFC" text on trunk */}
                <text x="235" y="360" fontSize="20" fill="white" fontWeight="bold" fontFamily="sans-serif">SFC</text>
              </svg>

              {/* Floating Labels */}
              <div className="absolute top-16 left-8 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="text-xs font-bold text-purple-700">Growing Together</div>
              </div>
              
              <div className="absolute bottom-24 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <div className="text-xs font-bold text-purple-700">Rooted in Community</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutHero;