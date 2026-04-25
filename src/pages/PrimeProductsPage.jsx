import React, { useEffect, useRef, useState, useCallback } from 'react';
import './PrimeProductsPage.css';

// ── IMAGES ─────────────────────────────────────────────────────
// Vegetables
import potatoImg      from '../assets/images/whatsapp-image-2025-09-26-at-10.26.36-pm.jpeg';
import bigOnionImg    from '../assets/images/whatsapp-image-2025-09-26-at-10.27.41-pm.jpeg';
import shallotsImg    from '../assets/images/whatsapp-image-2025-09-26-at-10.28.34-pm.jpeg';
import coconutImg     from '../assets/images/whatsapp-image-2025-09-26-at-10.31.49-pm.jpeg';
import garlicImg      from '../assets/images/whatsapp-image-2025-09-26-at-10.59.34-pm.jpeg';
import chilliesImg    from '../assets/images/whatsapp-image-2025-09-26-at-10.59.15-pm.jpeg';
import gingerImg      from '../assets/images/whatsapp-image-2025-09-26-at-10.50.35-pm.jpeg';
// Fruits
import mangoImg       from '../assets/images/whatsapp-image-2025-09-26-at-10.59.04-pm.jpeg';
import grapesImg      from '../assets/images/whatsapp-image-2025-09-26-at-11.01.37-pm.jpeg';
import orangeImg      from '../assets/images/whatsapp-image-2025-09-26-at-11.04.10-pm.jpeg';
import pomegranateImg from '../assets/images/whatsapp-image-2025-09-26-at-11.06.15-pm.jpeg';
import appleImg       from '../assets/images/whatsapp-image-2025-09-26-at-11.08.02-pm.jpeg';
import bananaImg      from '../assets/images/whatsapp-image-2025-09-26-at-11.09.56-pm.jpeg';
import guavaImg       from '../assets/images/whatsapp-image-2025-09-26-at-11.12.22-pm.jpeg';
// Pulses
import moongDalImg    from '../assets/images/whatsapp-image-2025-09-26-at-11.17.50-pm.jpeg';
import channaImg      from '../assets/images/whatsapp-image-2025-09-26-at-11.16.48-pm.jpeg';
import greenGramImg   from '../assets/images/whatsapp-image-2025-09-27-at-1.20.19-am.jpeg';
import uradDalImg     from '../assets/images/whatsapp-image-2025-09-27-at-1.20.20-am.jpeg';
import masoorDalImg   from '../assets/images/whatsapp-image-2025-09-27-at-1.20.20-am-1.jpeg';
import horseGramImg   from '../assets/images/whatsapp-image-2025-09-27-at-1.20.21-am.jpeg';
// Cereals
import maizeCornImg   from '../assets/images/whatsapp-image-2025-09-27-at-1.20.22-am.jpeg';
import riceImg        from '../assets/images/whatsapp-image-2025-09-27-at-2.58.52-am.jpeg';
import wheatImg       from '../assets/images/whatsapp-image-2025-09-27-at-3.21.13-am.jpeg';
// Merchandise
import sugarImg       from '../assets/images/whatsapp-image-2025-09-27-at-3.21.15-am.jpeg';
import vegOilImg      from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am.jpeg';
import dryFishImg     from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am-1.jpeg';
import saltImg        from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am-3.jpeg';
import groceryImg     from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am-4.jpeg';
import machImg        from '../assets/images/industrial_machinery.png';

// ── IMAGE MAP ──────────────────────────────────────────────────
const IMG = {
  'Big Onion':             bigOnionImg,
  'Potato':                potatoImg,
  'Shallots (Red Onion)':  shallotsImg,
  'Coconut':               coconutImg,
  'Garlic':                garlicImg,
  'Chillies (Dry/Green)':  chilliesImg,
  'Ginger & Others':       gingerImg,
  'Mango':                 mangoImg,
  'Grapes':                grapesImg,
  'Orange':                orangeImg,
  'Pomegranate':           pomegranateImg,
  'Apple':                 appleImg,
  'Banana':                bananaImg,
  'Guava':                 guavaImg,
  'Moong Dal':             moongDalImg,
  'Chick Peas / Channa':   channaImg,
  'Green Gram':            greenGramImg,
  'Urad Dal':              uradDalImg,
  'Masoor Dal':            masoorDalImg,
  'Horse Gram':            horseGramImg,
  'Maize / Corn':          maizeCornImg,
  'Rice':                  riceImg,
  'Wheat (Maida / Sooji)': wheatImg,
  'Vegetable Oil':         vegOilImg,
  'Dry Fish':              dryFishImg,
  'Salt':                  saltImg,
  'Grocery':               groceryImg,
  'Sugar':                 sugarImg,
  'Machineries & Equipments': machImg,
};

// ── DATA ───────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'vegetables',
    num: '01',
    title: 'Vegetables',
    label: 'Fresh Export',
    defaultImg: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c12e8c?w=1200',
    accentR: 0, accentG: 138, accentB: 69,   // green
    items: ['Big Onion','Potato','Shallots (Red Onion)','Coconut','Garlic','Chillies (Dry/Green)','Ginger & Others'],
  },
  {
    id: 'fruits',
    num: '02',
    title: 'Fruits',
    label: 'Premium Selection',
    defaultImg: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200',
    accentR: 204, accentG: 33, accentB: 39,  // red
    items: ['Mango','Grapes','Orange','Pomegranate','Apple','Banana','Guava'],
    reverse: true,
  },
  {
    id: 'pulses',
    num: '03',
    title: 'Pulses',
    label: 'Wholesome Goodness',
    defaultImg: 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?w=1200',
    accentR: 0, accentG: 138, accentB: 69,
    items: ['Moong Dal','Chick Peas / Channa','Green Gram','Urad Dal','Masoor Dal','Horse Gram'],
  },
  {
    id: 'cereals',
    num: '04',
    title: 'Cereals',
    label: 'Grain Exports',
    defaultImg: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200',
    accentR: 202, accentG: 138, accentB: 4,  // gold
    items: ['Maize / Corn','Rice','Wheat (Maida / Sooji)'],
    reverse: true,
  },
  {
    id: 'merchandise',
    num: '05',
    title: 'Merchandise',
    label: 'Global Commodities',
    defaultImg: 'https://images.unsplash.com/photo-1628102422220-2fb5a3bb4132?w=1200',
    accentR: 204, accentG: 33, accentB: 39,
    items: ['Vegetable Oil','Dry Fish','Salt','Grocery','Sugar','Machineries & Equipments'],
  },
];

const ALL_IDS = SECTIONS.map(s => s.id);

// ── GALLERY SECTION COMPONENT ──────────────────────────────────
function GallerySection({ id, num, title, label, defaultImg, accentR, accentG, accentB, items, reverse, isActive, isPresenting, onNext }) {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [displayImg, setDisplayImg] = useState(defaultImg);
  const timerRef = useRef(null);
  const doneRef  = useRef(false);
  const sectionRef = useRef(null);

  // Intersection observer for .is-visible class (enter animation)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-visible');
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Reset when leaving section
  useEffect(() => {
    if (!isActive) {
      setActiveIdx(-1);
      doneRef.current = false;
    }
  }, [isActive]);

  // Auto-cycle through items
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

  // Update displayed image when active item changes
  useEffect(() => {
    if (activeIdx === -1) {
      setDisplayImg(defaultImg);
    } else {
      const mapped = IMG[items[activeIdx]];
      if (mapped) setDisplayImg(mapped);
    }
  }, [activeIdx, items, defaultImg]);

  const cssVars = {
    '--accent-r': accentR,
    '--accent-g': accentG,
    '--accent-b': accentB,
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`gs${reverse ? ' gs--reverse' : ''}`}
      style={cssVars}
    >
      {/* ── IMAGE COLUMN ─── */}
      <div className="gs-img-col">
        <div className="gs-img-wrap">
          <img
            src={displayImg}
            alt={title}
            className="gs-img"
            key={`${id}-${activeIdx}`}
          />
          <div className="gs-img-overlay" />
        </div>
        <div className="gs-accent-bar" />
        <div className="gs-img-badge">
          <span className="gs-img-badge-num">COLLECTION {num}</span>
          <span className="gs-img-badge-name">{title}</span>
        </div>
      </div>

      {/* ── CONTENT COLUMN ─── */}
      <div className="gs-content-col">
        <div className="gs-bg-number">{num}</div>
        <div className="gs-eyebrow">{label}</div>
        <h2 className="gs-title">{title}</h2>
        <ul className="gs-list">
          {items.map((item, idx) => (
            <li
              key={item}
              className={`gs-item${activeIdx === idx ? ' is-active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <span className="gs-item-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="gs-item-name">{item}</span>
              <span className="gs-item-dot" />
              {activeIdx === idx && isPresenting && (
                <div className="gs-item-progress" key={`prog-${id}-${idx}`} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── PAGE COMPONENT ─────────────────────────────────────────────
export default function PrimeProductsPage() {
  const containerRef = useRef(null);
  const [isPresenting, setIsPresenting] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState(SECTIONS[0].id);

  // Intersection observer to track active snapped section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) {
            setActiveSectionId(e.target.id);
          }
        });
      },
      { threshold: 0.5, root: container }
    );
    container.querySelectorAll('section, header').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Scroll to next section
  const goNext = useCallback((currentId) => {
    if (!isPresenting) return;
    const nextId = ALL_IDS[(ALL_IDS.indexOf(currentId) + 1) % ALL_IDS.length];
    const el = containerRef.current?.querySelector(`#${nextId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [isPresenting]);

  // Hero & footer auto-advance
  useEffect(() => {
    if (!isPresenting) return;
    if (activeSectionId === 'footer') {
      const t = setTimeout(() => goNext(activeSectionId), 4500);
      return () => clearTimeout(t);
    }
  }, [activeSectionId, isPresenting, goNext]);

  return (
    <div className="pp-page" ref={containerRef}>

      {/* Toggle Presentation */}
      <button className="pp-toggle" onClick={() => setIsPresenting(p => !p)}>
        <span className={`pp-dot ${isPresenting ? 'playing' : 'paused'}`} />
        {isPresenting ? 'PRESENTING' : 'PAUSED'}
      </button>

      {/* Category Navigation */}
      <div className="pp-category-nav">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            className={`pp-cat-btn ${activeSectionId === s.id ? 'active' : ''}`}
            onClick={() => {
              setIsPresenting(false);
              document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Product Sections */}
      {SECTIONS.map(s => (
        <GallerySection
          key={s.id}
          isActive={activeSectionId === s.id}
          isPresenting={isPresenting}
          onNext={goNext}
          {...s}
        />
      ))}

    </div>
  );
}
