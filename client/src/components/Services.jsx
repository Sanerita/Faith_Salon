import './Services.css';

const services = [
  {
    icon: '✂️',
    title: 'Hair',
    description: 'Cuts, styling, coloring, treatments, and stunning weaves tailored to your unique look.',
    items: ['Haircuts & Styling', 'Coloring & Highlights', 'Treatments & Care', 'Braiding & Weaves']
  },
  {
    icon: '👁️',
    title: 'Lashes',
    description: 'Wake up flawless with our beautiful lash extensions and lifts for every occasion.',
    items: ['Classic Lashes', 'Volume Lashes', 'Lash Lifts', 'Lash Tinting']
  },
  {
    icon: '💅',
    title: 'Nails',
    description: 'From classic manicures to intricate nail art, we make your hands and feet shine.',
    items: ['Manicures & Pedicures', 'Gel & Acrylic Nails', 'Nail Art', 'Nail Treatments']
  },
  {
    icon: '💆‍♀️',
    title: 'Massage',
    description: 'Melt away stress with our relaxing full-body and targeted massage therapies.',
    items: ['Full Body Massage', 'Deep Tissue', 'Relaxation Massage', 'Aromatherapy']
  },
  {
    icon: '🦶',
    title: 'Reflexology',
    description: 'Restore balance and wellness through ancient pressure-point foot therapy.',
    items: ['Foot Reflexology', 'Hand Reflexology', 'Stress Relief', 'Wellness Therapy']
  }
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Indulge in our full range of beauty and wellness treatments, 
          each designed to make you feel beautiful inside and out.
        </p>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div 
              key={service.title} 
              className="service-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-list">
                {service.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}