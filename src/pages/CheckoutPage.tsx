import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/forms/BookingForm';
import OrderSummary from '@/components/forms/OrderSummary';

export default function CheckoutPage() {
  const [selectedBumps, setSelectedBumps] = useState<Set<string>>(new Set());

  const toggleBump = (id: string) => {
    setSelectedBumps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-off-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-dark/70 hover:text-royal-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to overview
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h1 className="font-satoshi font-bold text-section text-text-dark">
              Secure Your Treatment
            </h1>
            <p className="mt-2 text-text-dark/80">
              Complete your reservation in two simple steps.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="rounded-axis-lg bg-white border border-accent-silver/30 shadow-soft p-6 md:p-8">
                <BookingForm
                  selectedBumps={selectedBumps}
                  onToggleBump={toggleBump}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <OrderSummary selectedBumps={selectedBumps} />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
