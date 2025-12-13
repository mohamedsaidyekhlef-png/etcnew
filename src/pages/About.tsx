import { motion } from 'framer-motion';
import { Download, Users, ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const About = () => {
  const timeline = [
    { year: "Early Career", role: "Sales & Ops at P&G, Pillsbury, Chevron" },
    { year: "2000s", role: "EVP, Blockbuster Inc. (Global Diversity Officer)" },
    { year: "2010s", role: "Chief People Officer, Panda Restaurant Group" },
    { year: "2013", role: "Established ETC Consulting" },
    { year: "2025", role: "500+ CEOs coached across 4 continents" },
  ];

  return (
    <div className="pt-20 bg-[#0B1121] text-white min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image with Premium Frame */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange/20 to-brand-green/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-orange/50 rounded-tl-3xl z-20" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-green/50 rounded-br-3xl z-20" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-void z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent opacity-20" />
                <img 
                  src="https://i.postimg.cc/ry5Vwtzm/Screenshot-2025-11-22-002621.png" 
                  alt="Eileen - The Executive Whisperer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-orange mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                Founder & Principal
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
                Meet Eileen
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                A multi-dimensional leader with a career spanning over 35 years, Eileen has held executive roles at global giants like Blockbuster, where she was the only female EVP, and Panda Restaurant Group as Chief People Officer. 
              </p>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From her first "fully capitalized" Kool-Aid stand to Boardrooms across the globe, she brings a unique blend of operational expertise and human-centric leadership. She doesn't just coach; she transforms.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" className="flex items-center gap-2">
                  <Download size={18} />
                  Media Kit
                </Button>
                <Link to="/about/associates">
                  <Button className="flex items-center gap-2 shadow-lg shadow-brand-orange/20">
                    <Users size={18} />
                    Meet the Associates
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BIO SECTION (Dark Panel) --- */}
      <section className="bg-[#0f172a] py-24 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="prose prose-lg prose-invert mx-auto">
             <h2 className="text-center font-display text-3xl md:text-4xl text-white mb-12">The Journey</h2>
             
             <div className="space-y-8 text-gray-300 leading-loose">
               <p>
                 <span className="text-brand-orange font-bold text-xl float-left mr-2 mt-[-6px] font-display">E</span>ileen started an active business career that has spanned the last 35 years. Her first business, a Kool-Aid stand, was fully capitalized with 100% R.O.I. (cost of goods and wagon were fully financed by parents). The golfers on the 7th hole of the local golf course were her target market. This first sales and marketing opportunity stimulated Eileen’s interest in pursuing a business career.
               </p>
               <p>
                 She started her corporate climb with <strong className="text-white">Procter & Gamble</strong>. While employed there, and then at Pillsbury Corporation, she perfected her persuasive sales skills. She moved on to The Southland Corporation (7-11 stores) and then Chevron, taking positions from multi-unit oversight to marketing, merchandising, and operations management.
               </p>
               <p>
                 Eileen’s next stop was <strong className="text-white">Blockbuster, Inc.</strong>, where she successfully progressed upward through several key office positions before becoming the only female to reach the top ranking of Executive Vice President. She was responsible for working with 100+ franchisees across the United States and Puerto Rico, representing 1,050 store locations, and the operation of Blockbuster’s 400 Canadian stores.
               </p>
               <p>
                 Her most recent corporate position was as Chief People Officer for the <strong className="text-white">Panda Restaurant Group</strong> where she was responsible for all enterprise human resources functions for the privately held, multi-brand casual dining retailer with 22,000 employees.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* --- TIMELINE --- */}
      <section className="py-24 bg-[#0B1121] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 w-1/3 h-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16 text-center">A Legacy of Leadership</h2>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-12 space-y-16">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] md:-left-[53px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.5)] group-hover:scale-150 transition-transform" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <span className="font-mono text-brand-orange font-bold text-xl w-32 shrink-0">{item.year}</span>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl w-full hover:bg-white/10 transition-colors">
                    <span className="text-white text-lg font-medium">{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CREDENTIALS GRID --- */}
      <section className="py-20 bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl font-bold text-white">Credentials & Education</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "ICF PCC Certified", icon: Award },
              { label: "Hudson Institute Master", icon: GraduationCap },
              { label: "Hogan Certified", icon: Briefcase },
              { label: "BarOn EQ-I & MBTI", icon: Users },
            ].map((cred, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-colors group">
                <cred.icon className="text-gray-400 group-hover:text-brand-orange mb-3 transition-colors" size={32} />
                <span className="text-white font-medium text-center">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASSOCIATES TEASER --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-orange-700 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">A Team of Experts</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
            Eileen is joined by a curated network of master coaches and consultants ready to scale your vision.
          </p>
          <Link to="/about/associates">
            <Button className="bg-white text-brand-orange hover:bg-gray-100 border-none px-8 py-4 text-lg shadow-2xl">
              Meet the Associates <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
