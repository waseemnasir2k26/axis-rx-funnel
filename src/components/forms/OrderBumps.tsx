import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface OrderBump {
  id: string;
  title: string;
  price: number;
  description: string;
  subtext?: string;
}

const bumps: OrderBump[] = [
  {
    id: 'b12',
    title: 'The Energy Booster',
    price: 25,
    description:
      'Bio-Active B12 (Methylcobalamin) Vial. Combat "Ozempic Fatigue": GLP-1 therapies can temporarily lower energy as your body adjusts. Add this high-potency B12 vial to optimize sleep, boost daily energy, and accelerate metabolic function.',
  },
  {
    id: 'nad',
    title: "The Biohacker's Choice",
    price: 250,
    description:
      'NAD+ 500mg Vial (Lyophilized). Cellular Regeneration: The ultimate anti-aging coenzyme. NAD+ repairs DNA, clears "brain fog," and restores cellular energy depleted by rapid weight loss.',
    subtext: 'Save $150 vs. US pricing',
  },
  {
    id: 'iv',
    title: 'The VIP Experience',
    price: 150,
    description:
      'Premium IV Drip during your visit. Instant Hydration & Glow: Receive a medical-grade Nutrient IV Drip during your consultation (20-30 mins). Packed with electrolytes and vitamins to maximize hydration.',
  },
];

interface OrderBumpsProps {
  selected: Set<string>;
  onToggle: (id: string) => void;
}

export { bumps };

export default function OrderBumps({ selected, onToggle }: OrderBumpsProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-satoshi font-bold text-lg text-text-dark">
        Add-ons (optional)
      </h3>
      {bumps.map((bump) => {
        const isSelected = selected.has(bump.id);
        return (
          <motion.button
            key={bump.id}
            type="button"
            onClick={() => onToggle(bump.id)}
            className={`w-full text-left rounded-axis-lg border-2 p-5 transition-all duration-200 ${
              isSelected
                ? 'border-royal-blue bg-royal-blue/5 shadow-glow'
                : 'border-accent-silver/50 hover:border-royal-blue/50 bg-white'
            }`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mt-0.5 ${
                  isSelected ? 'border-royal-blue bg-royal-blue' : 'border-accent-silver'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-satoshi font-bold text-text-dark">
                    {bump.title}
                  </span>
                  <span className="font-satoshi font-bold text-royal-blue">
                    +${bump.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-text-dark/80 leading-relaxed">
                  {bump.description}
                </p>
                {bump.subtext && (
                  <p className="mt-2 text-sm font-medium text-royal-blue">
                    {bump.subtext}
                  </p>
                )}
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
