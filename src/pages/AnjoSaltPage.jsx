import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import './AnjoSaltPage.css';
import saltHeroBg from '../assets/images/salt-manufacturing-unsplash.jpg';

// ── PREMIUM SALT IMAGERY ─────────────────────────────────────────
const IMAGES = {
  // Industrial Salt - Large scale, machinery, bulk crystals
  ind_hero:    'https://images.unsplash.com/photo-1545465005-950f83696238?q=85&w=1800&fit=crop', // Salt mine conveyor
  ind_purity:  'https://tiimg.tistatic.com/fp/1/008/591/a-grade-99-9-percent-purity-salty-taste-chemical-free-common-salt-341.jpg', // User provided purity image
  ind_bulk:    'https://skcsalt.com/wp-content/uploads/2020/02/blogpost.jpg', // User provided bulk supply image
  ind_chem:    'https://skcsalt.com/wp-content/uploads/2026/01/large-pile-ammonium-sulfate-inside-spacious-dimly-lit-chemical-plant-warehouse-scaled.jpg', // User provided chemical processing image

  // Table Salt - Culinary, fine, refined shakers
  tbl_hero:    'https://images.unsplash.com/photo-1615485906913-c39955740445?q=85&w=1800&fit=crop', // Elegant salt shaker
  tbl_refined: 'https://cpimg.tistatic.com/09294195/b/4/Triple-Refined-Oversize-Salt.jpg', // User provided refined salt image
  tbl_iodized: 'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-71034184/71034184.jpg', // User provided iodized salt image
  tbl_pack:    'https://5.imimg.com/data5/QL/HR/TX/ANDROID-100991569/img-20200209-wa0007-jpg-500x500.jpg', // User provided moisture-free salt image

  // Artisanal Salt - Traditional salinas, hand harvesting, natural ponds
  art_hero:    'https://images.unsplash.com/photo-1516104880566-f83193e43076?q=85&w=1800&fit=crop', // Traditional salt ponds (Salinas)
  art_harvest: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGv77c72y720-872WOfDUxzq5sp2o94pMQYg&s', // User provided hand harvesting image
  art_sun:     'https://image.made-in-china.com/365f3j00ZawcjLGIZWuB/High-Quality-Rich-in-Minerals-Refined-Seasoning-Natural-Pure-Dried-Vacuum-Salt-99-.webp', // User provided sun-dried salt image
  art_sea:     'https://i.etsystatic.com/10072517/r/il/e5e15c/1365343855/il_fullxfull.1365343855_poch.jpg', // User provided sea crystals image

  // Logistics - Ports, containers, global export
  log_hero:    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=85&w=1800&fit=crop', // Shipping containers
  log_port:    'https://www.discountsaltpool.com/assets/images/Adding%20Salt%20to%20your%20Swimming%20Pool.png', // User provided distribution image
  log_pack:    'https://tiimg.tistatic.com/fp/1/006/288/industrial-salt-packaging-type-bag-50g-366.jpg', // User provided packaging image
  log_global:  'https://skcsalt.com/wp-content/uploads/2023/05/hand-holding-snow-1.jpg', // User provided global export image
};

// ── SECTIONS DATA ─────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'industrial',
    num: '01',
    title: 'Industrial Salt',
    subtitle: 'Mineral Excellence',
    desc: 'Engineered for precision industries demanding 99.9% purity with rigorous grain specification and zero-contamination processing.',
    accent: '#7dd3fc',
    accentRgb: '125, 211, 252',
    defaultImg: IMAGES.ind_hero,
    items: [
      { label: 'High Purity Grade (99.9%)',    img: IMAGES.ind_purity, icon: '◈' },
      { label: 'Industrial Bulk Supply',        img: IMAGES.ind_bulk,   icon: '⬡' },
      { label: 'Chemical Processing Essential', img: IMAGES.ind_chem,   icon: '✦' },
    ],
  },
  {
    id: 'table',
    num: '02',
    title: 'Table Salt',
    subtitle: 'Culinary Precision',
    desc: 'Triple-refined perfection for premium culinary applications, delivering consistent flavour and superior mineral enrichment.',
    accent: '#e2e8f0',
    accentRgb: '226, 232, 240',
    defaultImg: IMAGES.tbl_hero,
    reverse: true,
    items: [
      { label: 'Triple Refined Perfection',  img: IMAGES.tbl_refined, icon: '◈' },
      { label: 'Iodized & Mineral Enriched', img: IMAGES.tbl_iodized, icon: '⬡' },
      { label: 'Moisture-Free Flow',         img: IMAGES.tbl_pack,    icon: '✦' },
    ],
  },
  {
    id: 'artisanal',
    num: '03',
    title: 'Artisanal Salt',
    subtitle: 'Organic Heritage',
    desc: 'Hand-harvested by coastal artisans using centuries-old traditions — preserving the full mineral richness of sea origins.',
    accent: '#fbbf24',
    accentRgb: '251, 191, 36',
    defaultImg: IMAGES.art_hero,
    items: [
      { label: 'Hand-Harvested Tradition',  img: IMAGES.art_harvest, icon: '◈' },
      { label: 'Natural Sun-Dried Purity',  img: IMAGES.art_sun,     icon: '⬡' },
      { label: 'Mineral-Rich Sea Crystals', img: IMAGES.art_sea,     icon: '✦' },
    ],
  },
  {
    id: 'logistics',
    num: '04',
    title: 'Supply Chain',
    subtitle: 'Global Logistics',
    desc: 'ISO-certified export operations serving 40+ countries with customised packaging and 24/7 distribution excellence.',
    accent: '#94a3b8',
    accentRgb: '148, 163, 184',
    defaultImg: IMAGES.log_hero,
    reverse: true,
    items: [
      { label: '24/7 Distribution Network',   img: IMAGES.log_port,   icon: '◈' },
      { label: 'Customised Packaging Units',  img: IMAGES.log_pack,   icon: '⬡' },
      { label: 'Global Export Standards',     img: IMAGES.log_global, icon: '✦' },
    ],
  },
];

const ALL_IDS = SECTIONS.map(s => s.id);

// ── GALLERY SECTION ───────────────────────────────────────────────
function GallerySection({ section, isActive, isPresenting, onNext }) {
  const { id, num, title, subtitle, desc, accent, accentRgb, defaultImg, items, reverse } = section;
  const [activeIdx, setActiveIdx]   = useState(-1);
  const [displayImg, setDisplayImg] = useState(defaultImg);
  const [imgFading, setImgFading]   = useState(false);
  const timerRef  = useRef(null);
  const doneRef   = useRef(false);
  const sectionRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('reveal-active'); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Reset when section becomes inactive
  useEffect(() => {
    if (!isActive) { setActiveIdx(-1); doneRef.current = false; }
  }, [isActive]);

  // Auto-advance timer
  useEffect(() => {
    if (!isActive || !isPresenting || doneRef.current) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (activeIdx === -1) { setActiveIdx(0); return; }
    timerRef.current = setTimeout(() => {
      const next = activeIdx + 1;
      if (next >= items.length) { doneRef.current = true; onNext(id); }
      else setActiveIdx(next);
    }, 4500);
    return () => clearTimeout(timerRef.current);
  }, [isActive, isPresenting, activeIdx, items.length, id, onNext]);

  // Crossfade image transition
  useEffect(() => {
    const target = activeIdx === -1 ? defaultImg : items[activeIdx]?.img || defaultImg;
    if (target === displayImg) return;
    setImgFading(true);
    const t = setTimeout(() => { setDisplayImg(target); setImgFading(false); }, 380);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`salt-section ${reverse ? 'salt-section--rev' : ''}`}
      style={{ '--accent': accent, '--accent-rgb': accentRgb }}
    >
      {/* ── IMAGE PANEL ── */}
      <div className="salt-img-panel">
        <div className="img-wrap">
          <img
            src={displayImg}
            alt={title}
            className={`salt-main-img ${imgFading ? 'is-fading' : 'is-visible'}`}
          />
          <div className="img-color-overlay" />
          <div className="img-aura-glow" />
          <div className="crystal-corner tl" />
          <div className="crystal-corner br" />
        </div>
        <div className="img-spine" />
        <div className="img-badge">
          <span className="badge-tag">COLLECTION</span>
          <span className="badge-num">{num}</span>
          <span className="badge-title">{title}</span>
        </div>
      </div>

      {/* ── CONTENT PANEL ── */}
      <div className="salt-content-panel">
        <div className="content-wm">{num}</div>
        <div className="content-body">
          <header className="content-hd">
            <span className="content-eyebrow">
              <span className="eyebrow-bar" />
              {subtitle}
            </span>
            <h2 className="content-title">{title}</h2>
            <p className="content-desc">{desc}</p>
          </header>

          <ul className="items-list">
            {items.map((item, idx) => (
              <li
                key={item.label}
                className={`salt-item ${activeIdx === idx ? 'item--active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <span className="si-icon">{item.icon}</span>
                <span className="si-num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="si-label">{item.label}</span>
                {activeIdx === idx && isPresenting && (
                  <div className="si-progress" key={`p-${id}-${idx}`} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────
export default function AnjoSaltPage() {
  const containerRef     = useRef(null);
  const [presenting, setPresenting]   = useState(true);
  const [activeId, setActiveId]       = useState(SECTIONS[0].id);
  const [heroReady, setHeroReady]     = useState(false);

  // Stable random particle data
  const particles = useMemo(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      style: {
        left:              `${(i * 4.167 + (i % 3) * 11) % 100}%`,
        top:               `${(i * 7.3 + (i % 5) * 9) % 100}%`,
        width:             `${2 + (i % 4)}px`,
        height:            `${2 + (i % 4)}px`,
        animationDelay:    `${(i * 0.37) % 8}s`,
        animationDuration: `${7 + (i % 6)}s`,
        opacity:           0.08 + (i % 5) * 0.07,
      },
    })),
  []);

  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 120); return () => clearTimeout(t); }, []);

  // Scroll-snap active section tracker
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) setActiveId(e.target.id);
      }),
      { threshold: 0.5, root: c }
    );
    c.querySelectorAll('.salt-section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goNext = useCallback((currentId) => {
    if (!presenting) return;
    const nextId = ALL_IDS[(ALL_IDS.indexOf(currentId) + 1) % ALL_IDS.length];
    const el = containerRef.current?.querySelector(`#${nextId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [presenting]);

  const scrollTo = (id) => {
    const el = containerRef.current?.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="salt-page" ref={containerRef}>

      {/* ── HERO ── */}
      <div className={`salt-hero ${heroReady ? 'hero--ready' : ''}`} id="home">
        <div className="hero-bg">
          <img src={saltHeroBg} alt="Salt Landscape" className="hero-bg-img" />
          <div className="hero-bg-veil" />
        </div>

        {/* Crystal Particles */}
        <div className="particles-wrap" aria-hidden="true">
          {particles.map(p => (
            <div key={p.id} className="crystal-dot" style={p.style} />
          ))}
        </div>

        <div className="hero-center">
          {/* Eyebrow removed */}

          <h1 className="hero-h1">
            <span className="h1-line">Crystalline</span>
            <span className="h1-line h1-accent">Purity</span>
          </h1>

          <p className="hero-sub">
            Premium grade salt solutions engineered for industrial precision,<br />
            culinary excellence and global supply chains.
          </p>

          {/* Stats removed */}

          <div className="hero-cta-row">
            {SECTIONS.map(s => (
              <button key={s.id} className="hero-pill" onClick={() => scrollTo(s.id)}
                style={{ '--accent': s.accent }}>
                <span>{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Explore hint removed */}
      </div>

      {/* ── HUD ── */}
      <div className="salt-hud">
        <button id="presenting-toggle" className="hud-btn" onClick={() => setPresenting(p => !p)}>
          <span className={`hud-dot ${presenting ? 'hud-dot--on' : ''}`} />
          {presenting ? 'PRESENTING' : 'MANUAL VIEW'}
        </button>
      </div>

      {/* ── SECTION DOTS ── */}
      <nav className="dots-nav" aria-label="Section navigation">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            className={`dot-btn ${activeId === s.id ? 'dot-btn--on' : ''}`}
            style={{ '--accent': s.accent }}
            onClick={() => scrollTo(s.id)}
            title={s.title}
            aria-label={`Jump to ${s.title}`}
          />
        ))}
      </nav>

      {/* ── SECTIONS ── */}
      {SECTIONS.map(s => (
        <GallerySection
          key={s.id}
          section={s}
          isActive={activeId === s.id}
          isPresenting={presenting}
          onNext={goNext}
        />
      ))}

      <footer className="salt-footer">
        <p className="footer-text">
          <span className="footer-brand">ANJO</span> · Mineral Excellence · Est. 2020
        </p>
      </footer>
    </div>
  );
}
