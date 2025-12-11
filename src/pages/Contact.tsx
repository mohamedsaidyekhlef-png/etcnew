import { MapPin, Mail, Phone } from 'lucide-react';
import { ExplorationForm } from '../components/sections/ExplorationForm';
import { BRAND } from '../data/content';

export const Contact = () => {
  return (
    <div className="pt-20 bg-cream">
      {/* Header */}
      <div className="bg-charcoal text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Start the Conversation</h1>
          <p className="text-xl text-white/70">We measure success in decades, not days.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-6">Headquarters</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-merlot mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-charcoal">ETC Consulting</p>
                    <p className="text-gray-600">123 Executive Plaza<br/>Kansas City, MO 64105</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-merlot mr-4" />
                  <a href={`mailto:${BRAND.email}`} className="text-gray-600 hover:text-merlot">{BRAND.email}</a>
                </div>
                <div className="flex items-center">
                  <Phone className="text-merlot mr-4" />
                  <a href={`tel:${BRAND.phone}`} className="text-gray-600 hover:text-merlot">{BRAND.phone}</a>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg w-full flex items-center justify-center text-gray-500">
              Google Map Embed
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
             <ExplorationForm />
          </div>
        </div>
      </div>
    </div>
  );
};
