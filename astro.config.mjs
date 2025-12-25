// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  site: "https://blog.thecodebrew.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
          },
        ],
      ],
    }),
    sitemap(),
  ],
});
