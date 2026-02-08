// VARIATION 1: "Minimal Luxe" - Ultra clean, Hims/Ro inspired
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, ChevronRight, Check, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const stats = [
  { value: '70%', label: 'Below US Prices' },
  { value: '3mo', label: 'Full Protocol' },
  { value: '24hr', label: 'Confirmation' },
  { value: '100%', label: 'Refundable' },
];

const features = [
  { icon: Shield, title: 'Medical-Grade Quality', desc: 'Same active ingredients as Ozempic® & Mounjaro®' },
  { icon: Clock, title: 'No Waiting Lists', desc: 'Instant physician access in Cancún or Tijuana' },
  { icon: Award, title: 'Licensed Physicians', desc: 'Board-certified doctors, HIPAA compliant process' },
];

const testimonials = [
  { name: 'Michael R.', location: 'Austin, TX', text: 'The process was seamless. Hotel delivery in Cancún made it so convenient.', rating: 5 },
  { name: 'Sarah K.', location: 'San Diego, CA', text: 'Finally affordable access to the same medication. Life-changing results.', rating: 5 },
  { name: 'David L.', location: 'Phoenix, AZ', text: 'Professional, discreet, and incredibly cost-effective. Highly recommend.', rating: 5 },
];

export default function LandingPageV1() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero - Minimal & Clean */}
        <section className="min-h-[90vh] flex items-center bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-off-white/50 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-blue/10 text-royal-blue text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-royal-blue animate-pulse" />
                Now accepting patients for March 2025
              </motion.div>

              <motion.h1
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-satoshi font-bold text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.1] tracking-tight"
              >
                Premium GLP-1
                <br />
                <span className="text-royal-blue">Without the Premium Price</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={2}
                className="mt-8 text-xl text-navy/70 leading-relaxed max-w-xl"
              >
                Access Semaglutide & Tirzepatide at 70% below US pharmacy prices.
                Licensed physicians. Delivered to your hotel in Mexico.
              </motion.p>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/checkout"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-satoshi font-bold text-lg rounded-full hover:bg-navy/90 transition-all duration-300 hover:gap-4"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-navy font-medium hover:text-royal-blue transition-colors"
                >
                  See How It Works
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={4}
                className="mt-16 flex items-center gap-8 text-sm text-navy/60"
              >
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  HIPAA Compliant
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  TSA Approved Travel
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  $99 Refundable Deposit
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-satoshi font-bold text-4xl md:text-5xl text-white">{stat.value}</p>
                  <p className="mt-2 text-white/60 text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Why Patients Choose Us
              </h2>
              <p className="mt-4 text-xl text-navy/60 max-w-2xl mx-auto">
                The smart alternative to overpriced US healthcare
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group p-8 rounded-3xl bg-off-white/50 hover:bg-off-white transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-royal-blue/10 flex items-center justify-center mb-6 group-hover:bg-royal-blue/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-royal-blue" />
                  </div>
                  <h3 className="font-satoshi font-bold text-xl text-navy mb-3">{feature.title}</h3>
                  <p className="text-navy/60 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-24 bg-off-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Transparent Pricing
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white border border-accent-silver/30"
              >
                <p className="text-sm uppercase tracking-wider text-navy/50 mb-4">US Pharmacy</p>
                <p className="font-satoshi font-bold text-5xl text-navy/40 line-through">$1,200+</p>
                <p className="text-navy/50 mt-2">per month, plus insurance hassles</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-navy text-white relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 text-xs font-medium">
                  BEST VALUE
                </div>
                <p className="text-sm uppercase tracking-wider text-white/60 mb-4">AXIS RX Protocol</p>
                <p className="font-satoshi font-bold text-5xl text-white">$499</p>
                <p className="text-white/70 mt-2">complete 3-month supply</p>
                <ul className="mt-6 space-y-3">
                  {['Full physician consultation', 'TSA travel documentation', 'Premium cooler kit'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <Check className="w-4 h-4 text-royal-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Patient Stories
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-off-white/50"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-navy/80 leading-relaxed mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-satoshi font-bold text-navy">{t.name}</p>
                    <p className="text-sm text-navy/50">{t.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-4xl md:text-5xl text-white"
            >
              Ready to Start?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl text-white/70"
            >
              Reserve your spot with a fully refundable $99 deposit
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <Link
                to="/checkout"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy font-satoshi font-bold text-lg rounded-full hover:bg-off-white transition-colors"
              >
                Check Eligibility
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
