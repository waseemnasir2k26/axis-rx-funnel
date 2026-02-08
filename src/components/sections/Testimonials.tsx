import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from '@/components/ui/Card';

const testimonials = [
  {
    quote:
      'Finally, a way to get the same medication without the insurance runaround. The Cancún visit was seamless—they came to my hotel. Worth every penny.',
    name: 'Sarah M.',
    location: 'Texas',
    rating: 5,
    metric: 'Lost 28 lbs in 4 months',
  },
  {
    quote:
      'I was skeptical about going to Mexico for this. The team was professional, the facility was clean, and the price was unbeatable. No regrets.',
    name: 'James K.',
    location: 'California',
    rating: 5,
    metric: 'A1C down 1.2 points',
  },
  {
    quote:
      'The deposit was refundable and the whole process felt legitimate. Doctor was knowledgeable and the 3-month supply made the trip worth it.',
    name: 'Jennifer L.',
    location: 'Florida',
    rating: 5,
    metric: 'Completed full protocol',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-satoshi font-bold text-section text-text-dark text-center mb-4"
        >
          Trusted by Health-Conscious Americans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-dark/80 mb-12"
        >
          Real patients. Real results.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card hover>
                <Quote className="w-10 h-10 text-royal-blue/40 mb-4" />
                <p className="text-text-dark/90 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-royal-blue text-royal-blue"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="font-satoshi font-bold text-text-dark">{t.name}</p>
                <p className="text-sm text-text-dark/70">{t.location}</p>
                <p className="mt-2 text-sm font-medium text-royal-blue">{t.metric}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
