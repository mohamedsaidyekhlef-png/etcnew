import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../data/content';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4',
        )}
      >
        <div className={cn(
          "w-full max-w-7xl rounded-2xl flex items-center justify-between px-6 py-4 transition-all duration-500",
          isScrolled 
            ? "bg-void/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50" 
            : "bg-transparent border border-transparent"
        )}>
          {/* Logo - Larger & Standalone */}
          <Link to="/" className="relative z-50 flex items-center">
             <div className="h-12 md:h-14 w-auto transition-transform hover:scale-105 duration-300">
               <Logo className="h-full w-full" />
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
              >
                <Button variant="ghost" size="sm" className="text-sm font-medium text-gray-300 hover:text-brand-orange hover:bg-white/5 transition-colors">
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => document.getElementById('exploration-session')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_-5px_rgba(244,157,17,0.5)] hover:shadow-[0_0_30px_-5px_rgba(244,157,17,0.7)]"
            >
              Book Session
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 hover:text-brand-orange transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-void pt-32 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 items-center text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-bold text-white hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 w-full max-w-xs">
                 <Button className="w-full justify-center bg-brand-orange text-white" size="lg">Book Session</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
