import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import './AnimatedGalleryPage.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import imgLuxury from '../assets/images/luxury_vehicles_1776405526700.png';
import imgTrucks from '../assets/images/heavy_trucks_1776405563083.png';
import imgCranes from '../assets/images/industrial_cranes_1776405608457.png';

// Sub-images for Luxury category
import imgLuxuryCar from '../assets/images/car_luxury_1776407384479.png';
import imgStandardCar from '../assets/images/car_standard_1776407406272.png';
import imgModernBike from '../assets/images/bike_modern_1776407423210.png';
import imgElectricBike from '../assets/images/electric_two_wheeler_1776407484972.png';

// Sub-images for Heavy category
import imgRMCTruck from '../assets/images/rmc_truck_cinematic_1776416527581.png';
import imgBulkerTruck from '../assets/images/bulker_truck_cinematic_1776416544272.png';
import imgTankerTruck from '../assets/images/tanker_truck_cinematic_1776416613761.png';

// Sub-images for Machinery category
import imgRockLift from '../assets/images/rock_lift_cinematic_1776416667528.png';
import imgMiniCrane from '../assets/images/mini_crane_cinematic_1776416691765.png';
import imgSiteVehicle from '../assets/images/site_vehicle_cinematic_1776416714369.png';

const data = [
  {
    place: 'Executive Mobility',
    title: 'LUXURY',
    title2: 'VEHICLES',
    description: 'Experience unparalleled comfort and style with our premium corporate cars and standard mobility solutions natively engineered for excellence.',
    image: imgLuxury,
    subItems: [
      { name: 'Luxury Cars', title1: 'LUXURY', title2: 'CARS', desc: 'Premium executive sedans crafted for unparalleled comfort and a sophisticated driving experience.', img: imgLuxuryCar },
      { name: 'Standard Autos', title1: 'STANDARD', title2: 'AUTOS', desc: 'Versatile and efficient standard automobiles designed for reliable everyday mobility.', img: imgStandardCar },
      { name: 'Modern Bikes', title1: 'MODERN', title2: 'BIKES', desc: 'High-performance modern motorcycles engineered for speed, agility, and thrill.', img: imgModernBike },
      { name: 'Electric 2W', title1: 'ELECTRIC', title2: '2-WHEELERS', desc: 'Eco-friendly electric two-wheelers offering sustainable and smart urban commuting.', img: imgElectricBike },
    ]
  },
  {
    place: 'Global Logistics',
    title: 'HEAVY',
    title2: 'TRANSPORT',
    description: 'Powering global supply chains with high-capacity trailer trucks, bulkers, tankers, and rugged commercial vehicles.',
    image: imgTrucks,
    subItems: [
      { name: 'Trailer Trucks', title1: 'TRAILER', title2: 'TRUCKS', desc: 'Heavy-duty trailer trucks handling maximum payload for cross-country logistics.', img: imgTrucks },
      { name: 'RMC Trucks', title1: 'RMC', title2: 'TRUCKS', desc: 'Reliable transit mixers ensuring fresh concrete delivery for construction operations.', img: imgRMCTruck },
      { name: 'Bulkers', title1: 'BULKER', title2: 'TRUCKS', desc: 'High-capacity bulkers optimized for transporting dry, powdered goods safely.', img: imgBulkerTruck },
      { name: 'Tankers', title1: 'LIQUID', title2: 'TANKERS', desc: 'Industrial grade tankers designed for secure fluid and chemical transportation.', img: imgTankerTruck },
    ]
  },
  {
    place: 'Engineering Equipment',
    title: 'INDUSTRIAL',
    title2: 'MACHINERY',
    description: 'Reliable hydra cranes, rock lifts, and heavy-duty engineering vehicles equipped to conquer your toughest site operations.',
    image: imgCranes,
    subItems: [
      { name: 'Hydra Cranes', title1: 'HYDRA', title2: 'CRANES', desc: 'Versatile hydra cranes delivering mobility and heavy lifting for dynamic construction sites.', img: imgCranes },
      { name: 'Rock Lifts', title1: 'ROCK', title2: 'LIFTS', desc: 'Robust lifting machinery engineered to handle extreme weight and rugged terrains.', img: imgRockLift },
      { name: 'Mini Cranes', title1: 'MINI', title2: 'CRANES', desc: 'Compact lifting solutions providing precision and reach in confined industrial spaces.', img: imgMiniCrane },
      { name: 'Engineering', title1: 'SITE', title2: 'VEHICLES', desc: 'Specialized engineering terrain vehicles vital for comprehensive groundwork and excavation.', img: imgSiteVehicle },
    ]
  }
];

const AnimatedGalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const containerRef = useRef(null);
  
  const coverRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const placeRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  // Initial Reveal Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([placeRef.current, text1Ref.current, text2Ref.current, descRef.current, ctaRef.current], 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const animateSlideChange = React.useCallback((prevIdx, nextIdx, direction) => {
    const currentCard = `#card-${prevIdx}`;
    const nextCard = `#card-${nextIdx}`;

    gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(nextIdx);
          // Only release lock after next frame is rendered + animated in
        }
      });
      
      // 1. Animate text OUT
      tl.to([ctaRef.current, descRef.current, text2Ref.current, text1Ref.current, placeRef.current], {
        y: -30 * direction,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power2.in'
      });
      
      // 2. Prepare next card
      tl.add(() => {
        gsap.set(nextCard, { 
          xPercent: 0, 
          scale: 1, 
          opacity: 0, 
          visibility: 'visible',
          clipPath: 'none',
          zIndex: 2
        });
        gsap.set(currentCard, { 
          zIndex: 1, 
          clipPath: 'none',
          xPercent: 0,
          scale: 1
        });
      });
      
      // 3. Lightning Fast Fade (fraction of a second)
      tl.to(currentCard, { 
        opacity: 0,
        duration: 0.2, 
        ease: 'power1.inOut' 
      }, "+=0.05");
      
      tl.to(nextCard, { 
        opacity: 1, 
        duration: 0.2, 
        ease: 'power1.inOut' 
      }, "<");
      
      // 4. Reset old card
      tl.add(() => {
        gsap.set(currentCard, {
          opacity: 0,
          visibility: 'hidden',
          zIndex: 0,
          scale: 1,
          xPercent: 0,
          clipPath: 'none'
        });
      });

    }, containerRef);
  }, []);

  const handleNext = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const nextIndex = (currentIndex + 1) % data.length;
    animateSlideChange(currentIndex, nextIndex, 1);
  }, [currentIndex, isAnimating, animateSlideChange]);

  const handlePrev = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const nextIndex = (currentIndex - 1 + data.length) % data.length;
    animateSlideChange(currentIndex, nextIndex, -1);
  }, [currentIndex, isAnimating, animateSlideChange]);

  // Watch for index change (after animateSlideChange finishes OUT & slider animation) and animate text IN
  useEffect(() => {
    // Skip on initial mount where active class handles it
    if (isAnimating && currentIndex === 0 && coverRef.current && gsap.getProperty(coverRef.current, "yPercent") === 0) return;
    
    // Reset sub gallery index
    setSubIndex(0);

    const ctx = gsap.context(() => {
      gsap.fromTo([placeRef.current, text1Ref.current, text2Ref.current, descRef.current, ctaRef.current], 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', 
          onComplete: () => setIsAnimating(false) 
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [currentIndex, isAnimating]);

  // Handle auto-sliding of sub-items
  useEffect(() => {
    if (isAnimating || !isAutoPlayEnabled) return; // pause when main slides are changing or paused

    const currentSubItems = data[currentIndex]?.subItems || [];
    if (currentSubItems.length === 0) return;

    const intervalId = setInterval(() => {
      setSubIndex((prev) => {
         const next = prev + 1;
         if (next >= currentSubItems.length) {
            // Reached the end of the sub-items, transition to the next main category
            setTimeout(() => {
              handleNext();
            }, 0);
            return prev; // Stay on the last thumbnail while the transition begins
         }
         animateTextChange(next);
         return next;
      });
    }, 4000); // 4s per sub item

    return () => clearInterval(intervalId);
  }, [currentIndex, isAnimating, isAutoPlayEnabled, handleNext]);

  const animateTextChange = (nextSubIndex) => {
    gsap.context(() => {
      const tl = gsap.timeline();
      tl.to([text1Ref.current, text2Ref.current, descRef.current], {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          if (text1Ref.current && text2Ref.current && descRef.current) {
            gsap.set([text1Ref.current, text2Ref.current, descRef.current], { y: 20 });
          }
        }
      });
      tl.to([text1Ref.current, text2Ref.current, descRef.current], {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power3.out'
      }, "+=0.1");
    }, containerRef);
  };

  const handleSubItemClick = (index) => {
    if (index === subIndex || isAnimating) return;
    setIsAutoPlayEnabled(false); // Stop autoplay on user interaction
    setSubIndex(index);
    animateTextChange(index);
  };

  return (
    <div className="animated-gallery-wrapper" ref={containerRef}>
      
      {/* Background Cards */}
      <div id="demo">
        {data.map((item, idx) => (
          <div 
            key={idx}
            className={`gallery-card ${idx === currentIndex ? 'active' : ''}`} 
            id={`card-${idx}`}
          >
            {item.subItems && item.subItems.map((sub, sIdx) => (
              <div
                key={sIdx}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${sub.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: idx === currentIndex && sIdx === subIndex ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                  zIndex: idx === currentIndex && sIdx === subIndex ? 1 : 0
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Floating Detailed Content */}
      <div className="gallery-details">
        <div className="place-box">
          <div className="text" ref={placeRef}>{data[currentIndex].place}</div>
        </div>
        <div className="title-1" style={{overflow:'hidden'}}>
          <div ref={text1Ref}>{data[currentIndex].subItems[subIndex]?.title1 || data[currentIndex].title}</div>
        </div>
        <div className="title-2" style={{overflow:'hidden'}}>
          <div ref={text2Ref}>{data[currentIndex].subItems[subIndex]?.title2 || data[currentIndex].title2}</div>
        </div>
        <div className="desc" ref={descRef}>
          {data[currentIndex].subItems[subIndex]?.desc || data[currentIndex].description}
        </div>
        <div className="cta" ref={ctaRef}>
        </div>
      </div>

      {/* Mini Auto-Slider / Thumbnails on the Right Side */}
      {data[currentIndex].subItems && data[currentIndex].subItems.length > 0 && (
        <div className="gallery-sub-slider-right">
          <div className="sub-slider-title">FEATURED MODELS</div>
          <div className="gallery-sub-items-vertical">
            {data[currentIndex].subItems.map((item, i) => (
              <div 
                key={i} 
                className={`sub-item-card-large ${i === subIndex ? 'active' : ''}`}
                onClick={() => handleSubItemClick(i)}
              >
                <img src={item.img} alt={item.name} />
                <div className="sub-item-name-large">{item.name}</div>
                {i === subIndex && <div className="sub-item-progress-large" style={{ animationDuration: isAutoPlayEnabled ? '4s' : '0s', width: isAutoPlayEnabled ? 'auto' : '100%' }} />}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="gallery-pagination">
        <div className="gallery-arrow" onClick={handlePrev}>
          <FaChevronLeft />
        </div>
        <div className="gallery-arrow" onClick={handleNext}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default AnimatedGalleryPage;
