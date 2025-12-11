import { Compass, Users, Hexagon, ArrowUpRight } from 'lucide-react';

export const BRAND = {
  name: "ETC Consulting",
  tagline: "The Executive Whisperer®",
  phone: "+1 (555) 123-4567",
  email: "connect@etc-consulting.com",
  address: "Kansas City, MO",
};

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const TESTIMONIALS = [
  {
    quote: "Eileen quietly changed the trajectory of our $4 B division.",
    author: "Joe Thornton",
    role: "CEO, Scooter’s Coffee",
  },
  {
    quote: "Within six months our executive-team NPS jumped 37 points.",
    author: "Sara Chen",
    role: "CTO, MedDevice Inc.",
  },
  {
    quote: "She speaks board-room fluently yet never loses the human touch.",
    author: "Luis Hernandez",
    role: "CHRO, Global Logistics Group",
  },
];

export const CORE_VALUES = [
  { title: "Curiosity", desc: "We ask more than we tell." },
  { title: "Confidentiality", desc: "Vegas rule, always." },
  { title: "Courage", desc: "Challenge with care." },
  { title: "Compassion", desc: "Business is human." },
  { title: "Candour", desc: "Say what needs to be said." },
  { title: "Customisation", desc: "No cookie cutters." },
  { title: "Commitment", desc: "We measure success in decades, not days." },
  { title: "Curated Network", desc: "Best-in-class partners only." },
  { title: "Continuous Learning", desc: "If we’re not 10 % uncomfortable, we’re stagnant." },
  { title: "Celebration", desc: "Wins are bottled and shared." },
];

export const SERVICES = [
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    icon: Compass,
    shortDesc: "One-to-one confidential partnerships that accelerate strategic impact.",
    details: {
      length: "6-12 Months",
      outcomes: "Enhanced strategic clarity, improved stakeholder management, increased resilience.",
    }
  },
  {
    id: "team-coaching",
    title: "Team Coaching",
    icon: Users,
    shortDesc: "Unlock collective intelligence, dismantle silos, amplify trust.",
    details: {
      length: "3-9 Months",
      outcomes: "Broken silos, higher eNPS, faster decision-making velocity.",
    }
  },
  {
    id: "leadership-coaching",
    title: "Leadership Coaching",
    icon: Hexagon,
    shortDesc: "Scale influence, communicate vision, drive enterprise-wide change.",
    details: {
      length: "Ongoing Retainer",
      outcomes: "Enterprise-wide alignment, cultural transformation, scalable leadership pipelines.",
    }
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Art of Silence in Boardrooms",
    excerpt: "Why the most powerful leaders speak the least, and how to harness the strategic pause.",
    date: "March 15, 2025",
    category: "Executive Presence",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "Dismantling Silos: A Case Study",
    excerpt: "How a Fortune 500 manufacturing giant reconnected their engineering and sales divisions.",
    date: "February 28, 2025",
    category: "Team Dynamics",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    title: "Curiosity as a KPI",
    excerpt: "Measuring the unmeasurable: How inquisitive cultures drive higher profitability.",
    date: "February 10, 2025",
    category: "Curiosity",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
  },
];
