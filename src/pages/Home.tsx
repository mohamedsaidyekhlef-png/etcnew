import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Users, Hexagon, Play, BarChart3, Globe2, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ExplorationForm } from '../components/sections/ExplorationForm';
import { Link } from 'react-router-dom';

// --- MODERN COMPONENTS ---

const StatCard = ({ value, label, icon: Icon }: any) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group">
    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <div className="text-2xl font-display font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

const FeatureCard = ({ title, desc, icon: Icon, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-panel border border-white/5 rounded-2xl p-8 hover:border-brand-orange/50 transition-colors group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-32 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-void border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-brand-orange group-hover:border-brand-orange/30 transition-all">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">
        {desc}
      </p>
      <Link to="/services" className="inline-flex items-center text-sm font-semibold text-brand-orange hover:text-white transition-colors">
        Explore Module <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  </motion.div>
);

export const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="bg-void text-white selection:bg-brand-orange selection:text-white overflow-x-hidden font-sans">
      
      {/* --- HERO: SaaS Platform Style --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Layer: Image + Pattern + Video */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-void">
          
          {/* 1. Coaching/Executive Background Image (Visible Fallback/Base) */}
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1559223607-a43c990ed91a?q=80&w=2574&auto=format&fit=crop" 
               alt="Executive Coaching Session"
               className="w-full h-full object-cover opacity-60"
             />
             {/* Tech Grid Pattern Overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* 2. Video Overlay (Vimeo) - Blended */}
          <iframe 
            src="https://player.vimeo.com/video/92261253?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
            className="absolute top-1/2 left-1/2 w-[177.777%] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 mix-blend-overlay"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            title="Hero Video"
          />

          {/* 3. Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/60 to-void/30 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40 z-10" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-30 pt-20">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-brand-orange mb-6 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                System v2.5 Live
              </div>
              
              <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-orange to-brand-sage bg-[length:200%_auto] animate-text-shimmer">
                  Operating System
                </span> 
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sage via-white to-brand-orange bg-[length:200%_auto] animate-text-shimmer">
                  for Leadership.
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                We don't just coach. We architect high-performance cultures for Fortune 1000 companies using data-driven transformation strategies.
              </p>
              
              <div className="flex flex-wrap gap-4 relative z-40">
                <Link to="/initialize" className="inline-block">
                  <Button size="lg" className="shadow-lg shadow-brand-orange/20 pointer-events-auto bg-brand-orange hover:bg-orange-600 text-white border-none">
                    Initialize Transformation
                  </Button>
                </Link>
                <Link to="/case-study" className="inline-block">
                  <Button variant="secondary" size="lg" className="gap-3 pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/20 text-white">
                    <Play size={18} fill="currentColor" /> Watch Case Study
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Grid Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent z-30 pointer-events-none" />
      </section>

      {/* --- SOCIAL PROOF: Ticker --- */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-display font-bold text-white">SCOOTER'S COFFEE</span>
             <span className="text-xl font-display font-bold text-white">MEDDEVICE INC.</span>
             <span className="text-xl font-display font-bold text-white">GLOBAL LOGISTICS</span>
             <span className="text-xl font-display font-bold text-white">PANDA GROUP</span>
             <span className="text-xl font-display font-bold text-white">BLOCKBUSTER</span>
          </div>
        </div>
      </div>

      {/* --- METRICS DASHBOARD --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard value="$4B+" label="Revenue Impact" icon={BarChart3} />
            <StatCard value="500+" label="CEOs Coached" icon={Users} />
            <StatCard value="4" label="Continents" icon={Globe2} />
            <StatCard value="37pt" label="NPS Increase" icon={Zap} />
          </div>
        </div>
      </section>

      {/* --- SERVICES: Bento Grid --- */}
      <section className="py-24 bg-void relative">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Core Modules</h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Scalable interventions designed to debug organizational friction and upgrade leadership capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Executive Coaching"
              desc="1:1 strategic partnership to accelerate decision velocity and enhance executive presence."
              icon={Compass}
              delay={0.1}
            />
            <FeatureCard 
              title="Team Architecture"
              desc="Dismantle silos and optimize collective intelligence protocols for high-stakes teams."
              icon={Users}
              delay={0.2}
            />
            <FeatureCard 
              title="Enterprise Strategy"
              desc="Deploy vision and culture updates across the entire organizational stack."
              icon={Hexagon}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: Cards --- */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl mb-8">Client Outcomes</h2>
              <div className="space-y-6">
                <div className="bg-panel border border-white/5 p-8 rounded-2xl relative">
                  <div className="absolute -left-1 top-8 w-1 h-12 bg-brand-orange rounded-r-full" />
                  <p className="text-lg text-gray-300 italic mb-6">
                    "Eileen quietly changed the trajectory of our $4B division. She speaks boardroom fluently but never loses the human touch."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700" />
                    <div>
                      <div className="font-bold text-white">Joe Thornton</div>
                      <div className="text-sm text-brand-orange">CEO, Scooter’s Coffee</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-panel border border-white/5 p-8 rounded-2xl opacity-60 hover:opacity-100 transition-opacity">
                  <p className="text-lg text-gray-300 italic mb-6">
                    "Within six months our executive-team NPS jumped 37 points. The ROI was immediate and measurable."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700" />
                    <div>
                      <div className="font-bold text-white">Sara Chen</div>
                      <div className="text-sm text-brand-orange">CTO, MedDevice Inc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual/Graphic Side */}
            <div className="relative h-[600px] bg-gradient-to-br from-brand-orange/20 to-brand-green/10 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
               <div className="relative z-10 text-center p-8">
                 <div className="text-8xl font-display font-bold text-white mb-2">35+</div>
                 <div className="text-xl text-brand-orange uppercase tracking-widest">Years Experience</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <ExplorationForm />

    </div>
  );
};
