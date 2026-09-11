const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'مرحباً بك في تطبيق HamzaAds',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Sample ads endpoint
app.get('/api/ads', (req, res) => {
  res.json({
    ads: [
      { id: 1, title: 'إعلان 1', description: 'وصف الإعلان الأول' },
      { id: 2, title: 'إعلان 2', description: 'وصف الإعلان الثاني' }
    ]
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'حدث خطأ في الخادم' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ الخادم يعمل على المنفذ ${PORT}`);
  console.log(`📍 الدخول عبر: http://localhost:${PORT}`);
});
