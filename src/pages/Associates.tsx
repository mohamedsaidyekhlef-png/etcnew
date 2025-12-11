import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ASSOCIATES = [
  {
    name: "Michelle Walker, ACC",
    role: "Vice President of Operations",
    email: "miwalker.phi@gmail.com",
    bio: [
      "Michelle has over 27 years of domestic and international management experience in real estate investment, management, and development.",
      "Michelle has a passion for leadership development and the art of unleashing possibilities and potential in teams. In her pursuits of personal leadership development, she discovered the value of experienced coaching and the transformational change that coaching brings to individuals, families, and organizations. This passion led Michelle to pursue her coaching certification through the respected industry-leading program at the Hudson Institute of Santa Barbara and integrate coaching into her leadership roles.",
      "Highlights of her corporate experience include serving as Vice President, Client Services, Canada at VIXXO (formerly First Service Networks), Associate Vice President, National Portfolio Services for Canadian Tire Corporation, Senior Director Real Estate, Canada for Regis Corporation, Director of Existing Stores, Canada, Director of Facilities, North America and Program Manager, International Store Development for Starbucks Coffee Company. Michelle has also previously held real estate portfolio asset management positions, responsible for assets exceeding $1 billion with the largest single pension fund in Canada, the Ontario Teacher’s Pension Plan.",
      "She is a graduate of Abilene Christian University in Speech Communications and Psychology. She is also a Certified Coach with the Hudson Institute of Santa Barbara.",
      "Michelle is an active member of the International Coaching Federation (ICF), Corenet, and Building Owners & Managers Association (BOMA), and a former member of the Association of Investment Management Research (AIMR). Michelle is also past co-president of the Seattle LGBT Community Center and helpline for gay youth."
    ]
  },
  {
    name: "Mary Ellen Leary, ACC",
    role: "Executive Coach",
    email: "mleary@etconsult.biz",
    bio: [
      "Mary Ellen combines her over 30 years of strategic Human Resources and organization development experience with her executive coaching expertise to bring a seasoned, big-picture perspective to her coaching clients. She works with business owners and corporate executives where a change in behavior can make a significant positive difference in their organizations and themselves.",
      "She is a graduate of The Hudson Institute of Santa Barbara’s Executive Coaching Certification program. She is certified in the Myers-Briggs Type Indicator and has a range of assessment tools and techniques available to assist her coaching clients in self-evaluation and goal setting.",
      "Mary Ellen has board-level experience in the professional association, non-profit and private for-profit sectors, serving as a board member and/or chairman of the board/president for two professional associations, four human services agencies, and one life insurance company. She is currently Board Chair for ProAct, a $14 million human services agency based in Eagan, Minnesota.",
      "Mary Ellen earned her MBA in Integrative Management from the University of St. Thomas in St. Paul, Minnesota. She holds a Bachelor’s Degree from St. Catherine University, also in St. Paul. Mary Ellen holds the SPHR designation (Senior Professional in Human Resources) granted by the Human Resources Certification Institute.",
      "Mary Ellen is a frequent guest lecturer for a wide variety of professional associations and special interest groups."
    ]
  },
  {
    name: "Jill Fahlgen, MBA and ACC",
    role: "Executive Coach",
    email: "jill@thepossiblelife.com",
    bio: [
      "Jill is committed to helping professionals realize their full potential to achieve personal, career, and organizational goals. She is passionate about working with leaders to increase self-awareness, enhance their leadership skills, and create authentic alignment between person and profession. Specializing in leadership development, team development, and intentional career management, Jill has coached executives, emerging to experienced leaders, and teams across industries and sectors in the U.S., Europe, Asia, and Latin America.",
      "Jill encourages her clients to look beyond what they are doing to examine how and why they may be standing in their own way. Whether working with individuals, teams, or groups, she helps them focus on clearly assessing the gap between where they are and where they want to be. Jill helps them navigate the path to get there so they can be more effective, have more impact, and achieve their goals.",
      "She earned her coaching certification from the Hudson Institute of Coaching in Santa Barbara. In addition, she is a Certified Enneagram Practitioner (IEQ9) and experienced with other tools and assessments, including Emotional Intelligence (EQi), Myers-Briggs (MBTI), DiSC, and Leading Indicator Systems (LIS) 360.",
      "With 20+ years of experience in coaching, consulting, and technology services, Jill delivers value through a unique combination of corporate experience and coaching perspective. She earned a BA from Northwestern University and an MBA from Kellogg School of Management. Her previous experience includes corporate leadership roles in technology services and consulting and running a non-profit organization dedicated to administering funding for research to benefit U.S. military veterans.",
      "Jill often speaks and facilitates workshops and events on leadership and career-related topics to local, national, and global audiences, with participants numbering from a dozen to hundreds."
    ]
  }
];

export const Associates = () => {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">ETC Associates</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Meet the world-class team driving transformation alongside Eileen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
           <Link to="/about" className="text-primary hover:text-secondary font-medium flex items-center gap-2">
             ← Back to About Eileen
           </Link>
        </div>

        <div className="space-y-24">
          {ASSOCIATES.map((associate, index) => (
            <motion.div 
              key={associate.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-12 items-start"
            >
              {/* Placeholder Photo */}
              <div className="w-full lg:w-1/3 shrink-0">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif text-lg">
                    {associate.name.split(' ')[0]} Photo
                  </div>
                  {/* Overlay for visual polish */}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{associate.name}</h3>
                  <p className="text-secondary font-medium mb-4">{associate.role}</p>
                  <a href={`mailto:${associate.email}`} className="inline-flex items-center text-charcoal/70 hover:text-primary transition-colors">
                    <Mail size={16} className="mr-2" />
                    {associate.email}
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div className="w-full lg:w-2/3 prose prose-lg prose-p:text-charcoal/80 max-w-none">
                {associate.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
