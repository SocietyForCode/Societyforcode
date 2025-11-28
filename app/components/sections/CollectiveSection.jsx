"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CollectiveSection() {
  const canvasRef = useRef(null);

  // simple floating node animation in background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(147,51,234,0.15)";
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0f] text-white py-32 px-6 md:px-20 overflow-hidden">
      {/* Background network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
      />

      {/* Gradient halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Enter the <span className="text-purple-400">Collective</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          SFC isn’t an agency — it’s a living network of creators, engineers,
          and visionaries. Together, we blend disciplines, ideas, and
          technologies to redefine how digital experiences are imagined and
          built.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6 mt-16 flex-wrap"
        >
          {[
            "200+ Creators Worldwide",
            "Community-Driven Innovation",
            "Limitless Collaboration",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm text-gray-200 hover:text-white hover:border-purple-400 transition-all duration-300"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mt-16 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full font-semibold text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all"
        >
          Join the Collective →
        </motion.button>
      </div>
    </section>
  );
}
