import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Presentation } from 'lucide-react';
import { SERVICES } from '../data/content';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-charcoal mb-6">Our Services</h1>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Bespoke interventions designed for the unique pressures of the C-suite.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto mb-16">
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              layout
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div 
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="p-8 cursor-pointer flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex gap-6">
                  <div className="text-primary mt-1">
                    <service.icon size={32} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">{service.title}</h3>
                    <p className="text-charcoal/70">{service.shortDesc}</p>
                  </div>
                </div>
                <button className="text-secondary mt-2">
                  {expandedId === service.id ? <Minus /> : <Plus />}
                </button>
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-putty/30 border-t border-gray-100"
                  >
                    <div className="p-8 ml-16">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Engagement Length</h4>
                          <p className="text-charcoal font-medium">{service.details.length}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Typical Outcomes</h4>
                          <p className="text-charcoal font-medium">{service.details.outcomes}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button onClick={(e) => { e.stopPropagation(); /* Navigate to detail */ }}>
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
        <div className="max-w-4xl mx-auto bg-primary rounded-lg p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Presentation size={32} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Seminars & Workshops</h3>
              <p className="text-white/80 max-w-md">
                From "Planning for Change" to MBTI assessments. Discover our full range of training programs.
              </p>
            </div>
          </div>
          <Link to="/services/seminars">
            <Button className="bg-white text-primary hover:bg-secondary hover:text-white border-none whitespace-nowrap">
              View Seminars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
