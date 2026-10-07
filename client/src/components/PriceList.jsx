import './PriceList.css';

const pricingData = [
  {
    icon: '🪶',
    title: 'Waxing',
    tagline: 'Smooth • Gentle • Flawless',
    items: [
      { name: 'Brow Wax Strip', price: 'R80' },
      { name: 'Lip Wax Strip', price: 'R60' },
      { name: 'Chin Wax Strip', price: 'R100' }
    ]
  },
  {
    icon: '💆‍♀️',
    title: 'Head Massages',
    tagline: 'Relax • Release • Recharge',
    items: [
      { name: '15 mins', price: 'R90' },
      { name: '30 mins', price: 'R150' },
      { name: 'Head, Neck & Shoulder (30 mins)', price: 'R200' },
      { name: 'Neck & Shoulder (30 mins)', price: 'R150' }
    ]
  },
  {
    icon: '🌸',
    title: 'Full Body Massage',
    tagline: 'Unwind • Restore • Renew',
    items: [
      { name: '30 mins', price: 'R350' },
      { name: '45 mins', price: 'R400' },
      { name: '1 hour', price: 'R450' },
      { name: 'Couples / Partner', price: 'R750' }
    ]
  },
  {
    icon: '🦶',
    title: 'Reflexology',
    tagline: 'Balance • Heal • Restore',
    items: [
      { name: '30 mins', price: 'R220' },
      { name: '1 hour', price: 'R300' }
    ]
  },
  {
    icon: '👣',
    title: 'Foot Spa & Pedicure',
    tagline: 'Pamper your feet — they carry you through life',
    items: [
      { name: 'Foot Spa (Soak, Filling, Scrub & Half-leg Massage)', price: 'R350' },
      { name: 'Add: Push Cuticle, File, Buff & Shine', price: 'R100' },
      { name: 'Add: Clear Base & Top Coat Shine', price: 'R150' },
      { name: 'Paraffin Wax Treatment', price: 'R350' }
    ]
  }
];

export default function PriceList() {
  return (
    <section id="prices" className="section price-list">
      <div className="container">
        <h2 className="section-title">Treatments & Pricing</h2>
        <p className="section-subtitle">
          Transparent pricing for every treatment. 
          Relax, rejuvenate, and feel good — your wellness is our priority.
        </p>

        <div className="pricing-grid">
          {pricingData.map((category, idx) => (
            <div
              key={category.title}
              className="pricing-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="pricing-header">
                <span className="pricing-icon">{category.icon}</span>
                <h3 className="pricing-title">{category.title}</h3>
                <p className="pricing-tagline">{category.tagline}</p>
              </div>

              <ul className="pricing-list">
                {category.items.map((item, i) => (
                  <li key={i} className="pricing-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-dots"></span>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pricing-footer">
          ✨ Your Wellness • Our Priority ✨
        </p>
      </div>
    </section>
  );
}