import { motion } from 'framer-motion';
import { Download, Users, ArrowRight } from 'lucide-react';
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
    <div className="pt-20 bg-cream">
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary/10 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
              <img 
                src="https://i.postimg.cc/ry5Vwtzm/Screenshot-2025-11-22-002621.png" 
                alt="Eileen - The Executive Whisperer"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl font-bold text-charcoal mb-6"
            >
              Meet Eileen
            </motion.h1>
            <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
              A multi-dimensional leader with a career spanning over 35 years, Eileen has held executive roles at global giants like Blockbuster, where she was the only female EVP, and Panda Restaurant Group as Chief People Officer. 
            </p>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From her first "fully capitalized" Kool-Aid stand to Boardrooms across the globe, she brings a unique blend of operational expertise and human-centric leadership. She doesn't just coach; she transforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Download size={18} />
                Download Media Kit
              </Button>
              <Link to="/about/associates">
                <Button className="flex items-center gap-2 bg-secondary hover:bg-charcoal text-white border-none">
                  <Users size={18} />
                  Meet the Associates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Bio Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/80 mx-auto">
             <h2 className="text-center mb-12 text-primary">The Journey</h2>
             <p>
               Eileen started an active business career that has spanned the last 35 years. Her first business, a Kool-Aid stand, was fully capitalized with 100% R.O.I. (cost of goods and wagon were fully financed by parents). The golfers on the 7th hole of the local golf course were her target market. This first sales and marketing opportunity stimulated Eileen’s interest in pursuing a business career.
             </p>
             <p>
               She started her corporate climb with Procter & Gamble. While employed there, and then at Pillsbury Corporation, she perfected her persuasive sales skills. She moved on to The Southland Corporation (7-11 stores) and then Chevron, taking positions from multi-unit oversight to marketing, merchandising, and operations management.
             </p>
             <p>
               Eileen’s next stop was Blockbuster, Inc., where she successfully progressed upward through several key office positions before becoming the only female to reach the top ranking of Executive Vice President. She was responsible for working with 100+ franchisees across the United States and Puerto Rico, representing 1,050 store locations, and the operation of Blockbuster’s 400 Canadian stores.
             </p>
             <p>
               Her most recent corporate position was as Chief People Officer for the Panda Restaurant Group where she was responsible for all enterprise human resources functions for the privately held, multi-brand casual dining retailer with 22,000 employees.
             </p>
           </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-putty py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-16 text-center">A Legacy of Leadership</h2>
          <div className="relative border-l-2 border-secondary/30 ml-4 md:ml-0 md:pl-8 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="absolute -left-[9px] md:-left-[41px] top-2 w-4 h-4 rounded-full bg-secondary border-4 border-putty" />
                <span className="text-primary font-bold text-xl block mb-1">{item.year}</span>
                <span className="text-charcoal text-lg">{item.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold text-charcoal mb-8">Credentials & Education</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            <span className="text-xl font-bold text-charcoal">ICF PCC</span>
            <span className="text-xl font-bold text-charcoal">Hudson Institute Master Cert.</span>
            <span className="text-xl font-bold text-charcoal">Hogan Certified</span>
            <span className="text-xl font-bold text-charcoal">BarOn EQ-I & MBTI</span>
          </div>
        </div>
      </section>

      {/* Associates Teaser */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">A Team of Experts</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Eileen is joined by a curated network of master coaches and consultants.
          </p>
          <Link to="/about/associates">
            <Button className="bg-white text-primary hover:bg-secondary hover:text-white border-none">
              Meet the Associates <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
