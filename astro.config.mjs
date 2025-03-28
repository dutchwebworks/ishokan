import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	site: "https://ishokan.dutchwebworks.nl",
	compressHTML: false,
	trailingSlash: "never",
});
