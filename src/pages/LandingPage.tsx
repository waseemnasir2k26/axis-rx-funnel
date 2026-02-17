// AXIS RX Landing Page - Premium Concierge Medical Experience
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Shield,
  Check,
  Calendar,
  FileText,
  Phone,
  Stethoscope,
  Plane,
  Thermometer,
  FileCheck,
  Star,
  ChevronDown,
  MapPin,
  Clock,
  Award,
  Lock,
  BadgeCheck,
  Languages,
  HeartPulse,
  UserCheck
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WelcomePopup from '@/components/ui/WelcomePopup';
import ChatAgent from '@/components/ui/ChatAgent';
import SafeCrossing from '@/components/sections/SafeCrossing';
import { useRef, useState, useEffect } from 'react';

// Stats ticker data
const stats = [
  { value: '15-20%', label: 'Avg Body Weight Loss', note: 'Clinical efficacy*' },
  { value: '100%', label: 'Cold Chain Integrity', note: 'Delivery precision' },
  { value: '0', label: 'Customs Incidents', note: '100% Legal Import' },
  { value: '4.9/5', label: 'Patient Rating', note: 'Post-deployment' },
];

// Process steps
const steps = [
  {
    num: '01',
    icon: Calendar,
    title: 'Reserve',
    desc: 'Secure your allocation and lock in today\'s pricing with a fully refundable $99 deposit.',
    detail: 'Schedule Intake immediately after payment'
  },
  {
    num: '02',
    icon: FileText,
    title: 'HIPAA-Encrypted Intake',
    desc: 'Complete a secure, HIPAA-compliant health history form to provide your medical background.',
    detail: '100% private & encrypted'
  },
  {
    num: '03',
    icon: Phone,
    title: 'Verification',
    desc: 'Connect with our Patient Coordinator to confirm your eligibility via brief video call.',
    detail: 'Schedule your appointment time'
  },
  {
    num: '04',
    icon: Stethoscope,
    title: 'Consult & Receive',
    desc: 'Meet your Certified Physician for In-Suite Visit, comprehensive check-up and dosage review.',
    detail: 'Receive full 3-month supply'
  },
];

// Testimonials
const testimonials = [
  {
    quote: "I was terrified of buying meds in Mexico. I thought I'd get scammed or get bad product. Axis Rx showed up at my Rosewood suite with a sealed cooler and a doctor who spoke better English than me. The TSA letter worked perfectly at Houston Intercontinental.",
    name: 'J.D.',
    location: 'Dallas, TX',
    title: 'The skeptic turned believer.',
    verified: true
  },
  {
    quote: "In Beverly Hills, I wait 2 weeks for an appointment. In Cancún, Axis Rx was in my villa in 3 hours. The packaging is on par with Apple. Down 18 lbs in 2 months.",
    name: 'Sarah M.',
    location: 'Los Angeles, CA',
    title: 'Better than my concierge doctor in LA.',
    verified: true
  },
  {
    quote: "I did the math. The flight, the hotel, and the Axis Rx protocol cost less than 3 months of Ozempic at cash price in New York. It's a no-brainer.",
    name: 'Michael R.',
    location: 'NYC',
    title: 'ROI is undeniable.',
    verified: true
  },
];

// FAQ data
const faqs = [
  {
    q: 'Is this legal to bring back to the US?',
    a: 'Yes. Under FDA guidance for personal importation, you are generally permitted to bring back up to a 90-day supply of medication for personal use, provided you have a valid prescription and the product is declared. Axis Rx provides the Customs Declaration Letter and Official Prescription specifically designed for this purpose.'
  },
  {
    q: 'Why is it cheaper than in the US?',
    a: 'You are bypassing the US insurance and pharmacy benefit manager (PBM) system. In Mexico, drug prices are regulated based on market reality, not insurance inflation. You are paying for the molecule and the service, not the bureaucracy.'
  },
  {
    q: 'How do I travel with the medication?',
    a: 'Your deployment includes the Thermal Voyager, a specialized medical travel case engineered to maintain temperature stability for up to 12 hours. It is TSA-compliant for carry-on luggage.'
  },
  {
    q: 'Is the medication the same as the brand name?',
    a: 'We use Compounded Semaglutide/Tirzepatide sourced from regulated, sterile compounding pharmacies in Mexico. While it is not the "brand name" pen, it contains the exact same active pharmaceutical ingredient (API) and operates on the same biological GLP-1 receptors.'
  },
  {
    q: 'What if I have side effects when I get home?',
    a: 'Our care doesn\'t end at the hotel door. You have direct access to our Medical Team for ongoing support and guidance throughout your treatment.'
  },
  {
    q: 'What if I\'m not a candidate?',
    a: 'Your $99 deposit is fully creditable toward your treatment total. If our Medical Director determines you are not a candidate for GLP-1 therapy during the intake screening, you will receive an immediate 100% refund. Zero financial risk.'
  },
];

// Animated counter component
function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!inView) return;

    // Parse the value to determine animation type
    if (value === '15-20%') {
      // Animate from 0 to 15, then show full string
      let current = 0;
      const target = 15;
      const duration = 1500;
      const stepTime = duration / target;

      const timer = setInterval(() => {
        current += 1;
        if (current >= target) {
          clearInterval(timer);
          setDisplayValue('15-20%');
        } else {
          setDisplayValue(`${current}%`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else if (value === '100%') {
      let current = 0;
      const target = 100;
      const duration = 1500;
      const increment = 2;
      const stepTime = duration / (target / increment);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          setDisplayValue('100%');
        } else {
          setDisplayValue(`${current}%`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else if (value === '0') {
      // Quick flash to 0
      setDisplayValue('0');
    } else if (value === '4.9/5') {
      let current = 0;
      const target = 4.9;
      const duration = 1500;
      const steps = 49;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        current += 0.1;
        if (current >= target) {
          clearInterval(timer);
          setDisplayValue('4.9/5');
        } else {
          setDisplayValue(`${current.toFixed(1)}/5`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else {
      setDisplayValue(value);
    }
  }, [inView, value]);

  return <>{displayValue}</>;
}

export default function LandingPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <>
      <WelcomePopup />
      <ChatAgent />
      <Header />
      <main className="bg-navy text-off-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/images/concierge-arrival.png"
              alt="AXIS RX Concierge Service"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                >
                  <Sparkles className="w-4 h-4 text-royal-blue" />
                  <span className="text-off-white/70 text-sm">Global Access to GLP-1 Therapies</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
                >
                  <span className="text-off-white">Premium GLP-1 Therapies.</span>
                  <br />
                  <span className="text-royal-blue">70% Below US Pharmacy Prices.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-6 text-lg md:text-xl text-off-white/60 max-w-xl leading-relaxed"
                >
                  Access the exact same active ingredients (Semaglutide & Tirzepatide) used in Ozempic® and Mounjaro®—without the insurance battles or monthly subscription fees. Delivered directly to your hotel or villa in Cancún or Tijuana.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-8 flex flex-col sm:flex-row items-start gap-4"
                >
                  <Link
                    to="/checkout"
                    className="group relative px-8 py-4 bg-royal-blue text-white font-satoshi font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-glow-hover"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Check Eligibility & Reserve Stock
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <p className="text-off-white/40 text-sm self-center">
                    Starts at <span className="text-off-white font-semibold">$499</span> for complete 3-month protocol
                  </p>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                  className="mt-10 flex flex-wrap items-center gap-6 text-off-white/40 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>256-Bit Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Licensed Physicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4" />
                    <span>TSA Approved Kit</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image - Product Shot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden lg:block relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/thermal-voyager.png"
                    alt="AXIS RX Thermal Voyager Kit"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-royal-blue/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                  <p className="text-white/70 text-sm">Complete Protocol</p>
                  <p className="text-white font-satoshi font-bold text-2xl">$499</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Ticker */}
        <section ref={statsRef} className="py-16 bg-navy border-y border-white/5">
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
                  <p className="font-satoshi font-bold text-3xl md:text-4xl text-royal-blue">
                    <AnimatedCounter value={stat.value} inView={isStatsInView} />
                  </p>
                  <p className="mt-2 text-off-white font-medium">{stat.label}</p>
                  <p className="text-off-white/40 text-sm">{stat.note}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-center text-off-white/30 text-xs">
              *Based on clinical trial data for GLP-1 Agonists over 68 weeks.
            </p>
          </div>
        </section>

        {/* Value Stack - Comparison */}
        <section className="py-24 bg-off-white text-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl">
                Pay for the Molecule. Not the Marketing.
              </h2>
              <p className="mt-4 text-navy/60 text-lg max-w-2xl mx-auto">
                Whether you choose Semaglutide (GLP-1) or advanced Tirzepatide (Dual Agonist), the US healthcare system charges you for bureaucracy. Axis Rx charges you for results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* US Model Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm opacity-70"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xl">🇺🇸</span>
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-xl">US Clinic Model</h3>
                    <p className="text-navy/40 text-sm">Brand Name Retail*</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Medication Cost (3 Months)', value: '$4,200 USD' },
                    { label: 'Doctor Consultation', value: '$300 - $500 USD' },
                    { label: 'Prescription & Legal Fees', value: '$200+' },
                    { label: 'Concierge Delivery', value: 'EXPENSIVE' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-navy/60">{item.label}</span>
                      <span className="font-medium text-navy/80">{item.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-bold text-navy">TOTAL INVESTMENT</span>
                    <span className="font-satoshi font-bold text-2xl text-red-500">~$4,500 USD</span>
                  </div>
                </div>
              </motion.div>

              {/* AXIS Model Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-navy text-off-white border-2 border-royal-blue shadow-glow relative overflow-hidden"
              >
                <div className="bg-royal-blue text-white text-xs font-bold px-4 py-2 text-center tracking-wider">
                  RECOMMENDED
                </div>
                <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-royal-blue/20 flex items-center justify-center">
                    <span className="text-xl">🇲🇽</span>
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-xl">Axis Rx Protocol</h3>
                    <p className="text-off-white/50 text-sm">Concierge Service</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Medication Cost (3 Months)', value: 'INCLUDED', highlight: true },
                    { label: 'Doctor Consultation', value: 'INCLUDED', highlight: true },
                    { label: 'Prescription & Legal Fees', value: 'INCLUDED', highlight: true },
                    { label: 'Concierge Delivery', value: 'INCLUDED', highlight: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/10">
                      <span className="text-off-white/70">{item.label}</span>
                      <span className={`font-medium flex items-center gap-2 ${item.highlight ? 'text-green-400' : ''}`}>
                        <Check className="w-4 h-4" />
                        {item.value}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-bold">TOTAL INVESTMENT</span>
                    <span className="font-satoshi font-bold text-2xl text-green-400">$499 USD</span>
                  </div>
                  <div className="text-center pt-2">
                    <span className="text-royal-blue font-bold text-lg">YOUR SAVINGS: 70% OFF</span>
                  </div>
                </div>
                </div>
              </motion.div>
            </div>

            <p className="mt-8 text-center text-navy/40 text-sm max-w-2xl mx-auto">
              *Comparison based on average cash retail price for brand-name Semaglutide in CA/TX without insurance. Axis Rx utilizes compounded GLP-1 medications from licensed pharmacies.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 bg-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-royal-blue font-medium tracking-wider uppercase mb-4">Your Path to Metabolic Control</p>
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white">
                Four Simple Steps
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.03, borderColor: 'rgba(44, 81, 163, 0.8)' }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-royal-blue/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-royal-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-royal-blue flex items-center justify-center shadow-lg shadow-royal-blue/30"
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-5xl font-satoshi font-bold text-white/5 group-hover:text-white/10 transition-colors">{step.num}</span>
                  </div>
                  <h3 className="font-satoshi font-bold text-xl text-off-white mb-2">{step.title}</h3>
                  <p className="text-off-white/50 text-sm leading-relaxed">{step.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-green-400 font-medium">{step.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-royal-blue" />
                <span className="text-off-white">
                  <strong>Cancún:</strong> We come to your hotel, suite, or AirBnB
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-royal-blue" />
                <span className="text-off-white">
                  <strong>Tijuana:</strong> VIP consultation at our private medical suite
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Medical Partner Standard Section */}
        <section className="py-24 bg-off-white text-navy relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-royal-blue font-medium tracking-wider uppercase mb-4"
              >
                The Axis Medical Partner Standard
              </motion.p>
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl">
                We Don't Hire "Staff." We Deploy Vetted Medical Partners.
              </h2>
              <p className="mt-4 text-navy/60 text-lg max-w-2xl mx-auto">
                Every medical professional in the Axis Rx network undergoes a rigorous 4-step validation process before they ever handle a patient.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BadgeCheck,
                  title: 'Licensure',
                  desc: '100% Cédula Profesional (Federal Medical License) verified against the Mexican SEP Database.',
                  color: 'from-blue-500 to-royal-blue'
                },
                {
                  icon: Languages,
                  title: 'Bilingual Certification',
                  desc: 'C1/C2 English proficiency required for transparent communication with US patients.',
                  color: 'from-emerald-500 to-teal-500'
                },
                {
                  icon: HeartPulse,
                  title: 'Crisis Protocols',
                  desc: 'Trained in Advanced Cardiac Life Support (ACLS) and proprietary anaphylaxis response protocols.',
                  color: 'from-rose-500 to-pink-500'
                },
                {
                  icon: UserCheck,
                  title: 'Background Check',
                  desc: 'Full criminal and professional liability screening before network admission.',
                  color: 'from-violet-500 to-purple-500'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="font-satoshi font-bold text-lg text-navy mb-2 relative z-10">{item.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Protocol Comparison - Semaglutide vs Tirzepatide */}
        <section className="py-24 bg-navy relative overflow-hidden">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(ellipse 80% 50% at 20% 50%, rgba(44, 81, 163, 0.3) 0%, transparent 50%)',
                'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(44, 81, 163, 0.3) 0%, transparent 50%)',
                'radial-gradient(ellipse 80% 50% at 20% 50%, rgba(44, 81, 163, 0.3) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white">
                Choose Your Protocol
              </h2>
              <p className="mt-4 text-off-white/60 text-lg max-w-2xl mx-auto">
                Both protocols use the same biological mechanisms. The difference is in the receptor activation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Semaglutide Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-slate-500/20 text-slate-300 text-xs font-bold">THE STANDARD</span>
                    <h3 className="font-satoshi font-bold text-2xl text-off-white mt-2">Semaglutide</h3>
                    <p className="text-off-white/50 text-sm">Single GLP-1 Agonist</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-satoshi font-bold text-4xl text-off-white">$499</span>
                    <span className="text-off-white/50">/ 3 months</span>
                  </div>
                  <p className="text-off-white/40 text-sm mt-1">US Monthly Cost: ~$1,300</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {['3-month medication supply', 'Physician consultation included', 'TSA travel documentation', 'Thermal Voyager kit'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-off-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/checkout"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-off-white font-satoshi font-bold rounded-xl hover:bg-white/20 transition-colors"
                >
                  Select Protocol
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Tirzepatide Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-royal-blue/20 border-2 border-royal-blue relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-royal-blue text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  RECOMMENDED
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">THE ADVANCED</span>
                    <h3 className="font-satoshi font-bold text-2xl text-off-white mt-2">Tirzepatide</h3>
                    <p className="text-off-white/50 text-sm">Dual GIP/GLP-1 Agonist</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-satoshi font-bold text-4xl text-off-white">$899</span>
                    <span className="text-off-white/50">/ 3 months</span>
                  </div>
                  <p className="text-off-white/40 text-sm mt-1">US Monthly Cost: ~$1,600</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Everything in Semaglutide', 'Dual receptor activation', 'Enhanced metabolic response', 'Superior appetite control', 'Faster documented results'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-off-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/checkout"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-royal-blue text-white font-satoshi font-bold rounded-xl hover:shadow-glow-hover transition-all"
                >
                  Select Protocol
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Retatrutide Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-rose-500/10 border-2 border-amber-500/50 relative overflow-hidden"
              >
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />

                {/* Upscale badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg shadow-amber-500/30">
                  <Sparkles className="w-3 h-3" />
                  THE VISIONARY
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">TRIPLE AGONIST</span>
                      <h3 className="font-satoshi font-bold text-2xl text-off-white mt-2">Retatrutide</h3>
                      <p className="text-off-white/50 text-sm">GIP/GLP-1/Glucagon</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-satoshi font-bold text-4xl bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">$1,199</span>
                      <span className="text-off-white/50">/ 3 months</span>
                    </div>
                    <p className="text-amber-400/70 text-sm mt-1 font-medium">US: Not Available Yet</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Everything in Tirzepatide',
                      'Triple receptor activation (GLP-1, GIP, & Glucagon)',
                      'Maximum metabolic rate increase',
                      'Highest clinical efficacy (~24% weight loss)',
                      'Breaks resistant plateaus immediately',
                      'For experienced users only'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-off-white/70 text-sm">
                        <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/checkout"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-satoshi font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                  >
                    Select Protocol
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <p className="mt-8 text-center text-off-white/80 text-sm font-medium">
              Billed as a complete 12-week (3-month) protocol. <span className="text-green-400">No monthly subscriptions.</span>
            </p>
          </div>
        </section>

        {/* Travel-Ready Protocol - "Fly with Confidence" */}
        <section className="py-24 bg-[#0a0a14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-royal-blue font-medium tracking-wider uppercase mb-4">The Travel-Ready Protocol</p>
                <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white mb-6">
                  Fly with Confidence
                </h2>
                <p className="text-off-white/60 text-lg mb-8">
                  We've engineered every detail to make your return journey seamless. Your medication stays protected, your paperwork is prepared, and TSA knows exactly what to expect.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-royal-blue/20 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-6 h-6 text-royal-blue" />
                    </div>
                    <div>
                      <h4 className="font-satoshi font-bold text-off-white mb-1">Thermal Voyager Case</h4>
                      <p className="text-off-white/50">Maintains temperature stability for up to 48 hours. Premium hard-shell finish, TSA-compliant for carry-on.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-royal-blue/20 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-6 h-6 text-royal-blue" />
                    </div>
                    <div>
                      <h4 className="font-satoshi font-bold text-off-white mb-1">TSA Documentation Package</h4>
                      <p className="text-off-white/50">Pre-printed Customs Declaration Letter and Official Prescription. Pass security without issues.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-royal-blue/20 flex items-center justify-center flex-shrink-0">
                      <Plane className="w-6 h-6 text-royal-blue" />
                    </div>
                    <div>
                      <h4 className="font-satoshi font-bold text-off-white mb-1">90-Day Legal Import</h4>
                      <p className="text-off-white/50">FDA guidance permits personal importation of up to 90-day supply with valid prescription.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/travel-kit.png"
                    alt="AXIS RX Travel Kit"
                    className="w-full h-auto"
                  />
                </div>
                {/* Integrated compliance badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy via-navy/95 to-transparent pt-16 pb-6 px-6 rounded-b-3xl">
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-emerald-400 font-satoshi font-bold text-lg">0 Customs Incidents</p>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-royal-blue flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-royal-blue font-satoshi font-bold text-lg">100% Legal Import</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Risk Reversal / Guarantee */}
        <section className="py-24 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-12 rounded-3xl bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/30"
            >
              <div className="w-20 h-20 rounded-full bg-royal-blue/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-royal-blue" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium">100% Refundable Deposit</span>
              </div>
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-off-white mb-4">
                Medical Integrity First.
              </h2>
              <p className="text-off-white/60 text-lg max-w-2xl mx-auto mb-6">
                Your $99 USD deposit secures your consultation and reserves your medication allocation from our limited daily stock. This deposit is fully creditable toward your treatment total.
              </p>
              <p className="text-off-white/80 font-medium">
                If our Medical Director determines you are not a candidate for GLP-1 therapy during the intake screening, you will receive an <span className="text-green-400 font-bold">immediate 100% refund</span>. Zero financial risk to see if you qualify.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Safe Crossing Guarantee */}
        <SafeCrossing />

        {/* Testimonials */}
        <section className="py-24 bg-off-white text-navy relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-royal-blue/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-1 mb-4"
              >
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </motion.div>
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl">
                Client Experiences
              </h2>
              <p className="mt-4 text-navy/60 text-lg">
                Real results from verified patients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-satoshi font-bold text-lg text-navy mb-3">"{t.title}"</h4>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="font-medium text-navy">{t.name}</p>
                      <p className="text-navy/40 text-sm">{t.location}</p>
                    </div>
                    {t.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-xs">
                        <Check className="w-3 h-3" />
                        <span>Verified Patient</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Concierge Image Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src="/images/consultation-suite.png"
            alt="AXIS RX Concierge Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white mb-4">
                  We don't come from a clinic.
                </h2>
                <p className="text-off-white/70 text-xl">
                  We bring the hospital to your room.
                </p>
                <Link
                  to="/checkout"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-royal-blue text-white font-satoshi font-bold text-lg rounded-xl hover:shadow-glow-hover transition-all relative z-20"
                >
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white">
                Common Questions
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
                  className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-satoshi font-bold text-off-white pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-royal-blue flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-off-white/60 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/images/lifestyle-couple.png"
              alt="Lifestyle"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-satoshi font-bold text-4xl md:text-6xl text-off-white mb-6">
                Ready to Transform
                <br />
                <span className="text-royal-blue">Your Health?</span>
              </h2>
              <p className="text-off-white/60 text-xl max-w-xl mx-auto mb-10">
                Limited availability. Reserve your slot today and join the smarter path to GLP-1 therapy.
              </p>
              <Link
                to="/checkout"
                className="relative z-20 inline-flex items-center gap-3 px-10 py-5 bg-royal-blue text-white font-satoshi font-bold text-xl rounded-xl hover:shadow-glow-hover transition-all cursor-pointer"
              >
                Secure Your Treatment — $99 Deposit
                <ArrowRight className="w-6 h-6" />
              </Link>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-white text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Same-day confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>HIPAA compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-400" />
                  <span>TSA travel letter included</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>Official Rx Included</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
