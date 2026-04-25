import React from 'react';
import { Link } from 'react-router-dom';

/* Real export destinations from brochure */
const regions = [
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    accentColor: '#DC2626',
    role: 'Primary Hub',
    branch: 'Colombo Branch',
    description: 'ANJO\'s largest and most established export market. Our Colombo branch handles direct distribution to local wholesalers, retail chains, and food processors.',
    products: ['Big Onion', 'Shallots (Red Onion)', 'Potato', 'Garlic', 'Ginger', 'Chillies', 'Coconut', 'Salt', 'Dry Fish', 'Vegetable Oil'],
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=900&fit=crop',
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    accentColor: '#DC2626',
    role: 'Trading Hub',
    branch: 'Strategic Distribution',
    description: 'Singapore serves as a key re-export and distribution hub for ANJO products throughout South-East Asia, leveraging world-class port infrastructure.',
    products: ['Fruits', 'Vegetables', 'Pulses', 'Cereals', 'Merchandise', 'Grocery'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=900&fit=crop',
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    accentColor: '#16A34A',
    role: 'Regional Distribution',
    branch: 'Growing Partnership',
    description: 'Malaysia imports ANJO agricultural produce for its large Indian diaspora community and food manufacturing sector, with demand growing year on year.',
    products: ['Fruits & Vegetables', 'Dry Fish', 'Pulses', 'Chillies', 'Sugar', 'Grocery'],
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=900&fit=crop',
  },
  {
    name: 'China',
    flag: '🇨🇳',
    accentColor: '#16A34A',
    role: 'Key Trade Partner',
    branch: 'Industrial Sourcing',
    description: 'China is a key partner for machinery, equipment exports, and bulk commodities. ANJO leverages Green Link Maritime for smooth container shipping via Laem Chabang.',
    products: ['Machineries & Equipment', 'Bulk Commodities', 'Salt', 'Dry Fish', 'Maize/Corn'],
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=900&fit=crop',
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    accentColor: '#F59E0B',
    role: 'Gateway to SE Asia',
    branch: '📍 Laem Chabang Branch',
    description: 'ANJO\'s second physical branch is strategically located in Laem Chabang, Thailand\'s largest deep-sea port, enabling rapid distribution across South-East Asia.',
    products: ['Vegetables', 'Fruits', 'Pulses', 'Cereals', 'Merchandise', 'Grocery'],
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=900&fit=crop',
  },
  {
    name: 'Bangladesh',
    flag: '🇧🇩',
    accentColor: '#F59E0B',
    role: 'Emerging Market',
    branch: 'Growing Demand',
    description: 'Bangladesh is a fast-growing market for ANJO\'s affordable bulk agricultural commodities, as demand for quality imported produce continues to rise.',
    products: ['Big Onion', 'Garlic', 'Ginger', 'Salt', 'Sugar', 'Pulses & Dal'],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=900&fit=crop',
  },
];

const GlobalResearchPage = () => {
  return (
    <div className="bg-white page-enter">

      {/* HERO */}
      <section className="relative pt-32 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #DC2626 0%, #b91c1c 50%, #7f1d1d 100%)' }}>
        {/* Rainbow side strip matching brochure */}
        <div className="absolute left-0 top-0 bottom-0 w-2 rainbow-strip" />
        <div className="absolute inset-0 animate-ambient" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.07), transparent 60%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-eyebrow justify-center reveal" style={{ color: '#fca5a5' }}><span style={{ background: '#fca5a5' }}></span>Global Presence</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 reveal font-display" style={{ transitionDelay: '0.1s' }}>Global Research</h1>
          <p className="text-red-200 text-base font-light leading-relaxed reveal" style={{ transitionDelay: '0.2s' }}>
            Six active export corridors across Asia — Sri Lanka, Singapore, Malaysia, China, Thailand, and Bangladesh — with branches in Colombo and Laem Chabang.
          </p>
        </div>
      </section>

      {/* Nation Cards Overview */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 stagger-grid">
            {regions.map((r, i) => (
              <a key={i} href={`#${r.name.toLowerCase().replace(/\s/g,'-')}`} className="card-white p-5 flex items-center gap-4 card-premium reveal no-underline group">
                <span className="text-4xl flex-shrink-0">{r.flag}</span>
                <div>
                  <h3 className="text-gray-900 font-bold text-sm group-hover:text-red-600 transition-colors">{r.name}</h3>
                  <p className="text-gray-400 text-xs">{r.role}</p>
                  <span className="text-xs font-semibold mt-1 inline-block" style={{ color: r.accentColor }}>{r.branch}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Per-region detail sections */}
      {regions.map((region, index) => (
        <section
          key={region.name}
          id={region.name.toLowerCase().replace(/\s/g,'-')}
          className="py-14 px-4 sm:px-6 lg:px-8"
          style={{ background: index % 2 === 0 ? '#fff' : '#f9fafb', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} reveal-left`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{region.flag}</span>
                  <div>
                    <div className="inline-block text-xs font-bold px-3 py-1 rounded-full border mb-1" style={{ borderColor: region.accentColor + '40', background: region.accentColor + '10', color: region.accentColor }}>
                      {region.branch}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">{region.name}</h2>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{region.description}</p>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Products We Export Here</p>
                  <div className="flex flex-wrap gap-2">
                    {region.products.map((p, pi) => (
                      <span key={pi} className="text-xs px-3 py-1 rounded-full border font-medium" style={{ borderColor: region.accentColor + '35', color: region.accentColor, background: region.accentColor + '08' }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} reveal-right img-zoom rounded-2xl overflow-hidden shadow-xl`} style={{ border: `1px solid ${region.accentColor}20` }}>
                <img src={region.image} alt={region.name} className="w-full h-60 object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-14 text-center px-4" style={{ background: '#DC2626' }}>
        <h2 className="text-2xl font-black text-white mb-3 reveal font-display">Start Your Export Partnership</h2>
        <p className="text-red-200 text-sm mb-7 reveal" style={{ transitionDelay: '0.1s' }}>Contact our Tuticorin head office or visit a branch near you.</p>
        <Link to="/contact" className="btn-outline-white btn-shine inline-block px-10 py-4 rounded-lg font-bold reveal" style={{ transitionDelay: '0.2s' }}>
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default GlobalResearchPage;
