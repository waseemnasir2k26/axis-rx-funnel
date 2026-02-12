import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { checkoutSchema, type CheckoutFormData } from '@/lib/checkoutSchema';
import TreatmentPlans, { treatmentPlans } from './TreatmentPlans';
import OrderBumps from './OrderBumps';
import Button from '@/components/ui/Button';
import { useState } from 'react';

interface BookingFormProps {
  selectedBumps: Set<string>;
  onToggleBump: (id: string) => void;
  selectedPlan: string;
  onSelectPlan: (id: string) => void;
}

export default function BookingForm({
  selectedBumps,
  onToggleBump,
  selectedPlan,
  onSelectPlan,
}: BookingFormProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      location: undefined,
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    try {
      const deposit = 99;
      const plan = treatmentPlans.find(p => p.id === selectedPlan);
      const bumpPrices: Record<string, number> = { b12: 25, nad: 250, iv: 150 };
      const addonsTotal = [...selectedBumps].reduce((s, id) => s + (bumpPrices[id] ?? 0), 0);

      if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
        (window as unknown as { gtag: (a: string, b: string, c: object) => void }).gtag(
          'event',
          'begin_checkout',
          {
            value: deposit + addonsTotal,
            currency: 'USD',
            items: [{ item_name: plan?.name, price: plan?.price }]
          }
        );
      }

      // Simulate API call
      await new Promise((r) => setTimeout(r, 800));
      navigate('/thank-you', { state: { ...data, plan: selectedPlan } });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Step 1: Patient Profile */}
      <div className="bg-white rounded-2xl border border-accent-silver/30 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-royal-blue text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h2 className="font-satoshi font-bold text-xl text-text-dark">
            Patient Profile
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-text-dark mb-2">
              Full Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-xl border bg-white placeholder:text-accent-silver focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all ${
                errors.firstName ? 'border-red-500' : 'border-accent-silver/50'
              }`}
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
              Email Address <span className="text-text-dark/50">(For receipt & medical portal access)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className={`w-full px-4 py-3 rounded-xl border bg-white placeholder:text-accent-silver focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all ${
                errors.email ? 'border-red-500' : 'border-accent-silver/50'
              }`}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
              Phone <span className="text-text-dark/50">(WhatsApp enabled for delivery updates)</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className={`w-full px-4 py-3 rounded-xl border bg-white placeholder:text-accent-silver focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all ${
                errors.phone ? 'border-red-500' : 'border-accent-silver/50'
              }`}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-text-dark mb-2">
                Location
              </label>
              <select
                id="location"
                className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all ${
                  errors.location ? 'border-red-500' : 'border-accent-silver/50'
                }`}
                {...register('location')}
              >
                <option value="">Select location</option>
                <option value="cancun">Cancún, MX</option>
                <option value="tijuana">Tijuana, MX</option>
              </select>
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="arrivalDate" className="block text-sm font-medium text-text-dark mb-2">
                Arrival Date
              </label>
              <input
                id="arrivalDate"
                type="date"
                className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all ${
                  errors.arrivalDate ? 'border-red-500' : 'border-accent-silver/50'
                }`}
                {...register('arrivalDate')}
              />
              {errors.arrivalDate && (
                <p className="mt-1 text-sm text-red-600">{errors.arrivalDate.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Treatment Plan Selection */}
      <div className="bg-white rounded-2xl border border-accent-silver/30 shadow-sm p-6 md:p-8">
        <TreatmentPlans selected={selectedPlan} onSelect={onSelectPlan} />
      </div>

      {/* Step 3: Add-ons */}
      <div className="bg-white rounded-2xl border border-accent-silver/30 shadow-sm p-6 md:p-8">
        <div className="mb-6">
          <h3 className="font-satoshi font-bold text-lg text-text-dark">
            Accelerate Your Results
          </h3>
          <p className="text-sm text-text-dark/70 mt-1">Select any add-ons to optimize your protocol</p>
        </div>
        <OrderBumps selected={selectedBumps} onToggle={onToggleBump} />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-text-dark/70">
          <Lock className="w-4 h-4" />
          256-Bit SSL Encrypted Payment
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isSubmitting}
          className="sm:ml-auto"
        >
          Complete Secure Enrollment
        </Button>
      </div>
    </form>
  );
}
