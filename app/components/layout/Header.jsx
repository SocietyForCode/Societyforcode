"use client";
import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-purple-100">
      <nav className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-purple-200">
              <Code2 className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-xl tracking-tight">SocietyForCode</span>
              <span className="text-purple-600 text-[0.65rem] font-semibold tracking-wider uppercase">Build • Learn • Grow</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-[0.95rem]">Services</a>
            <a href="#community" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-[0.95rem]">Community</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-[0.95rem]">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-[0.95rem]">About</a>
            <button className="px-7 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105 text-[0.95rem]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-900 p-2 hover:bg-purple-50 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-purple-100">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Services</a>
              <a href="#community" className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Community</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Projects</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">About</a>
              <button className="px-7 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;