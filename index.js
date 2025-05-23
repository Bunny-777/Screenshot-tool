const express = require('express');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, image)
app.use(express.static(path.join(__dirname, 'public')));

// Screenshot endpoint
app.get('/screenshot', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Serve the local file
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
  
  const screenshotBuffer = await page.screenshot({ fullPage: true });

  await browser.close();

  res.set('Content-Type', 'image/png');
  res.send(screenshotBuffer);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
