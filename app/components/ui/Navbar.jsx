"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createSparkle = (e, linkIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setSparkles((prev) => [...prev, { id, x, y, linkIndex }]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 1000);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/Blogs" },
    
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                SFC
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => createSparkle(e, index)}
                className="relative px-5 py-2.5 text-gray-700 font-semibold rounded-xl hover:text-purple-700 transition-colors group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Sparkles */}
                {sparkles
                  .filter((s) => s.linkIndex === index)
                  .map((sparkle) => (
                    <div
                      key={sparkle.id}
                      className="absolute pointer-events-none"
                      style={{ left: sparkle.x, top: sparkle.y }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-${
                              15 + Math.random() * 10
                            }px)`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: "1s",
                          }}
                        />
                      ))}
                      <Sparkles
                        className="absolute w-5 h-5 text-purple-600 animate-ping"
                        style={{
                          transform: "translate(-50%, -50%)",
                          animationDuration: "1s",
                        }}
                      />
                    </div>
                  ))}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105">
              Get Started
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => {
                  createSparkle(e, index);
                  setIsMobileMenuOpen(false);
                }}
                className="relative block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-purple-100 hover:text-purple-700 transition-colors overflow-hidden"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-bold text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
