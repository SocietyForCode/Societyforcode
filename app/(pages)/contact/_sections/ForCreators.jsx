"use client";
import { motion } from "framer-motion";
import { Palette, Code2, Users, Rocket } from "lucide-react";

export default function ForCreators() {
  const pillars = [
    {
      icon: <Palette className="w-8 h-8 text-[#C1A5FF]" />,
      title: "Design",
      desc: "Bring ideas to life through interfaces, illustrations, and motion that inspire emotion and engagement.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#C1A5FF]" />,
      title: "Develop",
      desc: "Engineer seamless digital experiences using modern stacks — collaborate with peers who push your boundaries.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#C1A5FF]" />,
      title: "Collaborate",
      desc: "Work alongside designers, developers, and strategists on live projects — learning by doing, growing by sharing.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#C1A5FF]" />,
      title: "Grow",
      desc: "Gain mentorship, feedback, and real-world exposure that builds your creative identity and professional portfolio.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1A132B] via-[#1F1538] to-[#241B3F] py-28 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Motion Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7E5BEF]/20 to-[#C47AFF]/20 rounded-full blur-3xl -translate-x-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Floating Words */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/10 font-extrabold text-[6rem] sm:text-[10rem] tracking-tight">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          CREATE ✦ CONNECT ✦ EVOLVE
        </motion.div>
      </div>

      {/* Headline */}
      <motion.h2
        className="text-5xl sm:text-6xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        A Space for Creators to{" "}
        <span className="bg-gradient-to-r from-[#A985FF] to-[#FFB8E0] bg-clip-text text-transparent">
          Learn, Grow, and Impact
        </span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-lg text-gray-300 max-w-3xl text-center mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        At SFC, you’ll find open collaboration, mentorship, and real-world
        projects that sharpen your skills and build your portfolio — while
        making an impact on businesses and communities alike.
      </motion.p>

      {/* Animated Pillars */}
      {/* <div className="grid md:grid-cols-4 gap-8 max-w-6xl w-full">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">{p.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {p.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div> */}

      {/* Floating Word Animation */}
      <motion.div
        className="mt-20 flex gap-6 text-xl sm:text-2xl font-mono text-[#CBB4FF]"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.4 } },
        }}
        viewport={{ once: true }}
      >
        {["Design", "Develop", "Collaborate", "Grow"].map((word, i) => (
          <motion.span
            key={word}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="hover:text-white transition-colors cursor-default"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
