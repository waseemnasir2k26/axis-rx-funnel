import { Link } from 'react-router-dom';
import { Shield, Lock, MapPin, Mail, Instagram, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

export default function Footer() {
  const scrollToDisclaimer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('legal-disclaimer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0a0a1a] to-[#050510]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-blue to-transparent" />

      <div className="relative z-10">
        {/* CTA Banner */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-royal-blue/20 via-violet-500/10 to-royal-blue/20 border border-white/10">
              <div className="text-center md:text-left">
                <h3 className="font-satoshi font-bold text-2xl text-white mb-2">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-white/60">Join thousands who've transformed their health with AXIS RX</p>
              </div>
              <Link
                to="/checkout"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-royal-blue to-violet-500 text-white font-satoshi font-bold rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-white font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-white font-medium">256-bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-white font-medium">Licensed Physicians</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link to="/" className="inline-flex items-center group">
                <img
                  src="/images/axisrx-logo-light.png"
                  alt="AXIS RX"
                  className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>
              <p className="mt-6 text-white/60 text-sm leading-relaxed">
                Secure FDA-compliant personal importation of Semaglutide and Tirzepatide. Zero Insurance. Zero Markups. Just Science.
              </p>
              {/* Social */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://instagram.com/axisrx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@AXISRX</span>
                </a>
              </div>
            </div>

            {/* Corporate */}
            <div className="md:col-span-4">
              <h3 className="font-satoshi font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-blue" />
                Corporate
              </h3>
              <div className="space-y-4 text-sm">
                <p className="font-bold text-white">AXIS RX LLC</p>
                <div className="flex items-start gap-3 text-white/60 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-blue/20 transition-colors">
                    <MapPin className="w-4 h-4 text-royal-blue" />
                  </div>
                  <div>
                    <p className="text-white/80">5718 Westheimer Rd, Suite 1000</p>
                    <p>Houston, TX 77057</p>
                    <p className="text-white/40 text-xs mt-1">(Administrative & Billing Only)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-blue/20 transition-colors">
                    <Mail className="w-4 h-4 text-royal-blue" />
                  </div>
                  <a href="mailto:admin@axisrx.com" className="text-white/80 hover:text-royal-blue transition-colors">
                    admin@axisrx.com
                  </a>
                </div>
              </div>
            </div>

            {/* Medical Operations */}
            <div className="md:col-span-4">
              <h3 className="font-satoshi font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Medical Operations
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🇲🇽</span>
                    <p className="font-bold text-white">Cancún / Riviera Maya</p>
                  </div>
                  <p className="text-white/60">Mobile Concierge Service</p>
                  <p className="text-emerald-400 text-xs mt-1">Hotel Zone / AirBnB Delivery</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🇲🇽</span>
                    <p className="font-bold text-white">Tijuana</p>
                  </div>
                  <p className="text-white/60">Private Medical Suite</p>
                  <p className="text-emerald-400 text-xs mt-1">Zona Río Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div id="legal-disclaimer" className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/50 text-xs leading-relaxed text-center">
                <strong className="text-white/70">Medical Disclaimer:</strong> Axis Rx is a management services organization (MSO) and technology platform. We do not practice medicine. All medical services are provided by independent, licensed physicians within our partner network. Results vary. GLP-1 therapies are serious medical treatments with potential risks.
              </p>
              <p className="mt-3 text-white/50 text-xs leading-relaxed text-center">
                Axis Rx is not affiliated with, endorsed by, or sponsored by Novo Nordisk (maker of Ozempic®/Wegovy®) or Eli Lilly (maker of Mounjaro®/Zepbound®). We offer compounded medications containing the same active ingredients (Semaglutide/Tirzepatide). These are not FDA-approved brand-name medications but are compounded in licensed facilities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} AXIS RX LLC. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#legal-disclaimer" onClick={scrollToDisclaimer} className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#legal-disclaimer" onClick={scrollToDisclaimer} className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
                <a href="#legal-disclaimer" onClick={scrollToDisclaimer} className="text-white/50 hover:text-white transition-colors">Medical Disclaimer</a>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-white/5 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-white/40 text-sm">
              Designed and Developed by{' '}
              <a
                href="https://www.skynetjoe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent hover:from-fuchsia-400 hover:via-violet-400 hover:to-cyan-400 transition-all duration-500"
              >
                Skynetlabs
                <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
