import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AnjoPage.css';

// ── SLIDE DATA ───────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    category: 'Industrial Salt',
    heading: 'High Purity Grade Salt',
    sub: '99.9% mineral purity — engineered for industrial precision and global supply chains.',
    price: 'Premium Export Quality',
    link: '/anjo-salt',
    img: '/images/high-purity-salt.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #dbeafe 0%, #3b82f6 100%)',
    accent: '#3b82f6',
  },
  {
    id: 1,
    category: 'Container Division',
    heading: 'Inventory Buying & Selling',
    sub: 'Smart inventory decisions. Stronger business results. Global container commerce.',
    price: 'Container Solutions',
    link: '/container-commercialization',
    img: '/images/buying-selling-poster.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #cffafe 0%, #06b6d4 100%)',
    accent: '#06b6d4',
  },
  {
    id: 2,
    category: 'Container Division',
    heading: 'Flexible Leasing Solutions',
    sub: 'Smart leasing. Stronger business. Built around your needs.',
    price: 'Lease Smart. Grow Strong.',
    link: '/container-commercialization',
    img: '/anjo-photos/WhatsApp_Image_2026-04-24_at_3.10.36_PM.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #ede9fe 0%, #8b5cf6 100%)',
    accent: '#8b5cf6',
  },
  {
    id: 3,
    category: 'Prime Products',
    heading: 'Fresh Export Vegetables',
    sub: 'Farm-fresh produce sourced globally — big onions, potatoes, garlic and more.',
    price: 'Global Agri Export',
    link: '/prime-products',
    img: '/anjo-photos/WhatsApp_Image_2026-04-24_at_3.10.35_PM.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #d1fae5 0%, #059669 100%)',
    accent: '#059669',
  },
  {
    id: 4,
    category: 'Industrial Salt',
    heading: 'Chemical Processing Essential',
    sub: 'Industry-grade sodium chloride for chemical manufacturing and water treatment.',
    price: 'B2B Industrial Supply',
    link: '/anjo-salt',
    img: '/images/industrial-salt.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #fef3c7 0%, #f59e0b 100%)',
    accent: '#f59e0b',
  },
];

function getClass(index, active, total) {
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;
  if (index === active) return 'active';
  if (index === prev)   return 'previous';
  if (index === next)   return 'next';
  return 'inactive';
}

export default function AnjoPage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);
  const total = SLIDES.length;

  const advance = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c + 1) % total);
      setAnimating(false);
    }, 100);
  };

  const goTo = (idx) => {
    if (idx === current) return;
    setCurrent(idx);
  };

  useEffect(() => {
    intervalRef.current = setInterval(advance, 3500);
    return () => clearInterval(intervalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="anjo-page">
      {/* ── BACKGROUNDS ── */}
      <div className="anjo-backgrounds" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className="anjo-bg"
            style={{ background: s.bg, opacity: i === current ? 1 : 0 }}
          />
        ))}
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="anjo-container">

        {/* ── LEFT CONTENT ── */}
        <div className={`anjo-content ${animating ? 'content-exit' : 'content-enter'}`}>
          <div className="anjo-logo">
            <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="ANJO Traders" />
            <span>ANJO TRADERS</span>
          </div>
          <div className="anjo-category" style={{ color: slide.accent }}>
            <span className="anjo-category-dot" style={{ background: slide.accent }} />
            {slide.category}
          </div>
          <h1 className="anjo-heading">{slide.heading}</h1>
          <p className="anjo-sub">{slide.sub}</p>
          <div className="anjo-price" style={{ color: slide.accent }}>{slide.price}</div>
          <div className="anjo-cta-row">
            <Link to={slide.link} className="anjo-btn-primary" style={{ background: slide.accent }}>
              Explore More →
            </Link>
            <Link to="/contact" className="anjo-btn-secondary">
              Get a Quote
            </Link>
          </div>

          {/* Dot navigation */}
          <div className="anjo-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`anjo-dot ${i === current ? 'anjo-dot--active' : ''}`}
                style={i === current ? { background: slide.accent, boxShadow: `0 0 12px ${slide.accent}` } : {}}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT IMAGES ── */}
        <div className="anjo-slider-images">
          {SLIDES.map((s, i) => (
            <img
              key={s.id}
              src={`${process.env.PUBLIC_URL}${s.img}`}
              alt={s.heading}
              className={`anjo-slide-img anjo-slide-img--${getClass(i, current, total)}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      {/* ── SLIDE COUNTER ── */}
      <div className="anjo-counter">
        <span className="anjo-counter-cur" style={{ color: slide.accent }}>
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className="anjo-counter-sep" />
        <span className="anjo-counter-total">{String(total).padStart(2, '0')}</span>
      </div>


    </div>
  );
}
