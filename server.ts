import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API ENDPOINTS ---

  // 1. Contact Form Submission
  app.post('/api/v1/leads/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log('New Contact Lead:', { name, email, phone, message });
    // TODO: Save to DB, Send Email via SendGrid, Alert Slack
    res.status(200).json({ success: true, message: 'Message received successfully.' });
  });

  // 2. Consultation / Lead Capture Modal Submission
  app.post('/api/v1/leads/consultation', (req, res) => {
    const { name, email, companySize, painPoint, serviceInterest } = req.body;
    console.log('New Consultation Request:', { name, email, companySize, painPoint, serviceInterest });
    // TODO: Save to DB, Send Email, Alert Slack
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
