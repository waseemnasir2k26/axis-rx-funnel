import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export default function RiskReversal() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-satoshi font-bold text-section text-text-dark mb-6"
        >
          Medical Integrity First.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-dark/90 leading-relaxed mb-10"
        >
          We operate under strict medical guidelines. Your $99 USD deposit secures your
          consultation and reserves your medication vial from our limited daily stock.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex flex-col items-center gap-6 p-8 md:p-10 rounded-axis-lg bg-off-white border border-accent-silver/50"
        >
          <div className="w-16 h-16 rounded-full bg-royal-blue/20 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-royal-blue" />
          </div>
          <Badge variant="success">100% Refundable</Badge>
          <h3 className="font-satoshi font-bold text-xl text-text-dark">
            The AXIS Guarantee
          </h3>
          <p className="text-text-dark/90 leading-relaxed max-w-xl">
            This deposit is fully creditable toward your treatment total. If our Medical
            Director determines you are not a candidate for GLP-1 therapy during the
            intake screening, you will receive an immediate 100% refund. There is zero
            financial risk to see if you qualify.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
