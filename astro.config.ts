import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const sitemapAllowlist = new Set([
  "https://kareemo.dev",
  "https://kareemo.dev/",
  "https://kareemo.dev/privacy",
  "https://kareemo.dev/privacy/",
]);

export default defineConfig({
  site: "https://kareemo.dev",
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) => sitemapAllowlist.has(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
