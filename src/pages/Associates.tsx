import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

// Core Team (Existing)
const CORE_TEAM = [
  {
    name: "Michelle Walker, ACC",
    role: "Vice President of Operations",
    email: "miwalker.phi@gmail.com",
    bio: [
      "Michelle has over 27 years of domestic and international management experience in real estate investment, management, and development.",
      "Michelle has a passion for leadership development and the art of unleashing possibilities and potential in teams. In her pursuits of personal leadership development, she discovered the value of experienced coaching and the transformational change that coaching brings to individuals, families, and organizations.",
      "Highlights of her corporate experience include serving as Vice President, Client Services, Canada at VIXXO, Associate Vice President for Canadian Tire Corporation, and Director of Facilities for Starbucks Coffee Company."
    ]
  },
  {
    name: "Mary Ellen Leary, ACC",
    role: "Executive Coach",
    email: "mleary@etconsult.biz",
    bio: [
      "Mary Ellen combines her over 30 years of strategic Human Resources and organization development experience with her executive coaching expertise to bring a seasoned, big-picture perspective to her coaching clients.",
      "She is a graduate of The Hudson Institute of Santa Barbara’s Executive Coaching Certification program and is certified in the Myers-Briggs Type Indicator.",
      "Mary Ellen has board-level experience in the professional association, non-profit and private for-profit sectors, serving as a board member and/or chairman of the board/president for two professional associations."
    ]
  },
  {
    name: "Jill Fahlgen, MBA and ACC",
    role: "Executive Coach",
    email: "jill@thepossiblelife.com",
    bio: [
      "Jill is committed to helping professionals realize their full potential to achieve personal, career, and organizational goals. She is passionate about working with leaders to increase self-awareness and enhance their leadership skills.",
      "Specializing in leadership development, team development, and intentional career management, Jill has coached executives, emerging to experienced leaders, and teams across industries and sectors in the U.S., Europe, Asia, and Latin America.",
      "She earned her coaching certification from the Hudson Institute of Coaching in Santa Barbara and is a Certified Enneagram Practitioner (IEQ9)."
    ]
  }
];

// New Strategic Partners
const PARTNERS = [
  {
    name: "Derek Rider",
    role: "Founder & CEO, Media One Creative | Co-Founder & CEO, Media One Group",
    bio: "Derek Rider is a founder and CEO who believes stories matter—especially when they are told with purpose. Over the course of his career, he has worked with Fortune 500 brands and mid-sized companies, helping them clarify who they are, what they stand for, and how they show up in the world.\n\nAs Founder and CEO of Media One Creative, Derek built a content agency and production house grounded in one clear belief: content should earn its place. Under his leadership, Media One has been widely recognized for both growth and creative excellence, while maintaining a culture that values people as much as performance. He also serves as CEO and Co-Founder of Media One Group, expanding this philosophy globally.\n\nDerek leads with intention, curiosity, and discipline—always asking how creativity can genuinely serve a brand’s long-term story, not just the moment.",
    quote: "When stories are told with intention, they don’t just attract attention—they help brands become more fully themselves."
  },
  {
    name: "Jennifer Earl",
    role: "President, FGI North America",
    bio: "Jennifer Earl brings steadiness, perspective, and deep experience to her role as President of FGI North America. With more than two decades spent across sales, product development, and marketing, she understands what it takes to build organizations that last.\n\nHer career began at Foremost Groups, Inc., where she spent 23 years growing alongside the business. That long view shaped her leadership style—practical, thoughtful, and rooted in understanding how decisions ripple through people, product, and performance.\n\nJennifer is known for leading through change with calm confidence, helping organizations evolve without losing their footing.",
    quote: "Strong businesses grow when leaders understand the whole system—and care enough to steward it well."
  },
  {
    name: "Shabi Monzavi",
    role: "Founder & CEO, Market Candle Company",
    bio: "Shabi Monzavi is a founder who built her business the honest way—by following curiosity, trusting her instincts, and staying deeply connected to her community. What began as a creative side project grew into Market Candle Company, a brand known for personality, craft, and heart.\n\nWith the support of family, friends, and loyal customers, Shabi turned a passion project into a full-time livelihood. Now a new mother, she integrates entrepreneurship and family life with intention, choosing presence where it matters most while continuing to guide the business behind the scenes.\n\nHer work reflects a belief that when something is made with care, people can feel it.",
    quote: "When you build something that feels true to you, people recognize it—and they come back for it."
  },
  {
    name: "Brad Wilton",
    role: "Psychotherapist | Founder, Upstream Counseling",
    bio: "Brad Wilton is a CRPO-registered Psychotherapist and Founder of Upstream Counseling, where he supports individuals and families in navigating life with greater clarity and emotional health. His work is grounded in Cognitive Behavioural Therapy and informed by trauma-aware family systems thinking.\n\nBrad is known for creating a safe, steady space where people can slow down, reflect, and address challenges before they become overwhelming. Colleagues and clients alike describe him as a trusted problem solver—someone who listens deeply and responds thoughtfully.\n\nHe believes mental health care works best when it is proactive, compassionate, and human.",
    quote: "Mental health care is about meeting people early, with care—before life feels unmanageable."
  },
  {
    name: "Daryl Ching",
    role: "Founder, Vistance | Finance Strategist & Fractional CFO",
    bio: "Daryl Ching has spent his career helping business owners make sense of money—without fear, jargon, or overwhelm. With experience spanning investment banking and executive leadership, he brings both technical expertise and real-world understanding to his work.\n\nAs Founder of Vistance, Daryl supports entrepreneurs who want clarity, not complexity. He is frequently called upon by media for his insights, but his real impact shows up quietly—in better decisions, stronger businesses, and leaders who feel more grounded financially.\n\nDaryl believes finance should support people, not intimidate them.",
    quote: "When you truly understand your numbers, you stop reacting—and start leading."
  },
  {
    name: "Ilya Peskov",
    role: "Director of Software Engineering, InvestorCOM | CEO, Focus21",
    bio: "Ilya Peskov is a technology leader who believes software should make work simpler, not heavier. As Director of Software Engineering at InvestorCOM, he leads teams building compliance and communication platforms that help financial organizations operate with confidence and transparency.\n\nAs CEO of Focus21, Ilya also works directly with businesses to build or modernize custom software—removing friction, clarifying workflows, and supporting meaningful digital transformation.\n\nHis approach is thoughtful, practical, and grounded in one guiding idea: technology should serve people, not the other way around.",
    quote: "Good software quietly gets out of the way—and lets people focus on what matters."
  },
  {
    name: "Irene Divaris",
    role: "Founder, Meal in a Jar",
    bio: "Irene Divaris founded Meal in a Jar with a simple, deeply personal vision: make healthy food easy, real, and accessible. With more than 25 years in the health and wellness industry, she understands how much nutrition matters—and how hard it can be to eat well in a busy life.\n\nHer meals are made without additives, using wholesome ingredients, designed to be convenient, heat-and-serve solutions that support healthier choices without compromise.\n\nIrene’s work is driven by care—for people, for health, and for making good food realistic.",
    quote: "Healthy food should nourish your body and fit into your life—without shortcuts or additives."
  },
  {
    name: "Jennifer Grant",
    role: "President & Owner, Dell Tech | Founder, empyri",
    bio: "Jennifer Grant is an engineer, entrepreneur, and leader who brings scientific rigor to everything she builds. With a background in biochemical engineering and more than 25 years of experience, she has led organizations across technology, innovation, and commercialization.\n\nAs President and Owner of Dell Tech, and Founder of empyri, Jennifer blends technical depth with entrepreneurial courage. Her career reflects a commitment to bringing thoughtful ideas into the real world—where they can do meaningful work.\n\nShe leads with curiosity, discipline, and heart.",
    quote: "Innovation becomes real when knowledge meets the courage to act on it."
  },
  {
    name: "Olga Pawluczyk",
    role: "CEO, P&P Optica",
    bio: "Olga Pawluczyk is the CEO of P&P Optica, where she leads the development of technology designed to transform how we understand and produce food. Her work sits at the intersection of science, sustainability, and human health.\n\nDriven by a belief that better insight leads to better outcomes, Olga focuses on using advanced technology to support safer food systems and a healthier planet.\n\nHer leadership reflects both vision and responsibility.",
    quote: "When we understand our food more deeply, we make better choices—for people and the planet."
  },
  {
    name: "Therese Van Es",
    role: "Founder, LadderHR | Senior HR Executive & Business Coach",
    bio: "Therese Van Es is the Founder of LadderHR, bringing over 25 years of experience across human resources, accounting, and business leadership. She understands organizations from the inside out—how people, systems, and financial realities truly intersect.\n\nThrough LadderHR, Therese supports leaders and growing businesses with practical, compassionate HR strategy that balances care for people with accountability for performance. Her coaching style is collaborative, grounded, and action-oriented.\n\nShe believes strong organizations are built when people feel supported and expectations are clear.",
    quote: "When people strategy is done well, both the business and the humans thrive."
  },
  {
    name: "Wayne Philippi",
    role: "President & Senior Partner, WolfCreek Partners",
    bio: "Wayne Philippi specializes in leadership development, culture, and strategic implementation. As President and Senior Partner of WolfCreek Partners, he has worked with organizations across industries to help leaders rethink how they lead in a changing world.\n\nWayne’s work centers on interdependence—helping teams move beyond silos into shared responsibility and collective intelligence.",
    quote: "The strongest leaders know they don’t lead alone—they lead together."
  },
  {
    name: "Thomas Bauersachs",
    role: "Professional Engineer & Organizational Leader",
    bio: "Thomas Bauersachs is a professional engineer with over 20 years of experience across research, sales, business development, and executive leadership. He is passionate about building healthy, collaborative organizations that naturally attract and retain customers.\n\nThomas believes strong results come from strong teams—and that how people work together matters as much as what they deliver.",
    quote: "When teams are healthy and aligned, customers can feel it."
  },
  {
    name: "Stephanie Uprichard",
    role: "Principal Designer, STUDIO FORMA",
    bio: "Stephanie Uprichard is the Principal Designer at STUDIO FORMA, where she leads the creation of commercial interior spaces that reflect brand identity, culture, and purpose. Her work blends strategic creativity with operational discipline—ensuring projects are delivered on time, on budget, and with intention.\n\nStephanie believes physical space should support how people work, connect, and grow.",
    quote: "When space is designed with care, it quietly supports everything a business is trying to become."
  }
];

export const Associates = () => {
  return (
    <div className="pt-20 bg-[#0B1121] min-h-screen text-white selection:bg-brand-orange selection:text-white font-sans">
      
      {/* Header */}
      <div className="relative py-24 border-b border-white/5 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            The Circle of Excellence
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Meet the world-class team driving transformation alongside Eileen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="mb-16">
           <Link to="/about" className="text-brand-orange hover:text-white transition-colors font-medium flex items-center gap-2 inline-flex group">
             <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to About Eileen
           </Link>
        </div>

        {/* CORE TEAM SECTION */}
        <div className="mb-32">
          <h2 className="font-display text-3xl text-white mb-12 border-l-4 border-brand-orange pl-6">Core Associates</h2>
          <div className="space-y-24">
            {CORE_TEAM.map((associate, index) => (
              <motion.div 
                key={associate.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                {/* Simple, Elegant Avatar */}
                <div className="w-full lg:w-1/4 shrink-0">
                    <div className="aspect-square bg-white/5 rounded-full border border-white/10 overflow-hidden relative shadow-2xl mx-auto lg:mx-0 max-w-[200px]">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-display text-2xl">
                         <span className="opacity-50 tracking-widest uppercase">{associate.name.split(' ')[0]}</span>
                      </div>
                    </div>
                </div>

                {/* Bio Content */}
                <div className="w-full lg:w-3/4">
                  <h3 className="font-display text-3xl font-bold text-white mb-2">{associate.name}</h3>
                  <p className="text-brand-orange font-medium text-sm tracking-widest uppercase mb-6">{associate.role}</p>
                  
                  <div className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed space-y-4 font-light">
                    {associate.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a href={`mailto:${associate.email}`} className="inline-flex items-center text-gray-400 hover:text-brand-orange transition-colors gap-2 text-sm">
                        <Mail size={16} /> {associate.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXTENDED PARTNERS SECTION - WARMER DESIGN */}
        <div className="relative">
          <div className="absolute -left-[100vw] top-0 w-[200vw] h-px bg-white/10" /> {/* Divider */}
          
          <div className="py-24">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Partners in Transformation</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light italic">
                "Let’s bring the warmth, carefrontation, and human pulse back in. Less editorial polish, more presence. Still strong. Still credible. Just… closer to the heart."
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16">
              {PARTNERS.map((partner, index) => (
                <motion.div 
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-panel/50 rounded-3xl p-8 md:p-12 border border-white/5 hover:border-brand-orange/20 transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-[60px] group-hover:bg-brand-orange/10 transition-colors" />

                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-2/3 order-2 md:order-1">
                      <h3 className="font-display text-3xl font-bold text-white mb-2">{partner.name}</h3>
                      <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-8">{partner.role}</p>
                      
                      <div className="text-gray-300 leading-relaxed whitespace-pre-line font-light text-lg mb-8">
                        {partner.bio}
                      </div>
                    </div>

                    <div className="md:w-1/3 order-1 md:order-2">
                       <div className="bg-brand-green/10 border border-brand-green/20 rounded-2xl p-8 relative">
                         <Quote className="absolute top-4 left-4 text-brand-green opacity-50" size={24} />
                         <blockquote className="font-display text-xl text-white italic leading-relaxed pt-6 text-center">
                           "{partner.quote}"
                         </blockquote>
                         <div className="w-8 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
