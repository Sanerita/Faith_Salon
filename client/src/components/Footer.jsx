import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-main">Faith</span>
              <span className="logo-sub">Hair & Beauty</span>
            </div>
            <p className="footer-tagline">
              Where beauty meets serenity. Your trusted partner in 
              hair, lashes, nails, massage, and reflexology.
            </p>


          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Hair</a></li>
              <li><a href="#services">Lashes</a></li>
              <li><a href="#services">Nails</a></li>
              <li><a href="#services">Massage</a></li>
              <li><a href="#services">Reflexology</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#house-calls">House Calls</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>

          <div className="footer-col">
  <h4>Contact</h4>
  <ul>
    <li>
      <a href="https://wa.me/27766718164" target="_blank" rel="noopener noreferrer">
        WhatsApp: +27 76 671 8164
      </a>
    </li>
    <li>
      Shop 19, Camlew Centre<br />
      C/o Voortrekker Rd & Wendland St<br />
      Parow, 7500
    </li>
    <li>House Calls: Mon – Wed</li>
    <li>Salon: Mon – Sat, 8am – 7pm</li>
  </ul>
</div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Faith Hair & Beauty Salon. All rights reserved.</p>
          <p className="footer-credit">Crafted with 💖 for beautiful people.</p>
        </div>
      </div>
    </footer>
  );
}