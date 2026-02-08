// VARIATION 2: "Bold Medical" - Authoritative, strong contrast, medical credibility
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Syringe, BadgeCheck, Truck, ShieldCheck, Users, Zap, ChevronDown, ArrowRight, Play } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useState } from 'react';

const process = [
  { step: '01', title: 'Reserve', desc: 'Secure your allocation with a refundable $99 deposit', icon: ShieldCheck },
  { step: '02', title: 'Intake', desc: 'Complete HIPAA-compliant health history (5 mins)', icon: Users },
  { step: '03', title: 'Verify', desc: 'Brief call with Patient Coordinator', icon: BadgeCheck },
  { step: '04', title: 'Receive', desc: 'Meet physician & get 3-month supply', icon: Syringe },
];

const faqs = [
  { q: 'Is this legal?', a: 'Yes. You obtain a prescription from a licensed Mexican physician and may legally bring a personal supply back to the US with proper documentation.' },
  { q: 'How is this different from Ozempic®?', a: 'We use the same pharmaceutical-grade active ingredients (Semaglutide/Tirzepatide) in high-purity lyophilized form. Same clinical effect, fraction of the cost.' },
  { q: 'What if I don\'t qualify?', a: 'You receive an immediate 100% refund of your deposit. Zero financial risk.' },
  { q: 'What\'s included in $499?', a: '3-month medication supply, physician consultation, travel cooler kit, and TSA documentation.' },
];

export default function LandingPageV2() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero - Bold Gradient */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-royal-blue" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/90 text-sm font-medium">Limited slots available this month</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-satoshi font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
                >
                  The Future of
                  <span className="block mt-2 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Weight Management
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8 text-xl text-white/80 leading-relaxed max-w-lg"
                >
                  Premium GLP-1 therapies prescribed by licensed physicians in Mexico.
                  <span className="text-white font-semibold"> 70% below US pharmacy prices.</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/checkout"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy font-satoshi font-bold text-lg rounded-xl hover:bg-off-white transition-all duration-300 shadow-lg shadow-black/20"
                  >
                    Get Started — $99 Deposit
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <button className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white/90 font-medium hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="w-4 h-4 ml-0.5" />
                    </div>
                    Watch Video
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-8"
                >
                  {[
                    { value: '$499', label: '3-Month Supply' },
                    { value: '100%', label: 'Refundable' },
                    { value: '24hr', label: 'Response Time' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="font-satoshi font-bold text-2xl md:text-3xl text-white">{stat.value}</p>
                      <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Syringe className="w-24 h-24 text-white/40 mx-auto mb-6" />
                      <p className="text-white/60 text-sm">Premium GLP-1 Therapy</p>
                      <p className="font-satoshi font-bold text-3xl text-white mt-2">Semaglutide</p>
                      <p className="text-white/60 text-sm mt-1">High-Purity Lyophilized</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-royal-blue/30 blur-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-8 bg-white border-b border-accent-silver/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm text-navy/60">
              <span className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-royal-blue" />
                Licensed Physicians
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-royal-blue" />
                HIPAA Compliant
              </span>
              <span className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-royal-blue" />
                TSA Approved Travel
              </span>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-royal-blue font-medium uppercase tracking-wider mb-4">Simple Process</p>
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                How It Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-royal-blue/30 to-transparent" />
                  )}
                  <div className="relative bg-white">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-royal-blue to-royal-blue/80 flex items-center justify-center mb-6 shadow-lg shadow-royal-blue/20">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-royal-blue/50 font-satoshi font-bold text-sm mb-2">{item.step}</p>
                    <h3 className="font-satoshi font-bold text-xl text-navy mb-2">{item.title}</h3>
                    <p className="text-navy/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-gradient-to-b from-off-white to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                The AXIS Advantage
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl shadow-navy/5 overflow-hidden"
            >
              <div className="grid md:grid-cols-3">
                <div className="p-8 md:p-10 bg-off-white/50">
                  <p className="font-satoshi font-bold text-lg text-navy/50 mb-6">Comparison</p>
                  <div className="space-y-6">
                    {['Monthly Cost', 'Commitment', 'Waitlist', 'Quality'].map((label, i) => (
                      <p key={i} className="py-3 text-navy/70 font-medium">{label}</p>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10 border-x border-accent-silver/20">
                  <p className="font-satoshi font-bold text-lg text-navy/50 mb-6">US Clinics</p>
                  <div className="space-y-6">
                    {['$1,000-1,600', 'Monthly subscription', 'Weeks to months', 'Varies widely'].map((val, i) => (
                      <p key={i} className="py-3 text-navy/60">{val}</p>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10 bg-navy text-white relative">
                  <div className="absolute top-0 right-0 px-4 py-2 bg-royal-blue text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                    Best Choice
                  </div>
                  <p className="font-satoshi font-bold text-lg text-white/70 mb-6">AXIS RX</p>
                  <div className="space-y-6">
                    {['$166/month', 'No subscription', 'Immediate access', 'Medical-grade'].map((val, i) => (
                      <p key={i} className="py-3 text-white font-medium">{val}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy">
                Questions & Answers
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-accent-silver/30 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-off-white/50 transition-colors"
                  >
                    <span className="font-satoshi font-bold text-navy pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-navy/50 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                    <p className="px-6 pb-6 text-navy/70 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-navy via-navy to-royal-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-4xl md:text-5xl text-white"
            >
              Transform Your Health Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl text-white/70 max-w-xl mx-auto"
            >
              Join thousands of patients who chose the smarter path to GLP-1 therapy
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
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy font-satoshi font-bold text-lg rounded-xl hover:bg-off-white transition-all shadow-lg shadow-black/20"
              >
                Reserve Your Spot
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-white/50 text-sm"
            >
              100% refundable if you don't qualify
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
