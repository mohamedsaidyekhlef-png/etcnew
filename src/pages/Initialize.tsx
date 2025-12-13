import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Tech-style Multi-step Form
export const Initialize = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '',
    challenge: '',
    email: ''
  });

  const nextStep = () => setStep(s => s + 1);

  return (
    <div className="min-h-screen bg-void pt-24 pb-12 flex items-center justify-center relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">
            <span>System Check</span>
            <span>Diagnostics</span>
            <span>Connection</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-orange"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-panel border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Role Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h1 className="font-display font-bold text-4xl text-white mb-4">Identify Protocol</h1>
                <p className="text-gray-400 mb-8 text-lg">Which leadership tier requires optimization?</p>
                
                <div className="grid gap-4">
                  {['C-Suite / Executive', 'VP / Director', 'High-Potential Team', 'Organizational Culture'].map((role) => (
                    <button
                      key={role}
                      onClick={() => { setFormData({...formData, role}); nextStep(); }}
                      className="group flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-orange/50 hover:bg-white/10 transition-all text-left"
                    >
                      <span className="text-lg font-medium text-white group-hover:text-brand-orange transition-colors">{role}</span>
                      <ChevronRight className="text-gray-600 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Challenge Definition */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h1 className="font-display font-bold text-4xl text-white mb-4">Diagnostic Input</h1>
                <p className="text-gray-400 mb-8 text-lg">What is the primary friction point?</p>
                
                <textarea
                  autoFocus
                  className="w-full bg-void/50 border border-white/10 rounded-xl p-6 text-white text-xl focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all resize-none mb-8"
                  rows={4}
                  placeholder="e.g. Siloed communication between sales and engineering..."
                  onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                />
                
                <div className="flex justify-end">
                  <Button onClick={nextStep} disabled={!formData.challenge} size="lg" className="gap-2">
                    Proceed <ArrowRight size={18} />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Connection */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                    <Check size={32} />
                  </div>
                  <h1 className="font-display font-bold text-4xl text-white mb-4">Analysis Ready</h1>
                  <p className="text-gray-400 text-lg">Enter secure comms channel for your briefing.</p>
                </div>

                <div className="max-w-md mx-auto space-y-6">
                  <input
                    type="email"
                    placeholder="executive@company.com"
                    className="w-full bg-void/50 border border-white/10 rounded-xl p-4 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                  />
                  <Button className="w-full bg-brand-green hover:bg-emerald-600 border-none shadow-lg shadow-brand-green/20" size="lg">
                    Initialize Transformation
                  </Button>
                  <p className="text-xs text-center text-gray-600">
                    Encrypted transmission. 100% Confidential.
                  </p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
