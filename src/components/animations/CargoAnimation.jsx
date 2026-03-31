import React from 'react';
import './CargoAnimation.css';

const CargoAnimation = () => {
  return (
    <div className="cargo-animation-wrapper">
      <div className="cargo-scene">
        
        {/* Conveyor Belt System */}
        <div className="conveyor-belt">
          <div className="conveyor-rollers">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="roller"></div>
            ))}
          </div>
          <div className="belt"></div>
        </div>

        {/* The Shipping Container */}
        <div className="shipping-container">
          <div className="container-body">
            {/* Corrugated sides */}
            {[...Array(8)].map((_, i) => (
              <div key={`rib-${i}`} className="container-rib"></div>
            ))}
            <div className="container-logo">
              <span className="text-white font-black text-xl italic tracking-widest pl-2">ANJO</span>
            </div>
          </div>
          {/* Container Door (Open) */}
          <div className="container-door-open"></div>
        </div>

        {/* Animated Vegetable Boxes */}
        {/* We use 3 boxes staggered to create a continuous loading effect */}
        {[...Array(3)].map((_, i) => (
          <div key={`box-${i}`} className={`veg-box box-anim-${i + 1}`}>
            {/* Box styling */}
            <div className="box-wood">
              {/* Fresh produce icon (leaf) */}
              <svg className="veg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20z" fill="#4ade80" stroke="#16a34a"/>
                <path d="M12 6v6l4 2" stroke="#166534" strokeLinecap="round"/>
                <path d="M8 3s-4 4-2 9" stroke="#166534" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        ))}
        
        {/* The Logistics Worker (Abstract SVG) */}
        <div className="worker">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="12" r="6" fill="#1e3a8a" /> {/* Head with hardhat */}
            <path d="M24 6 C 20 6 16 10 16 12 L 32 12 C 32 10 28 6 24 6 Z" fill="#eab308" /> {/* Yellow Hardhat */}
            <path d="M24 18 C 18 18 14 22 14 30 L 14 48 L 34 48 L 34 30 C 34 22 30 18 24 18 Z" fill="#2563eb" /> {/* Body */}
            <path d="M20 18 L 28 18 L 28 48 L 20 48 Z" fill="#1d4ed8" /> {/* Vest */}
            <path d="M14 22 L 4 30 L 8 36 L 16 26" fill="#1e40af" /> {/* Arm Left */}
            <path className="worker-arm-right" d="M34 22 L 44 30 L 40 36 L 32 26" fill="#1e40af" /> {/* Arm Right (Animated) */}
          </svg>
        </div>

      </div>
    </div>
  );
};

export default CargoAnimation;
