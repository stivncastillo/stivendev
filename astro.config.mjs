// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://stiven.dev',
    integrations: [mdx(), sitemap(), tailwind(), icon()],
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
        routing: {
            prefixDefaultLocale: false
        }
    },
});