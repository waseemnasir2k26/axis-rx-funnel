// VARIATION 4: "Editorial Luxury" - Magazine style, asymmetric layouts, Apple/Tesla inspired
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Minus, Plus } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useRef, useState } from 'react';

const metrics = [
  { number: '70', suffix: '%', label: 'Cost Savings' },
  { number: '3', suffix: 'mo', label: 'Full Protocol' },
  { number: '2000', suffix: '+', label: 'Patients Served' },
  { number: '100', suffix: '%', label: 'Satisfaction' },
];

const features = [
  {
    num: '01',
    title: 'Pharmaceutical-Grade Medication',
    desc: 'The exact same active ingredients found in Ozempic® and Mounjaro® — Semaglutide and Tirzepatide — in high-purity lyophilized form.',
  },
  {
    num: '02',
    title: 'Licensed Medical Team',
    desc: 'Board-certified physicians conduct thorough consultations. Every prescription follows strict medical protocols and guidelines.',
  },
  {
    num: '03',
    title: 'Seamless Experience',
    desc: 'Hotel delivery in Cancún or VIP clinic visit in Tijuana. TSA-approved travel kit included. Zero hassle, maximum convenience.',
  },
];

const faqs = [
  { q: 'Is this legal for US patients?', a: 'Yes. You receive a prescription from a licensed Mexican physician and may legally transport a personal supply back to the US with proper documentation, which we provide.' },
  { q: 'What makes this different from US telehealth?', a: 'No monthly subscriptions, no insurance battles, no waitlists. One flat fee for your complete 3-month protocol, prescribed by a licensed physician.' },
  { q: 'What if I don\'t qualify medically?', a: 'Your $99 deposit is 100% refundable if our Medical Director determines you\'re not a candidate during the intake screening.' },
];

export default function LandingPageV4() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        {/* Hero - Editorial Style */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-royal-blue font-medium tracking-wide mb-6"
                  >
                    AXIS RX — PREMIUM GLP-1 THERAPY
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-satoshi font-bold text-[clamp(3rem,8vw,7rem)] text-navy leading-[0.95] tracking-tight"
                  >
                    The intelligent
                    <br />
                    approach to
                    <br />
                    <span className="text-royal-blue">weight loss.</span>
                  </motion.h1>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-4 pb-4"
                >
                  <p className="text-navy/60 text-lg leading-relaxed mb-8">
                    Access the same GLP-1 medications used worldwide, prescribed by licensed physicians in Mexico at a fraction of US costs.
                  </p>
                  <Link
                    to="/checkout"
                    className="group inline-flex items-center gap-4 text-navy font-satoshi font-bold text-lg"
                  >
                    <span className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center group-hover:bg-royal-blue transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                    Begin Your Journey
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Large feature image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 md:mt-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative aspect-[21/9] rounded-t-[2rem] overflow-hidden bg-gradient-to-br from-navy via-navy to-royal-blue">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <p className="text-sm uppercase tracking-widest mb-2">Premium Quality</p>
                    <p className="font-satoshi font-bold text-4xl md:text-6xl">Semaglutide</p>
                    <p className="text-sm uppercase tracking-widest mt-2">High-Purity Lyophilized</p>
                  </div>
                </div>
                {/* Floating price tag */}
                <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl">
                  <p className="text-sm text-navy/50 mb-1">Complete Protocol</p>
                  <p className="font-satoshi font-bold text-4xl text-navy">$499</p>
                  <p className="text-sm text-navy/50">3-month supply</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Metrics - Large Typography */}
        <section className="py-24 md:py-32 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <p className="font-satoshi font-bold text-6xl md:text-8xl text-navy">
                    {metric.number}
                    <span className="text-royal-blue">{metric.suffix}</span>
                  </p>
                  <p className="mt-2 text-navy/50 uppercase tracking-wider text-sm">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features - Magazine Layout */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-royal-blue font-medium tracking-wide mb-4">WHY CHOOSE AXIS RX</p>
              <h2 className="font-satoshi font-bold text-4xl md:text-6xl text-navy max-w-3xl">
                Medical excellence meets accessible pricing.
              </h2>
            </motion.div>

            <div className="space-y-16 md:space-y-24">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid md:grid-cols-12 gap-8 items-start ${i % 2 === 1 ? 'md:text-right' : ''}`}
                >
                  <div className={`md:col-span-2 ${i % 2 === 1 ? 'md:order-3' : ''}`}>
                    <span className="font-satoshi font-bold text-6xl text-navy/10">{feature.num}</span>
                  </div>
                  <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <h3 className="font-satoshi font-bold text-2xl md:text-3xl text-navy mb-4">{feature.title}</h3>
                    <p className="text-navy/60 text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-off-white to-accent-silver/30" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing - Clean Comparison */}
        <section className="py-24 md:py-32 bg-navy text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-6xl">
                Simple, transparent
                <br />
                pricing.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* US Option */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-white/40 uppercase tracking-wider text-sm mb-6">Traditional US Route</p>
                <p className="font-satoshi font-bold text-5xl text-white/30 line-through mb-2">$1,200+</p>
                <p className="text-white/40 mb-8">per month</p>
                <ul className="space-y-4">
                  {['Insurance battles', 'Monthly subscriptions', 'Waitlists & shortages', 'Hidden fees'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/50">
                      <Minus className="w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AXIS Option */}
              <div className="p-8 md:p-10 rounded-3xl bg-white text-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-2 bg-royal-blue text-white text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
                  Recommended
                </div>
                <p className="text-navy/40 uppercase tracking-wider text-sm mb-6">AXIS RX Protocol</p>
                <p className="font-satoshi font-bold text-5xl text-navy mb-2">$499</p>
                <p className="text-navy/50 mb-8">complete 3-month supply</p>
                <ul className="space-y-4">
                  {['No subscriptions', 'Instant access', 'All-inclusive pricing', 'TSA documentation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy/70">
                      <Check className="w-4 h-4 text-royal-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/checkout"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-satoshi font-bold rounded-xl hover:bg-royal-blue transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ - Minimal */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Common questions.
              </h2>
            </motion.div>

            <div className="divide-y divide-accent-silver/30">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span className="font-satoshi font-bold text-lg text-navy pr-8">{faq.q}</span>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full border border-accent-silver/50 flex items-center justify-center">
                      {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                    <p className="text-navy/60 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Full Width */}
        <section className="py-24 md:py-32 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-satoshi font-bold text-4xl md:text-6xl text-navy leading-tight">
                  Ready to begin?
                </h2>
                <p className="mt-6 text-navy/60 text-lg leading-relaxed max-w-md">
                  Start with a $99 refundable deposit. If you don't qualify, you get every penny back.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-start md:justify-end"
              >
                <Link
                  to="/checkout"
                  className="group inline-flex items-center gap-6"
                >
                  <span className="font-satoshi font-bold text-xl text-navy">Check Eligibility</span>
                  <span className="w-20 h-20 rounded-full bg-navy text-white flex items-center justify-center group-hover:bg-royal-blue transition-colors">
                    <ArrowUpRight className="w-8 h-8" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
