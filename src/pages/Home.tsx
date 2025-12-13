import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Users, Target, Play, Quote } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ExplorationForm } from '../components/sections/ExplorationForm';
import { Link } from 'react-router-dom';

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && <span className="text-brand-orange font-sans text-xs font-bold uppercase tracking-[0.2em] mb-3 block">{subtitle}</span>}
    <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
      {children}
    </h2>
    <div className="w-24 h-1 bg-brand-orange mx-auto mt-6" />
  </div>
);

export const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="bg-void text-white selection:bg-brand-orange selection:text-white overflow-x-hidden font-sans">
      
      {/* --- HERO: Cinematic & Human --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Fallback Image - Warm, Executive, Human Connection */}
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
               alt="Executive Coaching Session"
               className="w-full h-full object-cover opacity-50"
             />
             {/* Gradient Overlay for Text Readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40"></div>
          </div>

          {/* Video Overlay (Vimeo) - Subtle */}
          <iframe 
            src="https://player.vimeo.com/video/92261253?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
            className="absolute top-1/2 left-1/2 w-[177.777%] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 mix-blend-overlay"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            title="Hero Video"
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-30 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 border border-brand-orange/30 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              The Executive Whisperer®
            </span>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-white drop-shadow-2xl">
              Mastery of <br/>
              <span className="italic text-brand-orange">Communication.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-12 font-light leading-relaxed border-l-4 border-brand-green pl-6">
              "We provide a mastery of communication, emotional and social intelligence skills; all designed for you and your organization to achieve success."
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link to="/initialize">
                <Button size="lg" className="shadow-2xl shadow-brand-orange/20">
                  Begin Your Journey
                </Button>
              </Link>
              <Link to="/case-study">
                <Button variant="outline" size="lg" className="gap-3 backdrop-blur-sm">
                  <Play size={18} fill="currentColor" /> Watch Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION STATEMENT: The Core Philosophy --- */}
      <section className="py-24 bg-panel relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Mission</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
                Creating Alive & <br/>
                <span className="text-brand-sage italic">Extraordinary Possibilities.</span>
              </h2>
              <div className="prose prose-lg prose-invert text-gray-300 font-light">
                <p className="mb-6">
                  We are a personal growth and development company. Our methodology includes Executive Coaching, Team Coaching, consulting, and individually customized seminars.
                </p>
                <p>
                  Additionally, with management diagnostics, we assist organizations to create alive and in action extraordinary possibilities.
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/20 translate-x-4 translate-y-4 rounded-lg" />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- COACHING & CONSULTING: The Methodology --- */}
      <section className="py-24 bg-void relative">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Our Methodology">
            How We Transform Leaders
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            
            {/* Coaching Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-panel border border-white/5 p-10 rounded-sm hover:border-brand-orange/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-20 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-8 text-brand-orange">
                <Compass size={32} />
              </div>
              
              <h3 className="font-display text-3xl mb-6">Coaching</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A coach can help a client see options for becoming a more effective human being. Coaching helps individuals invent changes that are valuable, exciting, and intensely personal.
              </p>
              
              <div className="bg-void/50 p-6 border-l-2 border-brand-orange mb-6">
                <p className="italic text-gray-400 text-sm">
                  "Think of our coaching engagement as bicycle training wheels to give you support, get you started, and help you move forward."
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-brand-sage">
                <span>MBTI</span> • <span>BarOn EQ-I</span> • <span>Brain Pathways</span>
              </div>
            </motion.div>

            {/* Consulting Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-panel border border-white/5 p-10 rounded-sm hover:border-brand-green/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-20 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-8 text-brand-green">
                <Target size={32} />
              </div>
              
              <h3 className="font-display text-3xl mb-6">Consulting</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                ETC’s management philosophy has a broad background in business. We welcome the opportunity to come into organizations looking to identify performance gaps through a root cause analysis approach.
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  "Management Diagnostics",
                  "Executive & Leadership Development",
                  "Team Development",
                  "Seminars & Workshops"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: Social Proof --- */}
      <section className="py-24 bg-panel border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Quote size={48} className="text-brand-orange mx-auto mb-6 opacity-50" />
            <h2 className="font-display text-3xl md:text-4xl italic text-white max-w-4xl mx-auto leading-relaxed">
              "Eileen quietly changed the trajectory of our $4B division. She speaks boardroom fluently yet never loses the human touch."
            </h2>
            <div className="mt-8">
              <div className="font-bold text-white text-lg">Joe Thornton</div>
              <div className="text-brand-orange text-sm uppercase tracking-widest">CEO, Scooter’s Coffee</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Simple Text Logos for Client Trust */}
             <span className="text-xl font-display font-bold">PANDA GROUP</span>
             <span className="text-xl font-display font-bold">BLOCKBUSTER</span>
             <span className="text-xl font-display font-bold">CHEVRON</span>
             <span className="text-xl font-display font-bold">DIAGEO</span>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <ExplorationForm />

    </div>
  );
};
