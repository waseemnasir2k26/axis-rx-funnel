import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, Check, Camera, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function SafeCrossing() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/images/thermal-voyager.png"
                alt="FDA-compliant prescription travel pack"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-navy text-off-white px-6 py-4 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-400" />
                <div>
                  <p className="font-satoshi font-bold text-lg">99% Success</p>
                  <p className="text-off-white/60 text-sm">Border Crossing Rate</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-green-700 font-medium text-sm">Travel Protection</span>
            </div>

            <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-navy mb-4">
              The "Safe Crossing" Guarantee
            </h2>

            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              We insure your treatment. While 99% of patients cross borders effortlessly with our FDA-compliant prescription pack, <span className="font-semibold text-navy">we cover the 1% who don't.</span>
            </p>

            <p className="text-navy font-semibold text-xl mb-8">
              If Customs confiscates your medication, we replace it <span className="text-green-600">100% FREE.</span>
            </p>

            {/* Collapsible Section */}
            <div className="border border-accent-silver/50 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-off-white/50 transition-colors"
              >
                <span className="font-satoshi font-semibold text-navy">
                  See Full Guarantee Details
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-navy/60" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-accent-silver/30">
                      {/* The AXIS Rx Guarantee */}
                      <div className="mb-6">
                        <h4 className="font-satoshi font-bold text-navy mb-4">
                          THE AXIS Rx GUARANTEE:
                        </h4>
                        <p className="text-navy/70 text-sm mb-4">
                          If US Customs (CBP) or TSA confiscates your personal supply while you are traveling with our official documentation:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                              <span className="font-semibold text-navy">We Replace It For FREE:</span>
                              <span className="text-navy/70"> You won't pay a single dollar for a new supply.</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                              <span className="font-semibold text-navy">Lifetime Credit:</span>
                              <span className="text-navy/70"> Since we cannot ship internationally, we will secure your replacement inventory in our clinic immediately.</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                              <span className="font-semibold text-navy">Never Expires:</span>
                              <span className="text-navy/70"> Your replacement waits for you. Pick it up on your next vacation, next month, or next year.</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* How It Works */}
                      <div className="pt-4 border-t border-accent-silver/30">
                        <h4 className="font-satoshi font-bold text-navy mb-4">
                          HOW IT WORKS:
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-royal-blue/10 flex items-center justify-center flex-shrink-0">
                              <Shield className="w-5 h-5 text-royal-blue" />
                            </div>
                            <div>
                              <p className="font-semibold text-navy">Don't Panic</p>
                              <p className="text-navy/70 text-sm">
                                If an agent detains your product, simply ask for the Official Custody Receipt (CBP Form 6051S). Do not voluntarily abandon it without a receipt.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-royal-blue/10 flex items-center justify-center flex-shrink-0">
                              <Camera className="w-5 h-5 text-royal-blue" />
                            </div>
                            <div>
                              <p className="font-semibold text-navy">Snap a Photo</p>
                              <p className="text-navy/70 text-sm">
                                Send a picture of the receipt to your Patient Coordinator.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-royal-blue/10 flex items-center justify-center flex-shrink-0">
                              <CreditCard className="w-5 h-5 text-royal-blue" />
                            </div>
                            <div>
                              <p className="font-semibold text-navy">Claim Your Credit</p>
                              <p className="text-navy/70 text-sm">
                                We instantly credit your account with a full replacement, ready for pickup whenever you return to paradise.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer message */}
                      <div className="mt-6 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                        <p className="text-navy/80 text-sm text-center font-medium">
                          Your health is an investment. We make sure it's a secure one.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
