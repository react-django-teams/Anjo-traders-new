import React from 'react';

import factoryVideo from '../../assets/images/fdactory_workers.mp4';

const Hero = () => {
  // Logo-inspired particles (Red, Yellow, Green, Blue)
  const particles = [
    { color: '#DC2626', top: '15%', left: '10%', delay: '0s', size: '300px' }, // Red
    { color: '#F59E0B', top: '60%', left: '80%', delay: '2s', size: '400px' }, // Yellow
    { color: '#16A34A', top: '25%', left: '70%', delay: '4s', size: '350px' }, // Green
    { color: '#2563EB', top: '70%', left: '20%', delay: '6s', size: '250px' }, // Blue
  ];

  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden bg-slate-900"
      style={{ minHeight: '85vh' }}
    >
      
      {/* 1. Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={factoryVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
          style={{ transform: 'scale(1.05)' }}
        />
      </div>

      <style>{`
        @keyframes floatAmbient {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* 2. Logo-Inspired Ambient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-[0.08] blur-[80px]"
            style={{ 
              top: p.top, left: p.left, 
              width: p.size, height: p.size, 
              backgroundColor: p.color,
              animation: `floatAmbient ${15 + i * 2}s infinite ease-in-out alternate`,
              animationDelay: p.delay
            }}
          />
        ))}
        {/* Dark cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* 3. Central Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center h-full py-10">
        
        <div className="max-w-5xl flex flex-col items-center">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-6 mb-12 opacity-0 animate-reveal" style={{ animationDelay: '0.2s' }}>
            <span className="w-16 h-[2px] bg-red-600"></span>
            <span className="text-white/90 text-sm font-bold tracking-[0.8em] uppercase">
              Global Export Excellence
            </span>
            <span className="w-16 h-[2px] bg-green-600"></span>
          </div>

          {/* Main Brand Headline */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black leading-none mb-10 opacity-0 animate-reveal tracking-tighter" style={{ animationDelay: '0.4s' }}>
            <span className="text-indigo-700">ANJO</span>
            <span className="text-orange-500 ml-6">TRADERS</span>
          </h1>

          {/* Slogan / Subheading */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-light max-w-5xl leading-relaxed opacity-0 animate-reveal" style={{ animationDelay: '0.6s' }}>
            Bulk agricultural exports to 6+ nations — finest vegetables, fruits, pulses, and cereals. 
            Powered by world-class <span className="text-red-500 font-bold">Maritime & Logistics</span>.
          </p>

        </div>

      </div>
      
    </section>
  );
};

export default Hero;
