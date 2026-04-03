import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import nodemailer from 'nodemailer';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- EMAIL CONFIGURATION ---
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const sendNotification = async (subject: string, text: string) => {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('⚠️ SMTP credentials missing in environment. Email not sent to sirescanor0@gmail.com. Payload:', { subject, text });
      return;
    }
    try {
      await transporter.sendMail({
        from: `"Rojan Consultancy System" <${process.env.SMTP_USER}>`,
        to: 'sirescanor0@gmail.com',
        subject,
        text,
      });
      console.log('✅ Notification email sent to sirescanor0@gmail.com');
    } catch (error) {
      console.error('❌ Failed to send email:', error);
    }
  };

  // --- API ENDPOINTS ---

  // 1. Contact Form Submission
  app.post('/api/v1/leads/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log('New Contact Lead:', { name, email, phone, message });
    
    await sendNotification(
      'New Contact Form Submission - Rojan Consultancy',
      `You have received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`
    );
    
    res.status(200).json({ success: true, message: 'Message received successfully.' });
  });

  // 2. Consultation / Lead Capture Modal Submission
  app.post('/api/v1/leads/consultation', async (req, res) => {
    const { name, email, companySize, painPoint, serviceInterest } = req.body;
    console.log('New Consultation Request:', { name, email, companySize, painPoint, serviceInterest });
    
    await sendNotification(
      'New Consultation Request - Rojan Consultancy',
      `You have received a new consultation request.\n\nName: ${name}\nEmail: ${email}\nCompany Size: ${companySize}\nPain Point: ${painPoint}\nService Interest: ${serviceInterest}`
    );

    res.status(200).json({ success: true, message: 'Consultation requested successfully.' });
  });

  // 3. Careers Application
  app.post('/api/v1/careers/apply', (req, res) => {
    // In a real app, use multer for file uploads
    console.log('New Job Application received.');
    res.status(200).json({ success: true, message: 'Application submitted successfully.' });
  });

  // 4. Newsletter Subscription
  app.post('/api/v1/subscribers', (req, res) => {
    const { email, leadMagnetId } = req.body;
    console.log('New Subscriber:', { email, leadMagnetId });
    res.status(200).json({ success: true, message: 'Subscribed successfully.' });
  });

  // --- VITE MIDDLEWARE (Development) OR STATIC SERVING (Production) ---
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
