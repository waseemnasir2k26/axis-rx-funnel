import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '@/components/ui/Button';

const trustItems = [
  'Same-day confirmation',
  'HIPAA compliant',
  'TSA travel letter included',
];

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-satoshi font-bold text-section text-off-white"
        >
          Ready to Transform Your Health?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-off-white/90 text-lg"
        >
          Limited availability. Reserve your slot today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link to="/checkout">
            <Button variant="primary" size="lg">
              Secure Your Treatment — $99 Credit
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-off-white/80 text-sm"
        >
          {trustItems.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-royal-blue flex-shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
