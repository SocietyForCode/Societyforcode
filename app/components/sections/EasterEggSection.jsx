'use client';
import { useState, useEffect } from 'react';
import { Sparkles, Code2, Wand2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function EasterEggSection() {
  const [showLab, setShowLab] = useState(false);
  const [typedText, setTypedText] = useState('');
  const quote = '“We don’t just write code — we craft experiences ⚡”';

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [inView, controls]);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < quote.length) {
        setTypedText((prev) => prev + quote.charAt(i));
        i++;
      } else clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden text-center"
    >
      {/* Decorative glowing background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 30%, rgba(168,85,247,0.25) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(147,51,234,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Floating icons */}
      <Sparkles className="absolute top-16 left-20 w-8 h-8 text-purple-400 animate-pulse-slow" />
      <Wand2 className="absolute bottom-16 right-24 w-10 h-10 text-purple-500 animate-bounce" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        {/* Header badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-700 shadow-md inline-flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>SFC Creative Lab 🧠</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          The Magic Behind Our Code
        </h2>

        <p className="font-mono text-lg text-purple-800 min-h-[2rem]">
          {typedText}
          <span className="animate-pulse text-purple-600">|</span>
        </p>

        <div className="mt-10">
          <button
            onClick={() => setShowLab(!showLab)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all"
          >
            {showLab ? 'Close Lab 🧪' : 'Enter the Lab 🚀'}
          </button>
        </div>

        {showLab && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 mx-auto w-full max-w-xl bg-gray-900 text-green-400 font-mono text-left rounded-2xl p-6 border border-purple-300/30 shadow-2xl"
          >
            <p className="text-gray-400 mb-2">// Welcome to SFC’s secret playground</p>
            <pre>{`const team = ["Dreamers", "Builders", "Innovators"];

function createMagic() {
  return team.map(member => \`\${member} ✨\`);
}

console.log("🧠 Brewing creativity...");
console.log(createMagic());
console.log("Done. Another idea shipped 🚀");`}</pre>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
