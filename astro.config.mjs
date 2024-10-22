import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://ishokan.dutchwebworks.nl',
    compressHTML: false,
    trailingSlash: 'never',
});
