import { Link } from 'react-router-dom';
import { Linkedin, Youtube } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-void text-white pt-24 pb-12 border-t border-white/5 font-sans">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-10 w-auto">
                 <Logo className="h-full w-full" />
               </div>
               {/* Removed text span as requested */}
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Architecting high-performance cultures for the world's most influential leaders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white text-gray-400 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white text-gray-400 transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Eileen</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition-colors">Solutions</Link></li>
              <li><Link to="/services/seminars" className="hover:text-brand-orange transition-colors">Workshops</Link></li>
              <li><Link to="/about/associates" className="hover:text-brand-orange transition-colors">Associates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/blog" className="hover:text-brand-orange transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2025 ETC Consulting. All rights reserved.</p>
          <p>Kansas City • Global</p>
        </div>
      </div>
    </footer>
  );
};
