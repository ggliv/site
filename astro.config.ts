import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  // This MUST be defined, otherwise RSS breaks, making everyone sad
  site: "https://ggliv.com",
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "preserve",
  }
});
