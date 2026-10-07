import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
  <img src="/Faith_Hair_Logo2.png" alt="Faith Hair & Beauty Salon" className="logo-img" />
  <span className="logo-text">
    <span className="logo-main">Faith</span>
    <span className="logo-sub">Hair & Beauty</span>
  </span>
</a>
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#house-calls" onClick={closeMenu}>House Calls</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#booking" onClick={closeMenu}>Contact</a></li>
          <li>
            <a href="#booking" className="nav-cta" onClick={closeMenu}>
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}