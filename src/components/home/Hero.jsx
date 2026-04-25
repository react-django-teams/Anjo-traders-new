import React from 'react';

import factoryVideo from '../../assets/images/fdactory_workers.mp4';
import logoImage from '../../assets/images/videos/file_00000000845c71fa9a49b9abaaf9349c.png';

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
      style={{ minHeight: '100vh' }}
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
        
        @keyframes logoCinematicReveal {
          0% {
            opacity: 0;
            transform: scale(1.15) translateY(50px) perspective(1000px) rotateX(10deg);
            filter: blur(20px) drop-shadow(0 0 0 rgba(255,255,255,0));
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) perspective(1000px) rotateX(0deg);
            filter: blur(0px) drop-shadow(0 0 30px rgba(255,255,255,0.25));
          }
        }
        
        @keyframes logoSubtleFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }

        @keyframes taglineReveal {
          0% { opacity: 0; transform: translateY(20px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }

        @keyframes shimmerText {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-logo-premium {
          animation: 
            logoCinematicReveal 2s cubic-bezier(0.16, 1, 0.3, 1) forwards,
            logoSubtleFloat 7s ease-in-out infinite 2s;
        }

        .animate-tagline-shimmer {
          background-size: 200% auto;
          opacity: 0;
          animation: 
            taglineReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.2s,
            shimmerText 8s linear infinite 2.7s;
        }
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center h-full pt-[var(--header-h)] pb-20">

        <div className="w-full flex flex-col items-center justify-center">
          <img
            src={logoImage}
            alt="ANJO Traders Logo"
            className="w-[60vw] sm:w-[40vw] md:w-[30vw] max-w-[350px] h-auto object-contain opacity-0 animate-logo-premium relative z-10"
          />

          <h2
            className="relative z-20 text-base sm:text-lg md:text-2xl lg:text-3xl font-medium tracking-[0.05em] max-w-4xl text-center text-transparent bg-clip-text animate-tagline-shimmer mt-4 sm:mt-5 md:mt-6 px-4"
            style={{
              backgroundImage: 'linear-gradient(90deg, #cbd5e1 0%, #ffffff 25%, #60a5fa 50%, #ffffff 75%, #cbd5e1 100%)',
              filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.8))'
            }}
          >
            Exports and imports across the ocean, powered by world-class logistics.
          </h2>
        </div>

      </div>

    </section>
  );
};

export default Hero;
