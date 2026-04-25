import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import './AnjoSaltPage.css';

// ── SLIDE DATA ───────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    category: 'Industrial Salt',
    heading: 'High Purity Grade (99.9%)',
    sub: 'Engineered for precision industries demanding 99.9% purity with zero contamination.',
    price: 'Mineral Excellence',
    link: '/contact',
    img: '/anjo photos/WhatsApp Image 2026-04-24 at 3.10.34 PM.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #1e3a8a 0%, #0f172a 100%)', // Deep Ocean Blue
    accent: '#60a5fa', // Light Blue
  },
  {
    id: 1,
    category: 'Industrial Salt',
    heading: 'Industrial Bulk Supply',
    sub: 'Rigorous grain specification and reliable global bulk processing.',
    price: 'Global Supply',
    link: '/contact',
    img: '/anjo photos/WhatsApp Image 2026-04-24 at 3.10.34 PM (2).jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #164e63 0%, #083344 100%)', // Marine Cyan
    accent: '#22d3ee', // Cyan
  },
  {
    id: 2,
    category: 'Industrial Salt',
    heading: 'Chemical Processing',
    sub: 'Premium grade sodium chloride essential for chemical manufacturing and water treatment.',
    price: 'Industrial Essential',
    link: '/contact',
    img: '/anjo photos/WhatsApp Image 2026-04-24 at 4.54.06 PM.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #334155 0%, #0f172a 100%)', // Industrial Slate
    accent: '#94a3b8', // Silver/Slate
  },
  {
    id: 3,
    category: 'Table Salt',
    heading: 'Triple Refined Perfection',
    sub: 'Triple-refined perfection for premium culinary applications and consistent flavour.',
    price: 'Culinary Precision',
    link: '/contact',
    img: '/anjo photos/WhatsApp Image 2026-04-24 at 3.10.35 PM.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #0f766e 0%, #064e3b 100%)', // Crystal Teal
    accent: '#2dd4bf', // Light Teal
  },
  {
    id: 4,
    category: 'Table Salt',
    heading: 'Iodized & Mineral Enriched',
    sub: 'Delivering superior mineral enrichment and moisture-free flow.',
    price: 'Premium Quality',
    link: '/contact',
    img: '/anjo photos/WhatsApp Image 2026-04-24 at 3.10.35 PM (1).jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #701a75 0%, #4a044e 100%)', // Himalayan Purple/Pink
    accent: '#f0abfc', // Light Pink/Purple
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

export default function AnjoSaltPage() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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
    if (isPlaying) {
      intervalRef.current = setInterval(advance, 3500);
    }
    return () => clearInterval(intervalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  // Safe fallback to prevent crashes during hot-reloading when slides are removed
  const safeCurrent = current >= SLIDES.length ? 0 : current;
  const slide = SLIDES[safeCurrent];

  return (
    <div className="salt-slider-page">
      {/* ── BACKGROUNDS ── */}
      <div className="salt-slider-backgrounds" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className="salt-slider-bg"
            style={{ background: s.bg, opacity: i === current ? 1 : 0 }}
          />
        ))}
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="salt-slider-container">

        {/* ── LEFT CONTENT ── */}
        <div className={`salt-slider-content ${animating ? 'content-exit' : 'content-enter'}`}>
          <div className="salt-slider-logo">
            <img src="/favicon.png" alt="ANJO Traders" />
            <span>ANJO TRADERS</span>
          </div>
          <div className="salt-slider-category" style={{ color: slide.accent }}>
            <span className="salt-slider-category-dot" style={{ background: slide.accent }} />
            {slide.category}
          </div>
          <h1 className="salt-slider-heading">{slide.heading}</h1>
          <p className="salt-slider-sub">{slide.sub}</p>
          <div className="salt-slider-price" style={{ color: slide.accent }}>{slide.price}</div>

          {/* Dot navigation */}
          <div className="salt-slider-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`salt-slider-dot ${i === current ? 'salt-slider-dot--active' : ''}`}
                style={i === current ? { background: slide.accent, boxShadow: `0 0 12px ${slide.accent}` } : {}}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT IMAGES ── */}
        <div className="salt-slider-images-container">
          {SLIDES.map((s, i) => (
            <img
              key={s.id}
              src={s.img}
              alt={s.heading}
              className={`salt-slider-slide-img salt-slider-slide-img--${getClass(i, current, total)}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      {/* ── MODERN PLAY/PAUSE CONTROL ── */}
      <div className="salt-slider-controls-wrap">
        <button 
          className={`salt-slider-premium-toggle ${isPlaying ? 'is-playing' : 'is-paused'}`}
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause Slider" : "Play Slider"}
        >
          <div className="toggle-inner">
            {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} style={{ marginLeft: '2px' }} />}
          </div>
          <span className="toggle-text">{isPlaying ? 'PAUSE' : 'RESUME'}</span>
          <div className="toggle-glow" />
        </button>
      </div>
    </div>
  );
}
