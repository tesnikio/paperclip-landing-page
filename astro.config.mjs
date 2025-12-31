import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tesnikio.github.io', // Replace with your GitHub username
  base: '/paperclip-landing-page', // Replace with your repo name
});

