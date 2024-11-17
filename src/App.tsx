import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCreators from './components/ServicesCreators';
import ServicesBrands from './components/ServicesBrands';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServicesCreators />
        <ServicesBrands />
        <ComingSoon />
        <Contact />
      </main>
    </div>
  );
}

export default App;