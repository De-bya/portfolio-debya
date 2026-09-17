import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: "https://De-bya.github.io",
  base: "/portfolio-debya/",
  integrations: [tailwind(), icon()],
});
