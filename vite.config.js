import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

// Custom plugin to copy _redirects file to dist folder
const copyRedirects = () => {
  return {
    name: 'copy-redirects',
    closeBundle() {
      // Copy _redirects from root
      if (fs.existsSync('_redirects')) {
        fs.copyFileSync('_redirects', resolve('dist', '_redirects'));
        console.log('✅ _redirects file copied to dist folder');
      }

      // Copy _redirects from public folder as fallback
      if (fs.existsSync('public/_redirects') && !fs.existsSync('dist/_redirects')) {
        fs.copyFileSync('public/_redirects', resolve('dist', '_redirects'));
        console.log('✅ public/_redirects file copied to dist folder');
      }

      // Copy _headers from public folder
      if (fs.existsSync('public/_headers')) {
        fs.copyFileSync('public/_headers', resolve('dist', '_headers'));
        console.log('✅ _headers file copied to dist folder');
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyRedirects()],
  build: {
    outDir: 'dist',
  },
  base: '/',
});
