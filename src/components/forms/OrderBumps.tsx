import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Diamond } from 'lucide-react';

export interface OrderBump {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  description: string;
  badge?: string;
  badgeColor?: string;
  savings?: string;
  icon: typeof Zap;
}

const bumps: OrderBump[] = [
  {
    id: 'b12',
    title: 'The Energy Booster',
    subtitle: 'Bio-Active B12 (Methylcobalamin) Vial',
    price: 25,
    badge: 'Popular',
    badgeColor: 'bg-amber-100 text-amber-700',
    icon: Zap,
    description:
      'Combat "Ozempic Fatigue": GLP-1 therapies can temporarily lower energy as your body adjusts. Add this high-potency B12 vial to your kit to optimize sleep, boost daily energy, and accelerate metabolic function.',
  },
  {
    id: 'nad',
    title: "The Biohacker's Choice",
    subtitle: 'NAD+ 500mg Vial (Lyophilized)',
    price: 250,
    badge: 'Premium',
    badgeColor: 'bg-violet-100 text-violet-700',
    savings: 'Save $150 vs. US pricing',
    icon: Sparkles,
    description:
      'Cellular Regeneration: The ultimate anti-aging coenzyme. NAD+ repairs DNA, clears "brain fog," and restores cellular energy depleted by rapid weight loss. Highly recommended for patients seeking longevity benefits alongside fat loss.',
  },
  {
    id: 'iv',
    title: 'The VIP Experience',
    subtitle: 'Premium IV Drip during your visit',
    price: 150,
    badge: 'VIP',
    badgeColor: 'bg-sky-100 text-sky-700',
    icon: Diamond,
    description:
      'Instant Hydration & Glow: Receive a medical-grade Nutrient IV Drip during your consultation (20-30 mins). Packed with electrolytes and vitamins to maximize hydration—crucial for GLP-1 effectiveness and skin health.',
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
      {bumps.map((bump) => {
        const isSelected = selected.has(bump.id);
        const Icon = bump.icon;

        return (
          <motion.button
            key={bump.id}
            type="button"
            onClick={() => onToggle(bump.id)}
            className={`w-full text-left rounded-xl border-2 p-5 transition-all duration-200 ${
              isSelected
                ? 'border-royal-blue bg-royal-blue/5'
                : 'border-accent-silver/30 hover:border-accent-silver/60 bg-white'
            }`}
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
          >
            <div className="flex items-start gap-4">
              {/* Checkbox */}
              <div
                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-1 ${
                  isSelected ? 'border-royal-blue bg-royal-blue' : 'border-accent-silver/50'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-slate-600" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-satoshi font-bold text-text-dark">
                        {bump.title}
                      </span>
                      {bump.badge && (
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${bump.badgeColor}`}>
                          {bump.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-dark/60 mt-0.5">{bump.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-satoshi font-bold text-royal-blue">
                      +${bump.price}
                    </span>
                    {bump.savings && (
                      <p className="text-xs text-emerald-600 mt-0.5">{bump.savings}</p>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm text-text-dark/70 leading-relaxed">
                  {bump.description}
                </p>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
