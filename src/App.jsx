import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBox from './components/SearchBox';
import Features from './components/Features';
import Properties from './components/Properties';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchBox />
      <Features />
      <Properties />
      <About />
      <Testimonials />
      <ContactCta />
      <Footer />
    </div>
  );
}

export default App;
