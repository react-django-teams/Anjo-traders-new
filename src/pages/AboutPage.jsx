import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  { icon: '🤝', title: 'Connected By Ethics',  desc: 'Every trade relationship we build is grounded in honesty, transparency, and fair dealing.' },
  { icon: '👥', title: 'Right People',          desc: 'Experienced professionals across agriculture, maritime logistics, and container operations.' },
  { icon: '🧠', title: 'Right Skill',           desc: 'Decades of hands-on expertise in Indian commodity sourcing and international trade compliance.' },
  { icon: '🌍', title: 'Right Environment',     desc: 'State-of-the-art facilities in Tuticorin with active branches in Colombo and Laem Chabang.' },
  { icon: '✅', title: 'Quality Compliance',   desc: 'Strict pre-shipment inspections, phytosanitary certifications, and international standards.' },
  { icon: '🚢', title: 'Maritime Expertise',    desc: 'Own Green Link Maritime Agencies arm — NVOCC licensed, clearing, forwarding & project cargo.' },
];

const milestones = [
  { year: '1995+', event: 'Company founded in Tuticorin, Tamilnadu' },
  { year: '2005',  event: 'Launched Green Link Maritime Agencies' },
  { year: '2010',  event: 'Began ANJO Salt Manufacturing operations' },
  { year: '2015',  event: 'Opened Colombo, Sri Lanka branch' },
  { year: '2020',  event: 'Expanded to Laem Chabang, Thailand branch' },
  { year: '2024',  event: 'Exporting to 6+ nations across Asia' },
];

const AboutPage = () => {
  return (
    <div className="bg-white page-enter overflow-x-hidden">

      {/* HERO with brochure logo colors & tagline */}
      <section className="relative pt-[calc(var(--header-h)+2rem)] pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #DC2626 0%, #b91c1c 40%, #7f1d1d 100%)' }}>
        <div className="absolute inset-0 animate-ambient" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />
        {/* Rainbow side strip matching brochure */}
        <div className="absolute left-0 top-0 bottom-0 w-2 rainbow-strip" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-red-200 text-xs font-bold tracking-[0.2em] uppercase mb-4 reveal">Who We Are</p>
          <h1 className="text-res-h1 text-white mb-5 leading-tight reveal font-display" style={{ transitionDelay: '0.1s' }}>
            Right People.<br/>Right Skill.<br/>Right Environment.
          </h1>
          <p className="text-2xl font-bold text-red-200 mb-5 reveal" style={{ transitionDelay: '0.2s' }}>
            — Connected By Ethics —
          </p>
          <p className="text-red-100 font-light text-res-p max-w-2xl mx-auto leading-relaxed reveal" style={{ transitionDelay: '0.3s' }}>
            For over 25 years, ANJO Traders has been Tuticorin's most trusted name in bulk agricultural export, maritime logistics, industrial salt manufacturing, and container commercialization — serving buyers across Sri Lanka, Singapore, Malaysia, China, Thailand, and Bangladesh.
          </p>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-eyebrow justify-center reveal">Our Divisions</p>
            <h2 className="text-res-h2 text-gray-900 reveal font-display" style={{ transitionDelay: '0.1s' }}>Four Core Business Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 stagger-grid">
            {[
              { color: '#DC2626', icon: '🚢', title: 'Bulk Export & Import', desc: 'Vegetables, fruits, pulses, cereals, merchandise, and general goods exported to 6+ nations.' },
              { color: '#16A34A', icon: '⚓', title: 'Green Link Maritime', desc: 'Steamer agency, freight forwarding, clearing, and project cargo logistics across Asian ports.' },
              { color: '#F59E0B', icon: '🧂', title: 'ANJO Salt Mfg.', desc: 'High-quality industrial and food-grade salt production and bulk distribution.' },
              { color: '#7C3AED', icon: '📦', title: 'Container Solutions', desc: 'Buying, selling, leasing, storage, and custom fabrication of commercial containers.' },
            ].map((d, i) => (
              <div key={i} className="card-white p-7 card-premium electric-border reveal text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4" style={{ background: d.color + '12', border: `1px solid ${d.color}35` }}>
                  {d.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-eyebrow justify-center reveal">Our Journey</p>
            <h2 className="text-res-h2 text-gray-900 reveal font-display" style={{ transitionDelay: '0.1s' }}>Company Milestones</h2>
          </div>
          <div className="space-y-4 stagger-grid">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-5 card-white p-5 card-premium reveal">
                <span className="text-red-600 font-black text-lg font-display flex-shrink-0 w-16 text-right">{m.year}</span>
                <div className="w-0.5 self-stretch bg-gradient-to-b from-red-500 to-red-100 flex-shrink-0 rounded-full mx-2"></div>
                <p className="text-gray-700 font-medium text-sm leading-relaxed pt-0.5">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ANJO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-eyebrow justify-center reveal">Why Choose Us</p>
            <h2 className="text-3xl font-black text-gray-900 reveal font-display" style={{ transitionDelay: '0.1s' }}>Why Buyers Trust ANJO</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-grid">
            {values.map((v, i) => (
              <div key={i} className="commodity-card text-left reveal">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-gray-900 font-bold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 text-center" style={{ background: '#DC2626' }}>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 reveal font-display">Partner with ANJO Traders</h2>
        <p className="text-red-200 mb-7 reveal text-sm" style={{ transitionDelay: '0.1s' }}>info@anjotraders.com · 98943 22104 · 88704 00456</p>
        <Link to="/contact" className="btn-outline-white btn-shine inline-block px-10 py-4 rounded-lg font-bold text-base reveal" style={{ transitionDelay: '0.2s' }}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
