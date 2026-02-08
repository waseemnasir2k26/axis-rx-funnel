import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { checkoutSchema, type CheckoutFormData } from '@/lib/checkoutSchema';
import OrderBumps from './OrderBumps';
import Button from '@/components/ui/Button';
import { useState } from 'react';

interface BookingFormProps {
  selectedBumps: Set<string>;
  onToggleBump: (id: string) => void;
}

export default function BookingForm({
  selectedBumps,
  onToggleBump,
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
      // Placeholder: integrate with GoHighLevel/Stripe
      // await fetch('/api/create-payment', { method: 'POST', body: JSON.stringify({ ...data, bumps: [...selectedBumps] }) });
      const deposit = 99;
      const bumpPrices: Record<string, number> = { b12: 25, nad: 250, iv: 150 };
      const addonsTotal = [...selectedBumps].reduce((s, id) => s + (bumpPrices[id] ?? 0), 0);
      const totalAmount = deposit + addonsTotal;

      if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
        (window as unknown as { gtag: (a: string, b: string, c: object) => void }).gtag(
          'event',
          'begin_checkout',
          { value: totalAmount, currency: 'USD' }
        );
      }

      // Simulate API call
      await new Promise((r) => setTimeout(r, 800));
      navigate('/thank-you', { state: { ...data } });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Step 1: Patient profile */}
      <div>
        <h2 className="font-satoshi font-bold text-xl text-text-dark mb-6">
          Step 1: Patient Profile
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-text-dark mb-2">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              className={`w-full px-4 py-3 rounded-axis border bg-white placeholder:text-accent-silver focus:ring-2 focus:ring-royal-blue focus:border-transparent ${
                errors.firstName ? 'border-red-500' : 'border-accent-silver/50'
              }`}
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-text-dark mb-2">
              Last Name *
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              className={`w-full px-4 py-3 rounded-axis border bg-white placeholder:text-accent-silver focus:ring-2 focus:ring-royal-blue focus:border-transparent ${
                errors.lastName ? 'border-red-500' : 'border-accent-silver/50'
              }`}
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="For receipt & medical portal access"
            className={`w-full px-4 py-3 rounded-axis border bg-white placeholder:text-accent-silver focus:ring-2 focus:ring-royal-blue focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-accent-silver/50'
            }`}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="WhatsApp enabled for delivery updates"
            className={`w-full px-4 py-3 rounded-axis border bg-white placeholder:text-accent-silver focus:ring-2 focus:ring-royal-blue focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-accent-silver/50'
            }`}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="location" className="block text-sm font-medium text-text-dark mb-2">
            Select Location *
          </label>
          <select
            id="location"
            className={`w-full px-4 py-3 rounded-axis border bg-white focus:ring-2 focus:ring-royal-blue focus:border-transparent ${
              errors.location ? 'border-red-500' : 'border-accent-silver/50'
            }`}
            {...register('location')}
          >
            <option value="">Cancún / Tijuana</option>
            <option value="cancun">Cancún</option>
            <option value="tijuana">Tijuana</option>
          </select>
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="arrivalDate" className="block text-sm font-medium text-text-dark mb-2">
            Arrival Date *
          </label>
          <input
            id="arrivalDate"
            type="date"
            className={`w-full px-4 py-3 rounded-axis border bg-white focus:ring-2 focus:ring-royal-blue focus:border-transparent ${
              errors.arrivalDate ? 'border-red-500' : 'border-accent-silver/50'
            }`}
            {...register('arrivalDate')}
          />
          {errors.arrivalDate && (
            <p className="mt-1 text-sm text-red-600">{errors.arrivalDate.message}</p>
          )}
        </div>
      </div>

      {/* Step 2: Deposit & order bumps */}
      <div>
        <h2 className="font-satoshi font-bold text-xl text-text-dark mb-2">
          Step 2: Secure Your Allocation
        </h2>
        <p className="text-text-dark/80 text-sm mb-6">
          Refundable Medical Deposit: $99.00 — This amount is deducted from your final
          treatment cost.
        </p>
        <OrderBumps selected={selectedBumps} onToggle={onToggleBump} />
      </div>

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
