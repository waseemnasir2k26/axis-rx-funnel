import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is this legal?',
    a: 'Yes. You are obtaining a prescription from a licensed physician in Mexico and receiving medication dispensed there. US patients may legally bring a personal supply of prescription medication back when traveling, with proper documentation. We provide TSA-friendly documentation and travel letters.',
  },
  {
    q: 'How is this different from Ozempic?',
    a: 'Ozempic® and Mounjaro® are brand names. The active ingredients are Semaglutide and Tirzepatide. We use the same pharmaceutical-grade active ingredients in a high-purity lyophilized form. The clinical effect is the same; you are simply accessing it through a licensed Mexican medical pathway at a fraction of US cost.',
  },
  {
    q: "What if I'm denied?",
    a: 'If our Medical Director determines you are not a candidate for GLP-1 therapy after the intake screening, you receive an immediate 100% refund of your $99 deposit. There is zero financial risk to find out if you qualify.',
  },
  {
    q: 'Do I need a prescription?',
    a: 'You will receive a prescription from our licensed physician during your in-person consultation in Mexico. The deposit reserves your consultation and medication; the physician will evaluate you and prescribe at that visit.',
  },
  {
    q: 'How do I travel with medication?',
    a: 'We provide a TSA-approved travel cooler and documentation. You may bring a personal supply of prescription medication when returning to the US. Our team will guide you on the exact requirements and paperwork.',
  },
  {
    q: "What's included in the $499?",
    a: 'The $499 covers your full 3-month protocol: physician consultation, the complete supply of GLP-1 medication (Semaglutide or Tirzepatide), travel cooler kit, and TSA documentation. Add-ons like B12, NAD+, or IV drip are optional and listed at checkout.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-satoshi font-bold text-section text-text-dark text-center mb-12"
        >
          Common Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-axis-lg border border-accent-silver/50 overflow-hidden bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-satoshi font-bold text-text-dark hover:bg-off-white/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-text-dark/90 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
