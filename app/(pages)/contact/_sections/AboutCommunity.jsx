"use client";
import { motion } from "framer-motion";

export default function CollectiveIntro() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#F9F8FF] overflow-hidden px-6 py-24">
      {/* Background grid + glowing pulse */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,91,239,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(126,91,239,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(126,91,239,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#7E5BEF]/30 to-[#C47AFF]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Layered Typography */}
      <motion.h2
        className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 text-center leading-tight mb-8 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        We’re Not Just a Team —<br />
        <span className="bg-gradient-to-r from-[#7E5BEF] to-[#C47AFF] bg-clip-text text-transparent">
          We’re a Collective.
        </span>
      </motion.h2>

      {/* Supporting line */}
      <motion.p
        className="text-lg sm:text-lg text-gray-600 max-w-2xl text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        A global circle of designers, developers, and storytellers building for
        both <span className="text-[#7E5BEF] font-semibold">community</span> and{" "}
        <span className="text-[#7E5BEF] font-semibold">commerce</span> — united
        by creativity, craft, and code.
      </motion.p>

      {/* Floating animated role tags */}
      <div className="relative flex flex-wrap justify-center gap-4 mt-4">
        {["Designers", "Developers", "Artists", "Strategists", "Innovators"].map(
          (role, i) => (
            <motion.div
              key={role}
              className="px-6 py-3 rounded-full border border-[#7E5BEF]/20 bg-white/70 backdrop-blur-sm shadow-sm text-gray-700 font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(126,91,239,0.1)",
                color: "#7E5BEF",
              }}
            >
              {role}
            </motion.div>
          )
        )}
      </div>

      {/* Final statement */}
      <motion.p
        className="mt-16 text-base sm:text-lg text-gray-500 max-w-2xl text-center leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Every line of code and every pixel we craft is a reflection of our shared mission —
        to build digital experiences that empower people and brands to thrive.
      </motion.p>
    </section>
  );
}
