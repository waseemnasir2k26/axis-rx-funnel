import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock } from 'lucide-react';
import BookingForm from '@/components/forms/BookingForm';
import OrderSummary from '@/components/forms/OrderSummary';

export default function CheckoutPage() {
  const [selectedBumps, setSelectedBumps] = useState<Set<string>>(new Set());
  const [selectedPlan, setSelectedPlan] = useState<string>('semaglutide');

  const toggleBump = (id: string) => {
    setSelectedBumps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-navy py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-royal-blue to-indigo-500 flex items-center justify-center">
              <span className="font-satoshi font-bold text-white text-xs">AX</span>
            </div>
            <span className="font-satoshi font-bold text-lg text-white">
              Axis Rx
            </span>
          </Link>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Lock className="w-4 h-4" />
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-dark/60 hover:text-royal-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to overview
            </Link>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <BookingForm
                selectedBumps={selectedBumps}
                onToggleBump={toggleBump}
                selectedPlan={selectedPlan}
                onSelectPlan={setSelectedPlan}
              />
            </motion.div>

            {/* Right Column - Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <OrderSummary
                selectedBumps={selectedBumps}
                selectedPlan={selectedPlan}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
