import { motion } from 'framer-motion';
import { Calendar, FileText, Phone, Stethoscope } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Reserve',
    icon: Calendar,
    body: 'Secure your allocation and lock in today\'s pricing with a fully refundable $99 deposit.',
  },
  {
    num: 2,
    title: 'Digital Intake',
    icon: FileText,
    body: 'Complete a secure, HIPAA-compliant health history form to provide your medical background.',
  },
  {
    num: 3,
    title: 'Verification',
    icon: Phone,
    body: 'Connect with our Patient Coordinator to confirm your eligibility. Once approved, we schedule your specific appointment time—aligning your hotel visit (Cancún) or clinic slot (Tijuana) perfectly with your travel itinerary.',
  },
  {
    num: 4,
    title: 'Consult & Receive',
    icon: Stethoscope,
    body: 'Meet your Certified Physician (20-30 mins) for a comprehensive check-up and dosage review. You will receive your full 3-month supply immediately during this visit.',
    sub: [
      'Cancún: We bring the clinic to your hotel lobby, suite or AirBnB',
      'Tijuana: VIP consultation at our private medical suite',
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-satoshi font-bold text-section text-off-white text-center mb-16"
        >
          Your Path to Metabolic Control
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative"
        >
          {/* Connecting line - desktop */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-royal-blue/40"
            style={{ top: '3rem' }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={item}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 w-24 h-24 rounded-full bg-royal-blue/30 border-2 border-royal-blue flex items-center justify-center mb-6 group-hover:bg-royal-blue/50 transition-colors">
                    <step.icon className="w-10 h-10 text-royal-blue" />
                    <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-royal-blue font-satoshi font-bold text-sm text-white flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-satoshi font-bold text-lg uppercase tracking-wider text-off-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-off-white/90 text-sm leading-relaxed">{step.body}</p>
                  {step.sub && (
                    <ul className="mt-4 space-y-2 text-off-white/80 text-sm">
                      {step.sub.map((line, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-royal-blue mt-0.5">•</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
