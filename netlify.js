// netlify.js - Netlify build script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
