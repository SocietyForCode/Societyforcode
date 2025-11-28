"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Menu, X } from 'lucide-react';
import Navbar from '../ui/Navbar';

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  // Inject custom animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes particle {
        0% { opacity: 0; transform: scale(0) translateY(0); }
        50% { opacity: 1; transform: scale(1) translateY(-30px); }
        100% { opacity: 0; transform: scale(0) translateY(-60px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-pulse-slow {
        animation: pulse-slow 4s ease-in-out infinite;
      }
      .animate-spin-slow {
        animation: spin-slow 10s linear infinite;
      }
      .animate-particle {
        animation: particle 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createSparkle = (e, linkIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setSparkles(prev => [...prev, { id, x, y, linkIndex }]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(sparkle => sparkle.id !== id));
    }, 1000);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      
      {/* Navbar */}
     <Navbar/>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />
      
      {/* Floating Shapes */}
      <div className="absolute top-40 left-10 w-20 h-20 border-4 border-purple-300/40 rounded-3xl rotate-12 animate-pulse" />
      <div className="absolute top-60 right-32 w-16 h-16 bg-purple-400/20 rounded-2xl -rotate-12" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-purple-200/50 rounded-full" />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-300/30 to-purple-500/30 rounded-xl rotate-45" />
      
      {/* Dotted Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Artistic Right Side Animation */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        {/* Orbiting Circles */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2 shadow-lg shadow-purple-400/50" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1/2" />
        </div>
        <div className="absolute inset-8 animate-spin" style={{ animationDuration: '25s' }}>
          <div className="absolute top-0 left-1/2 w-5 h-5 bg-purple-600 rounded-full -translate-x-1/2 shadow-lg shadow-purple-500/50" />
        </div>
        
        {/* Floating Code Blocks */}
        <div className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl shadow-purple-200/50 border border-purple-200 animate-float" style={{ animationDelay: '0s' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="font-mono text-xs space-y-1">
            <div className="text-purple-600">const</div>
            <div className="text-gray-600">innovate = () =&gt;</div>
            <div className="text-purple-700 ml-2">excellence</div>
          </div>
        </div>

        <div className="absolute bottom-32 right-32 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl shadow-purple-200/50 border border-purple-200 animate-float" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="font-mono text-xs space-y-1">
            <div className="text-purple-600">&lt;Design/&gt;</div>
            <div className="text-gray-600">&lt;Develop/&gt;</div>
            <div className="text-purple-700">&lt;Deploy/&gt;</div>
          </div>
        </div>

        {/* Geometric Shapes with Pulse */}
        <div className="absolute top-40 right-40 w-24 h-24 border-4 border-purple-400 rounded-3xl rotate-45 animate-pulse-slow" />
        <div className="absolute bottom-40 right-16 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl -rotate-12 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        
        {/* Central Glow Sphere */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-pulse-slow blur-2xl opacity-50" />
            <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full animate-spin-slow" />
            <div className="absolute inset-8 bg-white rounded-full shadow-2xl shadow-purple-500/50" />
            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-600 animate-pulse" />
          </div>
        </div>

        {/* Particle Trail */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-particle"
            style={{
              left: `${30 + Math.cos(i * 30 * Math.PI / 180) * 200}px`,
              top: `${300 + Math.sin(i * 30 * Math.PI / 180) * 200}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 pt-40 pb-24">
        <div className="max-w-5xl">
          
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-lg shadow-purple-200/50 border border-purple-200 rounded-full mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700 font-semibold">Where Innovation Meets Education</span>
          </div>

          {/* Main Heading with Artistic Typography */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[1.1]">
            Crafting
            <span className="block relative mt-2">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 blur-2xl opacity-40 transform scale-110" />
                <span className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent">
                  Digital
                </span>
              </span>
              {' '}Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium">
            Premium software development, AI-powered solutions, and stunning design services—empowering CSE students to innovate and excel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-20">
            <button className="group px-9 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-9 py-4 bg-white text-purple-700 rounded-2xl font-bold text-lg border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 shadow-lg shadow-purple-100">
              Join the Society
            </button>
          </div>

          {/* Artistic Stats Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t-2 border-purple-200">
            <div className="relative group cursor-default">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Projects</div>
              </div>
            </div>
            
            <div className="relative group cursor-default">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">200+</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Members</div>
              </div>
            </div>
            
            <div className="relative group cursor-default">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Technologies</div>
              </div>
            </div>
            
            <div className="relative group cursor-default">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Large Decorative Text */}
      <div className="absolute bottom-10 right-10 text-[12rem] font-black text-purple-100 select-none opacity-50 hidden xl:block" style={{ lineHeight: 1 }}>
        SFC
      </div>

    </div>
  );
}

export default Hero;