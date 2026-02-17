import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass morphism background - dark theme */}
      <div className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/axisrx-logo-dark.png"
              alt="AXIS RX"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <a
              href="#learn"
              className="px-4 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 font-medium text-sm transition-all"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 font-medium text-sm transition-all"
            >
              Pricing
            </a>

            <div className="w-px h-6 bg-white/20 mx-2" />

            <Link to="/checkout">
              <Button variant="primary" size="md" className="shadow-lg shadow-royal-blue/20">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-[#0a0a0f] border-l border-white/10 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <span className="font-satoshi font-bold text-lg text-white">Menu</span>
                  <button
                    type="button"
                    className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    <a
                      href="#learn"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-white hover:bg-white/10 font-medium transition-colors"
                    >
                      How It Works
                    </a>
                    <a
                      href="#pricing"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-white hover:bg-white/10 font-medium transition-colors"
                    >
                      Pricing
                    </a>
                  </div>
                </div>

                <div className="p-4 border-t border-white/10">
                  <Link to="/checkout" onClick={() => setMobileOpen(false)}>
                    <Button variant="primary" size="lg" fullWidth>
                      Get Started — $99
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
