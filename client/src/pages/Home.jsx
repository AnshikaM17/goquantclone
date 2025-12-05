import React from 'react';
import Hero from '../components/sections/Hero';
import Investors from '../components/sections/Investors';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services';
import VenueIntegrations from '../components/sections/VenueIntegrations';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div className="home-page page-fade-in">
      <Hero />
      <Investors />
      <Features />
      <Services />
      <VenueIntegrations />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
