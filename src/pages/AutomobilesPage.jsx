import React, { useEffect, useRef, useState, useCallback } from 'react';
import './PrimeProductsPage.css';

import imgLuxury from '../assets/images/luxury_vehicles_1776405526700.png';
import imgTrucks from '../assets/images/heavy_trucks_1776405563083.png';
import imgCranes from '../assets/images/industrial_cranes_1776405608457.png';

import imgLuxuryCar from '../assets/images/car_luxury_1776407384479.png';
import imgStandardCar from '../assets/images/car_standard_1776407406272.png';
import imgModernBike from '../assets/images/bike_modern_1776407423210.png';
import imgElectricBike from '../assets/images/electric_two_wheeler_1776407484972.png';

const IMG = {
  'Luxury Corporate Cars': imgLuxuryCar,
  'Standard Automobiles': imgStandardCar,
  'Modern Bikes': imgModernBike,
  'Electric Two-Wheelers': imgElectricBike,
  'Trailer Trucks': imgTrucks,
  'RMC Trucks': imgTrucks,
  'Bulkers': imgTrucks,
  'Tankers': imgTrucks,
  'Commercial Vehicles': imgTrucks,
  'Industrial Vehicles': imgCranes,
  'Hydra Cranes': imgCranes,
  'Rock Lifts': imgCranes,
  'Mini Cranes': imgCranes,
  'Engineering Equipments': imgCranes,
};

const SECTIONS = [
  {
    id: 'luxury',
    num: '01',
    title: 'Luxury & Standard',
    label: 'Executive Mobility',
    defaultImg: imgLuxury,
    accentR: 255, accentG: 102, accentB: 0,  // Bright Orange
    items: ['Luxury Corporate Cars', 'Standard Automobiles', 'Modern Bikes', 'Electric Two-Wheelers'],
  },
  {
    id: 'transport',
    num: '02',
    title: 'Heavy Transport',
    label: 'Global Logistics',
    defaultImg: imgTrucks,
    accentR: 255, accentG: 140, accentB: 0,   // Light Orange
    items: ['Trailer Trucks', 'RMC Trucks', 'Bulkers', 'Tankers', 'Commercial Vehicles'],
    reverse: true,
  },
  {
    id: 'industrial',
    num: '03',
    title: 'Industrial Machinery',
    label: 'Engineering Equipment',
    defaultImg: imgCranes,
    accentR: 204, accentG: 82, accentB: 0,  // Dark Orange
    items: ['Industrial Vehicles', 'Hydra Cranes', 'Rock Lifts', 'Mini Cranes', 'Engineering Equipments'],
  }
];

const ALL_IDS = [...SECTIONS.map(s => s.id), 'footer'];

// ── GALLERY SECTION COMPONENT ──────────────────────────────────
function GallerySection({ id, num, title, label, defaultImg, accentR, accentG, accentB, items, reverse, isActive, isPresenting, onNext }) {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [displayImg, setDisplayImg] = useState(defaultImg);
  const timerRef = useRef(null);
  const doneRef  = useRef(false);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    if (!isActive) {
      setActiveIdx(-1);
      doneRef.current = false;
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
    <section id={id} ref={sectionRef} className={`gs${reverse ? ' gs--reverse' : ''}`} style={cssVars}>
      <div className="gs-img-col">
        <div className="gs-img-wrap">
          <img src={displayImg} alt={title} className="gs-img" key={`${id}-${activeIdx}`} />
          <div className="gs-img-overlay" />
        </div>
        <div className="gs-accent-bar" />
        <div className="gs-img-badge">
          <span className="gs-img-badge-num">CATEGORY {num}</span>
          <span className="gs-img-badge-name">{title}</span>
        </div>
      </div>

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
export default function AutomobilesPage() {
  const containerRef = useRef(null);
  const [isPresenting, setIsPresenting] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState(SECTIONS[0].id);

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
    container.querySelectorAll('section, footer').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goNext = useCallback((currentId) => {
    if (!isPresenting) return;
    const nextId = ALL_IDS[(ALL_IDS.indexOf(currentId) + 1) % ALL_IDS.length];
    const el = containerRef.current?.querySelector(`#${nextId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [isPresenting]);

  useEffect(() => {
    if (!isPresenting) return;
    if (activeSectionId === 'footer') {
      const t = setTimeout(() => goNext(activeSectionId), 4500);
      return () => clearTimeout(t);
    }
  }, [activeSectionId, isPresenting, goNext]);

  return (
    <div className="pp-page" ref={containerRef} style={{ '--dark': '#080808', '--red': '#ff6600', '--green': '#ff8c00' }}>
      
      {/* Toggle */}
      <button className="pp-toggle" onClick={() => setIsPresenting(p => !p)}>
        <span className={`pp-dot ${isPresenting ? 'playing' : 'paused'}`} />
        {isPresenting ? 'PRESENTING' : 'PAUSED'}
      </button>

      {/* Sections */}
      {SECTIONS.map(s => (
        <GallerySection
          key={s.id}
          isActive={activeSectionId === s.id}
          isPresenting={isPresenting}
          onNext={goNext}
          {...s}
        />
      ))}

      {/* Footer */}
      <footer id="footer" className="pp-footer">
        <div className="pp-footer-bg" />
        <div className="pp-footer-inner">
          <div className="pp-footer-eyebrow">Global Reach</div>
          <h2 className="pp-footer-title">Ready for Action</h2>
          <p className="pp-footer-sub">
            Our unparalleled fleet is engineered for perfection across the global maritime value chain.
          </p>
        </div>
      </footer>

    </div>
  );
}
