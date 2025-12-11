import { Link } from 'react-router-dom';
import { Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { BRAND } from '../../data/content';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white/90 rounded px-2 py-1">
                <Logo className="h-10" variant="light" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {BRAND.tagline}
              <br />
              Elevating Fortune 1000 leaders through bespoke coaching & team transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-white transition-colors">Executive Coaching</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Team Coaching</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Leadership Coaching</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Resources</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Podcast</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Guides</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-3 shrink-0 text-gold" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 shrink-0 text-gold" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">{BRAND.email}</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 shrink-0 text-gold" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-white">{BRAND.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 2025 ETC Consulting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
