import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  // to point to correct path for gh-pages
  base: '/salesforce-connector-demo',
});
