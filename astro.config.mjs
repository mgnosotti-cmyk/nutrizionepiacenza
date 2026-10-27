import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://www.nutrizionepiacenza.it',
  output: 'static',
  integrations: [sitemap()]
});