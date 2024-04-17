import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import keystatic from '@keystatic/astro';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react(), markdoc(), keystatic()],
  output: 'server',
  adapter: netlify()
});