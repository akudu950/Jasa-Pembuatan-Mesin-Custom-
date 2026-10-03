import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://USERNAME.github.io",
  base: "/jasa-mesin-custom",
  trailingSlash: "always",
  integrations: [sitemap()]
});