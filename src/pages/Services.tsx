import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Presentation, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-void min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
      {/* Background Tech Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bespoke interventions designed for the unique pressures of the C-suite.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto mb-16">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                expandedId === service.id 
                  ? 'bg-white/10 border-brand-orange/50 shadow-[0_0_30px_-10px_rgba(244,157,17,0.3)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div 
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="p-8 cursor-pointer flex items-start justify-between group"
              >
                <div className="flex gap-6 items-start">
                  <div className={`mt-1 transition-colors duration-300 ${expandedId === service.id ? 'text-brand-orange' : 'text-gray-400 group-hover:text-white'}`}>
                    <service.icon size={32} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.shortDesc}</p>
                  </div>
                </div>
                <button className={`mt-2 transition-colors duration-300 ${expandedId === service.id ? 'text-brand-orange' : 'text-gray-500 group-hover:text-white'}`}>
                  {expandedId === service.id ? <Minus /> : <Plus />}
                </button>
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10 bg-black/20"
                  >
                    <div className="p-8 ml-0 md:ml-16">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">Engagement Length</h4>
                          <p className="text-white font-medium text-lg">{service.details.length}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">Typical Outcomes</h4>
                          <p className="text-white font-medium text-lg">{service.details.outcomes}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button 
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            document.getElementById('exploration-session')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="bg-brand-orange hover:bg-orange-600 text-white border-none"
                        >
                          Request Tailored Proposal
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Seminars CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-brand-green to-[#003d2a] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="bg-white/10 p-4 rounded-full border border-white/10">
              <Presentation size={32} className="text-brand-orange" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Seminars & Workshops</h3>
              <p className="text-white/80 max-w-md">
                From "Planning for Change" to MBTI assessments. Discover our full range of training programs.
              </p>
            </div>
          </div>
          <Link to="/services/seminars" className="relative z-10">
            <Button className="bg-white text-brand-green hover:bg-gray-100 border-none whitespace-nowrap font-bold shadow-lg">
              View Seminars <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
