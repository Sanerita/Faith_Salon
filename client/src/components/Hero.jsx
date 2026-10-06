import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <p className="hero-tag">Welcome to Faith Hair & Beauty</p>
        <h1 className="hero-title">
          Where Beauty<br />
          <span className="italic">Meets Serenity</span>
        </h1>
        <p className="hero-text">
          Pamper yourself with our expert hair, lash, nail, massage, and reflexology services. 
          We bring out the best in you — right here in the salon or at your home.
        </p>
        <div className="hero-buttons">
          <a href="#booking" className="btn btn-primary">Book Appointment</a>
          <a href="#services" className="btn btn-outline">Our Services</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}