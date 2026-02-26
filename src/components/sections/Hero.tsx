import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, FileText, ArrowRight, Sparkles, Package } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(44, 81, 163, 0.25) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center">
        <div className="w-full text-center">
          <motion.img
            src="/images/axisrx-hero-logo.png"
            alt="AXIS RX"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="h-16 md:h-20 lg:h-24 w-auto object-contain mb-6 mx-auto"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-royal-blue" />
            <span className="text-off-white/70 text-sm">Global Access to GLP-1 Therapies</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl lg:text-hero text-off-white leading-tight"
            style={{ letterSpacing: '-1px' }}
          >
            <span className="text-off-white">Premium GLP-1 Therapies.</span>
            <br />
            <span className="text-royal-blue">85% Below US Pharmacy Prices.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-base sm:text-lg md:text-xl text-off-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Access the exact same active ingredients (Semaglutide & Tirzepatide) used in
            Ozempic® and Mounjaro®—without the insurance battles or monthly subscription
            fees. Delivered directly to your hotel or villa in Cancún/Tijuana.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col items-center gap-6"
          >
            <Link to="/checkout">
              <button className="bg-gradient-to-r from-royal-blue via-axis-green/80 to-axis-green hover:from-royal-blue hover:to-axis-green text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-axis-green/30 hover:shadow-xl hover:shadow-axis-green/40 hover:scale-[1.02]">
                Check Eligibility & Reserve Stock
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <p className="text-off-white/40 text-sm">
              Starts at <span className="text-axis-green font-semibold">$499</span> for complete 3-month protocol
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white text-xs sm:text-sm"
          >
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              256-Bit Encrypted
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              Licensed Physicians
            </span>
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4 text-amber-400" />
              TSA Compliant Kit
            </span>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-violet-400" />
              Official Rx Included
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
