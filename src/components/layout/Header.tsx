import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Zap, Layers } from 'lucide-react';
import Button from '@/components/ui/Button';

const designs = [
  { path: '/v1', name: 'Minimal Luxe', desc: 'Clean & elegant', icon: Sparkles },
  { path: '/v2', name: 'Bold Medical', desc: 'Authoritative', icon: Zap },
  { path: '/v3', name: 'Modern Tech', desc: 'Dynamic & fresh', icon: Layers },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [designsOpen, setDesignsOpen] = useState(false);
  const location = useLocation();

  const currentDesign = designs.find(d => d.path === location.pathname) || designs[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-accent-silver/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/v1" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-royal-blue flex items-center justify-center shadow-lg shadow-navy/20 group-hover:shadow-royal-blue/30 transition-shadow">
              <span className="font-satoshi font-bold text-white text-sm">AX</span>
            </div>
            <span className="font-satoshi font-bold text-xl text-navy tracking-tight">
              AXIS<span className="text-royal-blue">RX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {/* Designs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDesignsOpen(!designsOpen)}
                onBlur={() => setTimeout(() => setDesignsOpen(false), 150)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-navy/70 hover:text-navy hover:bg-off-white/50 font-medium transition-all"
              >
                <currentDesign.icon className="w-4 h-4" />
                <span className="text-sm">{currentDesign.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${designsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {designsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 p-2 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-accent-silver/20"
                  >
                    <p className="px-3 py-2 text-xs font-medium text-navy/40 uppercase tracking-wider">
                      Design Variations
                    </p>
                    {designs.map((design) => (
                      <Link
                        key={design.path}
                        to={design.path}
                        onClick={() => setDesignsOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                          location.pathname === design.path
                            ? 'bg-royal-blue/10 text-royal-blue'
                            : 'hover:bg-off-white text-navy'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          location.pathname === design.path
                            ? 'bg-royal-blue text-white'
                            : 'bg-off-white text-navy/60'
                        }`}>
                          <design.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-satoshi font-bold text-sm">{design.name}</p>
                          <p className="text-xs text-navy/50">{design.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#how-it-works"
              className="px-4 py-2 rounded-xl text-navy/70 hover:text-navy hover:bg-off-white/50 font-medium text-sm transition-all"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 rounded-xl text-navy/70 hover:text-navy hover:bg-off-white/50 font-medium text-sm transition-all"
            >
              Pricing
            </a>

            <div className="w-px h-6 bg-accent-silver/30 mx-2" />

            <Link to="/checkout">
              <Button variant="primary" size="md" className="shadow-lg shadow-royal-blue/20">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-navy hover:bg-off-white/50 transition-colors"
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
              className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-accent-silver/20">
                  <span className="font-satoshi font-bold text-lg text-navy">Menu</span>
                  <button
                    type="button"
                    className="p-2 rounded-xl text-navy hover:bg-off-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  <p className="text-xs font-medium text-navy/40 uppercase tracking-wider mb-3">
                    Design Variations
                  </p>
                  <div className="space-y-2 mb-6">
                    {designs.map((design) => (
                      <Link
                        key={design.path}
                        to={design.path}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                          location.pathname === design.path
                            ? 'bg-royal-blue/10 text-royal-blue'
                            : 'hover:bg-off-white text-navy'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          location.pathname === design.path
                            ? 'bg-royal-blue text-white'
                            : 'bg-off-white text-navy/60'
                        }`}>
                          <design.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-satoshi font-bold text-sm">{design.name}</p>
                          <p className="text-xs text-navy/50">{design.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="h-px bg-accent-silver/20 my-4" />

                  <div className="space-y-1">
                    <a
                      href="#how-it-works"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-navy hover:bg-off-white font-medium transition-colors"
                    >
                      How It Works
                    </a>
                    <a
                      href="#pricing"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-navy hover:bg-off-white font-medium transition-colors"
                    >
                      Pricing
                    </a>
                  </div>
                </div>

                <div className="p-4 border-t border-accent-silver/20">
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
