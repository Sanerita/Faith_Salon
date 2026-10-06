import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-visual">
            <div className="about-img-frame">
              <div className="about-img-inner">
                <span className="about-emoji">💖</span>
              </div>
            </div>
            <div className="about-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
          </div>

          <div className="about-text">
            <span className="badge">About Us</span>
            <h2 className="about-title">Beauty with a Personal Touch</h2>
            <p>
              At Faith Hair & Beauty Salon, we believe everyone deserves to feel 
              confident, radiant, and pampered. Our team of skilled professionals 
              is dedicated to providing exceptional service in a warm, welcoming 
              environment.
            </p>
            <p>
              Whether you're looking for a fresh haircut, stunning lashes, 
              beautiful nails, or a relaxing massage, we tailor every treatment 
              to suit your individual style and needs.
            </p>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Expert Professionals</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Quality Products</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Relaxing Atmosphere</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Personalized Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}