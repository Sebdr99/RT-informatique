import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
  site: "https://Sebdr99.github.io",
  base: "my-repo",
  integrations: [tailwind(), mdx(), sitemap(), icon(), svelte(), react()],
  output: 'server', // assurez-vous d'avoir 'server' ou 'hybrid'
  adapter: node({
    mode: 'standalone' // ou 'middleware' selon votre besoin
     
  }),
  output: 'server',
});
