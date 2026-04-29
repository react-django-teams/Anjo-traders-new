import React, { useEffect, useRef, useState } from 'react';

import { FaPlay, FaPause } from 'react-icons/fa';
import './ContainerCommercializationPage.css';

// ── SLIDE DATA ───────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    category: 'Leasing & Finance',
    heading: 'Container Leasing',
    sub: 'Flexible leasing options built around your operational needs and budget.',
    price: 'Lease Smart. Grow Strong.',
    link: '/contact',
    img: '/images/container-leasing.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #4c1d95 0%, #2e1065 100%)',
    accent: '#8b5cf6',
  },
  {
    id: 1,
    category: 'Global Commerce',
    heading: 'Buying & Selling',
    sub: 'Smart inventory decisions. Stronger business results. Global container commerce.',
    price: 'Container Solutions',
    link: '/contact',
    img: '/images/buying-selling-poster.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #164e63 0%, #083344 100%)',
    accent: '#06b6d4',
  },
  {
    id: 2,
    category: 'Storage Solutions',
    heading: 'Storage & Rental',
    sub: 'Secure, weatherproof heavy-duty steel containers providing maximum protection for your goods.',
    price: 'Industrial Storage',
    link: '/contact',
    img: '/images/storage-rental.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #7c2d12 0%, #431407 100%)',
    accent: '#f97316',
  },
  {
    id: 3,
    category: 'Customization',
    heading: 'Container Fabrication & Modification',
    sub: 'Tailor-made container modifications and engineering to meet specialized industrial requirements.',
    price: 'Engineered Solutions',
    link: '/contact',
    img: '/images/container-fabrication.jpeg',
    bg: 'radial-gradient(50% 50% at 50% 50%, #064e3b 0%, #022c22 100%)',
    accent: '#10b981',
  },
];

function getClass(index, active, total) {
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;
  if (index === active) return 'active';
  if (index === prev) return 'previous';
  if (index === next) return 'next';
  return 'inactive';
}

export default function ContainerCommercializationPage() {
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

      {/* ── MODERN PLAY/PAUSE CONTROL ── */}
      <div className="anjo-controls-wrap">
        <button 
          className={`anjo-premium-toggle ${isPlaying ? 'is-playing' : 'is-paused'}`}
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
