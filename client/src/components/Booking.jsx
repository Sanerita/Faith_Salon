import { useState } from 'react';
import './Booking.css';

const services = [
  // Hair
  'Hair - Cut & Style',
  'Hair - Coloring',
  'Hair - Treatment',
  'Hair - Braiding/Weaves',
  
  // Lashes
  'Lashes - Classic',
  'Lashes - Volume',
  'Lashes - Lift/Tint',
  
  // Nails
  'Nails - Manicure',
  'Nails - Pedicure',
  'Nails - Gel/Acrylic',
  'Nails - Nail Art',
  
  // Foot Spas
  'Foot Spas - Luxury Soak',
  'Foot Spas - Scrub & Massage',
  
  // Massage
  'Massage - Full Body',
  'Massage - Deep Tissue',
  'Massage - Relaxation',
  
  // Reflexology
  'Reflexology - Foot',
  'Reflexology - Hand',
  
  // Waxing
  'Waxing - Eyebrow',
  'Waxing - Lip',
  'Waxing - Chin',
  'Waxing - Full Face',
  
  // Brows
  'Brows - Shaping',
  'Brows - Tinting',
  'Brows - Shape & Tint Combo',
  
  // House Calls (Mon – Wed)
  'House Call - Hair',
  'House Call - Lashes',
  'House Call - Nails',
  'House Call - Foot Spas',
  'House Call - Massage',
  'House Call - Reflexology',
  'House Call - Waxing',
  'House Call - Brows'
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setStatus({ 
        type: 'success', 
        message: 'Booking sent! Opening WhatsApp...' 
      });

      // Open WhatsApp
      window.open(data.whatsappUrl, '_blank');

      // Reset form after a moment
      setTimeout(() => {
        setFormData({ name: '', phone: '', service: '', date: '', time: '', notes: '' });
        setStatus({ type: '', message: '' });
      }, 3000);
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="section booking">
      <div className="container">
        <h2 className="section-title">Book Your Appointment</h2>
        <p className="section-subtitle">
          Fill in your details below and we'll connect with you on WhatsApp 
          to confirm your booking.
        </p>

        <div className="booking-wrapper">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>
            

            <div className="form-group">
              <label htmlFor="service">Service *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service...</option>
                {services.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Any special requests or details..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Book via WhatsApp'}
            </button>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <p className="form-note">
              Your booking details will be sent directly to our WhatsApp 
              (+27 76 671 8164) for confirmation.
            </p>
          </form>

          <div className="booking-info">
            <h3>Get In Touch</h3>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/27766718164" target="_blank" rel="noopener noreferrer">
                  +27 76 671 8164
                </a>
              </div>
            </div>

<div className="info-item">
  <span className="info-icon">📍</span>
  <div>
    <strong>Visit Us</strong>
    <span>Shop 19, Camlew Centre</span>
    <span>C/o Voortrekker Rd & Wendland St</span>
    <span>Parow, 7500</span>
  </div>
</div>

            <div className="info-item">
              <span className="info-icon">🏠</span>
              <div>
                <strong>House Calls</strong>
                <span>Mondays – Wednesdays</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <strong>Salon Hours</strong>
                <span>Mon – Sat: 8am – 7pm</span>
                <span>Sun: By appointment</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✨</span>
              <div>
                <strong>Walk-ins Welcome</strong>
                <span>Subject to availability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}