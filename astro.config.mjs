import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';



export default defineConfig({
  base: '/RT-informatique/', 
  site: "https://Sebdr99.github.io/RT-informatique", 
  integrations: [tailwind(), mdx(), sitemap(), icon()],
 
 
});
