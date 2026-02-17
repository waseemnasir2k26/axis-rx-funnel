import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export interface TreatmentPlan {
  id: string;
  name: string;
  type: string;
  compound: string;
  tagline: string;
  price: number;
  badge?: string;
  badgeColor?: string;
  recommended?: boolean;
  features: string[];
}

export const treatmentPlans: TreatmentPlan[] = [
  {
    id: 'semaglutide',
    name: 'Single Agonist',
    type: 'GLP-1',
    compound: 'Semaglutide',
    tagline: 'The proven classic for steady progress.',
    price: 549,
    badge: 'Good',
    badgeColor: 'bg-slate-100 text-slate-600',
    features: [
      '3-month supply',
      'High-purity lyophilized system',
      'Physician consultation',
      'Travel kit included',
    ],
  },
  {
    id: 'tirzepatide',
    name: 'Dual Agonist',
    type: 'GIP/GLP-1',
    compound: 'Tirzepatide',
    tagline: 'Our most popular high-performance protocol.',
    price: 949,
    badge: 'Recommended',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    recommended: true,
    features: [
      'Everything in Single Agonist',
      'Dual GIP/GLP-1 receptor activation',
      'Enhanced metabolic response',
      'Superior appetite control',
      'Faster results',
    ],
  },
  {
    id: 'retatrutide',
    name: 'Triple Agonist',
    type: 'GIP/GLP-1/Glucagon',
    compound: 'Retatrutide',
    tagline: 'Maximum metabolic optimization for those who want the absolute gold standard.',
    price: 1449,
    badge: 'Elite',
    badgeColor: 'bg-amber-100 text-amber-700',
    features: [
      'Everything in Dual Agonist',
      'Triple receptor activation',
      'Maximum fat oxidation',
      'Elite metabolic optimization',
      'Premium physician support',
      'Priority scheduling',
    ],
  },
];

interface TreatmentPlansProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function TreatmentPlans({ selected, onSelect }: TreatmentPlansProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-satoshi font-bold text-lg text-text-dark">
          Optimize Your Metabolic Protocol
        </h3>
        <p className="text-sm text-text-dark/70 mt-1">Select your treatment plan</p>
      </div>

      <div className="grid gap-4">
        {treatmentPlans.map((plan) => {
          const isSelected = selected === plan.id;

          return (
            <motion.button
              key={plan.id}
              type="button"
              onClick={() => onSelect(plan.id)}
              className={`relative w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${
                isSelected
                  ? 'border-royal-blue bg-royal-blue/5 shadow-lg shadow-royal-blue/10'
                  : 'border-accent-silver/50 hover:border-royal-blue/50 bg-white'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Recommended floating badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-navy text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  Recommended
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Selection indicator */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                    isSelected ? 'border-royal-blue bg-royal-blue' : 'border-accent-silver'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      {plan.badge && (
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 ${plan.badgeColor}`}>
                          {plan.badge}
                        </span>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="font-satoshi font-bold text-lg text-text-dark">
                          {plan.name}
                        </span>
                      </div>
                      <p className="text-sm text-text-dark/60">{plan.compound}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-satoshi font-bold text-2xl text-royal-blue">
                        ${plan.price}
                      </span>
                      <span className="text-text-dark/60 text-sm"> / 3 months</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-text-dark/70 italic mb-4">"{plan.tagline}"</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-dark/80">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
