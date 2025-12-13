import { motion } from 'framer-motion';
import { ArrowLeft, Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const CaseStudy = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="mr-2" size={20} /> Return to Base
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Restricted Access</span>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-orange/10 mb-12 group">
           {!isPlaying ? (
             <div className="absolute inset-0 w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                {/* Cinematic Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" 
                  alt="Case Study Thumbnail" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button 
                    className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                  >
                    <Play size={40} fill="currentColor" className="ml-2" />
                  </button>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-8 left-8 z-20">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-xs font-medium text-brand-orange mb-3 backdrop-blur-md">
                      <span>CONFIDENTIAL BRIEFING</span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">The Executive Whisperer</h2>
                   <p className="text-gray-300 font-mono text-sm">DURATION: 02:14 • 4K RES</p>
                </div>
             </div>
           ) : (
             <iframe 
              src="https://player.vimeo.com/video/92261253?autoplay=1&title=0&byline=0&portrait=0" 
              className="absolute inset-0 w-full h-full" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="The Executive Whisperer Case Study"
            ></iframe>
           )}
        </div>

        {/* Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
               <h1 className="font-display font-bold text-4xl">Case Study: The Executive Whisperer</h1>
               <a 
                 href="https://vimeo.com/92261253" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="lg:hidden flex items-center text-brand-orange text-sm font-medium"
               >
                 Watch on Vimeo <ExternalLink size={14} className="ml-1"/>
               </a>
            </div>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              An inside look at how ETC Consulting dismantles leadership friction. This session covers the methodology behind "Compassionate Candour" and how it scales across Fortune 500 organizations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/20 transition-colors cursor-default">Executive Presence</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/20 transition-colors cursor-default">Conflict Resolution</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/20 transition-colors cursor-default">Strategic Alignment</span>
            </div>
          </div>

          <div className="bg-panel border border-white/10 rounded-xl p-6">
            <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-6">Performance Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white">Retention Rate</span>
                  <span className="text-brand-green font-mono">+24%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-green" 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white">Decision Velocity</span>
                  <span className="text-brand-orange font-mono">3x</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-brand-orange" 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white">Internal NPS</span>
                  <span className="text-blue-500 font-mono">72</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="h-full bg-blue-500" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link to="/initialize">
                <Button className="w-full shadow-lg shadow-brand-orange/20">Initialize Similar Protocol</Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
