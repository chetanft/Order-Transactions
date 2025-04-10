// netlify.js - Netlify build script
const fs = require('fs');
const path = require('path');

// Ensure the dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Create _redirects file in the dist directory
fs.writeFileSync(
  path.join('dist', '_redirects'),
  '/* /index.html 200'
);

console.log('Created _redirects file in dist directory');
