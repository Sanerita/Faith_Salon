import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HouseCalls from './components/HouseCalls';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <HouseCalls />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;