const express = require('express');
const packageJson = require('./package.json');

const app = express();
const PORT = process.env.PORT || 3001;

// Route to get the version
app.get('/version', (req, res) => {
  res.json({ version: packageJson.version });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Version endpoint available at http://localhost:${PORT}/version`);
});
