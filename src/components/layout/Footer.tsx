import { Link } from 'react-router-dom';
import { Shield, Lock, MapPin, Mail, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-royal-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3 text-white">
            <Shield className="w-5 h-5 text-royal-blue" />
            <span className="text-sm font-medium">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Lock className="w-5 h-5 text-royal-blue" />
            <span className="text-sm font-medium">256-bit SSL Encrypted</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-blue to-indigo-500 flex items-center justify-center">
                <span className="font-satoshi font-bold text-white text-sm">AX</span>
              </div>
              <span className="font-satoshi font-bold text-2xl text-white">
                AXIS<span className="text-royal-blue">RX</span>
              </span>
            </Link>
            <p className="mt-6 text-white/70 text-sm max-w-sm leading-relaxed">
              Global Access to GLP-1 Therapies. Secure FDA-compliant personal importation of Semaglutide and Tirzepatide. Zero Insurance. Zero Markups. Just Science.
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/axisrx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-royal-blue transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                <span>@AXISRX</span>
              </a>
            </div>
          </div>

          {/* Corporate */}
          <div className="md:col-span-4">
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-white mb-5">
              Corporate
            </h3>
            <div className="space-y-4 text-sm">
              <p className="font-bold text-white">AXIS RX LLC</p>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-royal-blue" />
                <div>
                  <p>Corporate Headquarters:</p>
                  <p>5718 Westheimer Rd, Suite 1000</p>
                  <p>Houston, TX 77057</p>
                  <p className="text-white/50 text-xs mt-1">(Administrative & Billing Only)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 flex-shrink-0 text-royal-blue" />
                <a href="mailto:admin@axisrx.com" className="hover:text-royal-blue transition-colors">
                  admin@axisrx.com
                </a>
              </div>
            </div>
          </div>

          {/* Medical Operations */}
          <div className="md:col-span-4">
            <h3 className="font-satoshi font-bold text-sm uppercase tracking-wider text-white mb-5">
              Medical Operations
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-royal-blue" />
                <div>
                  <p className="font-medium text-white">Cancún / Riviera Maya</p>
                  <p>Mobile Concierge Service</p>
                  <p className="text-white/50">(Hotel Zone / AirBnB)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-royal-blue" />
                <div>
                  <p className="font-medium text-white">Tijuana</p>
                  <p>Medical Suite</p>
                  <p className="text-white/50">(Zona Río)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-white/60">Medical Disclaimer:</strong> Axis Rx is a management services organization (MSO) and technology platform. We do not practice medicine. All medical services are provided by independent, licensed physicians within our partner network. Results vary. GLP-1 therapies are serious medical treatments with potential risks.
          </p>
          <p className="mt-4 text-white/40 text-xs leading-relaxed max-w-4xl mx-auto text-center">
            Axis Rx is not affiliated with, endorsed by, or sponsored by Novo Nordisk (maker of Ozempic®/Wegovy®) or Eli Lilly (maker of Mounjaro®/Zepbound®). We offer compounded medications containing the same active ingredients (Semaglutide/Tirzepatide). These are not FDA-approved brand-name medications but are compounded in licensed facilities.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} AXIS RX LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-royal-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-royal-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-royal-blue transition-colors">Medical Disclaimer</a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/50 text-sm tracking-wide">
            Designed and Developed by{' '}
            <a
              href="https://www.skynetjoe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold bg-gradient-to-r from-royal-blue to-indigo-400 bg-clip-text text-transparent hover:from-indigo-400 hover:to-royal-blue transition-all duration-300"
            >
              Skynetlabs
              <ExternalLink className="w-3.5 h-3.5 text-royal-blue" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
