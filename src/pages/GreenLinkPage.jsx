import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaExternalLinkAlt } from 'react-icons/fa';

import './GreenLinkPage.css';

// ── SLIDE DATA ───────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    category: 'Alternative Living',
    heading: 'Alternative Home Used Container',
    sub: 'High-quality pre-owned containers ideal for alternative housing and modular home projects.',
    price: 'Get Best Quote',
    link: '/contact',
    img: '/anjo photos/container_home.png',
    bg: 'radial-gradient(50% 50% at 50% 50%, #064e3b 0%, #022c22 100%)',
    accent: '#10b981',
  },
  {
    id: 1,
    category: 'Container Solutions',
    heading: 'Fabricated Used Containers',
    sub: 'Custom-fabricated containers modified for offices, clinics, and specialized workspaces.',
    price: 'Get Best Quote',
    link: '/contact',
    img: '/anjo photos/fabricated_container.png',
    bg: 'radial-gradient(50% 50% at 50% 50%, #164e63 0%, #083344 100%)',
    accent: '#06b6d4',
  },
  {
    id: 2,
    category: 'Storage Solutions',
    heading: 'Storage Used Containers',
    sub: 'Secure, weatherproof storage units for industrial, commercial, and personal use.',
    price: 'Get Best Quote',
    link: '/contact',
    img: '/anjo photos/storage_container.png',
    bg: 'radial-gradient(50% 50% at 50% 50%, #1e3a8a 0%, #0f172a 100%)',
    accent: '#3b82f6',
  },
  {
    id: 3,
    category: 'Global Trade',
    heading: 'Used Containers',
    sub: 'Standard used shipping containers available for immediate purchase and global shipping.',
    price: 'Get Best Quote',
    link: '/contact',
    img: '/anjo photos/used_containers.png',
    bg: 'radial-gradient(50% 50% at 50% 50%, #4c1d95 0%, #2e1065 100%)',
    accent: '#8b5cf6',
  },
  {
    id: 4,
    category: 'Modified Units',
    heading: 'Used Shipping Containers Modified',
    sub: 'Professionally modified shipping containers with custom doors, windows, and insulation.',
    price: 'Get Best Quote',
    link: '/contact',
    img: '/anjo photos/modified_shipping_container.png',
    bg: 'radial-gradient(50% 50% at 50% 50%, #7c2d12 0%, #431407 100%)',
    accent: '#f97316',
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

export default function GreenLinkPage() {
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
    <div className="green-slider-page">
      {/* ── BACKGROUNDS ── */}
      <div className="green-slider-backgrounds" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className="green-slider-bg"
            style={{ background: s.bg, opacity: i === current ? 1 : 0 }}
          />
        ))}
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="green-slider-container">

        {/* ── LEFT CONTENT ── */}
        <div className={`green-slider-content ${animating ? 'content-exit' : 'content-enter'}`}>
          <div className="green-slider-category" style={{ color: slide.accent }}>
            <span className="green-slider-category-dot" style={{ background: slide.accent }} />
            {slide.category}
          </div>
          <h1 className="green-slider-heading">{slide.heading}</h1>
          <p className="green-slider-sub">{slide.sub}</p>

          {/* CTA Button */}
          <a 
            href="https://www.indiamart.com/green-link-maritime-agencies/?srsltid=AfmBOorMaCZAhtYHcWUqMSCPfzv-mdmhfHB5qlfAMAgstk-cxCMAA9Or"
            target="_blank"
            rel="noopener noreferrer"
            className="green-slider-cta-premium"
            style={{ '--accent': slide.accent }}
          >
            <div className="cta-content">
              <span className="cta-main-text">GET BEST QUOTE</span>
              <span className="cta-sub-text">ON INDIAMART</span>
            </div>
            <div className="cta-icon-box">
              <FaExternalLinkAlt size={10} />
            </div>
          </a>


          {/* Dot navigation */}
          <div className="green-slider-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`green-slider-dot ${i === current ? 'green-slider-dot--active' : ''}`}
                style={i === current ? { '--accent': slide.accent } : {}}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT IMAGES ── */}
        <div className="green-slider-images-container">
          {SLIDES.map((s, i) => (
            <img
              key={s.id}
              src={s.img}
              alt={s.heading}
              className={`green-slider-slide-img green-slider-slide-img--${getClass(i, current, total)}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>


      {/* ── MODERN PLAY/PAUSE CONTROL ── */}
      <div className="green-slider-controls-wrap">
        <button 
          className={`green-slider-premium-toggle ${isPlaying ? 'is-playing' : 'is-paused'}`}
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
