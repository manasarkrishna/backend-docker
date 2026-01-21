// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const audioRoutes = require('./routes/audio.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // React frontend origin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/audio', audioRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
