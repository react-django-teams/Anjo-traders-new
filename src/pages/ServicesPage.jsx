import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CargoAnimation from '../components/animations/CargoAnimation';

/* Real services from brochure */
const services = [
  {
    id: 'export-import',
    emoji: '🚢',
    accentColor: '#DC2626',
    name: 'Bulk Export & Import',
    tagline: 'Progressive Business Solutions',
    description: 'Full-circle international trade — from sourcing Indian agricultural produce to global delivery. We coordinate investment, procurement, sales, logistics, and export operations end-to-end.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=900',
    features: ['Vegetables, Fruits, Cereals, Pulses', 'Dry Fish, Salt, Sugar, Grocery', 'Machineries & Equipment', 'Customs Clearance & Compliance', 'Pre-shipment Quality Inspection'],
  },
  {
    id: 'maritime',
    emoji: '⚓',
    accentColor: '#16A34A',
    name: 'Green Link Maritime Agencies',
    tagline: 'Ocean Freight & Forwarding',
    description: 'ANJO\'s maritime arm — Green Link Maritime Agencies — operates as a Steamer Agent (NVOCC), offering clearing & freight forwarding and project cargo logistics across major Asian ports.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=900',
    features: ['Steamer Agent (NVOCC)', 'Clearing & Freight Forwarding', 'Project Cargo Logistics', 'Port Operations Management', 'LCL / FCL Shipments'],
  },
  {
    id: 'salt-manufacturer',
    emoji: '🧂',
    accentColor: '#F59E0B',
    name: 'ANJO Salt Manufacturer',
    tagline: 'Industrial & Food Grade Salt',
    description: 'ANJO operates its own salt manufacturing division, producing and exporting Industrial Salt, Table Salt, and Local Salt from Tamilnadu. Verified quality, consistent supply, and large-scale distribution.',
    image: 'https://images.unsplash.com/photo-1621501103258-3e524cecac13?q=80&w=900',
    features: ['Industrial Salt', 'Table Salt', 'Local / Traditional Salt', 'Bulk Export Packaging', 'Quality Certified Supply'],
  },
  {
    id: 'container-commercialization',
    emoji: '📦',
    accentColor: '#7C3AED',
    name: 'Container Commercialization',
    tagline: 'Container Asset Solutions',
    description: 'ANJO offers comprehensive container services: buying, selling, leasing, storage, rental, and full fabrication & modification. Enabling businesses to optimize containerization without capital investment.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=900',
    features: ['Container Buying / Selling / Leasing', 'Storage & Rental', 'Container Fabrication', 'Modification & Conversion', 'Global Equipment Positioning'],
  },
];

const ServicesPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [location]);

  return (
    <div className="bg-white page-enter">

      {/* HERO — Left content + Right cargo animation */}
      <section className="relative pt-24 pb-16 overflow-hidden" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="absolute inset-0 animate-ambient" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(220,38,38,0.06) 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="reveal-left">
              <p className="section-eyebrow">Our Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight font-display">
                Trade Solutions<br/>
                <span className="text-gradient-hero">Built for India</span>
              </h1>
              <p className="text-gray-300 text-base font-light leading-relaxed max-w-lg mb-8">
                Four business divisions — export/import, maritime, salt manufacturing, and container commercialization — operating as one integrated global trade powerhouse.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {services.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="text-xs px-3 py-1.5 rounded-full border font-semibold transition-colors" style={{ borderColor: s.accentColor + '50', color: s.accentColor, background: s.accentColor + '10' }}>
                    {s.emoji} {s.name}
                  </a>
                ))}
              </div>
              <Link to="/contact" className="btn-red btn-shine inline-block px-8 py-4 rounded-lg font-bold text-base">
                Request a Consultation
              </Link>
            </div>

            {/* Cargo Animation Panel */}
            <div className="reveal-right hidden md:block">
              <div className="rounded-2xl overflow-hidden border" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)', boxShadow: '0 32px 64px rgba(0,0,0,0.5)' }}>
                <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="ml-3 text-xs text-gray-500 font-mono">ANJO Operations Simulator — Containerization Line</span>
                </div>
                <div className="p-6">
                  <p className="text-center text-xs text-gray-600 font-mono tracking-widest uppercase mb-4">Agricultural Containerization</p>
                  <CargoAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: index % 2 === 0 ? '#fff' : '#f9fafb', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} reveal-left`}>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-bold border" style={{ borderColor: `${service.accentColor}40`, background: `${service.accentColor}10`, color: service.accentColor }}>
                  <span>{service.emoji}</span> {service.tagline}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">{service.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-3 mb-7">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-gray-700 text-sm">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold" style={{ background: service.accentColor }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/contact?service=${service.id}`} className="btn-shine inline-block px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all" style={{ background: service.accentColor, boxShadow: `0 4px 20px ${service.accentColor}40` }}>
                  Enquire About This Service
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} reveal-right img-zoom rounded-2xl overflow-hidden shadow-2xl`}>
                <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;
