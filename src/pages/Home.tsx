import { motion } from 'framer-motion';
import { ArrowDown, Quote } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ExplorationForm } from '../components/sections/ExplorationForm';
import { SERVICES, TESTIMONIALS, CORE_VALUES, BLOG_POSTS } from '../data/content';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-cream">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal/60 z-10" /> {/* Scrim */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            The Executive Whisperer®
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed"
          >
            Elevating Fortune 1000 leaders through bespoke coaching & team transformation.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => document.getElementById('exploration-session')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-merlot hover:bg-white hover:text-charcoal border-none"
            >
              Book Your Complimentary Exploration Session
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
              Watch 2-min story
            </Button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* SECTION 1: VALUE CARDS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-putty/30 rounded-lg hover:bg-putty transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-merlot group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
                <Link to="/services" className="inline-flex items-center text-merlot font-medium hover:text-charcoal transition-colors">
                  Learn more <ArrowDown className="ml-2 -rotate-90" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF */}
      <section className="bg-charcoal py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            {/* Simple rotator implementation */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pl-8 border-l-4 border-gold"
            >
              <Quote className="text-merlot mb-6 fill-merlot" size={48} />
              <p className="font-serif text-2xl md:text-4xl text-white italic leading-tight mb-8">
                "{TESTIMONIALS[0].quote}"
              </p>
              <div>
                <p className="text-white font-bold text-lg">{TESTIMONIALS[0].author}</p>
                <p className="text-white/60">{TESTIMONIALS[0].role}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VALUES */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <h2 className="font-serif text-4xl font-bold text-charcoal mb-8">Mission & Vision</h2>
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Mission</h3>
                  <p className="text-xl text-charcoal/80 leading-relaxed">
                    To ignite curiosity and courage in leaders so they create organisations where people and profit flourish.
                  </p>
                </div>
                <div>
                  <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Vision</h3>
                  <p className="text-xl text-charcoal/80 leading-relaxed">
                    A world where every executive leads with humanity, clarity and purpose.
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-charcoal mb-6">10 Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CORE_VALUES.map((val, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-gold font-serif font-bold mr-3">{idx + 1}.</span>
                    <div>
                      <span className="font-bold text-charcoal">{val.title}</span>
                      <span className="text-charcoal/60"> – {val.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/5 w-full h-[500px] bg-charcoal rounded-lg overflow-hidden relative">
               {/* Silhouette Animation Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <span className="text-center p-8">Looping Animation of Office Silhouettes</span>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                 className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                 alt="Office silhouettes"
               />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INSIGHTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-4xl font-bold text-charcoal">Latest Insights</h2>
            <Link to="/blog" className="hidden md:inline-block text-merlot hover:text-charcoal font-medium transition-colors">
              View all articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-6 aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider mb-3">
                  <span className="text-gold">{post.category}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-3 group-hover:text-merlot transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-merlot font-medium text-sm group-hover:underline">Read more</span>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/blog" className="text-merlot font-medium">View all articles</Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FORM */}
      <ExplorationForm />
    </div>
  );
};
