import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Mail, FileText, Video, Calendar, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const nextSteps = [
  {
    icon: Mail,
    title: 'Check Your Email',
    body: "We've sent your deposit receipt and intake form.",
  },
  {
    icon: FileText,
    title: 'Complete Medical History',
    body: '5-minute secure form (HIPAA compliant).',
  },
  {
    icon: Video,
    title: 'Coordinator Call',
    body: 'Brief video chat to confirm eligibility.',
  },
  {
    icon: Calendar,
    title: 'Treatment Day',
    body: 'Doctor visits you (Cancún) or you visit clinic (Tijuana).',
  },
];

export default function ThankYouPage() {
  const location = useLocation();
  const firstName =
    (location.state as { firstName?: string } | null)?.firstName ?? 'there';

  const handleWhatsApp = () => {
    const phoneNumber = '+521234567890';
    const message = encodeURIComponent(
      `Hi! I just completed my deposit for AXIS RX. My name is ${firstName}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-off-white pt-24 pb-16 relative overflow-hidden">
        {/* Subtle confetti on load */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-royal-blue/40"
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: -10,
              }}
              initial={{ y: 0, opacity: 0.8 }}
              animate={{
                y: '100vh',
                opacity: 0,
                transition: { duration: 2 + (i % 3) * 0.5, delay: i * 0.1 },
              }}
            />
          ))}
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Confetti-style celebration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-satoshi font-bold text-royal-blue uppercase tracking-wider text-sm"
          >
            Payment Confirmed!
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-satoshi font-bold text-3xl md:text-4xl text-text-dark mt-2"
          >
            You&apos;re All Set, {firstName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-text-dark/90 mt-2"
          >
            Your stock is reserved. Final step required.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-text-dark/80 leading-relaxed"
          >
            Please select a time below for a 15-minute Video Call with our Patient
            Coordinator. We need to verify your medical history and confirm your
            hotel/clinic logistics before dispensing your prescription.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Link to="/#process">
              <Button variant="primary" size="lg">
                Schedule My Virtual Intake
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-14 text-left"
          >
            <h2 className="font-satoshi font-bold text-xl text-text-dark mb-6 text-center">
              Next Steps
            </h2>
            <ul className="space-y-6">
              {nextSteps.map((step, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-royal-blue/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-royal-blue" />
                  </div>
                  <div>
                    <p className="font-satoshi font-bold text-text-dark">{step.title}</p>
                    <p className="text-sm text-text-dark/80 mt-0.5">{step.body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 pt-8 border-t border-accent-silver/50"
          >
            <p className="text-sm text-text-dark/70 mb-4">Prefer WhatsApp?</p>
            <Button
              variant="outline"
              size="md"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Message Coordinator Now
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
