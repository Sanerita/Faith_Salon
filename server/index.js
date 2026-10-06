import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Faith Salon API is running' });
});

// Booking endpoint - validates and returns formatted WhatsApp data
app.post('/api/bookings', (req, res) => {
  const { name, phone, service, date, time, notes } = req.body;

  if (!name || !phone || !service || !date || !time) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const whatsappNumber = process.env.WHATSAPP_NUMBER || '27766718164';
  
  const message = 
    `*New Booking Request*%0A%0A` +
    `*Name:* ${encodeURIComponent(name)}%0A` +
    `*Phone:* ${encodeURIComponent(phone)}%0A` +
    `*Service:* ${encodeURIComponent(service)}%0A` +
    `*Date:* ${encodeURIComponent(date)}%0A` +
    `*Time:* ${encodeURIComponent(time)}%0A` +
    (notes ? `*Notes:* ${encodeURIComponent(notes)}%0A` : '');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  res.json({ 
    success: true, 
    whatsappUrl,
    message: 'Booking received! Redirecting to WhatsApp...'
  });
});

app.listen(PORT, () => {
  console.log(`✨ Faith Salon server running on http://localhost:${PORT}`);
});