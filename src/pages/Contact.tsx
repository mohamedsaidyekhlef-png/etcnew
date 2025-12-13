import { MapPin, Mail, Phone } from 'lucide-react';
import { ExplorationForm } from '../components/sections/ExplorationForm';
import { BRAND } from '../data/content';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className="pt-20 bg-void min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Start the Conversation</h1>
          <p className="text-xl text-gray-400">We measure success in decades, not days.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-panel p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-green" />
              
              <h3 className="font-display text-2xl font-bold text-white mb-8">Headquarters</h3>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-orange/20 transition-colors">
                    <MapPin className="text-brand-orange" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">ETC Consulting</p>
                    <p className="text-gray-400">123 Executive Plaza<br/>Kansas City, MO 64105</p>
                  </div>
                </div>
                <div className="flex items-center group">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-orange/20 transition-colors">
                    <Mail className="text-brand-orange" size={20} />
                  </div>
                  <a href={`mailto:${BRAND.email}`} className="text-gray-400 hover:text-white transition-colors text-lg">{BRAND.email}</a>
                </div>
                <div className="flex items-center group">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-orange/20 transition-colors">
                    <Phone className="text-brand-orange" size={20} />
                  </div>
                  <a href={`tel:${BRAND.phone}`} className="text-gray-400 hover:text-white transition-colors text-lg">{BRAND.phone}</a>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white/5 border border-white/10 h-64 rounded-2xl w-full flex items-center justify-center text-gray-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png')] bg-cover bg-center opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <span className="relative z-10 font-mono text-sm tracking-widest uppercase">Secure Location Map</span>
            </div>
          </motion.div>

          {/* Form */}
          <div className="lg:col-span-2">
             <ExplorationForm />
          </div>
        </div>
      </div>
    </div>
  );
};
