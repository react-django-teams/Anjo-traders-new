import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './AnjoSaltPage.css';

// ── IMAGES & ASSETS ─────────────────────────────────────────────
import saltHeroImg from '../assets/images/salt_hero_landscape.png';
import saltMfgImg from '../assets/images/salt-manufacturing-unsplash.jpg';

// ── DATA ───────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'industrial',
    num: '01',
    title: 'Industrial Salt',
    label: 'High Purity Raw Material',
    defaultImg: saltMfgImg,
    accentR: 251, accentG: 191, accentB: 36, // Amber-400
    items: [
      'High Purity Grade (99.9%)',
      'Industrial Bulk Supply',
      'Chemical Processing Essential',
      'Water Softening Solutions'
    ],
  },
  {
    id: 'table',
    num: '02',
    title: 'Table Salt',
    label: 'Iodized Culinary Grade',
    defaultImg: saltHeroImg,
    accentR: 249, accentG: 115, accentB: 22, // Orange-500
    items: [
      'Triple Refined Perfection',
      'Iodized & Mineral Enriched',
      'Moisture-Free Flow',
      'Premium Table Presentation'
    ],
    reverse: true,
  },
  {
    id: 'artisanal',
    num: '03',
    title: 'Artisanal Salt',
    label: 'Traditionally Harvested',
    defaultImg: saltMfgImg,
    accentR: 234, accentG: 179, accentB: 8, // Yellow-500
    items: [
      'Hand-Harvested Tradition',
      'Natural Sun-Dried Purity',
      'Mineral-Rich Sea Crystals',
      'Authentic Coastal Taste'
    ],
  },
  {
    id: 'logistics',
    num: '04',
    title: 'Global Supply',
    label: 'End-to-End Excellence',
    defaultImg: saltHeroImg,
    accentR: 251, accentG: 191, accentB: 36,
    items: [
      '24/7 Distribution Network',
      'Customized Packaging Units',
      'Global Export Standards',
      'ISO Certified Quality'
    ],
    reverse: true,
  },
];

const ALL_IDS = ['hero', ...SECTIONS.map(s => s.id), 'cta'];

// ── COMPONENTS ─────────────────────────────────────────────────

const CrystalBatch = () => {
  const crystals = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 2 + Math.random() * 5,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.4,
  }));

  return (
    <div className="salt-crystal-overlay">
      {crystals.map(c => (
        <motion.div
          key={c.id}
          className="absolute bg-white rounded-full blur-[1px]"
          style={{
            left: `${c.x}%`,
            top: '-5%',
            width: c.size,
            height: c.size,
            opacity: c.opacity,
            boxShadow: `0 0 10px rgba(255,255,255,0.8)`
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [`${c.x}%`, `${c.x + (Math.random() * 10 - 5)}%`],
            rotate: [0, 360]
          }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

function GallerySection({ id, num, title, label, defaultImg, accentR, accentG, accentB, items, reverse, isActive, isPresenting, onNext }) {
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
    <section id={id} ref={sectionRef} className={`salt-gs${reverse ? ' salt-gs--reverse' : ''}`} style={cssVars}>
      {/* Image Column */}
      <div className="salt-gs-img-col">
        <div className="salt-gs-img-wrap">
          <img src={defaultImg} alt={title} className="salt-gs-img" />
          <div className="salt-gs-img-overlay" />
        </div>
        <div className="salt-gs-accent-bar" />
        <div className="salt-gs-img-badge">
          <span className="salt-gs-img-badge-num">Grade Collection {num}</span>
          <span className="salt-gs-img-badge-name">{title}</span>
        </div>
      </div>

      {/* Content Column */}
      <div className="salt-gs-content-col">
        <div className="salt-gs-bg-number">{num}</div>
        <div className="salt-gs-eyebrow">{label}</div>
        <h2 className="salt-gs-title">{title}</h2>
        <ul className="salt-gs-list">
          {items.map((item, idx) => (
            <li
              key={item}
              className={`salt-gs-item${activeIdx === idx ? ' is-active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <span className="salt-gs-item-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="salt-gs-item-name">{item}</span>
              <span className="salt-gs-item-dot" />
              {activeIdx === idx && isPresenting && (
                <div className="salt-gs-item-progress" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────

export default function AnjoSaltPage() {
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
    <div className="salt-page" ref={containerRef}>
      <CrystalBatch />

      {/* Presentation Toggle */}
      <button className="salt-toggle" onClick={() => setIsPresenting(p => !p)}>
        <div className={`salt-dot ${isPresenting ? 'playing' : ''}`} />
        {isPresenting ? 'Cinematic View' : 'Manual View'}
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
      <section id="cta" className="salt-footer">
        <div className="salt-footer-bg" style={{ backgroundImage: `url(${saltHeroImg})` }} />
        <div className="salt-footer-inner">
          <div className="salt-footer-eyebrow">Ready to Source?</div>
          <h2 className="salt-footer-title">Secure Your<br />Bulk Supply</h2>
        </div>
      </section>
    </div>
  );
}
