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
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200',
      'https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1200',
      'https://b3353673.smushcdn.com/3353673/wp-content/uploads/2025/11/IICL-Container.webp?lossy=2&strip=1&webp=1',
      'https://images.unsplash.com/photo-1494412519320-ce3dcfa593f6?q=80&w=1200'
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
    images: [
      'https://images.unsplash.com/photo-1590674033314-140026363821?q=80&w=1200',
      'https://images.unsplash.com/photo-1586864387917-f58a4b8ec52b?q=80&w=1200',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200',
      'https://www.youtube.com/watch?v=dxV8wfn5MXA'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200',
      'https://images.unsplash.com/photo-1504917596153-9bbef50fdd33?q=80&w=1200'
    ],
    accentR: 139, accentG: 92, accentB: 246, // Purple-500
    items: [
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
    images: [
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200',
      'https://www.visiwise.co/blog/wp-content/uploads/2025/04/How-Long-Does-It-Take-to-Unload-a-Container-Ship.jpg',
      'https://images.unsplash.com/photo-1566367576505128cdef8f4?q=80&w=1200'
    ],
    accentR: 6, accentG: 182, accentB: 212,
    items: [
      '24/7 Yard Operations',
      'Vessel Load Management',
      'Depot Handling Services'
    ],
    reverse: true,
  },
];

const ALL_IDS = [...SECTIONS.map(s => s.id), 'cta'];

// ── COMPONENTS ─────────────────────────────────────────────────

const SparkBatch = () => {
  const sparks = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 3,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 15,
    opacity: 0.1 + Math.random() * 0.3,
    color: ['#06b6d4', '#8b5cf6', '#f97316', '#ffffff'][i % 4]
  }));

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {sparks.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            filter: 'blur(0.5px)'
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, (Math.random() - 0.5) * 100, 0],
            opacity: [s.opacity, s.opacity * 2, s.opacity],
            scale: [1, 1.5, 1]
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
              {(() => {
                const src = activeIdx >= 0 && images ? (images[activeIdx] || defaultImg) : defaultImg;
                const isYoutube = typeof src === 'string' && (src.includes('youtube.com') || src.includes('youtu.be'));
                const isDirectVideo = typeof src === 'string' && (src.endsWith('.mp4') || src.endsWith('.webm'));

                if (isYoutube) {
                  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                  const match = src.match(regExp);
                  const videoId = (match && match[2].length === 11) ? match[2] : null;
                  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0` : src;

                  return (
                    <motion.div
                      key={src}
                      className="cc-gs-video-container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <iframe
                        src={embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="cc-gs-iframe"
                      />
                    </motion.div>
                  );
                }

                if (isDirectVideo) {
                  return (
                    <motion.video
                      key={src}
                      src={src}
                      className="cc-gs-img"
                      autoPlay
                      muted
                      loop
                      playsInline
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  );
                }

                return (
                  <motion.img
                    key={src}
                    src={src}
                    alt={title}
                    className="cc-gs-img"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                );
              })()}
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
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
