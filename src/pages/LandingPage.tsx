// AXIS RX Landing Page - Premium Concierge Medical Experience
import { Link, useLocation } from 'react-router-dom';
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
  UserCheck,
  Scale,
  Snowflake,
  ShieldCheck
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WelcomePopup from '@/components/ui/WelcomePopup';
import ChatAgent from '@/components/ui/ChatAgent';
import SafeCrossing from '@/components/sections/SafeCrossing';
import { useRef, useState, useEffect } from 'react';

// Stats ticker data
const stats = [
  { value: '15-20%', label: 'Avg Body Weight Loss', note: 'Clinical efficacy*', icon: 'scale' },
  { value: '100%', label: 'Cold Chain Integrity', note: 'Delivery precision', icon: 'snowflake' },
  { value: '0', label: 'Customs Incidents', note: '100% Legal Import', icon: 'shield' },
  { value: '4.9/5', label: 'Patient Rating', note: 'Post-deployment', icon: 'star' },
];

// Process steps
const steps = [
  {
    num: '01',
    icon: Calendar,
    title: 'Reserve',
    desc: 'Secure your allocation and lock in today\'s pricing with a Risk-Free Booking Deposit*.',
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

// Easing function for smooth animation
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// Animated counter component with smooth easing
function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const duration = 2500; // Slower, more dramatic
    const startTime = Date.now();
    setIsComplete(false);

    // Parse the value to determine animation type
    if (value === '15-20%') {
      const target = 20;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = Math.floor(easedProgress * target);

        if (progress < 1) {
          if (current < 15) {
            setDisplayValue(`${current}%`);
          } else {
            setDisplayValue(`15-${current}%`);
          }
          requestAnimationFrame(animate);
        } else {
          setDisplayValue('15-20%');
          setIsComplete(true);
        }
      };
      requestAnimationFrame(animate);
    } else if (value === '100%') {
      const target = 100;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = Math.floor(easedProgress * target);

        if (progress < 1) {
          setDisplayValue(`${current}%`);
          requestAnimationFrame(animate);
        } else {
          setDisplayValue('100%');
          setIsComplete(true);
        }
      };
      requestAnimationFrame(animate);
    } else if (value === '0') {
      // Dramatic countdown from random high number
      const fakeStart = 47;
      const fakeDuration = 1800;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / fakeDuration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = Math.floor(fakeStart * (1 - easedProgress));

        if (progress < 1) {
          setDisplayValue(`${current}`);
          requestAnimationFrame(animate);
        } else {
          setDisplayValue('0');
          setIsComplete(true);
        }
      };
      requestAnimationFrame(animate);
    } else if (value === '4.9/5') {
      const target = 4.9;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = easedProgress * target;

        if (progress < 1) {
          setDisplayValue(`${current.toFixed(1)}/5`);
          requestAnimationFrame(animate);
        } else {
          setDisplayValue('4.9/5');
          setIsComplete(true);
        }
      };
      requestAnimationFrame(animate);
    } else {
      setDisplayValue(value);
      setIsComplete(true);
    }
  }, [inView, value]);

  return (
    <span className={`transition-all duration-500 ${isComplete ? 'scale-110' : 'scale-100'}`}>
      {displayValue}
    </span>
  );
}

export default function LandingPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });
  const location = useLocation();

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

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
                  <span className="text-royal-blue">85% Below US Pharmacy Prices.</span>
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
                  className="mt-8 flex flex-col items-start gap-3"
                >
                  <Link
                    to="/checkout"
                    className="group relative px-10 py-4 bg-gradient-to-r from-royal-blue to-axis-green text-white font-satoshi font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-axis-green/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                      Check Eligibility & Reserve Stock
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <p className="text-off-white/40 text-sm whitespace-nowrap">
                    Starts at <span className="text-axis-green font-semibold">$499</span> for complete 3-month protocol
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
                    <span>TSA Compliant Kit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Prescription Included</span>
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
                    src="/images/hero-product-kit.png"
                    alt="AXIS RX Premium GLP-1 Kit"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
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
        <section ref={statsRef} className="py-20 bg-gradient-to-b from-navy via-[#0a0a18] to-navy border-y border-white/5 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  {/* Card glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-royal-blue via-violet-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />

                  {/* Card */}
                  <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-royal-blue/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                      {stat.icon === 'scale' && <Scale className="w-6 h-6 text-emerald-400" />}
                      {stat.icon === 'snowflake' && <Snowflake className="w-6 h-6 text-cyan-400" />}
                      {stat.icon === 'shield' && <ShieldCheck className="w-6 h-6 text-violet-400" />}
                      {stat.icon === 'star' && <Star className="w-6 h-6 text-amber-400" />}
                    </div>

                    {/* Number with glow */}
                    <div className="relative">
                      <p className="font-satoshi font-bold text-4xl md:text-5xl bg-gradient-to-r from-royal-blue via-axis-green to-cyan-400 bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.value} inView={isStatsInView} />
                      </p>
                      {/* Glow behind number */}
                      <div className="absolute inset-0 font-satoshi font-bold text-4xl md:text-5xl text-axis-green/30 blur-lg -z-10">
                        {stat.value}
                      </div>
                    </div>

                    <p className="mt-3 text-off-white font-semibold">{stat.label}</p>
                    <p className="mt-1 text-off-white/50 text-sm">{stat.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-10 text-center text-off-white/30 text-xs"
            >
              *Based on clinical trial data for GLP-1 Agonists over 68 weeks.
            </motion.p>
          </div>
        </section>

        {/* Value Stack - Comparison */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/comparison-bg.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white">
                Pay for the Molecule. Not the Marketing.
              </h2>
              <p className="mt-4 text-off-white/60 text-lg max-w-2xl mx-auto">
                Whether you choose Semaglutide (GLP-1) or advanced Tirzepatide (Dual Agonist), the US healthcare system charges you for bureaucracy. Axis Rx cuts the middlemen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* US Model Card */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-off-white">US Clinic Model</h3>
                    <p className="text-off-white/40 text-sm">US Clinic (Cash Price)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Medication Cost (3 Months)', value: '$4,200 USD' },
                    { label: 'Doctor Consultation', value: '$300 - $500 USD' },
                    { label: 'Prescription & Legal Fees', value: '$200+' },
                    { label: 'Concierge Delivery', value: 'EXPENSIVE' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                      className="flex items-center justify-between py-3 border-b border-white/10"
                    >
                      <span className="text-off-white/60">{item.label}</span>
                      <span className="font-medium text-red-400">{item.value}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center justify-between pt-4"
                  >
                    <span className="font-bold text-off-white">TOTAL INVESTMENT</span>
                    <span className="font-satoshi font-bold text-2xl text-red-400">~$4,500 USD</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* AXIS Model Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue via-violet-500 to-emerald-500 rounded-2xl opacity-50 blur-lg group-hover:opacity-75 transition-all duration-500" />

                <div className="relative rounded-2xl bg-gradient-to-br from-navy via-[#0a0a20] to-navy text-off-white border-2 border-royal-blue overflow-hidden">
                  <div className="bg-gradient-to-r from-royal-blue to-violet-500 text-white text-xs font-bold px-4 py-2 text-center tracking-wider">
                    RECOMMENDED
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-blue/30 to-violet-500/30 flex items-center justify-center">
                        <span className="text-2xl">🇲🇽</span>
                      </div>
                      <div>
                        <h3 className="font-satoshi font-bold text-xl">Axis Rx Protocol</h3>
                        <p className="text-off-white/50 text-sm">Concierge Service</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: 'Medication Cost (3 Months)', value: 'INCLUDED' },
                        { label: 'Doctor Consultation', value: 'INCLUDED' },
                        { label: 'Prescription & Legal Fees', value: 'INCLUDED' },
                        { label: 'Concierge Delivery', value: 'INCLUDED' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i + 0.3 }}
                          className="flex items-center justify-between py-3 border-b border-white/10"
                        >
                          <span className="text-off-white/70">{item.label}</span>
                          <span className="font-medium flex items-center gap-2 text-axis-green">
                            <Check className="w-4 h-4" />
                            {item.value}
                          </span>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center justify-between pt-4"
                      >
                        <span className="font-bold">TOTAL INVESTMENT</span>
                        <span className="font-satoshi font-bold text-3xl text-axis-green">$499 USD</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 }}
                        className="text-center pt-4"
                      >
                        <span className="inline-block px-6 py-2 rounded-full bg-axis-green/20 border border-axis-green/50 text-axis-green font-bold text-lg">
                          YOUR SAVINGS: 85% OFF
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-8 text-center text-off-white/40 text-sm max-w-2xl mx-auto"
            >
              *Comparison based on average cash retail price for brand-name Semaglutide in CA/TX without insurance. Axis Rx utilizes compounded GLP-1 medications from licensed pharmacies.
            </motion.p>
          </div>
        </section>

        {/* Process Steps */}
        <section id="learn" className="py-24 bg-navy relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 left-10 w-64 h-64 bg-royal-blue/10 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-10 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px]"
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-royal-blue font-medium tracking-wider uppercase mb-4"
              >
                Your Path to Metabolic Control
              </motion.p>
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white">
                Four Simple Steps
              </h2>
            </motion.div>

            {/* Steps with connecting line */}
            <div className="relative">
              {/* Animated connecting line - desktop only */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-royal-blue/30 to-transparent">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-royal-blue via-violet-500 to-emerald-500 origin-left"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
                    whileHover={{ y: -12, scale: 1.05 }}
                    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-royal-blue/50 hover:bg-white/10 transition-all duration-300"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-royal-blue via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          initial={{ rotate: -180, scale: 0 }}
                          whileInView={{ rotate: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                          className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal-blue to-violet-500 flex items-center justify-center shadow-lg shadow-royal-blue/40"
                        >
                          <step.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.5 }}
                          className="text-6xl font-satoshi font-bold text-white group-hover:opacity-20 transition-opacity"
                        >
                          {step.num}
                        </motion.span>
                      </div>
                      <h3 className="font-satoshi font-bold text-xl text-off-white mb-2">{step.title}</h3>
                      <p className="text-off-white/50 text-sm leading-relaxed">{step.desc}</p>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.6 }}
                        className="mt-4 flex items-center gap-2 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-axis-green/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-axis-green" />
                        </div>
                        <span className="text-axis-green font-medium">{step.detail}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                  <strong>Cancún:</strong> We deliver directly to your hotel lobby or suite
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
        <section className="py-24 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/comparison-bg.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/90" />
          </div>

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
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white">
                We Don't Hire "Staff." We Deploy Vetted Medical Partners.
              </h2>
              <p className="mt-4 text-off-white/60 text-lg max-w-2xl mx-auto">
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
                  className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 text-center relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="font-satoshi font-bold text-lg text-off-white mb-2 relative z-10">{item.title}</h3>
                  <p className="text-off-white/60 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Protocol Comparison - Semaglutide vs Tirzepatide */}
        <section id="pricing" className="py-24 bg-navy relative overflow-hidden">
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
                Our protocols use the most advanced biological mechanisms. The difference is in the receptor activation.
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
                  <p className="text-off-white/40 text-sm mt-1">US 3-Month Cost: ~$3,900*</p>
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
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-axis-green/30 text-off-white font-satoshi font-bold rounded-xl hover:from-white/20 hover:to-axis-green/50 border border-white/10 hover:border-axis-green/30 transition-all"
                >
                  Reserve Semaglutide
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
                  <p className="text-off-white/40 text-sm mt-1">US 3-Month Cost: ~$4,800*</p>
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
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-royal-blue to-axis-green text-white font-satoshi font-bold rounded-xl hover:shadow-lg hover:shadow-axis-green/30 transition-all"
                >
                  Reserve Tirzepatide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Retatrutide Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pt-4"
              >
                {/* Upscale badge - positioned outside the card */}
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg shadow-amber-500/30 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  THE VISIONARY
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-rose-500/10 border-2 border-amber-500/50 relative overflow-hidden">
                  {/* Premium glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />

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
                      'Highest efficacy (Up to 24% in clinical trials)',
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
                    Apply for Retatrutide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                </div>
              </motion.div>
            </div>

            <p className="mt-8 text-center text-off-white/80 text-sm font-medium">
              Billed as a complete 12-week (3-month) protocol. <span className="text-green-400">No monthly subscriptions.</span>
            </p>
          </div>
        </section>

        {/* Travel-Ready Protocol - "Fly with Confidence" */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/hero-product-kit.png"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[#0a0a14]/95" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  We've engineered every detail to make your return journey seamless. Your medication stays strictly protected, and you are legally equipped to breeze through US Customs.
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
                      <FileText className="w-6 h-6 text-royal-blue" />
                    </div>
                    <div>
                      <h4 className="font-satoshi font-bold text-off-white mb-1">Official Medical Prescription</h4>
                      <p className="text-off-white/50">A physical, stamped prescription in your name from a licensed physician. Immediate proof that your treatment is strictly for personal use.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-royal-blue/20 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-6 h-6 text-royal-blue" />
                    </div>
                    <div>
                      <h4 className="font-satoshi font-bold text-off-white mb-1">US Customs Documentation</h4>
                      <p className="text-off-white/50">Pre-printed US Customs Declaration Letter and Official Physician Prescription. Cross the border with absolute legal certainty.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-royal-blue/20 flex items-center justify-center flex-shrink-0">
                      <Plane className="w-6 h-6 text-royal-blue" />
                    </div>
                    <div>
                      <h4 className="font-satoshi font-bold text-off-white mb-1">90-Day Legal Import</h4>
                      <p className="text-off-white/50">Under Federal FDA regulations, US citizens are permitted personal importation of up to a 90-day supply of non-narcotic medication with a valid prescription.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-axis-green/20">
                  <img
                    src="/images/travel-ready-kit.png"
                    alt="AXIS RX Travel Kit with Prescription"
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
                <span className="text-green-400 font-medium">100% Refundable If Not Approved</span>
              </div>
              <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-off-white mb-4">
                Medical Integrity First.
              </h2>
              <p className="text-off-white/60 text-lg max-w-2xl mx-auto mb-6">
                Your $99 USD deposit secures your consultation and reserves your medication allocation from our limited daily stock. This deposit is fully creditable toward your final Axis Rx Protocol.
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
        <section className="py-24 relative overflow-hidden bg-navy">
          {/* Subtle gradient overlay - same as hero */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 70% 50%, rgba(44, 81, 163, 0.25) 0%, transparent 50%)',
            }}
          />
          {/* Subtle pattern background - same as hero */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.03%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none" />
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-royal-blue/30 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
              <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-off-white">
                Client Experiences
              </h2>
              <p className="mt-4 text-off-white/60 text-lg">
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
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-satoshi font-bold text-lg text-off-white mb-3">"{t.title}"</h4>
                  <p className="text-off-white/70 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="font-medium text-off-white">{t.name}</p>
                      <p className="text-off-white/50 text-sm">{t.location}</p>
                    </div>
                    {t.verified && (
                      <div className="flex items-center gap-1 text-axis-green text-xs">
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
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-blue to-axis-green text-white font-satoshi font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-axis-green/30 transition-all relative z-20"
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
                className="relative z-20 inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-royal-blue to-axis-green text-white font-satoshi font-bold text-xl rounded-xl hover:shadow-lg hover:shadow-axis-green/30 transition-all cursor-pointer"
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
