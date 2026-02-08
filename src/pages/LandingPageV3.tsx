// VARIATION 3: "Modern Tech" - Silicon Valley startup feel, glassmorphism, dynamic
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Check, Star, ChevronRight, Shield, Pill, MapPin, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useRef } from 'react';

const benefits = [
  { icon: Pill, title: 'Same Active Ingredients', desc: 'Pharmaceutical-grade Semaglutide & Tirzepatide' },
  { icon: Shield, title: 'Licensed & Legal', desc: 'Board-certified physicians, full documentation' },
  { icon: MapPin, title: 'Convenient Locations', desc: 'Cancún hotel delivery or Tijuana clinic' },
  { icon: Clock, title: 'Fast Process', desc: 'Same-day confirmation, 24hr response time' },
];

const reviews = [
  { name: 'Jennifer M.', role: 'Verified Patient', text: 'Incredible experience. The savings are real and the process was completely professional.', avatar: 'JM' },
  { name: 'Robert K.', role: 'Verified Patient', text: 'Skeptical at first, but this exceeded all expectations. Highly recommend AXIS RX.', avatar: 'RK' },
  { name: 'Amanda S.', role: 'Verified Patient', text: 'The hotel delivery in Cancún was so convenient. Worth every penny saved.', avatar: 'AS' },
];

export default function LandingPageV3() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      <Header />
      <main className="pt-20 bg-[#fafafa]">
        {/* Hero - Glassmorphism */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-royal-blue/30 to-purple-500/20 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400/20 to-royal-blue/30 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, 100, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-royal-blue/10 to-indigo-500/10 blur-3xl"
            />
          </div>

          <motion.div
            style={{ opacity, scale }}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-accent-silver/30 shadow-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-royal-blue" />
                <span className="text-navy text-sm font-medium">Trusted by 2,000+ patients</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-satoshi font-bold text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.1]"
              >
                GLP-1 Therapy
                <span className="block mt-3 bg-gradient-to-r from-royal-blue via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Reimagined
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-xl md:text-2xl text-navy/60 max-w-2xl mx-auto leading-relaxed"
              >
                Access premium weight management medication at
                <span className="text-navy font-semibold"> 70% less </span>
                than US pharmacies. No subscriptions. No waitlists.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  to="/checkout"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-satoshi font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy/20"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-royal-blue to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link
                  to="#pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 text-navy font-medium hover:text-royal-blue transition-colors"
                >
                  View Pricing
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Glass card preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-20"
              >
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/20 to-purple-500/20 rounded-3xl blur-xl" />
                  <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-navy/5 p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                      <div>
                        <p className="text-sm text-navy/50 uppercase tracking-wider mb-2">US Pharmacy</p>
                        <p className="font-satoshi font-bold text-3xl text-navy/30 line-through">$1,200+/mo</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-royal-blue to-indigo-500 text-white text-xs font-bold">
                          SAVE 70%
                        </div>
                        <p className="text-sm text-royal-blue uppercase tracking-wider mb-2">AXIS RX</p>
                        <p className="font-satoshi font-bold text-4xl md:text-5xl bg-gradient-to-r from-royal-blue to-indigo-500 bg-clip-text text-transparent">$499</p>
                        <p className="text-navy/50 text-sm mt-1">3-month supply</p>
                      </div>
                      <div>
                        <p className="text-sm text-navy/50 uppercase tracking-wider mb-2">You Save</p>
                        <p className="font-satoshi font-bold text-3xl text-green-500">$3,100+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-royal-blue font-medium mb-4">Why AXIS RX</p>
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Everything You Need
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group p-8 rounded-3xl bg-gradient-to-b from-[#fafafa] to-white border border-accent-silver/20 hover:border-royal-blue/30 hover:shadow-xl hover:shadow-royal-blue/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-blue to-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-royal-blue/20 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-satoshi font-bold text-xl text-navy mb-3">{benefit.title}</h3>
                  <p className="text-navy/60 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Timeline */}
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Simple 4-Step Process
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-blue via-indigo-500 to-purple-500" />

              {[
                { num: '01', title: 'Reserve Your Spot', desc: '$99 refundable deposit secures your consultation and medication allocation.' },
                { num: '02', title: 'Complete Intake', desc: 'Quick 5-minute HIPAA-compliant health questionnaire online.' },
                { num: '03', title: 'Video Verification', desc: 'Brief call with our Patient Coordinator to confirm eligibility.' },
                { num: '04', title: 'Receive Treatment', desc: 'Meet your physician and receive your complete 3-month supply.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-center gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <div className={`inline-block p-6 rounded-2xl bg-white border border-accent-silver/20 shadow-lg shadow-navy/5 ${i % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <p className="text-sm font-bold text-royal-blue mb-2">STEP {step.num}</p>
                      <h3 className="font-satoshi font-bold text-xl text-navy mb-2">{step.title}</h3>
                      <p className="text-navy/60">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-royal-blue z-10" />

                  <div className="flex-1 md:hidden pl-16">
                    <p className="text-sm font-bold text-royal-blue mb-2">STEP {step.num}</p>
                    <h3 className="font-satoshi font-bold text-xl text-navy mb-2">{step.title}</h3>
                    <p className="text-navy/60">{step.desc}</p>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Loved by Patients
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#fafafa] to-white border border-accent-silver/20"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-navy/80 leading-relaxed mb-8">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-blue to-indigo-500 flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-satoshi font-bold text-navy">{review.name}</p>
                      <p className="text-sm text-navy/50">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-navy" />
          <div className="absolute inset-0">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-96 h-96 rounded-full bg-royal-blue/30 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-white/80 text-sm">100% refundable if you don't qualify</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl text-white"
            >
              Start Your Transformation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-white/70 max-w-xl mx-auto"
            >
              Join thousands who chose smarter, more affordable access to GLP-1 therapy
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <Link
                to="/checkout"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-navy font-satoshi font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                <span className="relative z-10">Check Eligibility</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-off-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
