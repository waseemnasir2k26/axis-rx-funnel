import { Lock, Check } from 'lucide-react';
import { bumps } from './OrderBumps';

interface OrderSummaryProps {
  selectedBumps: Set<string>;
}

const included = [
  'Medical consultation',
  'Stock reservation',
  'Travel cooler kit',
  'TSA documentation',
];

export default function OrderSummary({ selectedBumps }: OrderSummaryProps) {
  const deposit = 99;
  const addonsTotal = bumps
    .filter((b) => selectedBumps.has(b.id))
    .reduce((sum, b) => sum + b.price, 0);
  const totalDue = deposit + addonsTotal;

  return (
    <div className="rounded-axis-lg bg-white border border-accent-silver/50 shadow-soft p-6 sticky top-24">
      <h3 className="font-satoshi font-bold text-lg text-text-dark mb-6">
        Order Summary
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-text-dark/80">Treatment Deposit</span>
          <span className="font-satoshi font-bold">$99.00</span>
        </div>
        {selectedBumps.size > 0 && (
          <>
            <div className="pt-2 border-t border-accent-silver/30">
              <span className="text-text-dark/80">Selected Add-ons:</span>
            </div>
            {bumps
              .filter((b) => selectedBumps.has(b.id))
              .map((b) => (
                <div key={b.id} className="flex justify-between pl-2">
                  <span className="text-text-dark/80">{b.title}</span>
                  <span className="font-medium">${b.price.toFixed(2)}</span>
                </div>
              ))}
          </>
        )}
      </div>

      <div className="mt-6 pt-6 border-t-2 border-accent-silver/50">
        <div className="flex justify-between items-center">
          <span className="font-satoshi font-bold text-text-dark">Total Due Today</span>
          <span className="font-satoshi font-bold text-xl text-royal-blue">
            ${totalDue.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 text-xs text-text-dark/70 flex items-center gap-1">
          <span aria-hidden>ⓘ</span> Credited toward final treatment
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-accent-silver/30">
        <p className="font-satoshi font-bold text-sm text-text-dark mb-3">
          What&apos;s Included
        </p>
        <ul className="space-y-2">
          {included.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-text-dark/80">
              <Check className="w-4 h-4 text-royal-blue flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-text-dark/70">
        <Lock className="w-4 h-4 flex-shrink-0" />
        256-Bit SSL Encrypted
      </div>
    </div>
  );
}
