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
  const outerRadius = 190; // Optimized "Sweet Spot" for maximum impact with footer
  const innerRadius = 65;  
  const anglePerSlice = 360 / SERVICES.length;

  return (
    <div className="pbs-page h-screen overflow-hidden flex flex-col pt-16 bg-white">
      
      {/* THE "ONE FRAME" DASHBOARD - Perfectly Balanced */}
      <div className="flex-grow flex flex-col overflow-hidden relative">
        
        {/* TOP: HEADER (Clear & Prominent) */}
        <div className="pbs-header text-center py-4 px-6 border-b border-slate-100 bg-white relative z-20 shadow-sm">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pbs-title text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Progressive Business Solution
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pbs-subtitle text-xs sm:text-sm md:text-base font-bold text-slate-500 uppercase tracking-[0.4em] mt-1"
          >
            Integrated end-to-end maritime value chain.
          </motion.p>
        </div>

        {/* CENTER: INTERACTIVE DASHBOARD (Maximum Visual Focus) */}
        <div className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 px-12 relative overflow-hidden">
          
          {/* Immersive background aura */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] opacity-40" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" 
                 style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, #0f172a 0%, transparent 50%), radial-gradient(circle at 70% 80%, #0f172a 0%, transparent 50%)' }} />
          </div>

          {/* PUZZLE WHEEL - Balanced & Precise */}
          <div 
            className="pbs-wheel-container w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] flex-shrink-0 relative z-10"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg viewBox="0 0 500 500" className="pbs-svg w-full h-full overflow-visible">
              <defs>
                <filter id="shadow-extreme">
                  <feDropShadow dx="0" dy="12" stdDeviation="18" floodOpacity="0.18"/>
                </filter>
                <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              <circle cx={centerX} cy={centerY} r={outerRadius + 40} fill="url(#wheelGlow)" opacity="0.4" />

              {SERVICES.map((_, index) => index)
                .sort((a, b) => (a === activeIdx ? 1 : b === activeIdx ? -1 : a - b))
                .map((i) => {
                const srv = SERVICES[i];
                const startAngle = -90 + (i * anglePerSlice);
                const endAngle = startAngle + anglePerSlice;
                const pathData = getPuzzleSlicePath(centerX, centerY, innerRadius, outerRadius, startAngle, endAngle);
                const isActive = activeIdx === i;
                const midAngle = startAngle + anglePerSlice / 2;
                
                // Distribute icon and text perfectly along the slice's center radius
                const iconRadius = innerRadius + (outerRadius - innerRadius) * 0.43;
                const textRadius = innerRadius + (outerRadius - innerRadius) * 0.74;
                
                const iconX = centerX + iconRadius * Math.cos(midAngle * Math.PI / 180);
                const iconY = centerY + iconRadius * Math.sin(midAngle * Math.PI / 180);

                const textX = centerX + textRadius * Math.cos(midAngle * Math.PI / 180);
                const textY = centerY + textRadius * Math.sin(midAngle * Math.PI / 180);
                
                const Icon = srv.icon;

                return (
                  <g 
                    key={srv.id} 
                    className={`pbs-slice-group cursor-pointer transition-all duration-300 ${isActive ? 'is-active' : ''}`}
                    onClick={() => { setActiveIdx(i); setIsAutoPlaying(false); }}
                    onMouseEnter={() => { setActiveIdx(i); setIsAutoPlaying(false); }}
                  >
                    <motion.path
                      d={pathData}
                      fill={srv.color}
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                        stroke: isActive ? '#fff' : 'rgba(255,255,255,0.25)',
                        strokeWidth: isActive ? 5 : 1.5,
                        scale: isActive ? 1.05 : 1,
                        transformOrigin: `${centerX}px ${centerY}px`
                      }}
                      filter={isActive ? 'url(#shadow-extreme)' : ''}
                    />
                    
                    <circle 
                      cx={iconX} cy={iconY} r={isActive ? 22 : 18} 
                      fill={isActive ? '#fff' : 'rgba(255,255,255,0.92)'}
                      className="shadow-lg"
                    />
                    
                    <g transform={`translate(${iconX - (isActive ? 11 : 9)}, ${iconY - (isActive ? 11 : 9)})`}>
                      <Icon size={isActive ? 22 : 18} color={srv.color} />
                    </g>

                    {isActive && (
                      <motion.text
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        x={textX}
                        y={textY}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        dominantBaseline="central"
                        fill="#ffffff"
                        className="text-[11px] font-black uppercase tracking-[0.1em] pointer-events-none"
                        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.8))' }}
                      >
                        {srv.title}
                      </motion.text>
                    )}
                  </g>
                );
              })}

              <circle cx={centerX} cy={centerY} r={innerRadius - 8} fill="#fff" filter="url(#shadow-extreme)" />
              <g transform={`translate(${centerX - 20}, ${centerY - 20})`}>
                <DollarSign size={40} color="#0f172a" strokeWidth={3} />
              </g>
            </svg>
          </div>

          {/* DYNAMIC CONTENT PANEL (Perfected Visuals) */}
          <div className="pbs-details-panel flex-grow max-w-xl relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pbs-detail-card bg-slate-50 p-8 sm:p-12 rounded-[40px] border-l-[16px] shadow-2xl relative overflow-hidden"
                style={{ borderLeftColor: SERVICES[activeIdx].color }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-3" 
                  style={{ backgroundColor: SERVICES[activeIdx].color }}
                >
                  {React.createElement(SERVICES[activeIdx].icon, { size: 32, color: '#fff' })}
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight" style={{ color: SERVICES[activeIdx].color }}>
                  {SERVICES[activeIdx].title}
                </h2>
                <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-semibold">
                  {SERVICES[activeIdx].desc}
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-50" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM: FOOTER (Bold & Anchor) */}
        <div className="w-full py-8 px-10 bg-slate-900 relative overflow-hidden text-center border-t border-slate-800 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 10% 50%, #DC2626 0%, transparent 40%), radial-gradient(circle at 90% 50%, #16A34A 0%, transparent 40%)' }} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto relative z-10"
          >
            <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-black tracking-[0.1em] mb-3 uppercase">
              Comprehensive Logistics Ecosystem
            </h2>
            <p className="text-slate-300 text-sm sm:text-lg font-medium leading-relaxed max-w-5xl mx-auto opacity-90">
              Unified as a complete progressive solution or selected individually, 
              our services are meticulously engineered to elevate your global trade operations.
            </p>
          </motion.div>
          
          {/* Decorative line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
        </div>
      </div>

    </div>
  );
}
