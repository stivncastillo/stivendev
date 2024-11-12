// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkToc from "remark-toc";
import rehypePresetMinify from "rehype-preset-minify";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeToc from "rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// https://astro.build/config
export default defineConfig({
  site: "https://stiven.dev",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      remarkRehype: { footnoteLabel: "Footnotes" },
      rehypePlugins: [
        rehypePresetMinify,
        rehypeHeadingIds,
        [
          rehypeToc,
          {
            headings: ["h1", "h2", "h3"],
            cssClasses: {
              toc: "toc-post",
              link: "toc-link",
            },
          },
        ],
        [rehypeAutolinkHeadings, { behavior: 'append' }]
      ],
      gfm: false,
      extendMarkdownConfig: true
    }),
    sitemap(),
    tailwind(),
    icon(),
  ],
  markdown: {
    syntaxHighlight: "prism",
    gfm: true,
    shikiConfig: { theme: "dracula" },
    remarkPlugins: [remarkToc],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
