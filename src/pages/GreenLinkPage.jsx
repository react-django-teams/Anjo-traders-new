import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './GreenLinkPage.css';

// ── IMAGES & ASSETS ─────────────────────────────────────────────
import maritimeImg from '../assets/images/maritime-logistics-unsplash.jpg';
import cargoImg from '../assets/images/cargo-transfer-hero.png';
import exportImg from '../assets/images/export-import-solutions-pexels.jpg';

import seaAirFreightImg from '../assets/images/sea-air-freight.png';
import customsClearanceImg from '../assets/images/customs-clearance.png';
import doorToDoorImg from '../assets/images/export-import-solutions-pexels.jpg';
import supplyChainImg from '../assets/images/supply-chain.jpg';
import heavyLiftImg from '../assets/images/cargo-transfer-hero.png';
import riskManagementImg from '../assets/images/risk-management.jpg';
import routePlanningImg from '../assets/images/route-planning.jpg';
import realTimeTrackingImg from '../assets/images/real-time-tracking.jpg';
import portAuthorityImg from '../assets/images/port-authority.jpg';
import partnerNetworkImg from '../assets/images/partner-network.jpg';
import complianceAutomationImg from '../assets/images/compliance-automation.jpg';

// ── DATA ───────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'containers',
    num: '01',
    title: 'Containers',
    label: 'CORE PRODUCT',
    defaultImg: maritimeImg,
    images: ['https://www.marineinsight.com/wp-content/uploads/2012/01/trinity.jpg', 'https://3.imimg.com/data3/US/TG/MY-9745477/container-sales-lease-500x500.jpg', 'https://www.containerspace.com.au/wp-content/uploads/2017/09/Inspection-1.jpg', 'https://5.imimg.com/data5/SELLER/Default/2023/2/TC/VP/YH/4665522/export-container-lashing-500x500.jpg'],
    accentR: 16, accentG: 185, accentB: 129,
    items: [
      'Alternative Home Used Container',
      'Container Sales & Leasing',
      'Container Inspection & Certification',
      'On-Site Delivery Arrangement'
    ],
  },
  {
    id: 'used-containers',
    num: '02',
    title: 'Used Containers',
    label: 'SPECIALIZED STOCK',
    defaultImg: exportImg,
    images: [seaAirFreightImg, customsClearanceImg, doorToDoorImg, supplyChainImg],
    accentR: 6, accentG: 182, accentB: 212,
    items: [
      'Storage Used Containers',
      'Used Shipping Containers Modified',
      'Grade A & B Condition Units',
      'Bulk & Single Unit Supply'
    ],
    reverse: true,
  },
  {
    id: 'fabrication',
    num: '03',
    title: 'Fabricated Containers',
    label: 'CUSTOM SOLUTIONS',
    defaultImg: cargoImg,
    images: [
      heavyLiftImg, 
      'https://www.samanportable.com/_next/image?url=https%3A%2F%2Fblog.samanportable.com%2Fwp-content%2Fuploads%2F2024%2F11%2Fcontainer-offces-porta-cabins-by-saman-1-13-1024x574.jpg&w=1920&q=75', 
      riskManagementImg, 
      routePlanningImg
    ],
    accentR: 56, accentG: 189, accentB: 248,
    items: [
      'Fabricated Used Containers',
      'Custom Interior Fit-Outs',
      'Structural Modifications',
      'Office & Site Cabin Conversion'
    ],
  },
  {
    id: 'maritime',
    num: '04',
    title: 'Maritime Agency',
    label: 'SHIPPING SERVICES',
    defaultImg: maritimeImg,
    images: [realTimeTrackingImg, portAuthorityImg, partnerNetworkImg, complianceAutomationImg],
    accentR: 16, accentG: 185, accentB: 129,
    items: [
      'Steamer Agency Services',
      'NVOCC Operations',
      'Port Agency & Liaison',
      'Freight Forwarding'
    ],
    reverse: true,
  },
];

const ALL_IDS = ['hero', ...SECTIONS.map(s => s.id), 'cta'];

// ── COMPONENTS ─────────────────────────────────────────────────

const BubbleBatch = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 100 + Math.random() * 20,
    size: 4 + Math.random() * 8,
    delay: Math.random() * 10,
    duration: 12 + Math.random() * 10,
    opacity: 0.1 + Math.random() * 0.2
  }));

  return (
    <div className="absolute inset-0 z-[100] pointer-events-none overflow-hidden">
      {bubbles.map(b => (
        <motion.div
          key={b.id}
          className="absolute rounded-full border border-white/20 bg-white/5 backdrop-blur-[1px]"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
          }}
          animate={{
            y: ['0vh', '-120vh'],
            x: [`${b.x}%`, `${b.x + (Math.random() * 10 - 5)}%`],
            scale: [1, 1.5, 1],
            opacity: [b.opacity, b.opacity * 3, 0]
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'linear'
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
    <section id={id} ref={sectionRef} className={`gl-gs${reverse ? ' gl-gs--reverse' : ''}`} style={cssVars}>
      {/* Image Column */}
      <div className="gl-gs-img-col">
        <div className="gl-gs-img-wrap">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIdx >= 0 && images ? (images[activeIdx] || defaultImg) : defaultImg}
              src={activeIdx >= 0 && images ? (images[activeIdx] || defaultImg) : defaultImg}
              alt={title}
              className="gl-gs-img"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </AnimatePresence>
          <div className="gl-gs-img-overlay" />
        </div>
        <div className="gl-gs-accent-bar" />
        <div className="gl-gs-img-badge">
          <span className="gl-gs-img-badge-num">Agencies {num}</span>
          <span className="gl-gs-img-badge-name">{title}</span>
        </div>
      </div>

      {/* Content Column */}
      <div className="gl-gs-content-col">
        <div className="gl-gs-bg-number">{num}</div>
        <div className="gl-gs-eyebrow">{label}</div>
        <h2 className="gl-gs-title">{title}</h2>
        <ul className="gl-gs-list">
          {items.map((item, idx) => (
            <li
              key={item}
              className={`gl-gs-item${activeIdx === idx ? ' is-active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <span className="gl-gs-item-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="gl-gs-item-name">{item}</span>
              <span className="gl-gs-item-dot" />
              {activeIdx === idx && isPresenting && (
                <div className="gl-gs-item-progress" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────

export default function GreenLinkPage() {
  const containerRef = useRef(null);
  const [isPresenting, setIsPresenting] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState('hero');

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
    container.querySelectorAll('section, header').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goNext = useCallback((currentId) => {
    if (!isPresenting) return;
    const nextId = ALL_IDS[(ALL_IDS.indexOf(currentId) + 1) % ALL_IDS.length];
    const el = containerRef.current?.querySelector(`#${nextId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [isPresenting]);

  useEffect(() => {
    if (!isPresenting) return;
    if (activeSectionId === 'hero' || activeSectionId === 'cta') {
      const t = setTimeout(() => goNext(activeSectionId), 5000);
      return () => clearTimeout(t);
    }
  }, [activeSectionId, isPresenting, goNext]);

  return (
    <div className="gl-page" ref={containerRef}>
      <BubbleBatch />

      {/* Presentation Toggle */}
      <button className="gl-toggle" onClick={() => setIsPresenting(p => !p)}>
        <div className={`gl-dot ${isPresenting ? 'playing' : ''}`} />
        {isPresenting ? 'Cinematic Flow' : 'Manual View'}
      </button>

      {/* ── HERO ── */}
      <header id="hero" className="gl-hero">
        <img 
          src="https://media.istockphoto.com/id/1432314418/photo/container-house-and-office-with-lawn-grass-3d-rendering.jpg?s=612x612&w=0&k=20&c=aM1uSZmyGdoX7MwBalkrlj7sggjriontyz-8NSXTTw8="
          alt="Green Link Maritime"
          className="gl-video-bg"
          style={{ objectPosition: 'center center' }}
        />
        <div className="gl-hero-text">
          <div className="gl-hero-eyebrow">Green Link Maritime Agencies — Thoothukudi, Tamil Nadu</div>
          <h1 className="gl-hero-h1">Containers.<br />Delivered Right.</h1>
          <p className="gl-hero-sub">
            Trusted supplier of used, fabricated &amp; alternative home containers. From steamer agency 
            to specialized container solutions — connecting Thoothukudi to global ports for over 16 years.
          </p>
          <div className="mt-10">
            <a 
              href="https://www.indiamart.com/green-link-maritime-agencies/?srsltid=AfmBOopgrRxYk77ZHklUoTvFh43h1ZlXzTA7hK1AHuYRPgst7Wkuh7XP"
              target="_blank"
              rel="noopener noreferrer"
              className="gl-footer-btn"
              style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
            >
              Visit Our IndiaMART Profile <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="gl-hero-scroll">
          <span>Scroll</span>
          <div className="gl-hero-scroll-line" />
        </div>
      </header>

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
      <section id="cta" className="gl-footer">
        <div className="gl-footer-bg" style={{ backgroundImage: `url(${maritimeImg})` }} />
        <div className="gl-footer-inner">
          <div className="gl-footer-eyebrow">Thoothukudi · Tamil Nadu · India</div>
          <h2 className="gl-footer-title">Get Your<br />Container Today</h2>
          <a 
            href="https://www.indiamart.com/green-link-maritime-agencies/?srsltid=AfmBOopgrRxYk77ZHklUoTvFh43h1ZlXzTA7hK1AHuYRPgst7Wkuh7XP"
            target="_blank"
            rel="noopener noreferrer"
            className="gl-footer-btn"
          >
            Enquire on IndiaMART <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
