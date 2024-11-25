// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import rehypePresetMinify from "rehype-preset-minify";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: "https://stiven.dev",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      remarkRehype: { footnoteLabel: "Footnotes" },
      rehypePlugins: [
        rehypePresetMinify,
      ],
      gfm: false,
      extendMarkdownConfig: true
    }),
    sitemap(),
    tailwind(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
  }),
  ],
  markdown: {
    syntaxHighlight: "prism",
    gfm: true,
    shikiConfig: { theme: "dracula" },
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
