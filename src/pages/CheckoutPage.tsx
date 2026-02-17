import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Lock,
  Check,
  User,
  Package,
  Sparkles,
  CreditCard,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Info
} from 'lucide-react';
import { treatmentPlans } from '@/components/forms/TreatmentPlans';
import { bumps } from '@/components/forms/OrderBumps';
import ChatAgent from '@/components/ui/ChatAgent';

const steps = [
  { id: 1, label: 'Profile', icon: User },
  { id: 2, label: 'Protocol', icon: Package },
  { id: 3, label: 'Enhance', icon: Sparkles },
  { id: 4, label: 'Payment', icon: CreditCard },
];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('tirzepatide');
  const [selectedBumps, setSelectedBumps] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    arrivalDate: '',
  });

  const plan = treatmentPlans.find(p => p.id === selectedPlan) || treatmentPlans[1];
  const addonsTotal = bumps.filter(b => selectedBumps.has(b.id)).reduce((sum, b) => sum + b.price, 0);
  const treatmentTotal = plan.price + addonsTotal;
  const deposit = 99;
  const dueAtAppointment = treatmentTotal - deposit;

  const toggleBump = (id: string) => {
    setSelectedBumps(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.fullName && formData.email && formData.phone && formData.location;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    navigate('/thank-you', { state: { firstName: formData.fullName.split(' ')[0] } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <ChatAgent />

      {/* Header */}
      <header className="bg-navy sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src="/images/axisrx-logo-light.png"
                alt="AXIS RX"
                className="h-8 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Lock className="w-4 h-4" />
                <span className="hidden sm:inline">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-navy/50 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        currentStep >= step.id
                          ? 'bg-royal-blue text-white'
                          : 'bg-white/10 text-white/40'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`mt-2 text-xs font-medium hidden sm:block ${
                      currentStep >= step.id ? 'text-white' : 'text-white/40'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 sm:w-24 h-0.5 mx-2 sm:mx-4 ${
                      currentStep > step.id ? 'bg-royal-blue' : 'bg-white/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={currentStep === 1 ? () => navigate('/') : handleBack}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {currentStep === 1 ? 'Back to home' : 'Previous step'}
        </motion.button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Patient Profile */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-royal-blue/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-royal-blue" />
                    </div>
                    <div>
                      <h2 className="font-satoshi font-bold text-xl text-slate-900">Patient Profile</h2>
                      <p className="text-sm text-slate-500">Tell us about yourself</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                        <span className="text-slate-400 font-normal ml-1">(For receipt & portal access)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                        <span className="text-slate-400 font-normal ml-1">(WhatsApp enabled for updates)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Location</label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all text-slate-900"
                        >
                          <option value="">Select location</option>
                          <option value="cancun">Cancún, MX (Hotel Delivery)</option>
                          <option value="tijuana">Tijuana, MX (VIP Clinic)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Planned Travel Date</label>
                        <input
                          type="date"
                          name="arrivalDate"
                          value={formData.arrivalDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all text-slate-900"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Treatment Selection */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-royal-blue/10 flex items-center justify-center">
                        <Package className="w-5 h-5 text-royal-blue" />
                      </div>
                      <div>
                        <h2 className="font-satoshi font-bold text-xl text-slate-900">Choose Your Protocol</h2>
                        <p className="text-sm text-slate-500">Select the treatment that fits your goals</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {treatmentPlans.map((p) => (
                        <motion.button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedPlan(p.id)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`relative w-full text-left rounded-xl border-2 p-5 transition-all ${
                            selectedPlan === p.id
                              ? 'border-royal-blue bg-royal-blue/5 shadow-lg shadow-royal-blue/10'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          {p.recommended && (
                            <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-royal-blue to-indigo-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Most Popular
                            </div>
                          )}

                          <div className="flex items-start gap-4">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                              selectedPlan === p.id ? 'border-royal-blue bg-royal-blue' : 'border-slate-300'
                            }`}>
                              {selectedPlan === p.id && <Check className="w-4 h-4 text-white" />}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-satoshi font-bold text-lg text-slate-900">{p.name}</span>
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${p.badgeColor}`}>
                                      {p.badge}
                                    </span>
                                  </div>
                                  <p className="text-sm text-slate-500">{p.compound}</p>
                                </div>
                                <div className="text-right">
                                  <span className="font-satoshi font-bold text-2xl text-royal-blue">${p.price}</span>
                                  <span className="text-slate-400 text-sm"> /3mo</span>
                                </div>
                              </div>

                              <p className="mt-2 text-sm text-slate-600 italic">"{p.tagline}"</p>

                              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                                {p.features.slice(0, 4).map((feature, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Add-ons */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-royal-blue/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-royal-blue" />
                    </div>
                    <div>
                      <h2 className="font-satoshi font-bold text-xl text-slate-900">Accelerate Your Results</h2>
                      <p className="text-sm text-slate-500">Optional add-ons to optimize your protocol</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {bumps.map((bump) => {
                      const isSelected = selectedBumps.has(bump.id);
                      const Icon = bump.icon;
                      return (
                        <motion.button
                          key={bump.id}
                          type="button"
                          onClick={() => toggleBump(bump.id)}
                          whileHover={{ scale: 1.005 }}
                          className={`w-full text-left rounded-xl border-2 p-5 transition-all ${
                            isSelected
                              ? 'border-royal-blue bg-royal-blue/5'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                              isSelected ? 'border-royal-blue bg-royal-blue' : 'border-slate-300'
                            }`}>
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                            </div>

                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-slate-600" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-satoshi font-bold text-slate-900">{bump.title}</span>
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${bump.badgeColor}`}>
                                      {bump.badge}
                                    </span>
                                  </div>
                                  <p className="text-sm text-slate-500">{bump.subtitle}</p>
                                </div>
                                <div className="text-right">
                                  <span className="font-satoshi font-bold text-royal-blue">+${bump.price}</span>
                                  {bump.savings && (
                                    <p className="text-xs text-emerald-600">{bump.savings}</p>
                                  )}
                                </div>
                              </div>
                              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{bump.description}</p>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <p className="mt-4 text-center text-sm text-slate-500">
                    You can skip this step if you prefer
                  </p>
                </motion.div>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-royal-blue/10 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-royal-blue" />
                      </div>
                      <div>
                        <h2 className="font-satoshi font-bold text-xl text-slate-900">Secure Payment</h2>
                        <p className="text-sm text-slate-500">Reserve your spot with a refundable deposit</p>
                      </div>
                    </div>

                    {/* Order Review */}
                    <div className="bg-slate-50 rounded-xl p-5 mb-6">
                      <h3 className="font-satoshi font-bold text-slate-900 mb-4">Order Review</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">{plan.name} ({plan.compound})</span>
                          <span className="font-medium">${plan.price}</span>
                        </div>
                        {bumps.filter(b => selectedBumps.has(b.id)).map(b => (
                          <div key={b.id} className="flex justify-between">
                            <span className="text-slate-600">{b.title}</span>
                            <span className="font-medium">+${b.price}</span>
                          </div>
                        ))}
                        <div className="border-t border-slate-200 pt-3 flex justify-between font-satoshi font-bold">
                          <span>Treatment Total</span>
                          <span>${treatmentTotal}</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-satoshi font-bold text-emerald-900">Only ${deposit} Today</h4>
                          <p className="text-sm text-emerald-700 mt-1">
                            Your deposit is 100% refundable if you don't medically qualify.
                            The remaining ${dueAtAppointment} is due at your appointment.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Simulated Payment Form */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="4242 4242 4242 4242"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Expiry</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">CVC</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4 pt-4">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 text-slate-600 font-medium hover:text-slate-900 transition-colors"
                >
                  Back
                </button>
              )}
              <div className="flex-1" />
              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-8 py-4 bg-royal-blue text-white font-satoshi font-bold rounded-xl hover:bg-royal-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-royal-blue/20"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-blue to-indigo-600 text-white font-satoshi font-bold rounded-xl hover:shadow-xl disabled:opacity-50 transition-all shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Pay ${deposit} Deposit
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-40 space-y-4">
              {/* Summary Card */}
              <div className="bg-navy text-white rounded-2xl p-6">
                <h3 className="font-satoshi font-bold text-lg mb-5">Order Summary</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{plan.name}</p>
                      <p className="text-white/60">3-month protocol</p>
                    </div>
                    <span className="font-bold">${plan.price}</span>
                  </div>

                  {bumps.filter(b => selectedBumps.has(b.id)).map(b => (
                    <div key={b.id} className="flex justify-between text-white/80">
                      <span>{b.title}</span>
                      <span>+${b.price}</span>
                    </div>
                  ))}

                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">Treatment Total</span>
                      <span className="font-bold">${treatmentTotal}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-royal-blue">
                    <span>Today's Deposit</span>
                    <span className="font-semibold">-${deposit}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-white/70">Due at Appointment</span>
                    <span className="font-bold">${dueAtAppointment}</span>
                  </div>
                </div>

                {/* Today's Charge */}
                <div className="mt-5 bg-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Today's Charge</span>
                    <span className="font-satoshi font-bold text-2xl">${deposit}</span>
                  </div>
                  <p className="text-xs text-white/50 mt-1">Fully refundable if not approved</p>
                </div>

                {/* Trust Points */}
                <div className="mt-5 pt-5 border-t border-white/20 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-white/80">100% refund if not approved</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-white/80">Licensed physicians</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-white/80">HIPAA compliant</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-center gap-2 text-xs text-white/50">
                  <Shield className="w-4 h-4" />
                  <span>SSL Secured</span>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    After payment, you'll schedule your Virtual Intake call to verify eligibility.
                  </p>
                </div>
              </div>

              {/* Urgency */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-800">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">Limited spots available this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
