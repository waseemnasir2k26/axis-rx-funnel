// AXIS RX Landing Page - Immersive Dark Cinematic Design
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles, Target, Zap, Heart, Shield, Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WelcomePopup from '@/components/ui/WelcomePopup';
import ChatAgent from '@/components/ui/ChatAgent';
import { useRef } from 'react';

const journey = [
  { icon: Target, label: 'Reserve', desc: 'Secure your spot with a refundable $99 deposit' },
  { icon: Zap, label: 'Qualify', desc: 'Quick health screening to ensure safety' },
  { icon: Heart, label: 'Receive', desc: 'Get your complete 3-month protocol' },
];

const benefits = [
  { stat: '$3,100+', label: 'Average Savings', desc: 'Compared to US pharmacy prices' },
  { stat: '24hrs', label: 'Response Time', desc: 'Quick confirmation after booking' },
  { stat: '100%', label: 'Refundable', desc: 'If you don\'t qualify medically' },
];

export default function LandingPageV5() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      <WelcomePopup />
      <ChatAgent />
      <Header />
      <main ref={containerRef} className="bg-[#0a0a0f] text-white">
        {/* Hero - Cinematic Full Screen */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <motion.div
              style={{ y: backgroundY }}
              className="absolute inset-0"
            >
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-royal-blue/20 blur-[150px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/15 blur-[150px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/10 blur-[180px]" />
            </motion.div>
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '100px 100px'
              }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white/70 text-sm">Now serving patients in Cancún & Tijuana</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-satoshi font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
              >
                <span className="text-white">The future of</span>
                <br />
                <span className="bg-gradient-to-r from-royal-blue via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  metabolic health
                </span>
                <br />
                <span className="text-white">is here.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-8 text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed"
              >
                Premium GLP-1 therapy. Licensed physicians.
                <span className="text-white"> 70% below US prices.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  to="/checkout"
                  className="group relative px-8 py-4 bg-white text-[#0a0a0f] font-satoshi font-bold text-lg rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <a
                  href="#learn"
                  className="flex items-center gap-2 px-8 py-4 text-white/60 hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowDown className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-white/50"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-royal-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="relative font-satoshi font-bold text-5xl md:text-6xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    {benefit.stat}
                  </p>
                  <p className="relative mt-4 font-satoshi font-bold text-white">{benefit.label}</p>
                  <p className="relative mt-2 text-white/40">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="learn" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-royal-blue font-medium tracking-wider uppercase mb-4">Your Journey</p>
              <h2 className="font-satoshi font-bold text-4xl md:text-6xl">
                Three simple steps.
              </h2>
            </motion.div>

            <div className="relative space-y-24">
              {journey.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-12 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${i % 2 === 1 ? 'text-right' : ''}`}>
                    <span className="text-7xl font-satoshi font-bold text-white/5">0{i + 1}</span>
                    <h3 className="font-satoshi font-bold text-3xl text-white -mt-8">{step.label}</h3>
                    <p className="mt-4 text-white/50 text-lg">{step.desc}</p>
                  </div>
                  <div className="relative">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-royal-blue to-indigo-600 flex items-center justify-center shadow-[0_0_60px_rgba(44,81,163,0.3)]">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-royal-blue to-indigo-600 blur-xl opacity-40" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Dark Glassmorphism */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-6xl">
                Transparent pricing.
              </h2>
              <p className="mt-4 text-white/50 text-xl">No hidden fees. No subscriptions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-royal-blue/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />

              <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <p className="text-white/40 uppercase tracking-wider text-sm mb-2">AXIS RX Protocol</p>
                    <div className="flex items-baseline gap-3">
                      <span className="font-satoshi font-bold text-6xl md:text-7xl text-white">$499</span>
                      <span className="text-white/40 text-lg">/ 3 months</span>
                    </div>
                    <p className="mt-4 text-white/50">Complete protocol. All-inclusive.</p>
                  </div>

                  <div className="w-full md:w-auto">
                    <Link
                      to="/checkout"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#0a0a0f] font-satoshi font-bold text-lg rounded-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/[0.08] grid md:grid-cols-4 gap-6">
                  {['Physician consultation', '3-month medication supply', 'TSA travel documentation', 'Premium cooler kit'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-royal-blue/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-royal-blue" />
                      </div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Shield className="w-16 h-16 text-royal-blue mx-auto mb-6" />
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl">
                Your deposit is 100% protected.
              </h2>
              <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
                If our Medical Director determines you're not a candidate for GLP-1 therapy during the intake screening, you'll receive an immediate full refund. Zero risk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm"
            >
              <span>HIPAA Compliant</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Licensed Physicians</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>256-bit Encrypted</span>
            </motion.div>
          </div>
        </section>

        {/* Final CTA - Immersive */}
        <section className="py-32 md:py-48 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-royal-blue/30 via-indigo-500/20 to-purple-500/30 blur-[200px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-5xl md:text-7xl leading-tight"
            >
              Ready to transform
              <br />
              <span className="bg-gradient-to-r from-royal-blue via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                your health?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-xl text-white/50 max-w-xl mx-auto"
            >
              Join thousands of patients who chose the smarter path to GLP-1 therapy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <Link
                to="/checkout"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-[#0a0a0f] font-satoshi font-bold text-xl rounded-full hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] transition-all"
              >
                Begin Now
                <div className="w-10 h-10 rounded-full bg-[#0a0a0f] flex items-center justify-center group-hover:bg-royal-blue transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
