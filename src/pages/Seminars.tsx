import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Seminars = () => {
  return (
    <div className="pt-20 bg-void min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
      {/* Hero */}
      <div className="bg-[#002a1c] relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/20 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-white">Seminars & Workshops</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl text-gray-300 font-light italic leading-relaxed mb-4">
              "Doing your best at this moment puts you in the best place for the next moment."
            </p>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">— Oprah Winfrey</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="mb-12">
           <Link to="/services" className="text-gray-400 hover:text-brand-orange font-medium flex items-center gap-2 transition-colors">
             <ArrowLeft size={18} /> Back to Services
           </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Seminar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-panel p-8 md:p-10 rounded-2xl border border-white/10 hover:border-brand-orange/30 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-2 h-12 bg-brand-orange rounded-full" />
               <h3 className="font-display text-3xl font-bold text-white">Planning for Change</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              A half-day program that provides a process and tools to help individuals understand a natural and predictable pattern of change and to identify their own location in that cycle.
            </p>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <p className="text-gray-400 text-sm">
                Each participant in the workshop will have a guide that includes <span className="text-white font-bold">The Cycle of Renewal</span> and worksheets for planning the next steps of their lives. Participants will learn how to evaluate their current environment and take action around choices that support their highest goals.
              </p>
            </div>
          </motion.div>

          {/* Seminar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-panel p-8 md:p-10 rounded-2xl border border-white/10 hover:border-brand-orange/30 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-2 h-12 bg-brand-green rounded-full" />
               <h3 className="font-display text-3xl font-bold text-white">Renewing Teams</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              A one-day program that provides a process and tools to help groups understand a natural and predictable pattern of change and to identify their own location in that cycle.
            </p>
            <p className="text-gray-400">
              This program helps groups and individuals discover the best steps to take to achieve their vision of success.
            </p>
          </motion.div>

          {/* Combined Seminar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-panel to-[#1a202c] p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] rounded-full pointer-events-none" />
            
            <h3 className="font-display text-3xl font-bold text-white mb-6">Combined Seminar: BarOn EQ-I & MBTI</h3>
            <p className="text-gray-300 mb-8 text-lg">
              BarOn EQ-I ® and The MBTI ® are two of the most informative and highly regarded assessments. When utilized, these two tools provide comprehensive data in the three areas identified as integral for personal and professional success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* MBTI Detail */}
                <div className="bg-void/50 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-brand-orange mb-3">Myers Briggs (MBTI)</h4>
                    <p className="text-gray-400 text-sm">
                    Builds on psychologist Carl Jung’s theory. Participants determine their personality type to understand strengths, weaknesses, and team dynamics.
                    </p>
                </div>

                {/* EQ-I Detail */}
                <div className="bg-void/50 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-brand-orange mb-3">BarOn EQ-I</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green"/> Intrapersonal & Interpersonal</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green"/> Stress Management</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green"/> Adaptability & Mood</li>
                    </ul>
                </div>
            </div>
          </motion.div>

          {/* 5 Dysfunctions */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-panel p-8 md:p-10 rounded-2xl border border-white/10"
          >
            <h3 className="font-display text-3xl font-bold text-white mb-6">The Five Dysfunctions of Teams</h3>
            <p className="text-gray-300 mb-8">
              A one-day seminar designed to help teams work through the five dysfunctions to become a healthy and functioning unit.
            </p>
            <div className="space-y-4">
              {[
                "Absence of Trust: The fear of being vulnerable.",
                "Fear of Conflict: The desire to preserve artificial harmony.",
                "Lack of Commitment: The lack of clarity or buy-in.",
                "Avoidance of Accountability: The need to avoid interpersonal discomfort.",
                "Inattention to Results: The pursuit of individual goals over collective success."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-brand-orange/30 transition-colors">
                  <span className="font-mono font-bold text-brand-orange">0{i + 1}</span>
                  <p className="text-sm text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rates & Payment */}
          <div className="bg-gradient-to-b from-[#0B1121] to-black border border-white/10 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-orange/5 blur-[100px] pointer-events-none" />
            
            <h3 className="font-display text-4xl font-bold mb-12 text-white relative z-10">Seminar Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">Half-Day</div>
                <div className="text-3xl font-bold text-white">$1,500</div>
              </div>
              <div className="p-6 border border-brand-orange rounded-2xl bg-brand-orange/10 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
                <div className="text-xs text-brand-orange uppercase tracking-wider mb-3">Full Day</div>
                <div className="text-3xl font-bold text-white">$3,000</div>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">Two-Day</div>
                <div className="text-3xl font-bold text-white">$6,000</div>
              </div>
            </div>

            <div className="space-y-8 relative z-10">
              <p className="text-gray-400 text-lg">
                For scheduling, please email <a href="mailto:info@etconsult.biz" className="text-brand-orange hover:text-white transition-colors underline decoration-brand-orange/50">info@etconsult.biz</a>
              </p>
              
              <div className="pt-8 border-t border-white/10 max-w-md mx-auto">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Secure Payment</p>
                <Button className="bg-[#0070BA] hover:bg-[#005ea6] text-white border-none w-full py-4 text-lg shadow-xl flex items-center justify-center gap-3">
                   Pay via PayPal <span className="text-white/60 text-sm">($1,500 Deposit)</span>
                </Button>
                <p className="text-xs text-gray-600 mt-3">Encrypted SSL Transaction</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
