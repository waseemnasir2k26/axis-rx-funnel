import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Shield, Clock, DollarSign, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: DollarSign,
    title: 'Save 70%',
    desc: 'Compared to US pharmacy prices',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/20',
  },
  {
    icon: Shield,
    title: 'Licensed Physicians',
    desc: 'Board-certified doctors in Mexico',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/20',
  },
  {
    icon: Clock,
    title: 'No Waitlists',
    desc: 'Instant access, 24hr confirmation',
    color: 'text-amber-400',
    bg: 'bg-amber-500/20',
  },
];

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  const showPopup = useCallback(() => {
    const hasSeenPopup = localStorage.getItem('axisrx_welcome_seen');
    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('axisrx_welcome_seen');
    if (hasSeenPopup) return;

    // Show popup after 5 seconds delay
    const timer = setTimeout(() => {
      showPopup();
    }, 5000);

    // Exit intent detection (mouse leaving viewport at top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showPopup]);

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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg pointer-events-auto">
              {/* Animated border glow */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-royal-blue via-violet-500 to-emerald-500 rounded-3xl opacity-75 blur-sm animate-pulse" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-royal-blue to-violet-500 rounded-3xl" />

              <div className="relative bg-[#0a0a14] rounded-3xl overflow-hidden">
                {/* Top gradient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-royal-blue/40 to-transparent blur-3xl" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all z-10 hover:rotate-90 duration-300"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>

                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Urgency Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 mb-6"
                  >
                    <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Limited Spots Available</span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-satoshi font-bold text-2xl md:text-3xl text-white leading-tight text-center"
                  >
                    Access the World's Most Potent
                    <span className="block mt-2 bg-gradient-to-r from-royal-blue via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                      Metabolic Therapies
                    </span>
                  </motion.h2>

                  {/* Price highlight */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10"
                  >
                    <span className="text-white/70">Starting at</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">$499</span>
                  </motion.div>

                  {/* Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 grid grid-cols-3 gap-4"
                  >
                    {benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className={`w-12 h-12 rounded-xl ${benefit.bg} border border-white/10 flex items-center justify-center mx-auto mb-2`}>
                          <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                        </div>
                        <p className="font-satoshi font-bold text-white text-sm">{benefit.title}</p>
                        <p className="text-xs text-white/50 mt-1">{benefit.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 space-y-3"
                  >
                    <Link
                      to="/checkout"
                      onClick={handleClose}
                      className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-royal-blue to-violet-500 text-white font-satoshi font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-violet-500/30"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-royal-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center gap-3">
                        Start Your Journey — $99 Deposit
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>

                    {/* Pricing clarification */}
                    <p className="text-white text-sm font-medium">
                      <span className="text-emerald-400">$99 today</span>
                      <span className="text-white/50"> → </span>
                      <span className="text-white/80">$400 later for Semaglutide</span>
                    </p>

                    <button
                      onClick={handleClose}
                      className="w-full py-2 text-white/40 hover:text-white/60 text-sm transition-colors"
                    >
                      Maybe later
                    </button>
                  </motion.div>

                  {/* Trust note */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 pt-4 border-t border-white/10"
                  >
                    <p className="text-sm text-white/70 flex items-center justify-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </span>
                      <span><strong className="text-emerald-400">100% refundable</strong> if you don't qualify</span>
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Deposit is applied toward your protocol — not an extra fee
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
