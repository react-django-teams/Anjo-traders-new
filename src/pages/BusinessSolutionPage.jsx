import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ShoppingCart, Ship, Globe, Anchor, TrendingUp, BarChart, DollarSign } from 'lucide-react';
import './BusinessSolutionPage.css';

const SERVICES = [
  { id: 'investment', title: 'Investment', icon: Briefcase, color: '#c23b22', desc: 'Secure capital allocation and strategic asset planning to jumpstart our global trading and logistics operations with robust financial backing.' },
  { id: 'purchase', title: 'Purchase', icon: ShoppingCart, color: '#d97706', desc: 'Sourcing the finest quality raw materials and commodities directly from trusted global partnerships, ensuring premium baseline quality.' },
  { id: 'logistics', title: 'Logistics', icon: Ship, color: '#eab308', desc: 'State-of-the-art warehousing, container commercialization, and dynamic freight forwarding to seamlessly connect products to markets.' },
  { id: 'export', title: 'Export', icon: Globe, color: '#16a34a', desc: 'Navigating international trade laws to efficiently export massive volumes of agricultural and industrial goods to over 6 continents.' },
  { id: 'import', title: 'Import', icon: Anchor, color: '#3b82f6', desc: 'Strategic importing of essential machinery, industrial salts, and specialized goods utilizing deep-water ports and rapid clearance.' },
  { id: 'sales', title: 'Sales', icon: TrendingUp, color: '#4338ca', desc: 'Executing high-volume B2B sales networks, connecting our sourced and processed products with top-tier global corporate buyers.' },
  { id: 'profit', title: 'Profit', icon: BarChart, color: '#6b21a8', desc: 'Delivering progressive, sustainable financial returns for our stakeholders through an optimized, end-to-end maritime value chain.' }
];

function getPuzzleSlicePath(cx, cy, rInner, rOuter, startAngle, endAngle) {
  const rad = Math.PI / 180;
  const sa = startAngle * rad;
  const ea = endAngle * rad;

  const cosSa = Math.cos(sa), sinSa = Math.sin(sa);
  const cosEa = Math.cos(ea), sinEa = Math.sin(ea);

  const inner1 = { x: cx + rInner * cosSa, y: cy + rInner * sinSa };
  const outer1 = { x: cx + rOuter * cosSa, y: cy + rOuter * sinSa };
  const outer2 = { x: cx + rOuter * cosEa, y: cy + rOuter * sinEa };
  const inner2 = { x: cx + rInner * cosEa, y: cy + rInner * sinEa };

  // Helper to draw edge with puzzle knob
  const drawEdge = (p1, p2, isFemale) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.hypot(dx, dy);
    
    // Normal vector
    let nx = -dy / len;
    let ny = dx / len;
    
    if (isFemale) {
      nx = -nx;
      ny = -ny;
    }

    const ax = p1.x + dx * 0.35;
    const ay = p1.y + dy * 0.35;
    const bx = p1.x + dx * 0.65;
    const by = p1.y + dy * 0.65;

    // Knob size
    const knobHeight = len * 0.18;
    
    const cx1 = ax + nx * knobHeight * 1.5;
    const cy1 = ay + ny * knobHeight * 1.5;
    const cx2 = bx + nx * knobHeight * 1.5;
    const cy2 = by + ny * knobHeight * 1.5;

    return `L ${ax} ${ay} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${bx} ${by} L ${p2.x} ${p2.y}`;
  };

  const p1 = `M ${inner1.x} ${inner1.y}`;
  const e1 = drawEdge(inner1, outer1, true); // Left edge (female hole)
  const a1 = `A ${rOuter} ${rOuter} 0 0 1 ${outer2.x} ${outer2.y}`;
  const e2 = drawEdge(outer2, inner2, false); // Right edge (male knob)
  const a2 = `A ${rInner} ${rInner} 0 0 0 ${inner1.x} ${inner1.y}`;

  return `${p1} ${e1} ${a1} ${e2} ${a2} Z`;
}

export default function BusinessSolutionPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle animation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const centerX = 250;
  const centerY = 250;
  const outerRadius = 180;
  const innerRadius = 60;
  const anglePerSlice = 360 / SERVICES.length;

  return (
    <div className="pbs-page">
      
      {/* TOP SECTION */}
      <div className="pbs-top">
        <div className="pbs-header">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pbs-title"
          >
            Progressive Business Solution
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pbs-subtitle"
          >
            Integrated end-to-end maritime value chain.
          </motion.p>
        </div>

        <div className="pbs-content-wrapper">
          {/* PUZZLE WHEEL */}
          <div 
            className="pbs-wheel-container"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg viewBox="0 0 500 500" className="pbs-svg">
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3"/>
                </filter>
              </defs>
              
              {SERVICES.map((srv, i) => {
                // start from top (-90 deg), add slight gaps mapping over 7
                const startAngle = -90 + (i * anglePerSlice);
                const endAngle = startAngle + anglePerSlice;
                const pathData = getPuzzleSlicePath(centerX, centerY, innerRadius, outerRadius, startAngle, endAngle);
                const isActive = activeIdx === i;

                // Center point for icon placement
                const midAngle = startAngle + anglePerSlice / 2;
                const iconRadius = innerRadius + (outerRadius - innerRadius) / 2;
                const iconX = centerX + iconRadius * Math.cos(midAngle * Math.PI / 180);
                const iconY = centerY + iconRadius * Math.sin(midAngle * Math.PI / 180);

                const Icon = srv.icon;

                return (
                  <g 
                    key={srv.id} 
                    className={`pbs-slice-group ${isActive ? 'is-active' : ''}`}
                    onClick={() => { setActiveIdx(i); setIsAutoPlaying(false); }}
                    onMouseEnter={() => { setActiveIdx(i); setIsAutoPlaying(false); }}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    style={{ cursor: 'pointer' }}
                  >
                    <motion.path
                      d={pathData}
                      fill={srv.color}
                      className="pbs-slice-path"
                      animate={{
                        opacity: isActive ? 1 : 0.55,
                        stroke: isActive ? '#ffffff' : 'rgba(255,255,255,0.2)',
                        strokeWidth: isActive ? 3 : 1.5
                      }}
                      transition={{ duration: 0.3 }}
                      filter={isActive ? 'url(#shadow)' : ''}
                    />
                    
                    {/* Icon Background Circle - NO scale, only glow */}
                    <circle 
                      cx={iconX} cy={iconY} r={18} 
                      fill={isActive ? '#ffffff' : 'rgba(255,255,255,0.85)'}
                      style={{ 
                        filter: isActive ? 'drop-shadow(0 0 6px rgba(255,255,255,0.9))' : 'none',
                        transition: 'filter 0.3s ease, fill 0.3s ease'
                      }}
                    />
                    
                    {/* SVG Icon Mapping - NO scale */}
                    <g transform={`translate(${iconX - 12}, ${iconY - 12})`}>
                      <Icon size={24} color={srv.color} />
                    </g>
                  </g>
                );
              })}

              {/* CENTER DOLLAR SIGN */}
              <circle cx={centerX} cy={centerY} r={innerRadius - 8} fill="#ffffff" filter="url(#shadow)" />
              <g transform={`translate(${centerX - 16}, ${centerY - 16})`}>
                <DollarSign size={32} color="#0f172a" />
              </g>

            </svg>
          </div>

          {/* DYNAMIC CONTENT PANEL */}
          <div className="pbs-details-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="pbs-detail-card"
                style={{ borderLeftColor: SERVICES[activeIdx].color }}
              >
                <div className="pbs-detail-icon-wrap" style={{ backgroundColor: SERVICES[activeIdx].color }}>
                  {React.createElement(SERVICES[activeIdx].icon, { size: 28, color: '#fff' })}
                </div>
                <h2 className="pbs-detail-title" style={{ color: SERVICES[activeIdx].color }}>
                  {SERVICES[activeIdx].title}
                </h2>
                <p className="pbs-detail-desc">
                  {SERVICES[activeIdx].desc}
                </p>
                <div className="pbs-detail-step">
                  Step 0{activeIdx + 1} of 07
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION - CINEMATIC SHIP WITH DIAGONAL */}
      <div className="pbs-bottom">
        <div className="pbs-diagonal-overlay" />
        <div className="pbs-ship-bg" />
        <div className="pbs-bottom-content">
          <h2 className="pbs-bottom-title">Comprehensive Logistics Ecosystem</h2>
          <p className="pbs-bottom-desc">
            Whether unified as a complete progressive solution or selected individually, our services are meticulously engineered to elevate your global trade operations.
          </p>

        </div>
      </div>

    </div>
  );
}
