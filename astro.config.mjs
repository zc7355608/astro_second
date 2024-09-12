import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: true
  },

  site: "https://example.com",
  integrations: [preact()],
});