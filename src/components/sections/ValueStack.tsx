import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Card from '@/components/ui/Card';

const usModel = [
  { text: '$1,000–$1,600/month', bad: true },
  { text: 'Monthly Subscriptions', bad: true },
  { text: 'Waitlists & Insurance', bad: true },
  { text: 'Often diluted/generic', bad: true },
];

const axisModel = [
  { text: 'Flat $499/3 months', bad: false },
  { text: 'Zero Subscriptions', bad: false },
  { text: 'Instant Physician Access', bad: false },
  { text: 'High-Purity Lyophilized', bad: false },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ValueStack() {
  return (
    <section id="value" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-satoshi font-bold text-section text-text-dark text-center mb-16"
        >
          The Axis Protocol vs. The American Standard
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          <Card className="opacity-95">
            <h3 className="font-satoshi font-bold text-lg uppercase tracking-wider text-text-dark mb-6">
              US Clinic Model
            </h3>
            <ul className="space-y-4">
              {usModel.map((row, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-center gap-3 text-text-dark"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </span>
                  <span className="font-medium">{row.text}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          <Card glow hover>
            <h3 className="font-satoshi font-bold text-lg uppercase tracking-wider text-royal-blue mb-6">
              AXIS RX Protocol
            </h3>
            <ul className="space-y-4">
              {axisModel.map((row, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-center gap-3 text-text-dark"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-royal-blue/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-royal-blue" />
                  </span>
                  <span className="font-medium">{row.text}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 pt-6 border-t border-accent-silver font-satoshi font-bold text-2xl text-royal-blue">
              $499 total · 3 months
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
