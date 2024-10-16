import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';



export default defineConfig({
  base: '/RT-informatique/', // Chemin de base pour GitHub Pages
  site: 'https://sebdr99.github.io/RT-informatique', // URL complète de ton site
  integrations: [tailwind(), mdx(), sitemap()],
});
