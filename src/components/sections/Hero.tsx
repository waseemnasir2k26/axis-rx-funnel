import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Package } from 'lucide-react';
import Button from '@/components/ui/Button';

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
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 70% 50%, rgba(44, 81, 163, 0.25) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-satoshi font-bold text-hero text-off-white leading-tight"
            style={{ letterSpacing: '-1px' }}
          >
            Premium GLP-1 Therapies. 70% Below US Pharmacy Prices.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 text-lg md:text-xl text-off-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Access the exact same active ingredients (Semaglutide & Tirzepatide) used in
            Ozempic® and Mounjaro®—without the insurance battles or monthly subscription
            fees. Delivered directly to your hotel or villa in Cancún/Tijuana.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link to="/checkout">
              <Button variant="primary" size="lg">
                Check Eligibility & Reserve Stock
              </Button>
            </Link>
            <p className="text-off-white/80 text-sm font-medium">
              Starts at $499 for a complete 3-month protocol.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-off-white/80 text-sm"
          >
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-royal-blue" />
              256-Bit Encrypted
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-royal-blue" />
              Licensed Physicians
            </span>
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4 text-royal-blue" />
              TSA Approved
            </span>
          </motion.div>
        </div>

        {/* Floating product visual - placeholder for vial/cooler image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block flex-1 max-w-md"
        >
          <div className="relative">
            <div
              className="aspect-square rounded-axis-lg bg-royal-blue/20 border border-royal-blue/40 flex items-center justify-center"
              style={{ boxShadow: '0 0 60px rgba(44, 81, 163, 0.3)' }}
            >
              <Package className="w-32 h-32 text-royal-blue/60" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-royal-blue/30 blur-2xl"
              aria-hidden
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
