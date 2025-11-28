"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { once } from "events";

export default function CollectiveCompany() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const dividerOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] overflow-hidden py-24 px-6"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          The Dual Pulse
        </h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
          Where Business Meets Collective Brilliance
        </p>
      </motion.div>

      {/* Animated Divider */}
      <motion.div
        style={{ opacity: dividerOpacity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[40%] mt-28 bg-gradient-to-b from-transparent via-[#5E3FCB] to-transparent"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left - Business Focus */}
        <motion.div style={{ x: leftX }} className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Built for Business.
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-md">
            We empower forward-thinking businesses with cutting-edge digital
            solutions — designed, developed, and delivered by professionals who
            understand both the art and science of technology.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-md">
            From strategy to execution, we create systems that scale, perform,
            and evolve with your vision.
          </p>
        </motion.div>

        {/* Right - Innovators & Collective */}
        <motion.div style={{ x: rightX }} className="space-y-6 text-left md:text-right">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Powered by People.
          </h3>
          <p className="text-gray-600 leading-relaxed md:ml-auto max-w-md">
            SfC isn’t just a company — it’s a creative collective. A place where
            developers, designers, and dreamers come together to shape ideas
            into impactful realities.
          </p>
          <p className="text-gray-600 leading-relaxed md:ml-auto max-w-md">
            We grow by collaboration, curiosity, and the belief that innovation
            thrives in community.
          </p>
        </motion.div>
      </div>

      {/* CTA */}
    {/* CTA */}
<motion.div
  
  viewport={{ once: true }} // <- ensures it animates only once
  transition={{
    type: "spring",
    stiffness: 80,
    damping: 10,
    delay: 0.3,
  }}
  className="absolute bottom-10 flex justify-center w-full"
>
  <button className="flex items-center gap-2 text-[#5E3FCB] font-medium border-2 border-[#5E3FCB] rounded-xl px-6 py-3 hover:bg-[#5E3FCB] hover:text-white transition-colors duration-300">
    Join the Pulse <ArrowRight className="w-4 h-4" />
  </button>
</motion.div>

    </section>
  );
}
