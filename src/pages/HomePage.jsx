import React from 'react';
import Hero from '../components/home/Hero';
import Footer from '../components/common/Footer';

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-white">
      <Hero />
      <Footer isCompact={true} />
    </div>
  );
};

export default HomePage;
