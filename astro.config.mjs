import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import keystatic from '@keystatic/astro';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import netlify from "@astrojs/netlify";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://moorhouse-landing.netlify.app",
  integrations: [mdx(), sitemap(), tailwind(), react(), markdoc(), keystatic(), robotsTxt()],
  output: "hybrid",
  adapter: netlify()
});