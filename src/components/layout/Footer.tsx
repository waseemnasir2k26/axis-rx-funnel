import { Link } from 'react-router-dom';
import { Shield, Award, Lock } from 'lucide-react';

const trustBadges = [
  { icon: Shield, text: 'HIPAA Compliant' },
  { icon: Award, text: 'Licensed Physicians' },
  { icon: Lock, text: '256-bit Encrypted' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-royal-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pb-12 mb-12 border-b border-white/10">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 text-white/60">
              <badge.icon className="w-5 h-5 text-royal-blue" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-blue to-indigo-500 flex items-center justify-center">
                <span className="font-satoshi font-bold text-white text-sm">AX</span>
              </div>
              <span className="font-satoshi font-bold text-2xl text-white">
                AXIS<span className="text-royal-blue">RX</span>
              </span>
            </Link>
            <p className="mt-6 text-white/50 text-sm max-w-sm leading-relaxed">
              Premium GLP-1 therapies prescribed by licensed physicians in Mexico.
              Same active ingredients as Ozempic® and Mounjaro®, 70% below US pharmacy prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#learn" className="text-white/60 hover:text-white transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/60 hover:text-white transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/checkout" className="text-white/60 hover:text-white transition-colors text-sm">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-3">
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-white/40 mb-5">
              Locations
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Cancún, MX</li>
              <li>Tijuana, MX</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} AXIS RX. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
