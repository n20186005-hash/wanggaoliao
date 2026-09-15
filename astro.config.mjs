import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://wanggaoliao.com",
  output: "static",
  trailingSlash: "always",

  adapter: cloudflare({
    platformProxy: { enabled: false },
    imageService: "compile",
  }),

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    layout: "constrained",
  },
});