"use client";
import { Mail, MapPin, Phone, ArrowRight, Sparkles, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 text-white py-24 px-6 md:px-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-purple-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating orb */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-400/30 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top: Newsletter Section */}
        <div className="bg-white/10 border border-purple-400/30 backdrop-blur-md rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              Stay in the Loop
            </h3>
            <p className="text-purple-100/80">
              Subscribe to receive updates, insights, and upcoming event news.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-5 py-3 rounded-2xl bg-white/10 border border-purple-300/30 text-white placeholder-purple-200/70 focus:outline-none focus:border-purple-300 flex-grow"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-400/30 transition-all flex items-center gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="text-3xl font-black bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-5">
              SFC
            </div>
            <p className="text-purple-100/80 leading-relaxed mb-6">
              Where innovation meets education. Empowering CSE students with the skills to
              build, design, and innovate for the digital world.
            </p>
          <div className="flex gap-4">
  {[
    {
      icon: Github,
      link: "https://github.com/societyforcode",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/company/society-for-code",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/societyforcode",
    },
    {
      icon: Twitter,
      link: "https://twitter.com/societyforcode",
    },
  ].map(({ icon: Icon, link }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-white/10 hover:bg-purple-500/20 transition-all border border-purple-300/30 hover:-translate-y-1"
    >
      <Icon className="w-5 h-5 text-purple-200" />
    </a>
  ))}
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-purple-200 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-purple-100/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-purple-200 mb-5">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "UI/UX Design", "AI Solutions", "Hackathons", "Workshops"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-purple-100/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-purple-200 mb-5">Connect</h4>
            <ul className="space-y-4 text-purple-100/80">
              <li className="flex gap-3 items-center">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Society for Code , Srinagar</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+91 8082016593</span>
                <span>+91 8492951234</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>contact@societyforcode.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-400/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-purple-200/70">
          <p>© {new Date().getFullYear()} SFC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


