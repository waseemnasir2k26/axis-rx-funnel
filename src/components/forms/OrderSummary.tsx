import { Shield, Check, Info } from 'lucide-react';
import { bumps } from './OrderBumps';
import { treatmentPlans } from './TreatmentPlans';

interface OrderSummaryProps {
  selectedBumps: Set<string>;
  selectedPlan: string;
}

const trustPoints = [
  '100% refund if not approved',
  'Licensed physicians',
  'HIPAA compliant process',
];

export default function OrderSummary({ selectedBumps, selectedPlan }: OrderSummaryProps) {
  const deposit = 99;
  const plan = treatmentPlans.find(p => p.id === selectedPlan) || treatmentPlans[0];
  const addonsTotal = bumps
    .filter((b) => selectedBumps.has(b.id))
    .reduce((sum, b) => sum + b.price, 0);
  const treatmentTotal = plan.price + addonsTotal;
  const dueAtAppointment = treatmentTotal - deposit;

  return (
    <div className="space-y-4 sticky top-24">
      {/* Main Summary Card */}
      <div className="rounded-2xl bg-navy text-white p-6">
        <h3 className="font-satoshi font-bold text-lg mb-6">
          Order Summary
        </h3>

        <div className="space-y-4 text-sm">
          {/* Selected Plan */}
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">{plan.name}</p>
              <p className="text-white/60">3-month protocol</p>
            </div>
            <span className="font-satoshi font-bold">${plan.price}</span>
          </div>

          {/* Selected Add-ons */}
          {selectedBumps.size > 0 && (
            <>
              {bumps
                .filter((b) => selectedBumps.has(b.id))
                .map((b) => (
                  <div key={b.id} className="flex justify-between text-white/80">
                    <span>{b.title}</span>
                    <span>+${b.price}</span>
                  </div>
                ))}
            </>
          )}

          <div className="border-t border-white/20 pt-4">
            <div className="flex justify-between">
              <span className="text-white/80">Treatment Total</span>
              <span className="font-satoshi font-bold">${treatmentTotal}</span>
            </div>
          </div>

          <div className="flex justify-between text-royal-blue">
            <span>Today's Deposit</span>
            <span className="font-semibold">-${deposit}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-white/80">Due at Appointment</span>
            <span className="font-satoshi font-bold">${dueAtAppointment}</span>
          </div>
        </div>

        {/* Today's Charge Box */}
        <div className="mt-6 bg-white/10 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <span className="text-white/80">Today's Charge</span>
            <span className="font-satoshi font-bold text-2xl">${deposit}</span>
          </div>
          <p className="text-xs text-white/50 mt-1">
            Fully refundable if not medically approved
          </p>
        </div>

        {/* Trust Points */}
        <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-white/80">{point}</span>
            </div>
          ))}
        </div>

        {/* Security Badge */}
        <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-center gap-2 text-xs text-white/50">
          <Shield className="w-4 h-4" />
          <span>HIPAA Compliant</span>
          <span className="text-white/30">•</span>
          <span>SSL Secured</span>
        </div>
      </div>

      {/* Info Card */}
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600 leading-relaxed">
            After payment, you'll schedule your Virtual Intake call to verify eligibility before your in-person consultation.
          </p>
        </div>
      </div>
    </div>
  );
}
