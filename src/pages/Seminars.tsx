import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Seminars = () => {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Seminars & Workshops</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto italic">
            "Doing your best at this moment puts you in the best place for the next moment." <br/>
            <span className="text-sm not-italic mt-2 block opacity-70">— Oprah Winfrey</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
           <Link to="/services" className="text-primary hover:text-secondary font-medium flex items-center gap-2">
             ← Back to Services
           </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Seminar 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-secondary">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Planning for Change</h3>
            <p className="text-charcoal/80 mb-4">
              A half-day program that provides a process and tools to help individuals understand a natural and predictable pattern of change and to identify their own location in that cycle.
            </p>
            <p className="text-charcoal/80">
              Each participant in the workshop will have a guide that includes The Cycle of Renewal and worksheets for planning the next steps of their lives. Participants will learn how to evaluate their current environment and take action around choices that support their highest goals.
            </p>
          </div>

          {/* Seminar 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-secondary">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Renewing Teams and Individuals</h3>
            <p className="text-charcoal/80 mb-4">
              A one-day program that provides a process and tools to help groups understand a natural and predictable pattern of change and to identify their own location in that cycle.
            </p>
            <p className="text-charcoal/80">
              This program helps groups and individuals discover the best steps to take to achieve their vision of success.
            </p>
          </div>

          {/* Combined Seminar */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Combined Seminar for BarOn EQ-I and MBTI</h3>
            <p className="text-charcoal/80 mb-4">
              BarOn EQ-I ® and The MBTI ® are two of the most informative and highly regarded assessments. When utilized, these two tools provide comprehensive data in the three areas identified as integral for personal and professional success, which is fundamental for team dynamics and growth.
            </p>
            <p className="text-charcoal/80 font-medium">
              ETC Associates are MBTI ® and BarOn EQ-I ® certified. Contact us to customize a workshop for your company.
            </p>
          </div>

          {/* MBTI Detail */}
          <div className="bg-putty p-8 rounded-lg">
            <h4 className="font-serif text-xl font-bold text-charcoal mb-3">Myers Briggs Type Indicator Seminar</h4>
            <p className="text-charcoal/80 text-sm">
              Provides you with a tool to better understand yourself and your co-workers. This test builds on psychologist Carl Jung’s theory of personality styles. In this seminar, participants will take the Myers-Briggs Type Indicator (MBTI) to determine their personality type and understand both its strengths and weaknesses.
            </p>
          </div>

          {/* EQ-I Detail */}
          <div className="bg-putty p-8 rounded-lg">
            <h4 className="font-serif text-xl font-bold text-charcoal mb-3">BarOn EQ-I Seminar and Assessment</h4>
            <p className="text-charcoal/80 text-sm mb-4">
              A growing body of research suggests that emotional intelligence is a key determinant of success in life. The assessment renders scores for:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-charcoal/70">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Intrapersonal</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Interpersonal</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Stress Management</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Adaptability</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> General Mood Scale</li>
            </ul>
          </div>

          {/* 5 Dysfunctions */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-secondary">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">The Five Dysfunctions of Teams</h3>
            <p className="text-charcoal/80 mb-6">
              A one-day seminar designed to help teams work through the five dysfunctions of a team to become a healthy and functioning team.
            </p>
            <div className="space-y-3">
              {[
                "Absence of Trust: The fear of being vulnerable.",
                "Fear of Conflict: The desire to preserve artificial harmony.",
                "Lack of Commitment: The lack of clarity or buy-in.",
                "Avoidance of Accountability: The need to avoid interpersonal discomfort.",
                "Inattention to Results: The pursuit of individual goals over collective success."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-secondary">#{i + 1}</span>
                  <p className="text-sm text-charcoal/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Xchanges */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">Learning Xchanges</h3>
            <p className="text-charcoal/80">
              A 1 hour to 90-minute presentation that focuses on specific areas of a company’s development needs, such as introductory seminar content, effective listening, exploring popular management theory, EQI challenges, and our exclusive Executive Whisperer™ presentation.
            </p>
          </div>

          {/* Rates & Payment */}
          <div className="bg-charcoal text-white p-8 md:p-12 rounded-lg text-center">
            <h3 className="font-serif text-3xl font-bold mb-8 text-secondary">Seminar Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-4 border border-white/10 rounded">
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Half-Day</div>
                <div className="text-2xl font-bold">$1,500</div>
              </div>
              <div className="p-4 border border-secondary rounded bg-secondary/10">
                <div className="text-sm text-secondary uppercase tracking-wider mb-2">Full Day</div>
                <div className="text-2xl font-bold">$3,000</div>
              </div>
              <div className="p-4 border border-white/10 rounded">
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Two-Day</div>
                <div className="text-2xl font-bold">$6,000</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-white/80">For more information about scheduling please email us at <a href="mailto:info@etconsult.biz" className="text-secondary underline">info@etconsult.biz</a></p>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm mb-4">Ready to book?</p>
                <Button className="bg-[#0070BA] hover:bg-[#003087] text-white border-none w-full md:w-auto px-8">
                  Pay via PayPal ($1,500 Deposit)
                </Button>
                <p className="text-xs text-white/40 mt-2">The safer, easier way to pay online!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
