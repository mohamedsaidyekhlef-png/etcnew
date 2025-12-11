import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../data/content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHome ? 'bg-charcoal shadow-md py-2' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50 relative flex items-center gap-2">
           {/* We wrap the logo in a small white container if it has a white background to make it visible on charcoal */}
           <div className={cn("rounded px-2 py-1", (isScrolled || !isHome) ? "bg-white/90" : "bg-white/90")}>
             <Logo className="h-10" variant="light" /> 
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="primary" 
            size="sm"
            className="bg-merlot hover:bg-white hover:text-charcoal border-none"
            onClick={() => document.getElementById('exploration-session')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Complimentary Session
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-charcoal shadow-2xl z-40 flex flex-col pt-24 px-8"
            >
              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-xl font-serif text-white hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-white/10">
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('exploration-session')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book Session
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
