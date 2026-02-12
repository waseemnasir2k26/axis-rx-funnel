import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles, Shield, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: DollarSign,
    title: 'Save 70%',
    desc: 'Compared to US pharmacy prices',
  },
  {
    icon: Shield,
    title: 'Licensed Physicians',
    desc: 'Board-certified doctors in Mexico',
  },
  {
    icon: Clock,
    title: 'No Waitlists',
    desc: 'Instant access, 24hr confirmation',
  },
];

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('axisrx_welcome_seen');
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('axisrx_welcome_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-[101] flex items-center justify-center"
          >
            <div className="relative w-full bg-[#0a0a0f] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Gradient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-royal-blue/30 to-transparent blur-3xl" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-blue/20 border border-royal-blue/30 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-royal-blue" />
                  <span className="text-sm font-medium text-royal-blue">Limited Spots Available</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-satoshi font-bold text-3xl md:text-4xl text-white leading-tight"
                >
                  Transform Your Health with
                  <span className="block bg-gradient-to-r from-royal-blue to-indigo-400 bg-clip-text text-transparent">
                    Premium GLP-1 Therapy
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-white/60 leading-relaxed"
                >
                  Join thousands who've chosen the smarter path to metabolic health.
                  Same medications as Ozempic® & Mounjaro® at a fraction of the cost.
                </motion.p>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 space-y-4"
                >
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-royal-blue" />
                      </div>
                      <div>
                        <p className="font-satoshi font-bold text-white">{benefit.title}</p>
                        <p className="text-sm text-white/50">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 space-y-3"
                >
                  <Link
                    to="/checkout"
                    onClick={handleClose}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0a0f] font-satoshi font-bold text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all"
                  >
                    Start Your Journey — $99 Deposit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={handleClose}
                    className="w-full py-3 text-white/50 hover:text-white/70 text-sm transition-colors"
                  >
                    Maybe later
                  </button>
                </motion.div>

                {/* Trust note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 text-center text-xs text-white/40 flex items-center justify-center gap-2"
                >
                  <Check className="w-3 h-3 text-emerald-400" />
                  100% refundable if you don't qualify
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
