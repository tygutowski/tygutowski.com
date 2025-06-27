import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

import react from '@astrojs/react';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://tygutowski.com/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true }), react()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});