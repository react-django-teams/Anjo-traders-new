import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContainerCommercializationPage.css';

// ── IMAGES & ASSETS ─────────────────────────────────────────────
import heroImg from '../assets/images/container_hero_bg.png';
import storageImg from '../assets/images/container_storage_yard.png';
import modifyImg from '../assets/images/container_modification.png';
import globalImg from '../assets/images/container_global_trade.png';

// ── DATA ───────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'commerce',
    num: '01',
    title: 'Global Commerce',
    label: 'Container Commercialization',
    defaultImg: globalImg,
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a45?q=80&w=1200', // Inventory
      'https://images.unsplash.com/photo-1494412519320-ce3dcfa593f6?q=80&w=1200', // Leasing
      'https://images.unsplash.com/photo-1628102422220-2fb5a3bb4132?q=80&w=1200', // Quality
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200'  // Logistics
    ],
    accentR: 6, accentG: 182, accentB: 212, // Cyan-400
    items: [
      'Inventory Buying & Selling',
      'Flexible Leasing Solutions',
      'Quality Certified Units',
      'Global Logistics Network'
    ],
  },
  {
    id: 'storage',
    num: '02',
    title: 'Storage & Yard',
    label: 'Industrial Solutions',
    defaultImg: storageImg,
    accentR: 249, accentG: 115, accentB: 22, // Orange-500
    items: [
      'Secure Weatherproof Units',
      'Short/Long Term Rental',
      'On-Site Container Laydown',
      'Immediate Site Delivery'
    ],
    reverse: true,
  },
  {
    id: 'fabrication',
    num: '03',
    title: 'Modification',
    label: 'Creative Architecture',
    defaultImg: modifyImg,
    accentR: 139, accentG: 92, accentB: 246, // Purple-500
    items: [
      'Pop-up Retail & Cafes',
      'Mobile Offices & Labs',
      'Modular Living Spaces',
      'Bespoke Steel Engineering'
    ],
  },
  {
    id: 'infrastructure',
    num: '04',
    title: 'Fleet Logistics',
    label: 'Maritime Excellence',
    defaultImg: heroImg,
    accentR: 6, accentG: 182, accentB: 212,
    items: [
      '24/7 Yard Operations',
      'Intermodal Transport',
      'Vessel Load Management',
      'Depot Handling Services'
    ],
    reverse: true,
  },
];

const ALL_IDS = [...SECTIONS.map(s => s.id), 'cta'];

// ── COMPONENTS ─────────────────────────────────────────────────

const SparkBatch = () => {
  const sparks = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 8,
    opacity: 0.15 + Math.random() * 0.35,
    color: ['#06b6d4', '#8b5cf6', '#f97316'][i % 3]
  }));

  return (
    <div className="absolute inset-0 z-[100] pointer-events-none overflow-hidden">
      {sparks.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            background: s.color,
            boxShadow: `0 0 12px ${s.color}`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 40, 0],
            opacity: [s.opacity, s.opacity * 2, s.opacity]
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

function GallerySection({ id, num, title, label, defaultImg, images, accentR, accentG, accentB, items, reverse, isActive, isPresenting, onNext }) {
  const [activeIdx, setActiveIdx] = useState(-1);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.classList.add('is-visible');
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) {
      setActiveIdx(-1);
      doneRef.current = false;
      return;
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive || !isPresenting || doneRef.current) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    if (activeIdx === -1) {
      setActiveIdx(0);
      return;
    }

    timerRef.current = setTimeout(() => {
      const next = activeIdx + 1;
      if (next >= items.length) {
        doneRef.current = true;
        onNext(id);
      } else {
        setActiveIdx(next);
      }
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, [isActive, isPresenting, activeIdx, items.length, id, onNext]);

  const cssVars = {
    '--accent-r': accentR,
    '--accent-g': accentG,
    '--accent-b': accentB,
  };

  return (
    <section id={id} ref={sectionRef} className={`cc-gs${reverse ? ' cc-gs--reverse' : ''}`} style={cssVars}>
      {/* Image Column */}
      <div className="cc-gs-img-col">
        <div className="cc-gs-img-wrap">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIdx >= 0 && images ? (images[activeIdx] || defaultImg) : defaultImg}
              src={activeIdx >= 0 && images ? (images[activeIdx] || defaultImg) : defaultImg}
              alt={title}
              className="cc-gs-img"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </AnimatePresence>
          <div className="cc-gs-img-overlay" />
        </div>
        <div className="cc-gs-accent-bar" />
        <div className="cc-gs-img-badge">
          <span className="cc-gs-img-badge-num">Infrastructure {num}</span>
          <span className="cc-gs-img-badge-name">{title}</span>
        </div>
      </div>

      {/* Content Column */}
      <div className="cc-gs-content-col">
        <div className="cc-gs-bg-number">{num}</div>
        <div className="cc-gs-eyebrow">{label}</div>
        <h2 className="cc-gs-title">{title}</h2>
        <ul className="cc-gs-list">
          {items.map((item, idx) => (
            <li
              key={item}
              className={`cc-gs-item${activeIdx === idx ? ' is-active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <span className="cc-gs-item-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="cc-gs-item-name">{item}</span>
              <span className="cc-gs-item-dot" />
              {activeIdx === idx && isPresenting && (
                <div className="cc-gs-item-progress" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────

export default function ContainerCommercializationPage() {
  const containerRef = useRef(null);
  const [isPresenting, setIsPresenting] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState(SECTIONS[0].id);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) {
          setActiveSectionId(e.target.id);
        }
      });
    }, { threshold: 0.5, root: container });
    container.querySelectorAll('section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goNext = useCallback((currentId) => {
    if (!isPresenting) return;
    const nextIdx = (ALL_IDS.indexOf(currentId) + 1) % ALL_IDS.length;
    const nextId = ALL_IDS[nextIdx];
    const el = containerRef.current?.querySelector(`#${nextId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [isPresenting]);

  useEffect(() => {
    if (!isPresenting) return;
    if (activeSectionId === 'cta') {
      const t = setTimeout(() => goNext(activeSectionId), 5000);
      return () => clearTimeout(t);
    }
  }, [activeSectionId, isPresenting, goNext]);

  return (
    <div className="cc-page" ref={containerRef}>
      <SparkBatch />

      {/* Presentation Toggle */}
      <button className="cc-toggle" onClick={() => setIsPresenting(p => !p)}>
        <div className={`cc-dot ${isPresenting ? 'playing' : ''}`} />
        {isPresenting ? 'Cinematic Flow' : 'Manual View'}
      </button>

      {/* ── SECTIONS ── */}
      {SECTIONS.map(s => (
        <GallerySection
          key={s.id}
          isActive={activeSectionId === s.id}
          isPresenting={isPresenting}
          onNext={goNext}
          {...s}
        />
      ))}

      {/* ── CTA / FOOTER ── */}
      <section id="cta" className="cc-footer">
        <div className="cc-footer-bg" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="cc-footer-inner">
          <div className="cc-footer-eyebrow">Scale Your Business</div>
          <h2 className="cc-footer-title">Build Your<br />Vision Today</h2>
          <Link to="/contact" className="cc-footer-btn">
            Get A Solution <Zap size={18} fill="currentColor" />
          </Link>
        </div>
      </section>
    </div>
  );
}
