import { SERVICES, BRAND, ASSOCIATES } from '../data/content';

// Context for the Local AI to "know" about the site
const KNOWLEDGE_BASE = {
  eileen: `Eileen is the Founder & Principal of ETC Consulting, known as "The Executive Whisperer". She has over 35 years of experience, including roles as EVP at Blockbuster (the only female to reach that rank) and Chief People Officer at Panda Restaurant Group. She specializes in C-suite transformation.`,
  
  services: `We offer three core modules:
  1. Executive Coaching: 1:1 partnerships for strategic impact (6-12 months).
  2. Team Coaching: Unlocking collective intelligence and dismantling silos (3-9 months).
  3. Leadership Coaching: Enterprise-wide change and culture scaling (Ongoing).`,
  
  seminars: `We offer several seminars including "Planning for Change", "Renewing Teams", and "The Five Dysfunctions of Teams". We also provide MBTI and BarOn EQ-I assessments. Rates start at $1,500 for a half-day.`,
  
  associates: `Our team includes world-class experts:
  - Michelle Walker (VP Ops, Real Estate background)
  - Mary Ellen Leary (HR & OD expert)
  - Jill Fahlgen (Leadership & Career alignment)
  All are certified coaches (ACC/PCC) with deep corporate experience.`,
  
  contact: `You can reach us at ${BRAND.email} or ${BRAND.phone}. Our HQ is in Kansas City, MO.`,
  
  booking: `You can book a complimentary exploration session by clicking the "Book Session" button in the navigation bar or visiting the Contact page.`,
  
  pricing: `We don't publish standard coaching rates as every engagement is bespoke. However, our seminars start at $1,500 (Half-Day) to $6,000 (Two-Day).`
};

// Simple keyword matching for the "Demo" mode
const getLocalResponse = (query: string): string => {
  const q = query.toLowerCase();
  
  if (q.includes('eileen') || q.includes('founder') || q.includes('who is')) return KNOWLEDGE_BASE.eileen;
  if (q.includes('service') || q.includes('offer') || q.includes('coaching')) return KNOWLEDGE_BASE.services;
  if (q.includes('seminar') || q.includes('workshop') || q.includes('training')) return KNOWLEDGE_BASE.seminars;
  if (q.includes('team') || q.includes('associate') || q.includes('michelle') || q.includes('mary') || q.includes('jill')) return KNOWLEDGE_BASE.associates;
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) return KNOWLEDGE_BASE.contact;
  if (q.includes('book') || q.includes('schedule') || q.includes('appointment')) return KNOWLEDGE_BASE.booking;
  if (q.includes('price') || q.includes('cost') || q.includes('rate')) return KNOWLEDGE_BASE.pricing;
  
  if (q.includes('hello') || q.includes('hi')) return "Hello! I am the ETC AI Assistant. How can I help you optimize your leadership strategy today?";
  
  return "I can help you with information about Eileen, our coaching services, seminars, or booking a session. Could you be a bit more specific?";
};

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  // 1. Check for Real API Key
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (apiKey && apiKey !== "YOUR_API_KEY") {
    try {
      // Real OpenAI Call
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // or gpt-3.5-turbo
          messages: [
            {
              role: "system",
              content: `You are the AI Assistant for ETC Consulting (The Executive Whisperer). 
              Tone: Professional, Executive, Warm, "Boardroom Polished".
              Context: ${JSON.stringify(KNOWLEDGE_BASE)}
              Goal: Answer user questions briefly and encourage them to book an exploration session.`
            },
            { role: "user", content: userMessage }
          ]
        })
      });

      const data = await response.json();
      if (data.choices && data.choices[0]) {
        return data.choices[0].message.content;
      }
    } catch (error) {
      console.error("OpenAI API Error:", error);
      // Fallback to local if API fails
    }
  }

  // 2. Fallback / Demo Mode (Simulated Delay)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getLocalResponse(userMessage));
    }, 1000 + Math.random() * 1000); // 1-2s delay to feel "real"
  });
};
