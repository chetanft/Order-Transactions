// build-netlify.js - Simple build script for Netlify
const fs = require('fs');
const path = require('path');

// Ensure the dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create _redirects file in the dist directory
fs.writeFileSync(
  path.join(distDir, '_redirects'),
  '/* /index.html 200'
);

console.log('Created _redirects file in dist directory');
