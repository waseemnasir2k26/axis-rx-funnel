import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(44, 81, 163, 0.3) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Coming Soon Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Coming 2026
            </span>
          </span>
        </motion.div>

        {/* Logo */}
        <motion.img
          src="/images/axisrx-hero-logo.png"
          alt="AXIS RX"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="h-28 sm:h-36 md:h-44 w-auto object-contain mb-12"
        />

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-satoshi font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-8"
        >
          The Future of{' '}
          <span className="text-cyan-400">Metabolic Precision</span>
          {' '}is Arriving.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-12"
        >
          Axis Rx is fine-tuning an exclusive medical concierge experience. From our corporate
          headquarters in Houston to our mobile units in Cancún and Tijuana, we are redefining
          weight loss and longevity through high-science and premium care.
        </motion.p>

        {/* Waitlist Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="w-full max-w-md"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Join the Private Waitlist for Priority Access
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 rounded-xl bg-white text-navy placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap"
            >
              Request Access
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
