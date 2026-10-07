import './HouseCalls.css';

export default function HouseCalls() {
  return (
    <section id="house-calls" className="house-calls">
      <div className="container">
        <div className="house-calls-content">
          <div className="house-calls-text">
            <span className="badge">✨ Special Service</span>
            <h2 className="house-calls-title">
              We Come To You —<br />
              <span className="italic">House Calls Available</span>
            </h2>
            <p className="house-calls-desc">
              Can't make it to the salon? No problem! We offer convenient house call 
              services every <strong>Monday through Wednesday</strong>. Enjoy all our 
              beauty treatments in the comfort of your own home.
            </p>
            <div className="days-badge">
              <div className="day">Monday</div>
              <div className="day">Tuesday</div>
              <div className="day">Wednesday</div>
            </div>
            <a href="#booking" className="btn btn-primary">
              Book a House Call
            </a>
          </div>
          <div className="house-calls-visual">
            <div className="visual-circle">
  <img 
    src="/pin-vector.jpg" 
    alt="House call beauty service" 
    className="visual-photo" 
  />
</div>
            <div className="floating-tag tag-1">💅 Nails</div>
            <div className="floating-tag tag-2">💆‍♀️ Massage</div>
            <div className="floating-tag tag-3">✂️ Hair</div>
          </div>
        </div>
      </div>
    </section>
  );
}